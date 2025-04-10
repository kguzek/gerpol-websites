"use client";

import type { ImageLoaderProps } from "next/image";
import type { DropzoneProps, FileRejection } from "react-dropzone";
import Image from "next/image";
import * as React from "react";
import { UploadIcon, X } from "lucide-react";
import Dropzone from "react-dropzone";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatBytes } from "@/components/uploadshad/utils";
import { cn } from "@/lib/utils";

import { handleRejectedFiles, useControllableState, useFilesContext } from "./hooks";

export interface FileInputProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Value of the uploader.
   * @type File[]
   * @default undefined
   * @example value={files}
   */
  value?: File[];

  /**
   * Function to be called when the value changes.
   * @type React.Dispatch<React.SetStateAction<File[]>>
   * @default undefined
   * @example onValueChange={(files) => setFiles(files)}
   */
  onValueChange?: React.Dispatch<React.SetStateAction<File[]>>;

  /**
   * Accepted file types for the uploader.
   * @type { [key: string]: string[]}
   * @default
   * ```ts
   * { "image/*": [] }
   * ```
   * @example accept={["image/png", "image/jpeg"]}
   */
  accept?: DropzoneProps["accept"];

  /**
   * Maximum file size for the uploader.
   * @type number | undefined
   * @default 1024 * 1024 * 2 // 2MB
   * @example maxsize={1024 * 1024 * 2} // 2MB
   */
  maxsize?: DropzoneProps["maxSize"];

  /**
   * Maximum number of files for the uploader.
   * @type number | undefined
   * @default 1
   * @example maxfiles={5}
   */
  maxfiles?: DropzoneProps["maxFiles"];

  /**
   * Whether the uploader is disabled.
   * @type boolean
   * @default false
   * @example disabled
   */
  disabled?: boolean;

  customLoader?: (props: ImageLoaderProps) => string;
}

interface FileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  file: File;
  onRemove: () => void;
  customLoader?: (props: ImageLoaderProps) => string;
}

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>((props, ref) => {
  const {
    className,
    maxfiles = 1,
    customLoader,
    onValueChange,
    value: valueProp,
    disabled = false,
    maxsize = 1024 * 1024 * 2,
    accept = { "image/*": [] },
    ...dropzoneProps
  } = props;

  // Upload Context state
  // const { uploadedFiles, handleInput } = useContext(UploadContext) as UploadContextType;
  const { files: uploadedFiles, handleInput } = useFilesContext();

  const [files, setFiles] = useControllableState({
    prop: valueProp,
    onChange: onValueChange,
  });

  const onDrop = React.useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      // Display toasts for rejected files
      handleRejectedFiles(rejectedFiles, maxsize ?? 0);
      if (acceptedFiles.length === 0) {
        return;
      }

      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      );
      const updatedFiles = files ? [...files, ...newFiles] : newFiles;

      // Validate the Total Number of Files inputed & the current number of uploaded files is less than maxfiles allowed (Assumes maxfiles is defined)
      if (uploadedFiles.length + updatedFiles.length > maxfiles) {
        toast.error("Ups, das geht nicht.", {
          description: `Sie können nicht mehr als ${maxfiles} Dateien hochladen.`,
          duration: 10000,
        });
        return;
      }

      setFiles(updatedFiles);

      console.log("UploadShad Tracking: InputView - Validated File Input(s)");
      const target =
        acceptedFiles.length === 0
          ? "Datei"
          : acceptedFiles.length === 1
            ? "1 Datei"
            : `${acceptedFiles.length} Dateien`;
      const uploading = acceptedFiles.length > 1 ? "werden" : "wird";
      const error = acceptedFiles.length > 1 ? "von" : "der";
      toast.promise(handleInput(updatedFiles), {
        loading: `${target} ${uploading} hochgeladen...`,
        success: () => {
          // TODO: if s3?
          // setFiles([]);
          return `${target} hochgeladen`;
        },
        error: `Das Hochladen ${error} ${target} ist fehlgeschlagen`,
      });
    },

    [files, maxfiles, maxsize, handleInput, setFiles, uploadedFiles.length],
  );

  function onRemove(index: number) {
    if (!files) return;
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onValueChange?.(newFiles);
  }

  // Revoke preview url when component unmounts
  React.useEffect(() => {
    return () => {
      if (!files) return;
      files.forEach((file) => {
        if (isFileWithPreview(file)) {
          URL.revokeObjectURL(file.preview);
        }
      });
    };
  }, []);

  const isDisabled = disabled || (uploadedFiles?.length ?? 0) >= maxfiles;

  return (
    <div className="relative flex w-full flex-col gap-6 overflow-hidden">
      <Dropzone
        onDrop={onDrop}
        accept={accept}
        maxSize={maxsize}
        maxFiles={maxfiles}
        multiple={maxfiles > 1}
        disabled={isDisabled}
      >
        {({ getRootProps, getInputProps, isDragActive }) => (
          <div
            {...getRootProps()}
            className={cn(
              "group border-muted-foreground/25 hover:bg-muted/25 relative grid h-52 w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed px-5 py-2.5 text-center transition",
              "ring-offset-background focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
              isDragActive && "border-muted-foreground/50",
              isDisabled && "pointer-events-none opacity-60",
              className,
            )}
            {...dropzoneProps}
          >
            <input {...getInputProps()} />
            <div
              ref={ref}
              {...props}
              className="flex flex-col items-center justify-center gap-4 sm:px-5"
            >
              <div className="rounded-full border border-dashed p-3">
                <UploadIcon className="text-muted-foreground size-7" aria-hidden="true" />
              </div>
              {/* Extract with Children for custom rendering options */}
              {isDragActive ? (
                <FileInputActiveContent>
                  <p className="text-muted-foreground font-medium">
                    Legen Sie die Dateien hier ab
                  </p>
                </FileInputActiveContent>
              ) : (
                <FileInputContent>
                  <p className="text-muted-foreground font-medium">
                    <span className="hidden sm:block">
                      Ziehen Sie Dateien hierher und legen Sie sie dort ab, oder klicken
                      Sie, um Dateien auszuwählen
                    </span>
                    <span className="sm:hidden">
                      Tippen Sie hier, um Dateien auszuwählen
                    </span>
                  </p>
                  <p className="text-muted-foreground/70 text-sm">
                    Sie können
                    {maxfiles > 1
                      ? ` ${maxfiles === Infinity ? "multiple" : maxfiles}
                        Dateien (mit jeweils bis zu ${formatBytes(maxsize)}) `
                      : ` eine Datei mit bis zu ${formatBytes(maxsize)}`}
                    hochladen
                  </p>
                </FileInputContent>
              )}
            </div>
          </div>
        )}
      </Dropzone>
      {files?.length ? (
        <ScrollArea className="h-fit w-full px-3">
          <div className="max-h-48 space-y-4">
            {files?.map((file, index) => (
              <FileInputCard
                key={index}
                file={file}
                onRemove={() => onRemove(index)}
                customLoader={customLoader}
              />
            ))}
          </div>
        </ScrollArea>
      ) : null}
    </div>
  );
});
FileInput.displayName = "FileInput";

const FileInputCard = React.forwardRef<HTMLDivElement, FileCardProps>(
  ({ file, onRemove, customLoader, ...props }, ref) => {
    return (
      <div className="relative flex items-center space-x-4" {...props} ref={ref}>
        <div className="flex flex-1 space-x-4">
          {isFileWithPreview(file) ? (
            <Image
              src={file.preview}
              alt={file.name}
              loader={customLoader}
              quality={30}
              width={48}
              height={48}
              loading="lazy"
              className="aspect-square shrink-0 rounded-md object-cover"
            />
          ) : null}
          <div className="flex w-full flex-col gap-2">
            <div className="space-y-px">
              <p className="text-foreground/80 line-clamp-1 text-sm font-medium">
                {file.name}
              </p>
              <p className="text-muted-foreground text-xs">{formatBytes(file.size)}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-7"
            onClick={onRemove}
          >
            <X className="size-4" aria-hidden="true" />
            <span className="sr-only">Remove file</span>
          </Button>
        </div>
      </div>
    );
  },
);
FileInputCard.displayName = "UploadShad.FileInput.FileInputCard";

const FileInputActiveContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3" ref={ref} {...props}>
      {children}
    </div>
  );
});
FileInputActiveContent.displayName = "UploadShad.FileInput.FileInputActiveContent";

const FileInputContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3" ref={ref} {...props}>
      {children}
    </div>
  );
});
FileInputContent.displayName = "UploadShad.FileInput.FileInputContent";

function isFileWithPreview(file: File): file is File & { preview: string } {
  return "preview" in file && typeof file.preview === "string";
}

export { FileInput, FileInputContent, FileInputActiveContent };

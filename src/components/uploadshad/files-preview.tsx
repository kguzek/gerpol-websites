import type { DraggableProvided, DropResult } from "@hello-pangea/dnd";
import type { ImageLoaderProps } from "next/image";
import type { PropsWithChildren } from "react";
import Image from "next/image";
import { useMemo } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CardContent } from "@/components/ui/card";
import { EmptyCard } from "@/components/uploadshad/empty-card";

import { useFilesContext } from "./hooks";

type FilesPreviewProps = PropsWithChildren & {
  customLoader?: (props: ImageLoaderProps) => string;
};

export function FilesPreview({ children, customLoader }: FilesPreviewProps) {
  const { files, handleDelete, handleReOrder } = useFilesContext();

  const handleDragDrop = (result: DropResult) => {
    if (!result.destination) return;
    handleReOrder(result.source.index, result.destination.index);
  };

  const renderFiles = useMemo(() => {
    // console.log("UploadShad Tracking: Preview View - Rendering files: ", files);
    if (files.length > 0) {
      return files.map((file: string, index) => (
        <Draggable draggableId={index.toString()} key={index} index={index}>
          {(provided) => (
            <FilesPreviewPreviewCard
              key={index}
              fileUrl={file}
              provided={provided}
              customLoader={customLoader}
              onDelete={() => {
                toast.promise(handleDelete(file), {
                  loading: "Deleting File...",
                  success: () => {
                    return `File deleted successfully`;
                  },
                  error: `Oops, something happened. Please try again.`,
                });
              }}
            />
          )}
        </Draggable>
      ));
    } else {
      return (
        <EmptyCard
          title="No files uploaded"
          description="Upload some files to see them here"
          className="w-full"
        />
      );
    }
  }, [files, handleDelete, customLoader]);

  return (
    <div className="flex w-full flex-col items-start justify-center gap-5">
      {/* Head */}
      {children}
      <CardContent className="w-full p-0">
        <div className="w-full">
          {/* <div className="flex h-full gap-2 flex-wrap overflow-hidden">{renderFiles}</div> */}
          {/* Render out Sortable Items, passing in the Card to render */}
          <DragDropContext onDragEnd={handleDragDrop}>
            <Droppable droppableId="droppable-1" direction={"vertical"} type="group">
              {(provided) => (
                <div
                  className="grid w-full gap-3"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {renderFiles}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </CardContent>
    </div>
  );
}

FilesPreview.Head = function FilesPreviewHead({ children }: PropsWithChildren) {
  return (
    <div className="flex w-full flex-col items-start justify-center text-start">
      {children}
    </div>
  );
};

function FilesPreviewPreviewCard({
  fileUrl,
  onDelete,
  provided,
  customLoader,
}: PropsWithChildren & {
  fileUrl: string;
  onDelete: () => void;
  provided: DraggableProvided;
  customLoader?: (props: ImageLoaderProps) => string;
}) {
  return (
    <div
      className="flex w-full flex-col items-end justify-start border"
      {...provided.dragHandleProps}
      {...provided.draggableProps}
      ref={provided.innerRef}
    >
      <AspectRatio ratio={4 / 3}>
        <Image
          src={fileUrl}
          alt={`image 1`}
          fill
          quality={35}
          loader={customLoader}
          className="rounded-md object-cover"
        />
      </AspectRatio>
      <div className="absolute flex flex-col items-center justify-center gap-1 pt-1 pr-1">
        <div
          onClick={onDelete}
          style={{ background: "white" }}
          className="bg-opacity-70 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white shadow-lg hover:text-red-500"
        >
          <Trash2 size={18} className="text-black hover:text-red-500" />
        </div>
      </div>
    </div>
  );
}

import React from "react";

import { cn } from "@/lib/utils";

import type { S3FileProps } from "./hooks/files-context";
import { FilesContextProvider } from "./hooks/files-context";

export interface UploadShadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  folderId?: string;
  defaultValues?: string[];
  metadata?: Record<string, string> | undefined;
}

export function UploadShad({
  className,
  children,
  // type,
  ...props
}: UploadShadProps & S3FileProps) {
  return (
    <FilesContextProvider {...props}>
      <div
        className={cn(
          "mr-10 flex w-full flex-col items-center justify-center gap-10",
          className,
        )}
      >
        {children}
      </div>
    </FilesContextProvider>
  );
}

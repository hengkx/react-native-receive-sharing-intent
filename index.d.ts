type Handler = (files: any[]) => void;
type ErrorHandler = (error: any) => void;

declare class ReceiveSharingIntent {
  static getReceivedFiles: (handler: Handler, error: ErrorHandler) => void;
  static getFileNames: (
    handler: Handler,
    error: ErrorHandler,
    url?: string,
  ) => void;
  static clearReceivedFiles: () => void;
}

export default ReceiveSharingIntent;

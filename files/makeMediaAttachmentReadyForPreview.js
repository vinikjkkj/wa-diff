__d(
  "makeMediaAttachmentReadyForPreview",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      switch (e.state) {
        case "NEW":
        case "CLIENT_PROCESSING":
          switch (e.fileType) {
            case "PHOTO":
              return {
                data: e.data,
                file: e.file,
                fileObjectURL: e.fileObjectURL,
                fileType: "PHOTO",
                sphericalEncoding: e.sphericalEncoding,
                state: "CLIENT_PROCESSING",
                useCDNPreview: e.useCDNPreview,
              };
            case "VIDEO":
              return {
                data: e.data,
                file: e.file,
                fileMimeType: e.fileMimeType,
                fileObjectURL: e.fileObjectURL,
                fileType: "VIDEO",
                state: "CLIENT_PROCESSING",
                useCDNPreview: e.useCDNPreview,
              };
            default:
              return e;
          }
        case "PREEXISTING":
          return e;
        case "UPLOADED":
          switch (e.fileType) {
            case "PHOTO":
              return {
                data: e.data,
                entID: e.data.id,
                file: e.file,
                fileObjectURL: e.fileObjectURL,
                fileType: "PHOTO",
                height: e.height,
                sphericalEncoding: e.sphericalEncoding,
                state: "UPLOADED",
                takenTime: e.takenTime,
                useCDNPreview: e.useCDNPreview,
                width: e.width,
              };
            case "VIDEO":
              return {
                data: e.data,
                entID: e.data.id,
                file: e.file,
                fileMimeType: e.fileMimeType,
                fileObjectURL: e.fileObjectURL,
                fileType: "VIDEO",
                height: e.height,
                state: "UPLOADED",
                useCDNPreview: e.useCDNPreview,
                videoAttachmentMetadata: e.videoAttachmentMetadata,
                width: e.width,
              };
            default:
              return e;
          }
        case "FAILED":
          switch (e.fileType) {
            case "PHOTO":
              return {
                data: e.data,
                error: e.error,
                file: e.file,
                fileObjectURL: e.fileObjectURL,
                fileType: "PHOTO",
                height: e.height,
                sphericalEncoding: e.sphericalEncoding,
                state: "FAILED",
                useCDNPreview: !0,
                width: e.width,
              };
            case "VIDEO":
              return {
                data: e.data,
                error: e.error,
                file: e.file,
                fileMimeType: e.fileMimeType,
                fileObjectURL: e.fileObjectURL,
                fileType: "VIDEO",
                height: e.height,
                state: "FAILED",
                useCDNPreview: !0,
                width: e.width,
              };
            default:
              return e;
          }
        default:
          var t;
          switch (e.state) {
            case "QUEUED":
              t = 0;
              break;
            case "UPLOADING":
              t = e.percentComplete;
              break;
            default:
              t = void 0;
              break;
          }
          switch (e.fileType) {
            case "PHOTO":
              return {
                fileMimeType: e.file.type,
                fileName: e.file.name,
                fileObjectURL: e.fileObjectURL,
                fileType: e.fileType,
                height: e.height,
                percentComplete: t,
                sphericalEncoding: e.sphericalEncoding,
                state: "OPTIMISTIC_UPLOADED",
                uploadID: e.file.uploadID,
                useCDNPreview: e.useCDNPreview,
                width: e.width,
              };
            case "VIDEO":
              return {
                fileMimeType: e.fileMimeType,
                fileName: e.file.name,
                fileObjectURL: e.fileObjectURL,
                fileType: e.fileType,
                height: e.height,
                percentComplete: t,
                state: "OPTIMISTIC_UPLOADED",
                uploadID: e.file.uploadID,
                useCDNPreview: e.useCDNPreview,
                width: e.width,
              };
            default:
              return {
                fileMimeType: e.file.type,
                fileName: e.file.name,
                fileObjectURL: e.fileObjectURL,
                fileType: e.fileType,
                percentComplete: t,
                state: "OPTIMISTIC_UPLOADED",
                uploadID: e.file.uploadID,
              };
          }
      }
    }
    i.default = e;
  },
  66,
);

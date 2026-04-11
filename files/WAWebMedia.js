__d(
  "WAWebMedia",
  [
    "WAWebCheckMediaExistence",
    "WAWebClearMediaForChat",
    "WAWebDownloadProgressiveJpegThumbnail",
    "WAWebDownloadStatusThumbnail",
    "WAWebDownloadVideoThumbnail",
    "WAWebManuallySetMedia",
    "WAWebMediaCancelDownloadMsg",
    "WAWebMediaCancelUploadMsg",
    "WAWebMediaDownloadMsg",
    "WAWebMediaForwardMediaMsg",
    "WAWebMediaMetadata",
    "WAWebMediaMsgRegistration",
    "WAWebMediaPrep",
    "WAWebMediaProduct",
    "WAWebMediaResumeUploadMsg",
    "WAWebMediaStickers",
    "WAWebMediaVideoStreaming",
    "WAWebPrepRawMedia",
  ],
  function (t, n, r, o, a, i) {
    var e = importNamespace(
        "WAWebDownloadVideoThumbnail",
      ).downloadVideoThumbnail,
      l = importNamespace("WAWebMediaPrep").MediaPrep,
      s = importNamespace("WAWebCheckMediaExistence").checkMediaExistence,
      u = importNamespace("WAWebClearMediaForChat").clearMediaForChat,
      c = importNamespace("WAWebMediaDownloadMsg").downloadMsg,
      d = importNamespace(
        "WAWebDownloadProgressiveJpegThumbnail",
      ).downloadProgressiveJpegThumbnail,
      m = importNamespace(
        "WAWebDownloadStatusThumbnail",
      ).downloadStatusThumbnail,
      p = importNamespace("WAWebMediaForwardMediaMsg").forwardMediaMsg,
      _ = importNamespace("WAWebManuallySetMedia").manuallySetMedia,
      f = importNamespace("WAWebPrepRawMedia").prepRawMedia,
      g = importNamespace("WAWebMediaResumeUploadMsg").resumeUploadMsg;
    (Object.keys(importNamespace("WAWebMediaCancelDownloadMsg")).forEach(
      function (e) {
        e === "default" ||
          e === "__esModule" ||
          (i[e] = importNamespace("WAWebMediaCancelDownloadMsg")[e]);
      },
    ),
      Object.keys(importNamespace("WAWebMediaCancelUploadMsg")).forEach(
        function (e) {
          e === "default" ||
            e === "__esModule" ||
            (i[e] = importNamespace("WAWebMediaCancelUploadMsg")[e]);
        },
      ),
      Object.keys(importNamespace("WAWebMediaMetadata")).forEach(function (e) {
        e === "default" ||
          e === "__esModule" ||
          (i[e] = importNamespace("WAWebMediaMetadata")[e]);
      }),
      Object.keys(importNamespace("WAWebMediaMsgRegistration")).forEach(
        function (e) {
          e === "default" ||
            e === "__esModule" ||
            (i[e] = importNamespace("WAWebMediaMsgRegistration")[e]);
        },
      ),
      Object.keys(importNamespace("WAWebMediaProduct")).forEach(function (e) {
        e === "default" ||
          e === "__esModule" ||
          (i[e] = importNamespace("WAWebMediaProduct")[e]);
      }),
      Object.keys(importNamespace("WAWebMediaStickers")).forEach(function (e) {
        e === "default" ||
          e === "__esModule" ||
          (i[e] = importNamespace("WAWebMediaStickers")[e]);
      }),
      Object.keys(importNamespace("WAWebMediaVideoStreaming")).forEach(
        function (e) {
          e === "default" ||
            e === "__esModule" ||
            (i[e] = importNamespace("WAWebMediaVideoStreaming")[e]);
        },
      ),
      (i.downloadVideoThumbnail = e),
      (i.MediaPrep = l),
      (i.checkMediaExistence = s),
      (i.clearMediaForChat = u),
      (i.downloadMsg = c),
      (i.downloadProgressiveJpegThumbnail = d),
      (i.downloadStatusThumbnail = m),
      (i.forwardMediaMsg = p),
      (i.manuallySetMedia = _),
      (i.prepRawMedia = f),
      (i.resumeUploadMsg = g));
  },
  66,
);

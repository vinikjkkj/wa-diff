__d(
  "WAWebMedia",
  [
    "WAWebCheckMediaExistence",
    "WAWebDownloadProgressiveJpegThumbnail",
    "WAWebDownloadStatusThumbnail",
    "WAWebDownloadVideoThumbnail",
    "WAWebManuallySetMedia",
    "WAWebMediaCancelDownloadMsg",
    "WAWebMediaCancelUploadMsg",
    "WAWebMediaDownloadMsg",
    "WAWebMediaMetadata",
    "WAWebMediaMsgRegistration",
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
      l = importNamespace("WAWebCheckMediaExistence").checkMediaExistence,
      s = importNamespace("WAWebMediaDownloadMsg").downloadMsg,
      u = importNamespace(
        "WAWebDownloadProgressiveJpegThumbnail",
      ).downloadProgressiveJpegThumbnail,
      c = importNamespace(
        "WAWebDownloadStatusThumbnail",
      ).downloadStatusThumbnail,
      d = importNamespace("WAWebManuallySetMedia").manuallySetMedia,
      m = importNamespace("WAWebPrepRawMedia").prepRawMedia,
      p = importNamespace("WAWebMediaResumeUploadMsg").resumeUploadMsg;
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
      (i.checkMediaExistence = l),
      (i.downloadMsg = s),
      (i.downloadProgressiveJpegThumbnail = u),
      (i.downloadStatusThumbnail = c),
      (i.manuallySetMedia = d),
      (i.prepRawMedia = m),
      (i.resumeUploadMsg = p));
  },
  66,
);

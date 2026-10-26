__d(
  "WAWebMedia",
  [
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
      l = importNamespace("WAWebMediaDownloadMsg").downloadMsg,
      s = importNamespace(
        "WAWebDownloadProgressiveJpegThumbnail",
      ).downloadProgressiveJpegThumbnail,
      u = importNamespace(
        "WAWebDownloadStatusThumbnail",
      ).downloadStatusThumbnail,
      c = importNamespace("WAWebManuallySetMedia").manuallySetMedia,
      d = importNamespace("WAWebPrepRawMedia").prepRawMedia,
      m = importNamespace("WAWebMediaResumeUploadMsg").resumeUploadMsg;
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
      (i.downloadMsg = l),
      (i.downloadProgressiveJpegThumbnail = s),
      (i.downloadStatusThumbnail = u),
      (i.manuallySetMedia = c),
      (i.prepRawMedia = d),
      (i.resumeUploadMsg = m));
  },
  66,
);

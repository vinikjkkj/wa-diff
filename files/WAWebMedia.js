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
      u = importNamespace("WAWebMediaDownloadMsg").downloadMsg,
      c = importNamespace(
        "WAWebDownloadProgressiveJpegThumbnail",
      ).downloadProgressiveJpegThumbnail,
      d = importNamespace(
        "WAWebDownloadStatusThumbnail",
      ).downloadStatusThumbnail,
      m = importNamespace("WAWebManuallySetMedia").manuallySetMedia,
      p = importNamespace("WAWebPrepRawMedia").prepRawMedia,
      _ = importNamespace("WAWebMediaResumeUploadMsg").resumeUploadMsg;
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
      (i.downloadMsg = u),
      (i.downloadProgressiveJpegThumbnail = c),
      (i.downloadStatusThumbnail = d),
      (i.manuallySetMedia = m),
      (i.prepRawMedia = p),
      (i.resumeUploadMsg = _));
  },
  66,
);

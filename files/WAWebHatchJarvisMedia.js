__d(
  "WAWebHatchJarvisMedia",
  ["WAWebMediaUrlAllowlist"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "jarvis-media://",
      s = "mmg",
      u = 1e3;
    function c(t) {
      if (t == null) return null;
      var n = t.encryptedMedia;
      return t.url.startsWith(e)
        ? n == null || n.mediaTransport !== s
          ? null
          : {
              descriptor: {
                directPath: n.directPath,
                encFilehash: n.fileEncSha256B64,
                filehash: n.fileSha256B64,
                mediaKey: n.mediaKeyB64,
                mediaKeyTimestamp: Math.floor(n.mediaKeyTimestampMs / u),
                mediaType: m(n.mediaType, n.mimeType),
                mimetype: n.mimeType,
              },
              kind: "encrypted",
            }
        : o("WAWebMediaUrlAllowlist").isAllowedMediaUrl(t.url)
          ? { kind: "url", url: t.url }
          : null;
    }
    function d(e) {
      var t = e == null ? void 0 : e.thumbnailJpegB64;
      return t != null ? "data:image/jpeg;base64," + t : null;
    }
    function m(e, t) {
      var n =
        e === "image" || e === "sticker" || e === "xma-image"
          ? "image"
          : e === "video" || e === "gif" || e === "ptv"
            ? "video"
            : e === "audio" || e === "ptt"
              ? "audio"
              : e === "document"
                ? "document"
                : null;
      return n != null
        ? n
        : t.startsWith("image/")
          ? "image"
          : t.startsWith("video/")
            ? "video"
            : t.startsWith("audio/")
              ? "audio"
              : "document";
    }
    ((l.getHatchJarvisMediaSource = c), (l.getHatchJarvisThumbnailUrl = d));
  },
  98,
);

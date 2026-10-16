__d(
  "WAWebHatchJarvisMedia",
  ["WAWebMediaUrlAllowlist"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "jarvis-media://",
      s = 1e3;
    function u(t) {
      if (t == null) return null;
      var n = t.encryptedMedia;
      return t.url.startsWith(e)
        ? n == null
          ? null
          : {
              descriptor: {
                directPath: n.directPath,
                encFilehash: n.encFilehash,
                filehash: n.filehash,
                mediaKey: n.mediaKey,
                mediaKeyTimestamp: Math.floor(n.mediaKeyTimestampMs / s),
                mediaType: d(n.mediaType, n.mimeType),
                mimetype: n.mimeType,
              },
              kind: "encrypted",
            }
        : o("WAWebMediaUrlAllowlist").isAllowedMediaUrl(t.url)
          ? { kind: "url", url: t.url }
          : null;
    }
    function c(e) {
      var t = e == null ? void 0 : e.thumbnailJpegB64;
      return t != null ? "data:image/jpeg;base64," + t : null;
    }
    function d(e, t) {
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
    ((l.getHatchJarvisMediaSource = u), (l.getHatchJarvisThumbnailUrl = c));
  },
  98,
);

__d(
  "WAWebHatchJarvisMedia",
  ["WAWebMediaUrlAllowlist"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "jarvis-media://",
      s = 1e3;
    function u(e) {
      if (e == null) return null;
      var t = e.encryptedMedia;
      return d(e.url)
        ? t == null
          ? null
          : {
              descriptor: {
                directPath: t.directPath,
                encFilehash: t.encFilehash,
                filehash: t.filehash,
                mediaKey: t.mediaKey,
                mediaKeyTimestamp: Math.floor(t.mediaKeyTimestampMs / s),
                mediaType: p(t.mediaType, t.mimeType),
                mimetype: t.mimeType,
              },
              kind: "encrypted",
            }
        : o("WAWebMediaUrlAllowlist").isAllowedMediaUrl(e.url)
          ? { kind: "url", url: e.url }
          : null;
    }
    function c(e, t) {
      if (e == null) return null;
      if (d(e)) {
        var n = t.get(e);
        return (n == null ? void 0 : n.url) === e ? u(n) : null;
      }
      return o("WAWebMediaUrlAllowlist").isAllowedMediaUrl(e)
        ? { kind: "url", url: e }
        : null;
    }
    function d(t) {
      return t.startsWith(e);
    }
    function m(e) {
      var t = e == null ? void 0 : e.thumbnailJpegB64;
      return t != null ? "data:image/jpeg;base64," + t : null;
    }
    function p(e, t) {
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
    ((l.getHatchJarvisMediaSource = u),
      (l.getHatchJarvisImageSource = c),
      (l.isHatchJarvisMediaUrl = d),
      (l.getHatchJarvisThumbnailUrl = m));
  },
  98,
);

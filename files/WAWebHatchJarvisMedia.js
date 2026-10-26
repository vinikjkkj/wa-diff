__d(
  "WAWebHatchJarvisMedia",
  ["WAWebFetchRichResponseMediaBytes", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "jarvis-media://",
      s = 1e3;
    function u(e) {
      if (e == null) return null;
      var t = e.forwarded;
      return t != null ? y(t.media) : p(e.url) ? y(C(e.encryptedMedia)) : null;
    }
    function c(e) {
      return (e == null ? void 0 : e.forwarded) != null &&
        e.envelopeFilehash == null
        ? null
        : u(e);
    }
    function d(e, t) {
      if (e == null || !p(e)) return null;
      var n = t.get(e);
      return (n == null ? void 0 : n.url) === e ? u(n) : null;
    }
    function m(e, t) {
      return t != null
        ? "load_failed"
        : e != null && !p(e)
          ? "plain_url"
          : "no_upload";
    }
    function p(t) {
      return t.startsWith(e);
    }
    function _(e) {
      var t = e == null ? void 0 : e.thumbnailJpegB64;
      return t != null ? "data:image/jpeg;base64," + t : null;
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o(
            "WAWebFetchRichResponseMediaBytes",
          ).fetchRichResponseMediaBytes(e.descriptor, t, n);
          return r == null ? void 0 : r.blob;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return babelHelpers.extends({}, e, {
        fileMetadata: new Map(
          Array.from(e.fileMetadata, function (e) {
            var n,
              r = e[0],
              o = e[1];
            return [
              r,
              babelHelpers.extends({}, o, {
                forwarded: { media: (n = t.get(o.url)) != null ? n : null },
              }),
            ];
          }),
        ),
      });
    }
    function y(e) {
      return e != null ? { descriptor: e } : null;
    }
    function C(e) {
      return e == null
        ? null
        : {
            directPath: e.directPath,
            encFilehash: e.encFilehash,
            filehash: e.filehash,
            mediaKey: e.mediaKey,
            mediaKeyTimestamp: Math.floor(e.mediaKeyTimestampMs / s),
            mediaType: b(e.mediaType, e.mimeType),
            mimetype: e.mimeType,
          };
    }
    function b(e, t) {
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
      (l.getHatchJarvisPreviewSource = c),
      (l.getHatchJarvisImageSource = d),
      (l.getHatchJarvisMediaUnavailableReason = m),
      (l.isHatchJarvisMediaUrl = p),
      (l.getHatchJarvisThumbnailUrl = _),
      (l.downloadHatchJarvisFile = f),
      (l.toForwardedHatchJarvisPayload = h));
  },
  98,
);

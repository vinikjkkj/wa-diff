__d(
  "WAWebHatchJarvisMedia",
  [
    "WAWebDownloadRichResponseMedia",
    "WAWebFetchRichResponseMediaBytes",
    "WAWebMediaUrlAllowlist",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "jarvis-media://",
      s = 1e3;
    function u(e) {
      if (e == null) return null;
      var t = e.forwarded;
      return t != null
        ? h(t.media)
        : m(e.url)
          ? h(y(e.encryptedMedia))
          : o("WAWebMediaUrlAllowlist").isAllowedMediaUrl(e.url)
            ? { kind: "url", url: e.url }
            : null;
    }
    function c(e) {
      return (e == null ? void 0 : e.forwarded) != null &&
        e.envelopeFilehash == null
        ? null
        : u(e);
    }
    function d(e, t) {
      if (e == null) return null;
      if (m(e)) {
        var n = t.get(e);
        return (n == null ? void 0 : n.url) === e ? u(n) : null;
      }
      return o("WAWebMediaUrlAllowlist").isAllowedMediaUrl(e)
        ? { kind: "url", url: e }
        : null;
    }
    function m(t) {
      return t.startsWith(e);
    }
    function p(e) {
      var t = e == null ? void 0 : e.thumbnailJpegB64;
      return t != null ? "data:image/jpeg;base64," + t : null;
    }
    function _(e, t, n, r) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            if (e.kind === "encrypted") {
              var i = yield o(
                "WAWebFetchRichResponseMediaBytes",
              ).fetchRichResponseMediaBytes(e.descriptor, t, a);
              return i == null ? void 0 : i.blob;
            }
            return o(
              "WAWebDownloadRichResponseMedia",
            ).downloadRichResponseArtifact({
              cancelSignal: a,
              fileLength: n,
              lifecycleSignal: a,
              onProgress: r("WAWebNoop"),
              url: e.url,
            });
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
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
    function h(e) {
      return e != null ? { descriptor: e, kind: "encrypted" } : null;
    }
    function y(e) {
      return e == null
        ? null
        : {
            directPath: e.directPath,
            encFilehash: e.encFilehash,
            filehash: e.filehash,
            mediaKey: e.mediaKey,
            mediaKeyTimestamp: Math.floor(e.mediaKeyTimestampMs / s),
            mediaType: C(e.mediaType, e.mimeType),
            mimetype: e.mimeType,
          };
    }
    function C(e, t) {
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
      (l.isHatchJarvisMediaUrl = m),
      (l.getHatchJarvisThumbnailUrl = p),
      (l.downloadHatchJarvisFile = _),
      (l.toForwardedHatchJarvisPayload = g));
  },
  98,
);

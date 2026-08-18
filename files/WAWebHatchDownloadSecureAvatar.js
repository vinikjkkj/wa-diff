__d(
  "WAWebHatchDownloadSecureAvatar",
  [
    "WAAbortError",
    "WALogger",
    "WARaceSignal",
    "WAWebDownloadManager",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMmsMediaTypes",
    "WAWebStartMediaDownloadQpl",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "image/webp",
      u = "video/mp4",
      c = 3e4;
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          if (
            o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(
              t.filehash,
            )
          )
            return o(
              "WAWebMediaInMemoryBlobCache",
            ).InMemoryMediaBlobCache.getOrCreateURL(t.filehash);
          var l = t.mediaType === "video",
            d = l
              ? o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO
              : o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE,
            m = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "DownloadHatchAvatar",
            }),
            p = new AbortController(),
            _ = !1,
            f = window.setTimeout(function () {
              ((_ = !0), p.abort());
            }, c);
          try {
            return yield r("WARaceSignal")(
              [a, p.signal],
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n,
                      r = yield o(
                        "WAWebDownloadManager",
                      ).downloadManager.downloadAndMaybeDecrypt({
                        directPath: t.directPath,
                        encFilehash: t.encFilehash,
                        filehash: t.filehash,
                        mediaKey: t.mediaKey,
                        mimetype: t.mimeType,
                        staticUrl: t.staticUrl,
                        type: d,
                        signal: e,
                        userDownloadAttemptCount: 0,
                        downloadQpl: m,
                        downloadOrigin: i,
                      }),
                      a = (n = t.mimeType) != null ? n : l ? u : s,
                      c = new Blob([r], { type: a });
                    o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(
                      t.filehash,
                      c,
                    );
                    var p = o(
                      "WAWebMediaInMemoryBlobCache",
                    ).InMemoryMediaBlobCache.getOrCreateURL(t.filehash);
                    return (m.endSuccess(), p);
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          } catch (t) {
            var g = r("getErrorSafe")(t);
            if (g.name === o("WAAbortError").ABORT_ERROR) {
              var h = _ ? "download_timed_out" : "download_aborted";
              return (m.endFailWithError(h, h), null);
            }
            return (
              m.endFailWithError("download_failed", g.message),
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch: secure avatar download failed",
                    ])),
                )
                .catching(g)
                .sendLogs("hatch-secure-avatar-download-failed"),
              null
            );
          } finally {
            window.clearTimeout(f);
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.downloadHatchSecureMedia = d;
  },
  98,
);

__d(
  "WAWebDownloadRichResponseMedia",
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
      s = "image/jpeg",
      u = 3e4;
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          if (
            o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(
              t.filehash,
            )
          )
            return o(
              "WAWebMediaInMemoryBlobCache",
            ).InMemoryMediaBlobCache.getOrCreateURL(t.filehash);
          var l = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "DownloadRichResponseMedia",
            }),
            c = new AbortController(),
            d = window.setTimeout(function () {
              c.abort();
            }, u);
          try {
            return yield r("WARaceSignal")(
              [i, c.signal],
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
                        mediaKeyTimestamp: t.mediaKeyTimestamp,
                        mimetype: t.mimetype,
                        type: o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE,
                        signal: e,
                        userDownloadAttemptCount: 0,
                        downloadQpl: l,
                        downloadOrigin: a,
                      }),
                      i = new Blob([r], {
                        type: (n = t.mimetype) != null ? n : s,
                      });
                    o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(
                      t.filehash,
                      i,
                    );
                    var u = o(
                      "WAWebMediaInMemoryBlobCache",
                    ).InMemoryMediaBlobCache.getOrCreateURL(t.filehash);
                    return (l.endSuccess(), u);
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          } catch (t) {
            var m = r("getErrorSafe")(t);
            if (m.name === o("WAAbortError").ABORT_ERROR) {
              var p =
                c.signal.aborted && !i.aborted
                  ? "download_timed_out"
                  : "download_aborted";
              return (l.endFailWithError(p, p), null);
            }
            return (
              l.endFailWithError("download_failed", m.message),
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "rich response: media download failed",
                    ])),
                )
                .catching(m)
                .sendLogs("rich-response-media-download-failed"),
              null
            );
          } finally {
            window.clearTimeout(d);
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.downloadRichResponseMedia = c;
  },
  98,
);

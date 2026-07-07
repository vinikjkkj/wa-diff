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
    "WAWebWamEnumDownloadOriginType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "image/webp",
      u = "video/mp4",
      c = 3e4;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          if (
            o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(
              t.filehash,
            )
          )
            return o(
              "WAWebMediaInMemoryBlobCache",
            ).InMemoryMediaBlobCache.getOrCreateURL(t.filehash);
          var i = t.mediaType === "video",
            l = i
              ? o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO
              : o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE,
            d = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "DownloadHatchAvatar",
            }),
            m = new AbortController(),
            p = !1,
            _ = window.setTimeout(function () {
              ((p = !0), m.abort());
            }, c);
          try {
            return yield r("WARaceSignal")(
              [a, m.signal],
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
                        type: l,
                        signal: e,
                        userDownloadAttemptCount: 0,
                        downloadQpl: d,
                        downloadOrigin: o("WAWebWamEnumDownloadOriginType")
                          .DOWNLOAD_ORIGIN_TYPE.PROFILE_PICTURE,
                      }),
                      a = (n = t.mimeType) != null ? n : i ? u : s,
                      c = new Blob([r], { type: a });
                    o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(
                      t.filehash,
                      c,
                    );
                    var m = o(
                      "WAWebMediaInMemoryBlobCache",
                    ).InMemoryMediaBlobCache.getOrCreateURL(t.filehash);
                    return (d.endSuccess(), m);
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          } catch (t) {
            var f = r("getErrorSafe")(t);
            if (f.name === o("WAAbortError").ABORT_ERROR) {
              var g = p ? "download_timed_out" : "download_aborted";
              return (d.endFailWithError(g, g), null);
            }
            return (
              d.endFailWithError("download_failed", f.message),
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch: secure avatar download failed",
                    ])),
                )
                .catching(f)
                .sendLogs("hatch-secure-avatar-download-failed"),
              null
            );
          } finally {
            window.clearTimeout(_);
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.downloadHatchSecureMedia = d;
  },
  98,
);

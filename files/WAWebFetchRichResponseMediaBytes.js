__d(
  "WAWebFetchRichResponseMediaBytes",
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
      s,
      u = "image/jpeg",
      c = 3e4;
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          try {
            var l,
              c = (l = t.mimetype) != null ? l : u,
              d = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
                t.filehash,
              );
            if (d != null)
              return (
                o("WAWebStartMediaDownloadQpl")
                  .startMediaDownloadQpl({
                    entryPoint: "DownloadRichResponseMedia",
                  })
                  .endSuccess({
                    string: {
                      downloadResult: "in_memory_media_blob_cache_hit",
                    },
                  }),
                { blob: d, filehash: t.filehash, mimetype: c }
              );
            var m = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                entryPoint: "DownloadRichResponseMedia",
              }),
              _ = yield p(
                i,
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n = yield o(
                          "WAWebDownloadManager",
                        ).downloadManager.downloadAndMaybeDecrypt({
                          directPath: t.directPath,
                          encFilehash: t.encFilehash,
                          filehash: t.filehash,
                          mediaKey: t.mediaKey,
                          mediaKeyTimestamp: t.mediaKeyTimestamp,
                          mimetype: t.mimetype,
                          type: f(t.mediaType),
                          signal: e,
                          userDownloadAttemptCount: 0,
                          downloadQpl: m,
                          downloadOrigin: a,
                        }),
                        r = new Blob([n], { type: c });
                      return (
                        o(
                          "WAWebMediaInMemoryBlobCache",
                        ).InMemoryMediaBlobCache.put(t.filehash, r),
                        { blob: r, filehash: t.filehash, mimetype: c }
                      );
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
            e: {
              var g = _;
              if (
                ((typeof g == "object" && g !== null) ||
                  typeof g == "function") &&
                g.kind === "completed" &&
                "value" in g
              ) {
                var h = g.value;
                return (m.endSuccess(), h);
                break e;
              }
              if (
                ((typeof g == "object" && g !== null) ||
                  typeof g == "function") &&
                g.kind === "timedOut"
              ) {
                return (
                  m.endFailWithError(
                    "download_timed_out",
                    "download_timed_out",
                  ),
                  null
                );
                break e;
              }
              if (
                ((typeof g == "object" && g !== null) ||
                  typeof g == "function") &&
                g.kind === "callerAborted"
              ) {
                return (
                  m.endFailWithError("download_aborted", "download_aborted"),
                  null
                );
                break e;
              }
              if (
                ((typeof g == "object" && g !== null) ||
                  typeof g == "function") &&
                g.kind === "failed" &&
                "error" in g
              ) {
                var y = g.error;
                return (
                  m.endFailWithError("download_failed", y.message),
                  o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "rich response: media download failed",
                        ])),
                    )
                    .catching(y)
                    .sendLogs("rich-response-media-download-failed"),
                  null
                );
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  g,
              );
            }
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "rich response: unexpected error fetching media bytes",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("rich-response-media-fetch-unexpected-error"),
              null
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new AbortController(),
            a = window.setTimeout(function () {
              n.abort();
            }, c);
          try {
            var i = yield r("WARaceSignal")([e, n.signal], t);
            return { kind: "completed", value: i };
          } catch (t) {
            var l = r("getErrorSafe")(t);
            return l.name === o("WAAbortError").ABORT_ERROR
              ? e.aborted
                ? { kind: "callerAborted" }
                : n.signal.aborted
                  ? { kind: "timedOut" }
                  : { kind: "callerAborted" }
              : { kind: "failed", error: l };
          } finally {
            window.clearTimeout(a);
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return e === "audio"
        ? o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO
        : e === "document"
          ? o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT
          : e === "video"
            ? o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO
            : e === "image" || e === null || e === void 0
              ? o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    l.fetchRichResponseMediaBytes = d;
  },
  98,
);

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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "image/jpeg",
      c = 3e4;
    async function d(t, n, a) {
      try {
        var i,
          l = (i = t.mimetype) != null ? i : u,
          c = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
            t.filehash,
          );
        if (c != null)
          return (
            o("WAWebStartMediaDownloadQpl")
              .startMediaDownloadQpl({
                entryPoint: "DownloadRichResponseMedia",
              })
              .endSuccess({
                string: { downloadResult: "in_memory_media_blob_cache_hit" },
              }),
            { blob: c, filehash: t.filehash, mimetype: l }
          );
        var d = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
            entryPoint: "DownloadRichResponseMedia",
          }),
          _ = await m(a, async function (e) {
            var r = await o(
                "WAWebDownloadManager",
              ).downloadManager.downloadAndMaybeDecrypt({
                directPath: t.directPath,
                encFilehash: t.encFilehash,
                filehash: t.filehash,
                mediaKey: t.mediaKey,
                mediaKeyTimestamp: t.mediaKeyTimestamp,
                mimetype: t.mimetype,
                type: p(t.mediaType),
                signal: e,
                userDownloadAttemptCount: 0,
                downloadQpl: d,
                downloadOrigin: n,
              }),
              a = new Blob([r], { type: l });
            return (
              o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(
                t.filehash,
                a,
              ),
              { blob: a, filehash: t.filehash, mimetype: l }
            );
          });
        e: {
          var f = _;
          if (
            ((typeof f == "object" && f !== null) || typeof f == "function") &&
            f.kind === "completed" &&
            "value" in f
          ) {
            var g = f.value;
            return (d.endSuccess(), g);
            break e;
          }
          if (
            ((typeof f == "object" && f !== null) || typeof f == "function") &&
            f.kind === "timedOut"
          ) {
            return (
              d.endFailWithError("download_timed_out", "download_timed_out"),
              null
            );
            break e;
          }
          if (
            ((typeof f == "object" && f !== null) || typeof f == "function") &&
            f.kind === "callerAborted"
          ) {
            return (
              d.endFailWithError("download_aborted", "download_aborted"),
              null
            );
            break e;
          }
          if (
            ((typeof f == "object" && f !== null) || typeof f == "function") &&
            f.kind === "failed" &&
            "error" in f
          ) {
            var h = f.error;
            return (
              d.endFailWithError("download_failed", h.message),
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "rich response: media download failed",
                    ])),
                )
                .catching(h)
                .sendLogs("rich-response-media-download-failed"),
              null
            );
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              f,
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
    }
    async function m(e, t) {
      var n = new AbortController(),
        a = window.setTimeout(function () {
          n.abort();
        }, c);
      try {
        var i = await r("WARaceSignal")([e, n.signal], t);
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
    }
    function p(e) {
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

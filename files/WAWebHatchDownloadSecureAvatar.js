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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "image/webp",
      u = "video/mp4",
      c = 3e4;
    async function d(t, n, a) {
      var i = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
        entryPoint: "DownloadHatchAvatar",
      });
      if (
        o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(t.filehash)
      )
        return (
          i.endSuccess({
            string: { downloadResult: "in_memory_media_blob_cache_hit" },
          }),
          o(
            "WAWebMediaInMemoryBlobCache",
          ).InMemoryMediaBlobCache.getOrCreateURL(t.filehash)
        );
      i.addPoint("in_memory_media_blob_cache_miss");
      var l = t.mediaType === "video",
        d = l
          ? o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO
          : o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE,
        m = new AbortController(),
        p = !1,
        _ = window.setTimeout(function () {
          ((p = !0), m.abort());
        }, c);
      try {
        return await r("WARaceSignal")([n, m.signal], async function (e) {
          var n,
            r = await o(
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
              downloadQpl: i,
              downloadOrigin: a,
            }),
            c = (n = t.mimeType) != null ? n : l ? u : s,
            m = new Blob([r], { type: c });
          (i.addPoint("in_memory_media_blob_cache_write_start"),
            o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(
              t.filehash,
              m,
            ));
          var p = o(
            "WAWebMediaInMemoryBlobCache",
          ).InMemoryMediaBlobCache.getOrCreateURL(t.filehash);
          return (
            i.addPoint("in_memory_media_blob_cache_write_end"),
            i.endSuccess(),
            p
          );
        });
      } catch (t) {
        var f = r("getErrorSafe")(t);
        if (f.name === o("WAAbortError").ABORT_ERROR) {
          var g = p ? "download_timed_out" : "download_aborted";
          return (i.endFailWithError(g, g), null);
        }
        return (
          i.endFailWithError("download_failed", f.message),
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
    }
    l.downloadHatchSecureMedia = d;
  },
  98,
);

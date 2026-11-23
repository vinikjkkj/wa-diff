__d(
  "WAWebDownloadRichResponseMedia",
  [
    "WAAbortError",
    "WALogger",
    "WARaceSignal",
    "WAWebFetchRichResponseMediaBytes",
    "WAWebHttpExtendedFetch",
    "WAWebStartMediaDownloadQpl",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e4;
    async function u(e, t, n) {
      await o("WAWebFetchRichResponseMediaBytes").fetchRichResponseMediaBytes(
        e,
        t,
        n,
      );
    }
    async function c(t) {
      var n = t.cancelSignal,
        a = t.fileLength,
        i = t.lifecycleSignal,
        l = t.onProgress,
        s = t.url,
        u = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
          entryPoint: "DownloadRichResponseMedia",
        });
      u.addAnnotations({ string: { richResponseLane: "artifact" } });
      var c = d();
      try {
        return await r("WARaceSignal")([i, n, c.signal], async function (e) {
          var t = await o("WAWebHttpExtendedFetch").extendedFetch(s, {
            onHeadersReceived: function () {
              c.restart();
            },
            onProgress: function (t) {
              c.restart();
              var e = t.lengthComputable ? t.total : a;
              l(p(t.loaded, e));
            },
            signal: e,
          });
          if (!t.ok)
            throw r("err")(
              "artifact download rejected with status " + t.status,
            );
          var n = await t.blob();
          return (u.endSuccess(), n);
        });
      } catch (t) {
        var _ = r("getErrorSafe")(t);
        return _.name === o("WAAbortError").ABORT_ERROR
          ? (m(u, i, n, c.signal), null)
          : (u.endFailWithError("download_failed", _.message),
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "rich response: artifact download failed",
                  ])),
              )
              .catching(_)
              .sendLogs("rich-response-artifact-download-failed"),
            null);
      } finally {
        c.clear();
      }
    }
    function d() {
      var e = new AbortController(),
        t = null,
        n = function () {
          t != null && (window.clearTimeout(t), (t = null));
        },
        r = function () {
          (n(),
            (t = window.setTimeout(function () {
              e.abort();
            }, s)));
        };
      return (r(), { clear: n, restart: r, signal: e.signal });
    }
    function m(e, t, n, r) {
      n.aborted
        ? e.endCancel()
        : r.aborted
          ? e.endFailWithError("download_timed_out", "download_timed_out")
          : t.aborted
            ? e.endFailWithError("download_unmounted", "download_unmounted")
            : e.endFailWithError("download_aborted", "download_aborted");
    }
    function p(e, t) {
      return t == null || t <= 0 ? null : Math.min(e / t, 1);
    }
    ((l.downloadRichResponseMedia = u), (l.downloadRichResponseArtifact = c));
  },
  98,
);

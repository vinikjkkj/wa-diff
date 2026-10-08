__d(
  "WAWebDownloadRichResponseMedia",
  [
    "WAAbortError",
    "WALogger",
    "WARaceSignal",
    "WAWebFetchRichResponseMediaBytes",
    "WAWebHttpExtendedFetch",
    "WAWebStartMediaDownloadQpl",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e4;
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          yield o(
            "WAWebFetchRichResponseMediaBytes",
          ).fetchRichResponseMediaBytes(e, t, n);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.cancelSignal,
            i = t.fileLength,
            l = t.lifecycleSignal,
            s = t.onProgress,
            u = t.url,
            c = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "DownloadRichResponseMedia",
            });
          c.addAnnotations({ string: { richResponseLane: "artifact" } });
          var d = p();
          try {
            return yield r("WARaceSignal")(
              [l, a, d.signal],
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = yield o("WAWebHttpExtendedFetch").extendedFetch(u, {
                      onHeadersReceived: function () {
                        d.restart();
                      },
                      onProgress: function (t) {
                        d.restart();
                        var e = t.lengthComputable ? t.total : i;
                        s(f(t.loaded, e));
                      },
                      signal: e,
                    });
                    if (!t.ok)
                      throw r("err")(
                        "artifact download rejected with status " + t.status,
                      );
                    var n = yield t.blob();
                    return (c.endSuccess(), n);
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          } catch (t) {
            var m = r("getErrorSafe")(t);
            return m.name === o("WAAbortError").ABORT_ERROR
              ? (_(c, l, a, d.signal), null)
              : (c.endFailWithError("download_failed", m.message),
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "rich response: artifact download failed",
                      ])),
                  )
                  .catching(m)
                  .sendLogs("rich-response-artifact-download-failed"),
                null);
          } finally {
            d.clear();
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
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
    function _(e, t, n, r) {
      n.aborted
        ? e.endCancel()
        : r.aborted
          ? e.endFailWithError("download_timed_out", "download_timed_out")
          : t.aborted
            ? e.endFailWithError("download_unmounted", "download_unmounted")
            : e.endFailWithError("download_aborted", "download_aborted");
    }
    function f(e, t) {
      return t == null || t <= 0 ? null : Math.min(e / t, 1);
    }
    ((l.downloadRichResponseMedia = u), (l.downloadRichResponseArtifact = d));
  },
  98,
);

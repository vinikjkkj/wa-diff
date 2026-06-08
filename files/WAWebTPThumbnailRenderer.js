__d(
  "WAWebTPThumbnailRenderer",
  [
    "Promise",
    "WACustomError",
    "WAWebABProps",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebTPWhatsAppNetBridge",
    "asyncToGeneratorRuntime",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("gkx")("17264")
        ? Number.MAX_SAFE_INTEGER
        : r("justknobx")._("2857") || 15e3;
    function u() {
      var e;
      return o("WAWebTPPdfViewerGatingUtils").isAsyncPdfSendEnabled()
        ? r("justknobx")._("5486") || 6e4
        : (e = o("WAWebABProps").getABPropConfigValue(
              "wa_webtp_thumbnail_renderer_timeout_ms",
            )) != null
          ? e
          : s;
    }
    var c = (function () {
      function t(e) {
        this.$1 = new (o("WAWebTPWhatsAppNetBridge").WAWebTPWhatsAppNetBridge)(
          e,
        );
      }
      var a = t.prototype;
      return (
        (a.listen = function (t, n) {
          return this.$1.listen(t, n);
        }),
        (a.getThumbnail = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var a = this,
              i = r("WAWebPonyfillsCryptoRandomUUID")();
            return new (e || (e = n("Promise")))(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, n) {
                    var r = null,
                      l = a.$1.listen(
                        "RENDER_PDF_THUMBNAIL_RESPONSE",
                        function (t) {
                          t.requestId === i &&
                            (r != null && window.clearTimeout(r),
                            l(),
                            t.success ? e(t) : n(t.error));
                        },
                      ),
                      s = u();
                    r = window.setTimeout(function () {
                      (l(),
                        n(
                          new (o("WACustomError").TimeoutError)(
                            "RENDER_PDF_THUMBNAIL_RESPONSE, timeoutMs: " + s,
                          ),
                        ));
                    }, s);
                    var c = babelHelpers.extends({}, t, { requestId: i });
                    a.$1
                      .publishWhenReady("RENDER_PDF_THUMBNAIL", c)
                      .catch(function (e) {
                        (r != null && window.clearTimeout(r), l(), n(e));
                      });
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          });
          function a(e) {
            return t.apply(this, arguments);
          }
          return a;
        })()),
        (a.destroy = function () {
          this.$1.destroy();
        }),
        t
      );
    })();
    ((l.getPdfThumbnailTimeoutMs = u), (l.WAWebTPThumbnailRenderer = c));
  },
  98,
);

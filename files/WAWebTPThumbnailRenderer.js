__d(
  "WAWebTPThumbnailRenderer",
  [
    "Promise",
    "WACustomError",
    "WAWebABProps",
    "WAWebPonyfillsCryptoRandomUUID",
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
        : r("justknobx")._("2857") || 15e3,
      u = (function () {
        function t(e) {
          this.$1 = new (o(
            "WAWebTPWhatsAppNetBridge",
          ).WAWebTPWhatsAppNetBridge)(e);
        }
        var a = t.prototype;
        return (
          (a.listen = function (t, n) {
            return this.$1.listen(t, n);
          }),
          (a.getThumbnail = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this,
                  i = r("WAWebPonyfillsCryptoRandomUUID")();
                return new (e || (e = n("Promise")))(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e, n) {
                        var r,
                          l = null,
                          u = a.$1.listen(
                            "RENDER_PDF_THUMBNAIL_RESPONSE",
                            function (t) {
                              t.requestId === i &&
                                (l != null && window.clearTimeout(l),
                                u(),
                                t.success ? e(t) : n(t.error));
                            },
                          ),
                          c =
                            (r = o("WAWebABProps").getABPropConfigValue(
                              "wa_webtp_thumbnail_renderer_timeout_ms",
                            )) != null
                              ? r
                              : s;
                        ((l = window.setTimeout(function () {
                          (u(),
                            n(
                              new (o("WACustomError").TimeoutError)(
                                "RENDER_PDF_THUMBNAIL_RESPONSE, timeoutMs: " +
                                  c,
                              ),
                            ));
                        }, c)),
                          a.$1
                            .publishWhenReady(
                              "RENDER_PDF_THUMBNAIL",
                              babelHelpers.extends({}, t, { requestId: i }),
                            )
                            .catch(function (e) {
                              (l != null && window.clearTimeout(l), u(), n(e));
                            }));
                      },
                    );
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                );
              },
            );
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
    ((l.PDF_RENDER_THUMBNAIL_TIMEOUT_MS = s), (l.WAWebTPThumbnailRenderer = u));
  },
  98,
);

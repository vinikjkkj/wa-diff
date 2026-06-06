__d(
  "WAWebTPThumbnailRenderer",
  [
    "WACustomError",
    "WAWebABProps",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebTPWhatsAppNetBridge",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("gkx")("17264")
      ? Number.MAX_SAFE_INTEGER
      : r("justknobx")._("2857") || 15e3;
    function s() {
      var t;
      return o("WAWebTPPdfViewerGatingUtils").isAsyncPdfSendEnabled()
        ? r("justknobx")._("5486") || 6e4
        : (t = o("WAWebABProps").getABPropConfigValue(
              "wa_webtp_thumbnail_renderer_timeout_ms",
            )) != null
          ? t
          : e;
    }
    var u = (function () {
      function e(e) {
        this.$1 = new (o("WAWebTPWhatsAppNetBridge").WAWebTPWhatsAppNetBridge)(
          e,
        );
      }
      var t = e.prototype;
      return (
        (t.listen = function (t, n) {
          return this.$1.listen(t, n);
        }),
        (t.getThumbnail = async function (t) {
          var e = this,
            n = r("WAWebPonyfillsCryptoRandomUUID")();
          return new Promise(async function (r, a) {
            var i = null,
              l = e.$1.listen("RENDER_PDF_THUMBNAIL_RESPONSE", function (e) {
                e.requestId === n &&
                  (i != null && window.clearTimeout(i),
                  l(),
                  e.success ? r(e) : a(e.error));
              }),
              u = s();
            i = window.setTimeout(function () {
              (l(),
                a(
                  new (o("WACustomError").TimeoutError)(
                    "RENDER_PDF_THUMBNAIL_RESPONSE, timeoutMs: " + u,
                  ),
                ));
            }, u);
            var c = babelHelpers.extends({}, t, { requestId: n });
            e.$1
              .publishWhenReady("RENDER_PDF_THUMBNAIL", c)
              .catch(function (e) {
                (i != null && window.clearTimeout(i), l(), a(e));
              });
          });
        }),
        (t.destroy = function () {
          this.$1.destroy();
        }),
        e
      );
    })();
    ((l.PDF_RENDER_THUMBNAIL_TIMEOUT_MS = e),
      (l.getPdfThumbnailTimeoutMs = s),
      (l.WAWebTPThumbnailRenderer = u));
  },
  98,
);

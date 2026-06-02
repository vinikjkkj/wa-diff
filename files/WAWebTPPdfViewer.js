__d(
  "WAWebTPPdfViewer",
  [
    "WACustomError",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebTPPerformanceListener",
    "WAWebTPWhatsAppNetBridge",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("gkx")("17264")
        ? Number.MAX_SAFE_INTEGER
        : r("justknobx")._("5486"),
      s = (function () {
        function t(e) {
          ((this.$1 = new (o(
            "WAWebTPWhatsAppNetBridge",
          ).WAWebTPWhatsAppNetBridge)(e)),
            this.$1.registerListener(
              new (o("WAWebTPPerformanceListener").WAWebTPPerformanceListener)(
                Date.now(),
              ),
            ));
        }
        var n = t.prototype;
        return (
          (n.publishAppConfig = async function (t) {
            return this.$1.publishWhenReady("APP_CONFIG", t);
          }),
          (n.renderPdf = async function (n, r, o) {
            var t = this;
            return new Promise(function (a, i) {
              (t.$1.listenOnce(
                "RENDER_PDF_PREVIEW_RESPONSE",
                function (e) {
                  if (e.success) return a();
                  i(e.error);
                },
                {
                  timeoutMs: e,
                  onTimeout: function (t) {
                    i(t);
                  },
                },
              ),
                t.$1
                  .publishWhenReady("RENDER_PDF_PREVIEW", {
                    file: n,
                    fileName: r,
                    isAnnotationsEnabled:
                      o == null ? void 0 : o.isAnnotationsEnabled,
                    isWindowsHybrid: o == null ? void 0 : o.isWindowsHybrid,
                  })
                  .catch(i));
            });
          }),
          (n.showSearch = function () {
            return this.$1.publishWhenReady("SHOW_SEARCH", {});
          }),
          (n.focusFirstInViewer = function () {
            return this.$1.publishWhenReady("FOCUS_FIRST_IN_VIEWER", {});
          }),
          (n.focusLastInViewer = function () {
            return this.$1.publishWhenReady("FOCUS_LAST_IN_VIEWER", {});
          }),
          (n.listen = function (t, n) {
            return this.$1.listen(t, n);
          }),
          (n.publish = function (t, n) {
            this.$1.publish(t, n);
          }),
          (n.annotate = function (t) {
            return this.$1.publishWhenReady("ANNOTATION_COMMAND", t);
          }),
          (n.getUpdatedPDFBuffer = function () {
            var t = this,
              n = r("WAWebPonyfillsCryptoRandomUUID")();
            return new Promise(function (r, a) {
              var i = null,
                l = t.$1.listen(
                  "GET_UPDATED_PDF_BUFFER_RESPONSE",
                  function (e) {
                    e.requestId === n &&
                      (i != null && window.clearTimeout(i), l(), r(e.buffer));
                  },
                );
              ((i = window.setTimeout(function () {
                (l(),
                  a(
                    new (o("WACustomError").TimeoutError)(
                      "GET_UPDATED_PDF_BUFFER_RESPONSE, timeoutMs: " + e,
                    ),
                  ));
              }, e)),
                t.$1
                  .publishWhenReady("GET_UPDATED_PDF_BUFFER", { requestId: n })
                  .catch(function (e) {
                    (i != null && window.clearTimeout(i), l(), a(e));
                  }));
            });
          }),
          (n.destroy = function () {
            this.$1.destroy();
          }),
          t
        );
      })();
    l.WAWebTPPdfViewer = s;
  },
  98,
);

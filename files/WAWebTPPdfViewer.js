__d(
  "WAWebTPPdfViewer",
  [
    "Promise",
    "WACustomError",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebTPPerformanceListener",
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
        : r("justknobx")._("5486"),
      u = (function () {
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
        var a = t.prototype;
        return (
          (a.publishAppConfig = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return this.$1.publishWhenReady("APP_CONFIG", e);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.renderPdf = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, r, o) {
                var a = this;
                return new (e || (e = n("Promise")))(function (e, n) {
                  (a.$1.listenOnce(
                    "RENDER_PDF_PREVIEW_RESPONSE",
                    function (t) {
                      if (t.success) return e();
                      n(t.error);
                    },
                    {
                      timeoutMs: s,
                      onTimeout: function (t) {
                        n(t);
                      },
                    },
                  ),
                    a.$1
                      .publishWhenReady("RENDER_PDF_PREVIEW", {
                        file: t,
                        fileName: r,
                        isAnnotationsEnabled:
                          o == null ? void 0 : o.isAnnotationsEnabled,
                      })
                      .catch(n));
                });
              },
            );
            function r(e, n, r) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.showSearch = function () {
            return this.$1.publishWhenReady("SHOW_SEARCH", {});
          }),
          (a.focusFirstInViewer = function () {
            return this.$1.publishWhenReady("FOCUS_FIRST_IN_VIEWER", {});
          }),
          (a.focusLastInViewer = function () {
            return this.$1.publishWhenReady("FOCUS_LAST_IN_VIEWER", {});
          }),
          (a.listen = function (t, n) {
            return this.$1.listen(t, n);
          }),
          (a.publish = function (t, n) {
            this.$1.publish(t, n);
          }),
          (a.annotate = function (t) {
            return this.$1.publishWhenReady("ANNOTATION_COMMAND", t);
          }),
          (a.getUpdatedPDFBuffer = function () {
            var t = this,
              a = r("WAWebPonyfillsCryptoRandomUUID")();
            return new (e || (e = n("Promise")))(function (e, n) {
              var r = null,
                i = t.$1.listen(
                  "GET_UPDATED_PDF_BUFFER_RESPONSE",
                  function (t) {
                    t.requestId === a &&
                      (r != null && window.clearTimeout(r), i(), e(t.buffer));
                  },
                );
              ((r = window.setTimeout(function () {
                (i(),
                  n(
                    new (o("WACustomError").TimeoutError)(
                      "GET_UPDATED_PDF_BUFFER_RESPONSE, timeoutMs: " + s,
                    ),
                  ));
              }, s)),
                t.$1
                  .publishWhenReady("GET_UPDATED_PDF_BUFFER", { requestId: a })
                  .catch(function (e) {
                    (r != null && window.clearTimeout(r), i(), n(e));
                  }));
            });
          }),
          (a.destroy = function () {
            this.$1.destroy();
          }),
          t
        );
      })();
    l.WAWebTPPdfViewer = u;
  },
  98,
);

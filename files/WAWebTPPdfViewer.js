__d(
  "WAWebTPPdfViewer",
  [
    "Promise",
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
        var r = t.prototype;
        return (
          (r.publishAppConfig = (function () {
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
          (r.renderPdf = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, r) {
                var o = this;
                return new (e || (e = n("Promise")))(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e, n) {
                        var a = yield t.arrayBuffer();
                        (o.$1.listenOnce(
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
                          o.$1
                            .publishWhenReady(
                              "RENDER_PDF_PREVIEW",
                              { fileBuffer: a, fileName: r },
                              [a],
                            )
                            .catch(n));
                      },
                    );
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })(),
                );
              },
            );
            function r(e, n) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (r.showSearch = function () {
            return this.$1.publishWhenReady("SHOW_SEARCH", {});
          }),
          (r.focusFirstInViewer = function () {
            return this.$1.publishWhenReady("FOCUS_FIRST_IN_VIEWER", {});
          }),
          (r.focusLastInViewer = function () {
            return this.$1.publishWhenReady("FOCUS_LAST_IN_VIEWER", {});
          }),
          (r.listen = function (t, n) {
            return this.$1.listen(t, n);
          }),
          (r.publish = function (t, n) {
            this.$1.publish(t, n);
          }),
          (r.destroy = function () {
            this.$1.destroy();
          }),
          t
        );
      })();
    l.WAWebTPPdfViewer = u;
  },
  98,
);

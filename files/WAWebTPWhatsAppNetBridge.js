__d(
  "WAWebTPWhatsAppNetBridge",
  [
    "Promise",
    "WAWebTPBridge",
    "WAWebTPFrameUrlBuilder",
    "WAWebTPPdfViewerQpl",
    "asyncToGeneratorRuntime",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "whatsapp.net",
      u = r("gkx")("17264")
        ? Number.MAX_SAFE_INTEGER
        : r("justknobx")._("5486"),
      c = (function (t) {
        function r(e) {
          var n,
            r = o("WAWebTPFrameUrlBuilder").getWAWebTPPdfViewerUrl();
          return (
            (n = t.call(this, e.contentWindow, new URL(r).origin, s) || this),
            (n.$WAWebTPWhatsAppNetBridge$p_1 =
              n.$WAWebTPWhatsAppNetBridge$p_2()),
            n
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.$WAWebTPWhatsAppNetBridge$p_2 = function () {
            var t = this;
            return new (e || (e = n("Promise")))(function (e, n) {
              (t.listenOnce(
                "APP_READY",
                function () {
                  (o("WAWebTPPdfViewerQpl").pdfViewerQpl.appReady(), e());
                },
                {
                  timeoutMs: u,
                  onTimeout: function (t) {
                    n(t);
                  },
                },
              ),
                t.publish("GET_APP_READY", {}));
            });
          }),
          (a.publishWhenReady = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                return (
                  yield this.$WAWebTPWhatsAppNetBridge$p_1,
                  this.publish(e, t, n)
                );
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          r
        );
      })(o("WAWebTPBridge").WAWebTPBridge);
    l.WAWebTPWhatsAppNetBridge = c;
  },
  98,
);

__d(
  "WAWebTPWhatsAppNetBridge",
  [
    "Promise",
    "WAWebTPBridge",
    "WAWebTPFrameUrlBuilder",
    "WAWebTPPdfViewerQpl",
    "asyncToGeneratorRuntime",
    "err",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "whatsapp.net",
      u = r("justknobx")._("5486"),
      c = (function (t) {
        function a(e) {
          var n,
            a = o("WAWebTPFrameUrlBuilder").getWAWebTPPdfViewerUrl(),
            i = e.contentWindow;
          if (i == null)
            throw r("err")(
              "WebTP bridge requires an iframe attached to the DOM",
            );
          return (
            (n = t.call(this, i, new URL(a).origin, s) || this),
            (n.$WAWebTPWhatsAppNetBridge$p_1 =
              n.$WAWebTPWhatsAppNetBridge$p_2()),
            n
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.$WAWebTPWhatsAppNetBridge$p_2 = function () {
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
          (i.publishWhenReady = (function () {
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
          a
        );
      })(o("WAWebTPBridge").WAWebTPBridge);
    l.WAWebTPWhatsAppNetBridge = c;
  },
  98,
);

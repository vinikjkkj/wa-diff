__d(
  "WAWebTPWhatsAppNetBridge",
  [
    "WAWebTPBridge",
    "WAWebTPFrameUrlBuilder",
    "WAWebTPPdfViewerQpl",
    "err",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "whatsapp.net",
      s = r("justknobx")._("5486"),
      u = (function (t) {
        function n(n) {
          var a,
            i = o("WAWebTPFrameUrlBuilder").getWAWebTPPdfViewerUrl(),
            l = n.contentWindow;
          if (l == null)
            throw r("err")(
              "WebTP bridge requires an iframe attached to the DOM",
            );
          return (
            (a = t.call(this, l, new URL(i).origin, e) || this),
            (a.$WAWebTPWhatsAppNetBridge$p_1 =
              a.$WAWebTPWhatsAppNetBridge$p_2()),
            a
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.$WAWebTPWhatsAppNetBridge$p_2 = function () {
            var e = this;
            return new Promise(function (t, n) {
              (e.listenOnce(
                "APP_READY",
                function () {
                  (o("WAWebTPPdfViewerQpl").pdfViewerQpl.appReady(), t());
                },
                {
                  timeoutMs: s,
                  onTimeout: function (t) {
                    n(t);
                  },
                },
              ),
                e.publish("GET_APP_READY", {}));
            });
          }),
          (a.publishWhenReady = async function (t, n, r) {
            return (
              await this.$WAWebTPWhatsAppNetBridge$p_1,
              this.publish(t, n, r)
            );
          }),
          n
        );
      })(o("WAWebTPBridge").WAWebTPBridge);
    l.WAWebTPWhatsAppNetBridge = u;
  },
  98,
);

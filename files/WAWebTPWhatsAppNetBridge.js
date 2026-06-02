__d(
  "WAWebTPWhatsAppNetBridge",
  [
    "WAWebTPBridge",
    "WAWebTPFrameUrlBuilder",
    "WAWebTPPdfViewerQpl",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "whatsapp.net",
      s = r("gkx")("17264")
        ? Number.MAX_SAFE_INTEGER
        : r("justknobx")._("5486"),
      u = (function (t) {
        function n(n) {
          var r,
            a = o("WAWebTPFrameUrlBuilder").getWAWebTPPdfViewerUrl();
          return (
            (r = t.call(this, n.contentWindow, new URL(a).origin, e) || this),
            (r.$WAWebTPWhatsAppNetBridge$p_1 =
              r.$WAWebTPWhatsAppNetBridge$p_2()),
            r
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.$WAWebTPWhatsAppNetBridge$p_2 = function () {
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
          (r.publishWhenReady = async function (t, n, r) {
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

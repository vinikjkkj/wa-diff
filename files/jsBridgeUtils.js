__d(
  "jsBridgeUtils",
  ["Promise", "WAFlowsDomainUtils", "gkx", "unsafeCast"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return new (e || (e = n("Promise")))(function (e) {
        function t() {
          var t,
            n = (t = window.WhatsAppBridge) == null ? void 0 : t.invoke;
          return n != null ? (e(n), !0) : !1;
        }
        if (!t())
          var n = window.setInterval(function () {
            t() && window.clearInterval(n);
          }, 100);
      });
    }
    function u() {
      return new (e || (e = n("Promise")))(function (e) {
        var t = null;
        function n() {
          var n,
            o =
              ((n = r("unsafeCast")(window).WhatsAppBridge) == null
                ? void 0
                : n.invoke) != null;
          return o || r("gkx")("5897")
            ? (e(!0), window.clearInterval(t != null ? t : void 0), !0)
            : !1;
        }
        n() || (t = window.setInterval(n, 200));
      });
    }
    function c(t) {
      var r = t.eventName,
        a = t.fallBackDataForWeb,
        i = t.hasCallback,
        l = t.payload;
      return new (e || (e = n("Promise")))(function (e) {
        if (o("WAFlowsDomainUtils").isOndemandFlowsInDesktopBrowser()) e(a);
        else
          return s().then(function (t) {
            var n = function (n) {
              i && e(n);
            };
            (t(r, l, n), i || e(null));
          });
      });
    }
    ((l.isNativeBridgeAvailable = u), (l.getWebJSBridge = c));
  },
  98,
);

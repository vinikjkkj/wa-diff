__d(
  "BlueCompatBroker",
  [
    "Env",
    "URI",
    "isCometAltpayJsSdkIframeAllowedDomain",
    "isFacebookURI",
    "isMessengerDotComURI",
    "isWorkDotMetaDotComURI",
    "isWorkplaceDotComURI",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l,
      s,
      u = new Map(),
      c = !1,
      d = function (r) {
        var t = new (e || (e = n("URI")))(r);
        return (
          n("isFacebookURI")(t) ||
          n("isWorkplaceDotComURI")(t) ||
          n("isMessengerDotComURI")(t) ||
          n("isWorkDotMetaDotComURI")(t)
        );
      },
      m = {
        dispatch: function (t) {
          var e = m.getMessageEventString(t, "compatAction");
          if (e != null) {
            var n = u.get(e);
            n && n(t);
          }
        },
        getMessageEventString: function (t, n) {
          var e = t.data;
          if (typeof e == "object") {
            var r = e == null ? void 0 : e[n];
            if (typeof r == "string") return r;
          }
          return "";
        },
        init: function (t) {
          if ((t === void 0 && (t = ""), !c)) {
            document.body && (document.body.style.overflow = "auto");
            var e = n("isCometAltpayJsSdkIframeAllowedDomain")()
                ? "https://secure.facebook.com/"
                : document.referrer,
              r = e.indexOf("/", 8),
              o = e.substring(0, r);
            if (d(o)) {
              var a = new MessageChannel(),
                i = t !== "" ? t : (l || (l = n("Env"))).iframeKey;
              ((s = a.port1),
                (s.onmessage = m.dispatch),
                window.parent.postMessage(
                  { compatAction: "CompatSetup", iframeKey: i },
                  o + "/",
                  [a.port2],
                ));
            }
            try {
              window.__REACT_DEVTOOLS_GLOBAL_HOOK__ =
                window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__;
            } catch (e) {}
            c = !0;
          }
        },
        register: function (t, n) {
          u.set(t, n);
        },
        clear: function (t) {
          u.delete(t);
        },
        sendMessage: function (t) {
          (c || m.init(), s && s.postMessage(babelHelpers.extends({}, t)));
        },
      };
    a.exports = m;
  },
  null,
);

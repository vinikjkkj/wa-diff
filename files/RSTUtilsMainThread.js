__d(
  "RSTUtilsMainThread",
  ["CurrentUser", "RSTConfig", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s(t) {
      if (e.has(t)) {
        var n,
          r = (n = e.get(t)) != null ? n : 0;
        return r <= 0 ? (e.delete(t), !1) : (e.set(t, r - 1), !0);
      }
      return (e.set(t, Math.floor(Math.random() * 10)), !0);
    }
    var u = r("gkx")("22276");
    function c(e) {
      return (
        e === "" + 0x97e965c4439a ||
        u ||
        window.location.hostname === "web.whatsapp.com" ||
        window.location.hostname.endsWith(".web.whatsapp.com") ||
        window.location.hostname.endsWith(".dev-web.whatsapp.com")
      );
    }
    var d = r("CurrentUser").getAppID();
    function m(e) {
      if (c(e)) return "WhatsApp_Web";
      switch (e) {
        case "" + 0x6c6c24b58878:
          return "Ads";
        case "" + 0x7e36f3fcc43bc:
          return "Comet";
        case "" + 0x770a46dafb86b:
          return "Business";
        default:
          return "(Unset-in-RST)";
      }
    }
    var p = new Set(
        [0x6c6c24b58878, 0x770a46dafb86b, 514771569228061].map(function (e) {
          return "" + e;
        }),
      ),
      _ = d != null && p.has(d),
      f = m(d);
    function g(e) {
      if (e == null) return null;
      for (var t of e)
        if (!r("RSTConfig").isReactComponentNameBlocked(t)) return t;
      return null;
    }
    function h(e, t, n) {
      if (
        (n === void 0 &&
          (n = r("RSTConfig").DEFAULT_REACT_COMPONENT_CONTEXT_SIZE),
        e == null)
      )
        return null;
      var o = new Set(),
        a = [];
      for (var i of e) {
        if (a.length >= n) break;
        !o.has(i) && !t(i) && (a.push(i), o.add(i));
      }
      return a;
    }
    ((l.shouldSkipProcessingIncident = s),
      (l.isMonetizationApp = _),
      (l.appName = f),
      (l.getAllowListedComponentName = g),
      (l.getReactComponentContext = h));
  },
  98,
);

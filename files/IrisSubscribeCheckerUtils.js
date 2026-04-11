__d(
  "IrisSubscribeCheckerUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      if (typeof window != "undefined") {
        var e,
          t = (e = window.location) == null ? void 0 : e.hostname;
        if (
          t === "m.facebook.com" ||
          t === "mobile.facebook.com" ||
          t === "mtouch.facebook.com"
        )
          return !1;
      }
      return !0;
    }
    i.getIrisSubscribeCheckerInitialRunningState = e;
  },
  66,
);

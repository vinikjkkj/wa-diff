__d(
  "CometPixelRatioUpdater",
  ["Cookie", "Run", "WebPixelRatio"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "dpr";
    function s(t) {
      r("Cookie").set(e, String(t));
    }
    function u() {
      window.devicePixelRatio !== o("WebPixelRatio").get() &&
        s(window.devicePixelRatio);
    }
    function c() {
      (u(),
        o("Run").onBeforeUnload(u, !1),
        "onpagehide" in window && window.addEventListener("pageHide", u));
    }
    l.startDetecting = c;
  },
  98,
);

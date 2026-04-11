__d(
  "CometSSRRenderingStateHooks",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = function () {
        return function () {};
      };
    function c() {
      return s(u, m, d);
    }
    function d() {
      return !1;
    }
    function m() {
      return !0;
    }
    function p() {
      return !c();
    }
    ((l.useIsClientRendering = c), (l.useIsServerRenderingOrHydrating = p));
  },
  98,
);

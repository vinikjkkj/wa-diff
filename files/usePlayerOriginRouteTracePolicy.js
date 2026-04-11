__d(
  "usePlayerOriginRouteTracePolicy",
  [
    "CometNotificationsRootContext",
    "CometRouteRenderType",
    "react",
    "useCometRouteTracePolicy",
    "useCometRouterState",
    "useParentRoute",
    "useRoutePassthroughProps",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext;
    function u() {
      var e,
        t = s(r("CometNotificationsRootContext")),
        n = t.isNotificationsRoute,
        a = r("useCometRouteTracePolicy")(),
        i = o("CometRouteRenderType").useIsPushView(),
        l = r("useParentRoute")(),
        u = r("useCometRouterState")(),
        c = r("useRoutePassthroughProps")();
      if ((c == null ? void 0 : c.isARLTW) === !0) return "comet.watch.arltw";
      var d = a === "comet.videos.tahoe",
        m = a === "comet.stories.viewer",
        p = a === "comet.reels.home" || a === "comet.reels.unified.player";
      if (i) {
        if (d) return "unknown";
        if (m) return a;
        if (p && (l == null ? void 0 : l.tracePolicy) == null && u != null) {
          var _,
            f = u.main,
            g = u.pushViewStack,
            h = g && g.length > 1 ? g[g.length - 2] : f,
            y = h.route;
          return (_ = y.tracePolicy) != null ? _ : a;
        }
      }
      return n && !d
        ? a
        : (e = l == null ? void 0 : l.tracePolicy) != null
          ? e
          : a;
    }
    l.default = u;
  },
  98,
);

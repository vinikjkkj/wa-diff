__d(
  "WAWebPathfinderApp",
  [
    "WAWebPathfinderHeldBackScope.react",
    "WAWebPathfinderHeldBackSurface",
    "WAWebPathfinderLogger",
    "WAWebPathfinderScreenName",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map();
    function s(e) {
      m("modal", e);
    }
    function u() {
      p("modal");
    }
    function c(e) {
      m("alert", e);
    }
    function d() {
      p("alert");
    }
    function m(t, n) {
      var r,
        a,
        i =
          (r =
            (a = o("WAWebPathfinderHeldBackSurface").toHeldBackSurfaceName(
              f(n),
            )) != null
              ? a
              : _(n)) != null
            ? r
            : o(
                "WAWebPathfinderHeldBackSurface",
              ).getOpenScopedHeldBackSurface();
      (i != null ? e.set(t, i) : e.delete(t),
        o("WAWebPathfinderLogger").emitPathfinderEvent({
          eventType: "ALERT_SHOWN",
          heldBackSurface: i != null ? i : void 0,
          screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
          timestampMs: Date.now(),
        }));
    }
    function p(t) {
      var n = e.get(t);
      (e.delete(t),
        o("WAWebPathfinderLogger").emitPathfinderEvent({
          eventType: "ALERT_CLOSED",
          heldBackSurface: n != null ? n : void 0,
          screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
          timestampMs: Date.now(),
        }));
    }
    function _(e) {
      return e == null ||
        typeof e != "object" ||
        e.type !== r("WAWebPathfinderHeldBackScope.react") ||
        e.props == null ||
        typeof e.props != "object" ||
        typeof e.props.name != "string"
        ? null
        : o("WAWebPathfinderHeldBackSurface").toHeldBackSurfaceName(
            e.props.name,
          );
    }
    function f(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.props;
      if (t == null || typeof t != "object") return null;
      var n = t.tsNavigationData;
      if (n == null || typeof n != "object") return null;
      var r = n.viewName;
      return typeof r == "string" ? r : null;
    }
    ((l.handleModalShown = s),
      (l.handleModalClosed = u),
      (l.handleAlertShown = c),
      (l.handleAlertClosed = d));
  },
  98,
);

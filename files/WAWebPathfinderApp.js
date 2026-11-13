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
      _("modal", e);
    }
    function u() {
      f("modal");
    }
    function c(e) {
      _("alert", e);
    }
    function d() {
      f("alert");
    }
    function m(t) {
      (t === "modal" || t === "alert") && e.delete(t);
    }
    function p() {
      e.clear();
    }
    function _(t, n) {
      var r,
        a,
        i = e.get(t);
      i != null && g(i);
      var l =
          (r =
            (a = o("WAWebPathfinderHeldBackSurface").toHeldBackSurfaceName(
              y(n),
            )) != null
              ? a
              : h(n)) != null
            ? r
            : o(
                "WAWebPathfinderHeldBackSurface",
              ).getOpenScopedHeldBackSurface(),
        s = l != null ? l : void 0;
      (e.set(t, {
        unlockCount: o("WAWebPathfinderHeldBackSurface").getScreenUnlockCount(),
        verdict:
          s != null
            ? s
            : o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface(),
      }),
        o("WAWebPathfinderLogger").emitPathfinderEvent({
          eventType: "ALERT_SHOWN",
          heldBackSurface: s,
          screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
          timestampMs: Date.now(),
        }));
    }
    function f(t) {
      var n = e.get(t);
      n != null && (e.delete(t), g(n));
    }
    function g(e) {
      var t, n;
      if (
        e.unlockCount ===
        o("WAWebPathfinderHeldBackSurface").getScreenUnlockCount()
      ) {
        var r = o(
            "WAWebPathfinderHeldBackSurface",
          ).getOpenScopedHeldBackSurface(),
          a =
            (t =
              (n = e.verdict) != null
                ? n
                : o(
                    "WAWebPathfinderHeldBackSurface",
                  ).captureHeldBackSurface()) != null
              ? t
              : r != null
                ? r
                : void 0;
        o("WAWebPathfinderLogger").emitPathfinderEvent({
          eventType: "ALERT_CLOSED",
          heldBackSurface: a != null ? a : void 0,
          screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
          timestampMs: Date.now(),
        });
      }
    }
    function h(e) {
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
    function y(e) {
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
      (l.handleAlertClosed = d),
      (l.handlePopupSlotUnmounted = m),
      (l.disposePathfinderPopups = p));
  },
  98,
);

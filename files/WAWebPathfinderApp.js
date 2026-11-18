__d(
  "WAWebPathfinderApp",
  [
    "WAWebModalManager",
    "WAWebPathfinderHeldBackScope.react",
    "WAWebPathfinderHeldBackSurface",
    "WAWebPathfinderLogger",
    "WAWebPathfinderScreenName",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map();
    function s(e) {
      g("modal", e);
    }
    function u() {
      h("modal");
    }
    function c(e) {
      g("alert", e);
    }
    function d() {
      h("alert");
    }
    function m(e) {
      var t = p();
      if (t == null || !(e instanceof Node)) return null;
      var n = !1;
      return (
        o("WAWebModalManager").ModalManager.getRef(function (t) {
          n = n || (t == null ? void 0 : t.contains(e)) === !0;
        }),
        n ? t : null
      );
    }
    function p() {
      if (e.size === 0) return null;
      for (var t of e.values()) if (t.verdict != null) return t.verdict;
      return null;
    }
    function _(t) {
      (t === "modal" || t === "alert") && e.delete(t);
    }
    function f() {
      e.clear();
    }
    function g(t, n) {
      var r,
        a,
        i = e.get(t);
      i != null && y(i);
      var l =
          (r =
            (a = o("WAWebPathfinderHeldBackSurface").toHeldBackSurfaceName(
              b(n),
            )) != null
              ? a
              : C(n)) != null
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
    function h(t) {
      var n = e.get(t);
      n != null && (e.delete(t), y(n));
    }
    function y(e) {
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
    function C(e) {
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
    function b(e) {
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
      (l.captureHeldPopupSurface = m),
      (l.handlePopupSlotUnmounted = _),
      (l.disposePathfinderPopups = f));
  },
  98,
);

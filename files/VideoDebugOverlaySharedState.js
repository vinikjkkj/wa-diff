__d(
  "VideoDebugOverlaySharedState",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.createContext,
      c = s.useCallback,
      d = s.useContext,
      m = s.useState;
    function p(e) {
      if (e != null && typeof e == "object") {
        var t =
            e.defaultOverlayName === null ||
            typeof e.defaultOverlayName == "string"
              ? e.defaultOverlayName
              : void 0,
          n = typeof e.isVisible == "boolean" ? e.isVisible : void 0,
          r =
            typeof e.isPointerEventsDisabled == "boolean"
              ? e.isPointerEventsDisabled
              : void 0,
          o =
            e.floatingOverlayIdentifier === null ||
            typeof e.floatingOverlayIdentifier == "string"
              ? e.floatingOverlayIdentifier
              : void 0;
        if (t !== void 0 && o !== void 0 && r !== void 0 && n !== void 0)
          return {
            defaultOverlayName: t,
            floatingOverlayIdentifier: o,
            isPointerEventsDisabled: r,
            isVisible: n,
          };
      }
      return null;
    }
    var _ = {
        defaultOverlayName: null,
        floatingOverlayIdentifier: null,
        isPointerEventsDisabled: !1,
        isVisible: !1,
      },
      f = u(null),
      g = u(null);
    function h(e) {
      var t,
        n = o("react-compiler-runtime").c(7),
        r = d(f),
        a = d(g),
        i = (t = r != null ? r : e) != null ? t : _,
        l = m(null),
        s = l[0],
        u = l[1],
        c = s != null ? s : i,
        p = m(r),
        h = p[0],
        y = p[1];
      r != null && r !== h && s != null && (y(r), u(null));
      var C;
      n[0] !== c || n[1] !== r || n[2] !== a
        ? ((C = function (t, n) {
            var e = typeof t == "function" ? t(c) : t;
            if ((u(e), n === !0 && r != null && a != null)) {
              var o = typeof t == "function" ? t(r) : t;
              a(o);
            }
          }),
          (n[0] = c),
          (n[1] = r),
          (n[2] = a),
          (n[3] = C))
        : (C = n[3]);
      var b = C,
        v;
      return (
        n[4] !== c || n[5] !== b
          ? ((v = [c, b]), (n[4] = c), (n[5] = b), (n[6] = v))
          : (v = n[6]),
        v
      );
    }
    ((l.checkVideoDebugOverlaySharedState = p),
      (l.VideoDebugOverlaySharedStateDefault = _),
      (l.VideoDebugOverlaySharedStateContext = f),
      (l.VideoDebugOverlaySharedStateParentSetterContext = g),
      (l.useVideoDebugOverlaySharedState = h));
  },
  98,
);

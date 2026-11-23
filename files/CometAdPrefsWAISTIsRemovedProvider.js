__d(
  "CometAdPrefsWAISTIsRemovedProvider",
  ["$InternalEnum", "react", "useNullthrowsViolation"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useReducer,
      m = n("$InternalEnum").Mirrored(["REMOVE", "UNDO"]),
      p = s.createContext({}),
      _ = s.createContext(function () {});
    function f(e, t) {
      var n, r;
      switch (t.type) {
        case m.REMOVE:
          return babelHelpers.extends(
            {},
            e,
            ((n = {}), (n[t.entityId] = !0), n),
          );
        case m.UNDO:
          return babelHelpers.extends(
            {},
            e,
            ((r = {}), (r[t.entityId] = !1), r),
          );
      }
    }
    function g(e) {
      var t = e.children,
        n = d(f, {}),
        r = n[0],
        o = n[1];
      return s.jsx(_.Provider, {
        value: o,
        children: s.jsx(p.Provider, { value: r, children: t }),
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = c(p);
      return t == null || t[e] == null ? !1 : t[e] === !0;
    }
    function y() {
      return r("useNullthrowsViolation")(
        c(_),
        "should be used within AdsPrefsWAISTIsRemovedProvider",
      );
    }
    ((l.AdsPrefsWAISTRemoveType = m),
      (l.CometAdPrefsWAISTIsRemovedProvider = g),
      (l.useIsRemovedState = h),
      (l.useRemoveDispatch = y));
  },
  98,
);

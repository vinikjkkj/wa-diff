__d(
  "WAWebBizAdCreationAddMediaAffordanceContext",
  ["WAWebNoop", "WAWebNullFunc", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useCallback,
      m = u.useContext,
      p = u.useMemo,
      _ = u.useRef,
      f = u.useState,
      g = {
        getFocusTarget: o("WAWebNullFunc").returnNull,
        isAddMediaBusy: !1,
        isCreativeCtaVisible: null,
        openMediaPicker: function () {},
        registerFocusTarget: function () {
          return r("WAWebNoop");
        },
        registerOpenMediaPicker: function () {},
        scrollRootElement: null,
        updateAddMediaBusy: function () {},
        updateCreativeCtaVisible: function () {},
      },
      h = c(g);
    function y(e) {
      var t = e.children,
        n = e.scrollRootElement,
        r = n === void 0 ? null : n,
        o = f(null),
        a = o[0],
        i = o[1],
        l = f(!1),
        u = l[0],
        c = l[1],
        m = _(null),
        g = d(function (e) {
          i(e);
        }, []),
        y = d(function (e) {
          c(e);
        }, []),
        C = d(function (e) {
          m.current = e;
        }, []),
        b = d(function () {
          m.current == null || m.current();
        }, []),
        v = _({ addMore: null, nullState: null }),
        S = d(function (e, t) {
          return (
            (v.current[e] = t),
            function () {
              v.current[e] === t && (v.current[e] = null);
            }
          );
        }, []),
        R = d(function (e) {
          return v.current[e];
        }, []),
        L = p(
          function () {
            return {
              getFocusTarget: R,
              isAddMediaBusy: u,
              isCreativeCtaVisible: a,
              openMediaPicker: b,
              registerFocusTarget: S,
              registerOpenMediaPicker: C,
              scrollRootElement: r,
              updateAddMediaBusy: y,
              updateCreativeCtaVisible: g,
            };
          },
          [R, u, a, b, S, C, r, y, g],
        );
      return s.jsx(h.Provider, { value: L, children: t });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return m(h);
    }
    ((l.WAWebBizAdCreationAddMediaAffordanceProvider = y),
      (l.useWAWebBizAdCreationAddMediaAffordance = C));
  },
  98,
);

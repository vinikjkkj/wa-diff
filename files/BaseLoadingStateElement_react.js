__d(
  "BaseLoadingStateElement.react",
  [
    "getLoadingStateAriaProps",
    "mergeRefs",
    "react",
    "stylex",
    "useCometLoadingStateTracker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useContext,
      m = c.useMemo,
      p = { hideOutline: { outline: "x1a2a7pz", $$css: !0 } },
      _ = u.createContext(!1);
    function f(t) {
      var n = t.children,
        o = t.disableLoadingStateTracker,
        a = o === void 0 ? !1 : o,
        i = t.isDecorative,
        l = i === void 0 ? !1 : i,
        s = t.isFocusTarget,
        c = t.progress,
        f = t.ref,
        g = t.testid,
        h = t.xstyle,
        y = t["aria-label"],
        C = t["aria-labelledby"],
        b = d(_),
        v = r("useCometLoadingStateTracker")(),
        S = v[0],
        R = v[1],
        L = m(
          function () {
            return a ? f : r("mergeRefs")(f, R);
          },
          [a, f, R],
        );
      if (b)
        return u.jsx(
          "div",
          babelHelpers.extends({}, (e || (e = r("stylex"))).props(h), {
            "data-testid": void 0,
            ref: f,
            children: n,
          }),
        );
      var E = l
        ? { "aria-hidden": !0 }
        : r("getLoadingStateAriaProps")(c, { max: 100, min: 0 });
      return u.jsx(_.Provider, {
        value: !0,
        children: u.jsx(
          "div",
          babelHelpers.extends(
            {},
            a ? E : babelHelpers.extends({}, E, S),
            (e || (e = r("stylex"))).props(p.hideOutline, h),
            {
              "aria-label": y != null ? y : E["aria-label"],
              "aria-labelledby": C,
              "data-focus-target": s,
              "data-testid": void 0,
              ref: L,
              tabIndex: -1,
              children: n,
            },
          ),
        ),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);

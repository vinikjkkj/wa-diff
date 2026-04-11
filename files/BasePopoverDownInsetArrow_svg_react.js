__d(
  "BasePopoverDownInsetArrow.svg.react",
  ["XPlatReactSVG", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
        n;
      t[0] !== e.children
        ? ((n =
            e.children != null &&
            s.jsx(o("XPlatReactSVG").Defs, { children: e.children })),
          (t[0] = e.children),
          (t[1] = n))
        : (n = t[1]);
      var r;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = s.jsx(o("XPlatReactSVG").Path, {
            d: "M24.453.001c-2.791.32-5.922 1.53-7.78 3.455l-9.62 7.023c-2.45 2.54-5.78 1.645-5.78-2.487V1.983C1.273 1.089.746.32 0 0h24.453v.001Z",
          })),
          (t[2] = r))
        : (r = t[2]);
      var a;
      return (
        t[3] !== e || t[4] !== n
          ? ((a = s.jsxs(
              o("XPlatReactSVG").Svg,
              babelHelpers.extends(
                {
                  "aria-hidden": !0,
                  height: 12,
                  viewBox: "0 0 25 12",
                  width: 25,
                },
                e,
                { children: [n, r] },
              ),
            )),
            (t[3] = e),
            (t[4] = n),
            (t[5] = a))
          : (a = t[5]),
        a
      );
    }
    l.default = u;
  },
  98,
);

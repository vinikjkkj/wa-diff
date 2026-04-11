__d(
  "BasePopoverDownEdgeArrow.svg.react",
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
            d: "M21 0c-2.229.424-4.593 2.034-6.496 3.523L5.4 10.94c-2.026 2.291-5.434.62-5.4-2.648V0h21Z",
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
                  viewBox: "0 0 21 12",
                  width: 21,
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

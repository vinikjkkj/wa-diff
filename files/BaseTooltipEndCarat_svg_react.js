__d(
  "BaseTooltipEndCarat.svg.react",
  ["fbt", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = o("react-compiler-runtime").c(6),
        a = t.fillXStyle,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { transform: "scaleX(-1)" }), (n[0] = i))
        : (i = n[0]);
      var l;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = c.jsx("title", {
            children: s._(/*BTDS*/ "Tooltip Start Carat"),
          })),
          (n[1] = l))
        : (l = n[1]);
      var u;
      n[2] !== a
        ? ((u = (e || (e = r("stylex"))).props(a)), (n[2] = a), (n[3] = u))
        : (u = n[3]);
      var d;
      return (
        n[4] !== u
          ? ((d = c.jsxs("svg", {
              fill: "none",
              height: "22",
              style: i,
              viewBox: "0.5 0 8 22",
              width: "8",
              children: [
                l,
                c.jsx(
                  "path",
                  babelHelpers.extends({}, u, {
                    clipRule: "evenodd",
                    d: "M0.5 21.5C0.5 17.5 7.5 13.681 7.5 11C7.5 8.3185 0.5 4.4995 0.5 0.5L0.5 21.5Z",
                    fill: "black",
                    fillRule: "evenodd",
                  }),
                ),
              ],
            })),
            (n[4] = u),
            (n[5] = d))
          : (d = n[5]),
        d
      );
    }
    l.default = d;
  },
  226,
);

__d(
  "BaseTooltipBelowCarat.svg.react",
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
        ? ((i = { transform: "scaleY(-1)" }), (n[0] = i))
        : (i = n[0]);
      var l;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = c.jsx("title", {
            id: "tooltipCaratTitle",
            children: s._(/*BTDS*/ "Tooltip Below Carat"),
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
              height: "8",
              style: i,
              title: "tooltip carat",
              viewBox: "0 0 21 8",
              width: "21",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                l,
                c.jsx(
                  "path",
                  babelHelpers.extends({}, u, {
                    clipRule: "evenodd",
                    d: "M0 0C4 0 7.819 8 10.5 8C13.1815 8 17.0005 0 21 0H0Z",
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

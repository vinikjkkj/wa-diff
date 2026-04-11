__d(
  "BaseTooltipAboveCarat.svg.react",
  ["fbt", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = o("react-compiler-runtime").c(5),
        a = t.fillXStyle,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = c.jsx("title", {
            id: "tooltipCaratTitle",
            children: s._(/*BTDS*/ "Tooltip above carat"),
          })),
          (n[0] = i))
        : (i = n[0]);
      var l;
      n[1] !== a
        ? ((l = (e || (e = r("stylex"))).props(a)), (n[1] = a), (n[2] = l))
        : (l = n[2]);
      var u;
      return (
        n[3] !== l
          ? ((u = c.jsxs("svg", {
              fill: "none",
              height: "8",
              title: "tooltip carat",
              viewBox: "0 0.3 21 8",
              width: "21",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                i,
                c.jsx(
                  "path",
                  babelHelpers.extends({}, l, {
                    clipRule: "evenodd",
                    d: "M0 0C4 0 7.819 8 10.5 8C13.1815 8 17.0005 0 21 0H0Z",
                    fill: "black",
                    fillRule: "evenodd",
                  }),
                ),
              ],
            })),
            (n[3] = l),
            (n[4] = u))
          : (u = n[4]),
        u
      );
    }
    l.default = d;
  },
  226,
);

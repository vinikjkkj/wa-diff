__d(
  "BaseTooltipStartCarat.svg.react",
  ["fbt", "react", "react-compiler-runtime", "stylex", "vulture"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = o("react-compiler-runtime").c(5),
        a = t.fillXStyle;
      r("vulture")("kbn3p0th4S4teuiwIxz6JbyEEBc=");
      var i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = c.jsx("title", {
            children: s._(/*BTDS*/ "Tooltip End Carat"),
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
              height: "22",
              viewBox: "0.7 0 8 22",
              width: "8",
              children: [
                i,
                c.jsx(
                  "path",
                  babelHelpers.extends({}, l, {
                    clipRule: "evenodd",
                    d: "M0.5 21.5C0.5 17.5 7.5 13.681 7.5 11C7.5 8.3185 0.5 4.4995 0.5 0.5L0.5 21.5Z",
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

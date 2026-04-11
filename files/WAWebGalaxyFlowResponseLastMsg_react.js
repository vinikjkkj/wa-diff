__d(
  "WAWebGalaxyFlowResponseLastMsg.react",
  [
    "WAWebGalaxyFlowResponseUtils",
    "WDSIconIcDescription.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        icon: {
          display: "x78zum5",
          verticalAlign: "x16dsc37",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.msg;
      if (o("WAWebGalaxyFlowResponseUtils").isGalaxyFlowsResponseBubble(n)) {
        var a;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = { className: "x78zum5 x1q0g3np x16q7b9a" }), (t[0] = a))
          : (a = t[0]);
        var i;
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = s.jsx(
                "div",
                babelHelpers.extends({}, a, {
                  children: s.jsx(r("WDSIconIcDescription.react"), {
                    xstyle: u.icon,
                    width: 18,
                    height: 18,
                    viewBox: { height: 24, width: 24, x: 0, y: 0 },
                  }),
                }),
              )),
              (t[1] = i))
            : (i = t[1]),
          i
        );
      }
      return null;
    }
    l.default = c;
  },
  98,
);

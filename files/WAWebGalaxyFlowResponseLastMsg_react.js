__d(
  "WAWebGalaxyFlowResponseLastMsg.react",
  ["WAWebGalaxyFlowResponseUtils", "WDSIconIcDescription.react", "react"],
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
      var t = e.msg;
      return o("WAWebGalaxyFlowResponseUtils").isGalaxyFlowsResponseBubble(t)
        ? s.jsx("div", {
            className: "x78zum5 x1q0g3np x16q7b9a",
            children: s.jsx(r("WDSIconIcDescription.react"), {
              xstyle: u.icon,
              width: 18,
              height: 18,
              viewBox: { height: 24, width: 24, x: 0, y: 0 },
            }),
          })
        : null;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);

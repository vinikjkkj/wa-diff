__d(
  "WAWebPollBubbleSettingLabel",
  ["WAWebFlex.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        container: {
          flex: "x3psx0u",
          paddingTop: "x1iorvi4",
          paddingBottom: "xjkvuk6",
          $$css: !0,
        },
      };
    function c(e) {
      var t = e.icon,
        n = e.isEmphasized,
        r = n === void 0 ? !1 : n,
        a = e.label,
        i = e.testid,
        l = e.trailingSeparator;
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        xstyle: u.container,
        testid: i,
        children: [
          t,
          s.jsxs(
            "span",
            babelHelpers.extends(
              {},
              {
                0: { className: "x1pg5gke x1d3mw78 x1bvqhpb xaso8d8" },
                1: { className: "x1pg5gke x1d3mw78 x30a034 xaso8d8" },
              }[!!r << 0],
              {
                children: [
                  a,
                  l
                    ? s.jsx("span", {
                        className: "x135b78x x11lfxj5",
                        children: "\xB7",
                      })
                    : null,
                ],
              },
            ),
          ),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);

__d(
  "WAWebStatusSubtitleAttribution.react",
  [
    "WAWebChevronIcon.react",
    "WAWebClickable.react",
    "WAWebFlex.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        marginEnd2: {
          marginInlineEnd: "x16q7b9a",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        truncateText: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        centerIcon: { display: "x78zum5", alignItems: "x6s0dn4", $$css: !0 },
      };
    function c(e) {
      var t,
        n = e.children,
        a = e.enableChevronIcon,
        i = e.icon,
        l = e.onClick;
      return s.jsxs((t = o("WAWebFlex.react")).FlexRow, {
        align: "center",
        justify: "start",
        className: "xeuugli",
        children: [
          s.jsx(t.FlexItem, {
            className: "x1wbi8v6 x7g7pl8",
            children: "\u2022",
          }),
          s.jsx(o("WAWebClickable.react").Clickable, {
            onClick: l,
            className: "xeuugli",
            children: s.jsxs(t.FlexRow, {
              align: "center",
              className: "xeuugli",
              children: [
                s.jsx(t.FlexItem, { xstyle: u.marginEnd2, children: i }),
                s.jsx(t.FlexItem, {
                  xstyle: u.truncateText,
                  testid: void 0,
                  children: s.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "persistentAlwaysWhite",
                    maxLines: 1,
                    children: n,
                  }),
                }),
                a &&
                  s.jsx(o("WAWebFlex.react").FlexItem, {
                    shrink: 0,
                    xstyle: u.centerIcon,
                    children: s.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                      directional: !0,
                      height: 18,
                      width: 18,
                    }),
                  }),
              ],
            }),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);

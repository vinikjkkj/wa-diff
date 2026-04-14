__d(
  "WAWebNewsletterWamoSubMessageTypeContextMenuItem.react",
  ["WAWebDropdownItem.react", "WAWebFlex.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        container: { cursor: "x1ypdohk", height: "xnnlda6", $$css: !0 },
        icon: { minWidth: "xt4ypqs", $$css: !0 },
        marginStart8: { marginInlineStart: "x150mmf0", $$css: !0 },
        marginEnd32: { marginInlineEnd: "x5jkbfu", $$css: !0 },
        marginStart12: { marginInlineStart: "x1uvdrpn", $$css: !0 },
        marginVert12: {
          marginTop: "x1de0gy",
          marginBottom: "xcytdqz",
          $$css: !0,
        },
        marginEnd24: { marginInlineEnd: "x7vsco6", $$css: !0 },
        paddingVert4: {
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          $$css: !0,
        },
      };
    function c(e) {
      var t = e.action,
        n = e.description,
        r = e.icon,
        a = e.testid,
        i = e.text;
      return s.jsx("div", {
        className: "x150mmf0 xqf2s3x",
        children: s.jsx(o("WAWebDropdownItem.react").DropdownItem, {
          testid: void 0,
          action: t,
          type: "newsletter-wamo-message-type",
          children: s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: [
              u.container,
              u.marginStart8,
              u.marginEnd32,
              u.paddingVert4,
            ],
            children: [
              s.jsx(o("WAWebFlex.react").FlexRow, {
                justify: "center",
                xstyle: [
                  u.icon,
                  u.marginStart12,
                  u.marginVert12,
                  u.marginEnd24,
                ],
                children: r,
              }),
              n != null
                ? s.jsxs(o("WAWebFlex.react").FlexColumn, {
                    children: [
                      s.jsx("span", {
                        className:
                          "x1fc57z9 x6prxxf x1iayye1 x14ug900 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
                        children: i,
                      }),
                      s.jsx("span", {
                        className:
                          "x1f6kntn x1d3mw78 xf4yft xhslqc4 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
                        children: n,
                      }),
                    ],
                  })
                : s.jsx("span", {
                    className:
                      "x1fc57z9 x6prxxf x1iayye1 x14ug900 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
                    children: i,
                  }),
            ],
          }),
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);

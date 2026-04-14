__d(
  "WAWebChatlistPanelDrawerButton.react",
  [
    "WAWebCellFrame.react",
    "WAWebFlex.react",
    "WAWebUnstyledButton.react",
    "WDSFocusStateStyles",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        wrapper: {
          flexShrink: "x2lah0s",
          marginTop: "xav9cv8",
          marginBottom: "x4tpdpg",
          marginInlineStart: "x1lziwak",
          marginInlineEnd: "x14z9mp",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
      };
    function c(e) {
      var t = e.ariaLabel,
        n = e.dataTab,
        a = e.dataTestId,
        i = e.detail,
        l = e.icon,
        c = e.onClick,
        d = e.primary,
        m = s.jsx(r("WDSText.react"), {
          type: "Body1",
          colorName: "contentDeemphasized",
          children: d,
        });
      return s.jsx(r("WAWebUnstyledButton.react"), {
        testid: void 0,
        dataTab: n,
        xstyle: [
          u.wrapper,
          o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
        ],
        onClick: c,
        "aria-label": t,
        children: s.jsx(r("WAWebCellFrame.react"), {
          role: "group",
          ariaColIndex: null,
          image: s.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            className: "x1ksvy6g x1009pqg xhslqc4",
            children: l,
          }),
          primary: m,
          detail: i,
          theme: "archive-panel",
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);

__d(
  "WAWebDesktopUpsellCallingPopover.react",
  [
    "WAWebButton.react",
    "WAWebDesktopUpsellCommonStrings",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        container: { minWidth: "x1h80ny7", $$css: !0 },
        textContainer: { maxWidth: "x1jkqq1h", $$css: !0 },
        buttonContainer: { height: "x5yr21d", $$css: !0 },
      };
    function c(e) {
      var t,
        n,
        r = e.body,
        a = e.onClick,
        i = e.title;
      return s.jsxs((t = o("WAWebFlex.react")).FlexRow, {
        xstyle: [
          u.container,
          (n = o("WAWebUISpacing")).uiPadding.horiz20,
          n.uiPadding.bottom14,
          n.uiPadding.top12,
        ],
        align: "center",
        justify: "all",
        children: [
          s.jsxs(t.FlexColumn, {
            xstyle: u.textContainer,
            children: [
              s.jsx(t.FlexItem, {
                children: s.jsx(o("WAWebText.react").WAWebTextTitle, {
                  children: i,
                }),
              }),
              s.jsx(t.FlexItem, {
                xstyle: n.uiMargin.top2,
                children: s.jsx(o("WAWebText.react").WAWebTextMuted, {
                  children: r,
                }),
              }),
            ],
          }),
          s.jsx(t.FlexColumn, {
            xstyle: u.buttonContainer,
            align: "center",
            justify: "center",
            children: s.jsx(t.FlexItem, {
              xstyle: n.uiMargin.start16,
              children: s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
                onClick: a,
                children: o(
                  "WAWebDesktopUpsellCommonStrings",
                ).getDesktopAppDownloadBtnLabel(),
              }),
            }),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);

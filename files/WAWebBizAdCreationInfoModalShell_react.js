__d(
  "WAWebBizAdCreationInfoModalShell.react",
  [
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        root: { width: "x1n2tayp", boxSizing: "x9f619", $$css: !0 },
        header: {
          paddingTop: "x1xrf6ya",
          paddingInlineEnd: "xde1mab",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x1iw51ew",
          columnGap: "x1aj3ljl",
          $$css: !0,
        },
        closeButton: { height: "xg7h5cd", width: "xeq5yr9", $$css: !0 },
        content: {
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "xl7twdi",
          paddingBottom: "xvg22vi",
          rowGap: "x1j3ira4",
          $$css: !0,
        },
      };
    function c(e) {
      var t = e.children,
        n = e.onClose,
        a = e.title,
        i = n != null ? n : o("WAWebModalManager").closeModalManager;
      return s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        type: o("WAWebModal.react").ModalTheme.Auto,
        children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "stretch",
          xstyle: u.root,
          children: [
            s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: u.header,
              children: [
                s.jsx(r("WDSButton.react"), {
                  Icon: r("WDSIconIcClose.react"),
                  variant: "borderless",
                  size: "medium",
                  onPress: i,
                  xstyle: u.closeButton,
                }),
                s.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDefault",
                  children: a,
                }),
              ],
            }),
            s.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: u.content,
              children: t,
            }),
          ],
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);

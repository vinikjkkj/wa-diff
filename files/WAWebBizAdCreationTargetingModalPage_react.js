__d(
  "WAWebBizAdCreationTargetingModalPage.react",
  [
    "WAWebConfirmPopup.react",
    "WAWebFlexBox.react",
    "WAWebModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        root: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          paddingTop: "x1xrf6ya",
          paddingBottom: "xvpt6g3",
          width: "x1czfd9k",
          height: "x1d9x2de",
          boxSizing: "x9f619",
          $$css: !0,
        },
        header: {
          flexShrink: "x2lah0s",
          marginInlineStart: "x1ho36z8",
          columnGap: "x1aj3ljl",
          paddingBottom: "xscbp6u",
          $$css: !0,
        },
      };
    function c(e) {
      var t = e.children,
        n = e.headerContent,
        r = e.xstyle,
        a = r === void 0 ? null : r;
      return s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        type: o("WAWebModal.react").ModalTheme.Auto,
        children: s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
          align: "stretch",
          xstyle: [a, u.root],
          children: [
            s.jsx(o("WAWebFlexBox.react").FlexRow, {
              xstyle: u.header,
              align: "center",
              children: n,
            }),
            t,
          ],
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);

__d(
  "WAWebIntegrityCopyInformationToClipboard.react",
  [
    "WAWebButton.react",
    "WAWebCopyToClipboard",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        header: { textAlign: "x2b8uid", lineHeight: "x1evy7pa", $$css: !0 },
      };
    function c(e) {
      var t = e.ctaLabel,
        n = e.onClick,
        r = e.testid,
        a = e.textToCopy,
        i = e.textToCopyLabel,
        l = e.toastMessage;
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            wrap: "wrap",
            margin: 12,
            paddingStart: 24,
            paddingEnd: 24,
            children: s.jsx(o("WAWebText.react").WAWebTextLarge, {
              xstyle: u.header,
              color: "primary",
              children: i,
            }),
          }),
          s.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            wrap: "wrap",
            paddingStart: 24,
            paddingEnd: 24,
            children: s.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
              testid: void 0,
              onClick: function () {
                (n == null || n(),
                  o("WAWebCopyToClipboard").copyTextToClipboard(a),
                  o("WAWebToastManager").ToastManager.open(
                    s.jsx(o("WAWebToast.react").Toast, {
                      msg: l,
                      id: o("WAWebToast.react").genId(),
                    }),
                  ));
              },
              children: t,
            }),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);

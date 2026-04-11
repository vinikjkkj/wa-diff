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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        header: { textAlign: "x2b8uid", lineHeight: "x1evy7pa", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.ctaLabel,
        r = e.onClick,
        a = e.testid,
        i = e.textToCopy,
        l = e.textToCopyLabel,
        c = e.toastMessage,
        d;
      t[0] !== l
        ? ((d = s.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            wrap: "wrap",
            margin: 12,
            paddingStart: 24,
            paddingEnd: 24,
            children: s.jsx(o("WAWebText.react").WAWebTextLarge, {
              xstyle: u.header,
              color: "primary",
              children: l,
            }),
          })),
          (t[0] = l),
          (t[1] = d))
        : (d = t[1]);
      var m;
      t[2] !== r || t[3] !== i || t[4] !== c
        ? ((m = function () {
            (r == null || r(),
              o("WAWebCopyToClipboard").copyTextToClipboard(i),
              o("WAWebToastManager").ToastManager.open(
                s.jsx(o("WAWebToast.react").Toast, {
                  msg: c,
                  id: o("WAWebToast.react").genId(),
                }),
              ));
          }),
          (t[2] = r),
          (t[3] = i),
          (t[4] = c),
          (t[5] = m))
        : (m = t[5]);
      var p;
      t[6] !== n || t[7] !== m || t[8] !== a
        ? ((p = s.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            wrap: "wrap",
            paddingStart: 24,
            paddingEnd: 24,
            children: s.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
              testid: void 0,
              onClick: m,
              children: n,
            }),
          })),
          (t[6] = n),
          (t[7] = m),
          (t[8] = a),
          (t[9] = p))
        : (p = t[9]);
      var _;
      return (
        t[10] !== d || t[11] !== p
          ? ((_ = s.jsxs(s.Fragment, { children: [d, p] })),
            (t[10] = d),
            (t[11] = p),
            (t[12] = _))
          : (_ = t[12]),
        _
      );
    }
    l.default = c;
  },
  98,
);

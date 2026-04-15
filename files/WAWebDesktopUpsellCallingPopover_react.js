__d(
  "WAWebDesktopUpsellCallingPopover.react",
  [
    "WAWebButton.react",
    "WAWebDesktopUpsellCommonStrings",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(14),
        n = e.body,
        r = e.onClick,
        a = e.title,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            u.container,
            o("WAWebUISpacing").uiPadding.horiz20,
            o("WAWebUISpacing").uiPadding.bottom14,
            o("WAWebUISpacing").uiPadding.top12,
          ]),
          (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== a
        ? ((l = s.jsx(o("WAWebFlex.react").FlexItem, {
            children: s.jsx(o("WAWebText.react").WAWebTextTitle, {
              children: a,
            }),
          })),
          (t[1] = a),
          (t[2] = l))
        : (l = t[2]);
      var c;
      t[3] !== n
        ? ((c = s.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: o("WAWebUISpacing").uiMargin.top2,
            children: s.jsx(o("WAWebText.react").WAWebTextMuted, {
              children: n,
            }),
          })),
          (t[3] = n),
          (t[4] = c))
        : (c = t[4]);
      var d;
      t[5] !== l || t[6] !== c
        ? ((d = s.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: u.textContainer,
            children: [l, c],
          })),
          (t[5] = l),
          (t[6] = c),
          (t[7] = d))
        : (d = t[7]);
      var m;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = o(
            "WAWebDesktopUpsellCommonStrings",
          ).getDesktopAppDownloadBtnLabel()),
          (t[8] = m))
        : (m = t[8]);
      var p;
      t[9] !== r
        ? ((p = s.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: u.buttonContainer,
            align: "center",
            justify: "center",
            children: s.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: o("WAWebUISpacing").uiMargin.start16,
              children: s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
                onClick: r,
                children: m,
              }),
            }),
          })),
          (t[9] = r),
          (t[10] = p))
        : (p = t[10]);
      var _;
      return (
        t[11] !== d || t[12] !== p
          ? ((_ = s.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: i,
              align: "center",
              justify: "all",
              children: [d, p],
            })),
            (t[11] = d),
            (t[12] = p),
            (t[13] = _))
          : (_ = t[13]),
        _
      );
    }
    l.default = c;
  },
  98,
);

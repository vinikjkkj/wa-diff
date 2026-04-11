__d(
  "WAWebBotFeatureNotAvailable.react",
  [
    "fbt",
    "WAWebBox.react",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWdsPictoAiIcon.react",
    "react",
    "react-compiler-runtime",
    "useWAWebFocusOnMount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { headerText: { textAlign: "x2b8uid", $$css: !0 } };
    function d() {
      var e = o("react-compiler-runtime").c(6),
        t = r("useWAWebFocusOnMount")(),
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsx(o("WAWebWdsPictoAiIcon.react").WdsPictoAiIcon, {
              height: 88,
            }),
          })),
          (e[0] = n))
        : (n = e[0]);
      var a = n,
        i;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "AI chats aren't available for you yet")),
          (e[1] = i))
        : (i = e[1]);
      var l = i,
        d;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = [
            o("WAWebUISpacing").uiMargin.vertAuto,
            o("WAWebUISpacing").uiPadding.bottom16,
          ]),
          (e[2] = d))
        : (d = e[2]);
      var m;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            xstyle: d,
            children: [
              a,
              u.jsx(r("WAWebBox.react"), {
                xstyle: [
                  c.headerText,
                  o("WAWebUISpacing").uiMargin.horiz8,
                  o("WAWebUISpacing").uiMargin.top16,
                  o("WAWebUISpacing").uiMargin.bottom8,
                ],
                children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
                  weight: "bold",
                  children: l,
                }),
              }),
            ],
          })),
          (e[3] = m))
        : (m = e[3]);
      var p;
      return (
        e[4] !== t
          ? ((p = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: o("WAWebModalManager").closeModalManager,
              type: o("WAWebModal.react").ModalTheme.Promote,
              ref: t,
              children: m,
            })),
            (e[4] = t),
            (e[5] = p))
          : (p = e[5]),
        p
      );
    }
    l.default = d;
  },
  226,
);

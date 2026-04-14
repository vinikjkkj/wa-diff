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
    "useWAWebFocusOnMount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { headerText: { textAlign: "x2b8uid", $$css: !0 } };
    function d() {
      var e,
        t = r("useWAWebFocusOnMount")(),
        n = u.jsx(o("WAWebFlex.react").FlexItem, {
          children: u.jsx(o("WAWebWdsPictoAiIcon.react").WdsPictoAiIcon, {
            height: 88,
          }),
        }),
        a = s._(/*BTDS*/ "AI chats aren't available for you yet");
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: o("WAWebModalManager").closeModalManager,
        type: o("WAWebModal.react").ModalTheme.Promote,
        ref: t,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          xstyle: [
            (e = o("WAWebUISpacing")).uiMargin.vertAuto,
            e.uiPadding.bottom16,
          ],
          children: [
            n,
            u.jsx(r("WAWebBox.react"), {
              xstyle: [
                c.headerText,
                e.uiMargin.horiz8,
                e.uiMargin.top16,
                e.uiMargin.bottom8,
              ],
              children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
                weight: "bold",
                children: a,
              }),
            }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);

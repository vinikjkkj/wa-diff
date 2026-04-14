__d(
  "WAWebVoipBetaCallingUpsellPopover.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WDSButton.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        container: { minWidth: "x1h80ny7", $$css: !0 },
        textContainer: { maxWidth: "x1jkqq1h", $$css: !0 },
        buttonContainer: { height: "x5yr21d", $$css: !0 },
      };
    function d(e) {
      var t,
        n,
        a = e.onClick;
      return u.jsxs((t = o("WAWebFlex.react")).FlexRow, {
        xstyle: [
          c.container,
          (n = o("WAWebUISpacing")).uiPadding.horiz20,
          n.uiPadding.bottom14,
          n.uiPadding.top12,
        ],
        align: "center",
        justify: "all",
        children: [
          u.jsxs(t.FlexColumn, {
            xstyle: c.textContainer,
            children: [
              u.jsx(t.FlexItem, {
                children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                  children: s._(/*BTDS*/ "Try new one-on-one web calling"),
                }),
              }),
              u.jsx(t.FlexItem, {
                xstyle: n.uiMargin.top2,
                children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                  children: s._(
                    /*BTDS*/ "Join the WhatsApp Beta program to start making calls on web. Note: testing version may be unstable",
                  ),
                }),
              }),
            ],
          }),
          u.jsx(t.FlexColumn, {
            xstyle: c.buttonContainer,
            align: "center",
            justify: "center",
            children: u.jsx(t.FlexItem, {
              xstyle: n.uiMargin.start16,
              children: u.jsx(r("WDSButton.react"), {
                variant: "filled",
                size: "medium",
                label: s._(/*BTDS*/ "Switch to beta"),
                onPress: a,
              }),
            }),
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);

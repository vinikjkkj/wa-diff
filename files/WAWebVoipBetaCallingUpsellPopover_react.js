__d(
  "WAWebVoipBetaCallingUpsellPopover.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WDSButton.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(6),
        n = e.onClick,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            c.container,
            o("WAWebUISpacing").uiPadding.horiz20,
            o("WAWebUISpacing").uiPadding.bottom14,
            o("WAWebUISpacing").uiPadding.top12,
          ]),
          (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
              children: s._(/*BTDS*/ "Try new one-on-one web calling"),
            }),
          })),
          (t[1] = i))
        : (i = t[1]);
      var l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: c.textContainer,
            children: [
              i,
              u.jsx(o("WAWebFlex.react").FlexItem, {
                xstyle: o("WAWebUISpacing").uiMargin.top2,
                children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                  children: s._(
                    /*BTDS*/ "Join the WhatsApp Beta program to start making calls on web. Note: testing version may be unstable",
                  ),
                }),
              }),
            ],
          })),
          (t[2] = l))
        : (l = t[2]);
      var d;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Switch to beta")), (t[3] = d))
        : (d = t[3]);
      var m;
      return (
        t[4] !== n
          ? ((m = u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: a,
              align: "center",
              justify: "all",
              children: [
                l,
                u.jsx(o("WAWebFlex.react").FlexColumn, {
                  xstyle: c.buttonContainer,
                  align: "center",
                  justify: "center",
                  children: u.jsx(o("WAWebFlex.react").FlexItem, {
                    xstyle: o("WAWebUISpacing").uiMargin.start16,
                    children: u.jsx(r("WDSButton.react"), {
                      variant: "filled",
                      size: "medium",
                      label: d,
                      onPress: n,
                    }),
                  }),
                }),
              ],
            })),
            (t[4] = n),
            (t[5] = m))
          : (m = t[5]),
        m
      );
    }
    l.default = d;
  },
  226,
);

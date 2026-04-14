__d(
  "WAWebBizAdCreationErrorModal.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WDSButton.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        container: {
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          rowGap: "x1j3ira4",
          $$css: !0,
        },
        headerText: { textAlign: "x2b8uid", alignSelf: "xkh2ocl", $$css: !0 },
      };
    function d() {
      return u.jsx(r("WDSButton.react"), {
        testid: void 0,
        label: s._(/*BTDS*/ "Try again"),
        variant: "filled",
        size: "medium",
        onPress: o("WAWebModalManager").closeModalManager,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.errorMessage,
        n = s._(/*BTDS*/ "Something went wrong"),
        a =
          t != null
            ? t
            : s._(/*BTDS*/ "We couldn't create your ad. Please try again.");
      return u.jsx(o("WAWebModal.react").Modal, {
        actions: u.jsx(d, {}),
        type: o("WAWebModal.react").ModalTheme.BizToolsAdCreationSuccess,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          xstyle: c.container,
          children: [
            u.jsx(r("WDSText.react"), {
              type: "Headline1",
              colorName: "contentDefault",
              xstyle: c.headerText,
              children: n,
            }),
            u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              textAlign: "center",
              children: a,
            }),
          ],
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);

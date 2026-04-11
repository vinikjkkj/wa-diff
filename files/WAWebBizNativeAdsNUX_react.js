__d(
  "WAWebBizNativeAdsNUX.react",
  [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebWdsIllAdsWaIcon.react",
    "WDSButton.react",
    "WDSIconIcPayments.react",
    "WDSIconIcSecurity.react",
    "WDSIconIcThumbUp.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        xstyle: d.buttonContainer,
        children: [
          u.jsx(r("WDSButton.react"), {
            testid: void 0,
            label: s._(/*BTDS*/ "Back"),
            variant: "outline",
            size: "medium",
            onPress: e,
          }),
          u.jsx(r("WDSButton.react"), {
            testid: void 0,
            label: r("WAWebFbtCommon")("OK"),
            variant: "filled",
            size: "medium",
            onPress: t,
          }),
        ],
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = {
      container: {
        alignItems: "x6s0dn4",
        justifyContent: "xl56j7k",
        $$css: !0,
      },
      illustrationContainer: {
        paddingTop: "x1h678fw",
        paddingBottom: "x12xbjc7",
        alignSelf: "xkh2ocl",
        alignItems: "x6s0dn4",
        $$css: !0,
      },
      headerText: { textAlign: "x2b8uid", alignSelf: "xkh2ocl", $$css: !0 },
      contentContainer: { rowGap: "x1j3ira4", $$css: !0 },
      bulletContainer: {
        alignSelf: "xkh2ocl",
        alignItems: "x7a106z",
        rowGap: "x1qvou4u",
        $$css: !0,
      },
      bulletRow: {
        paddingTop: "x1tiyuxx",
        paddingBottom: "x1nbhmlj",
        paddingInlineStart: "x12w63v0",
        columnGap: "xrdqr27",
        alignItems: "x6s0dn4",
        $$css: !0,
      },
      bulletIcon: { color: "xhslqc4", $$css: !0 },
      buttonContainer: {
        columnGap: "x1aj3ljl",
        alignSelf: "xkh2ocl",
        justifyContent: "x13a6bvl",
        $$css: !0,
      },
    };
    function m(e) {
      var t,
        n,
        a = e.onBack,
        i = e.onOK,
        l = e.onOverlayClick;
      return u.jsx(o("WAWebModal.react").Modal, {
        actions: c(a, i),
        onOverlayClick: l,
        type: o("WAWebModal.react").ModalTheme.BizToolsAdCreationNux,
        children: u.jsxs((n = o("WAWebFlex.react")).FlexColumn, {
          xstyle: d.container,
          children: [
            u.jsx(n.FlexColumn, {
              xstyle: d.illustrationContainer,
              children: u.jsx(o("WAWebWdsIllAdsWaIcon.react").WdsIllAdsWaIcon, {
                width: 180,
                height: 120,
              }),
            }),
            u.jsxs(n.FlexColumn, {
              xstyle: d.contentContainer,
              children: [
                u.jsx((t = r("WDSText.react")), {
                  type: "Headline1",
                  colorName: "contentDefault",
                  xstyle: d.headerText,
                  children: s._(
                    /*BTDS*/ "Bring in new customers with Facebook & Instagram ads",
                  ),
                }),
                u.jsx(t, {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  textAlign: "center",
                  children: s._(
                    /*BTDS*/ "Easily create ads that show on Facebook & Instagram and lead people to WhatsApp chats with you.",
                  ),
                }),
                u.jsxs(n.FlexColumn, {
                  xstyle: d.bulletContainer,
                  children: [
                    u.jsxs(n.FlexRow, {
                      xstyle: d.bulletRow,
                      children: [
                        u.jsx(r("WDSIconIcThumbUp.react"), {
                          height: 24,
                          width: 24,
                          iconXstyle: d.bulletIcon,
                        }),
                        u.jsx(t, {
                          type: "Body1",
                          colorName: "contentDefault",
                          children: s._(/*BTDS*/ "Reach people locally"),
                        }),
                      ],
                    }),
                    u.jsxs(n.FlexRow, {
                      xstyle: d.bulletRow,
                      children: [
                        u.jsx(r("WDSIconIcPayments.react"), {
                          height: 24,
                          width: 24,
                          iconXstyle: d.bulletIcon,
                        }),
                        u.jsx(t, {
                          type: "Body1",
                          colorName: "contentDefault",
                          children: s._(/*BTDS*/ "Control your ad budget"),
                        }),
                      ],
                    }),
                    u.jsxs(n.FlexRow, {
                      xstyle: d.bulletRow,
                      children: [
                        u.jsx(r("WDSIconIcSecurity.react"), {
                          height: 24,
                          width: 24,
                          iconXstyle: d.bulletIcon,
                        }),
                        u.jsx(t, {
                          type: "Body1",
                          colorName: "contentDefault",
                          children: s._(/*BTDS*/ "Pause or stop ads anytime"),
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsx(t, {
                  type: "Body3",
                  colorName: "contentDeemphasized",
                  textAlign: "center",
                  children: (function () {
                    var e = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o(
                        "WAWebFaqUrl",
                      ).getSharingBusinessInfoForAdsFaqUrl(),
                      children: r("WAWebFbtCommon")("Learn more"),
                    });
                    return s._(
                      /*BTDS*/ "Your business name and photo will be shared with Meta in order to create your ad. {link to learn more}",
                      [s._param("link to learn more", e)],
                    );
                  })(),
                }),
              ],
            }),
          ],
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);

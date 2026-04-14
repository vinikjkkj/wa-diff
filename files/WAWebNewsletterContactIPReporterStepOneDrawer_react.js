__d(
  "WAWebNewsletterContactIPReporterStepOneDrawer.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEnforcementActionLogging",
    "WAWebFlex.react",
    "WAWebNewsletterIntegrityDrawerUiComponents.react",
    "WAWebText.react",
    "WAWebWamEnumInteractionSurface",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useEffect,
      m = {
        header: { textAlign: "x2b8uid", lineHeight: "x1evy7pa", $$css: !0 },
      };
    function p(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.onBack,
        l = a.onClickGetReporterDetails;
      d(function () {
        r("WAWebEnforcementActionLogging").setSurface(
          o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
            .CONTACT_REPORTER_SCREEN_1,
        );
      }, []);
      var u = s._(/*BTDS*/ "How to email the reporter"),
        p = s._(
          /*BTDS*/ "You can email the reporter to resolve the issue directly with them. If the reporter contacts us, your content will be restored on WhatsApp.",
        );
      return c.jsxs(r("WAWebDrawer.react"), {
        theme: "gallery",
        ref: n,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "newsletter-ip-reporter-step-1",
        },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterContactIPReporterDrawerTitle(),
            onBack: i,
            testid: void 0,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsxs(r("WAWebDrawerSection.react"), {
              theme: "full-height",
              animation: !1,
              children: [
                c.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "center",
                  wrap: "wrap",
                  margin: 24,
                  testid: void 0,
                  paddingStart: 24,
                  paddingEnd: 24,
                  children: [
                    c.jsx(o("WAWebText.react").WAWebTextLarge, {
                      xstyle: m.header,
                      weight: "medium",
                      color: "primary",
                      children: u,
                    }),
                    c.jsx(o("WAWebText.react").WAWebTextMuted, {
                      xstyle: m.header,
                      paddingTop: 12,
                      children: p,
                    }),
                  ],
                }),
                c.jsx(o("WAWebFlex.react").FlexColumn, {
                  align: "center",
                  justify: "center",
                  paddingStart: 24,
                  paddingEnd: 24,
                  children: c.jsx(
                    o("WAWebNewsletterIntegrityDrawerUiComponents.react")
                      .DSBList,
                    { points: _() },
                  ),
                }),
                c.jsx(o("WAWebFlex.react").FlexColumn, {
                  paddingStart: 24,
                  paddingEnd: 24,
                  margin: 24,
                  align: "center",
                  justify: "center",
                  children: c.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
                    onClick: l,
                    testid: void 0,
                    children: s._(/*BTDS*/ "Get report details"),
                  }),
                }),
              ],
            }),
          }),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return [
        {
          testid: "newsletter-contact-ip-reporter-flow-step1-bulletpoint-1",
          text: function () {
            return s._(/*BTDS*/ "1. Include your report number");
          },
          subtext: function () {
            return s._(
              /*BTDS*/ "Copy the report number and include it in your email to the reporter.",
            );
          },
        },
        {
          testid: "newsletter-contact-ip-reporter-flow-step1-bulletpoint-2",
          text: function () {
            return s._(/*BTDS*/ "2. Explain the reason");
          },
          subtext: function () {
            return s._(
              /*BTDS*/ "Explain to the reporter why you think your content does not use their intellectual property in an unlawful way.",
            );
          },
        },
        {
          testid: "newsletter-contact-ip-reporter-flow-step1-bulletpoint-3",
          text: function () {
            return s._(/*BTDS*/ "3. Inform them of next steps");
          },
          subtext: function () {
            return s._(
              /*BTDS*/ "If they agree with you, they should follow the instructions in the email WhatsApp sent after they submitted their report.",
            );
          },
        },
      ];
    }
    l.default = p;
  },
  226,
);

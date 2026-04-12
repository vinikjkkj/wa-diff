__d(
  "WAWebNewsletterContactIPReporterStepTwoDrawer.react",
  [
    "fbt",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebContactReporterInformation",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEnforcementActionLogging",
    "WAWebFlex.react",
    "WAWebIntegrityCopyInformationToClipboard.react",
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
        i = a.enforcementIpData,
        l = a.onBack;
      d(function () {
        r("WAWebEnforcementActionLogging").setSurface(
          o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
            .CONTACT_REPORTER_SCREEN_2,
        );
      }, []);
      var u = s._(/*BTDS*/ "Report details"),
        p = s._(
          /*BTDS*/ "Include these details in your email to the reporter.",
        );
      return c.jsxs(r("WAWebDrawer.react"), {
        theme: "gallery",
        ref: n,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "newsletter-contact-ip-reporter-step2",
        },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterContactIPReporterDrawerTitle(),
            onBack: l,
            testid: void 0,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsxs(r("WAWebDrawerSection.react"), {
              theme: "full-height",
              animation: !1,
              children: [
                c.jsxs(o("WAWebFlex.react").FlexColumn, {
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
                o("WAWebContactReporterInformation")
                  .getReporterDetails(i)
                  .map(function (e, t) {
                    return c.jsxs(
                      "div",
                      {
                        className: "x9u28bd x14mdic9",
                        children: [
                          c.jsx(o("WAWebFlex.react").FlexRow, {
                            align: "center",
                            justify: "center",
                            wrap: "wrap",
                            margin: 8,
                            paddingStart: 24,
                            paddingEnd: 24,
                            children: c.jsx(
                              o("WAWebText.react").WAWebTextMuted,
                              {
                                xstyle: m.header,
                                paddingTop: 12,
                                children: e.headerText,
                              },
                            ),
                          }),
                          c.jsx(
                            r("WAWebIntegrityCopyInformationToClipboard.react"),
                            {
                              onClick: e.onClick,
                              ctaLabel: e.ctaLabel,
                              textToCopyLabel: e.textToCopyLabel,
                              textToCopy: e.textToCopy,
                              toastMessage: e.toastMessage,
                              testid: void 0,
                            },
                          ),
                        ],
                      },
                      t,
                    );
                  }),
              ],
            }),
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);

__d(
  "WAWebNewsletterDSBFlowStepThreeDrawer.react",
  [
    "fbt",
    "WAWebCommonNewsletterIntegrityStrings",
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
        i = a.entityId,
        l = a.onBack;
      return (
        d(function () {
          r("WAWebEnforcementActionLogging").setSurface(
            o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
              .DSB_FLOW_SCREEN_3,
          );
        }, []),
        c.jsxs(r("WAWebDrawer.react"), {
          theme: "gallery",
          ref: n,
          testid: void 0,
          tsNavigationData: {
            surface: "unknown",
            viewName: "newsletter-dsb-step-3",
          },
          children: [
            c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getNewsletterDSBDrawerTitle(),
              onBack: l,
              testid: void 0,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            }),
            c.jsx(r("WAWebDrawerBody.react"), {
              children: c.jsxs(r("WAWebDrawerSection.react"), {
                animation: !1,
                theme: "full-height",
                children: [
                  c.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    justify: "center",
                    wrap: "wrap",
                    margin: 24,
                    paddingStart: 24,
                    paddingEnd: 24,
                    children: [
                      c.jsx(o("WAWebText.react").WAWebTextLarge, {
                        xstyle: m.header,
                        weight: "medium",
                        color: "primary",
                        children: s._(/*BTDS*/ "Your reference number"),
                      }),
                      c.jsx(o("WAWebText.react").WAWebTextMuted, {
                        xstyle: m.header,
                        paddingTop: 12,
                        children: s._(
                          /*BTDS*/ "Only share your reference number with a certified dispute settlement body.",
                        ),
                      }),
                    ],
                  }),
                  c.jsx(r("WAWebIntegrityCopyInformationToClipboard.react"), {
                    onClick: _,
                    ctaLabel: s._(/*BTDS*/ "Copy reference number"),
                    textToCopyLabel: s._(/*BTDS*/ "{entityId}", [
                      s._param("entityId", i),
                    ]),
                    textToCopy: i,
                    toastMessage: s._(/*BTDS*/ "Reference number copied"),
                    testid: void 0,
                  }),
                ],
              }),
            }),
          ],
        })
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      r("WAWebEnforcementActionLogging").logCopyReferenceNumberClick();
    }
    l.default = p;
  },
  226,
);

__d(
  "WAWebNewsletterDSBFlowStepTwoDrawer.react",
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
    "WAWebGetDsbInfoAction",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterIntegrityDrawerUiComponents.react",
    "WAWebNewsletterIntegrityUtils",
    "WAWebText.react",
    "WAWebWamEnumInteractionSurface",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState,
      _ = {
        header: { textAlign: "x2b8uid", lineHeight: "x1evy7pa", $$css: !0 },
      };
    function f(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.entityId,
        u = i.onBack,
        d = i.onClickGetReferenceNumber,
        f = p(!1),
        h = f[0],
        y = f[1];
      m(function () {
        r("WAWebEnforcementActionLogging").setSurface(
          o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
            .DSB_FLOW_SCREEN_2,
        );
      }, []);
      var C = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !o("WAWebNewsletterGatingUtils").isDSA21ChannelReportingEnabled()
          ) {
            d(l);
            return;
          }
          y(!0);
          try {
            var e = yield o("WAWebGetDsbInfoAction").getDsbInfoAction(l);
            d(e);
          } catch (e) {
            o(
              "WAWebNewsletterIntegrityUtils",
            ).showDsbReferenceNumberFailureToast();
          } finally {
            y(!1);
          }
        });
        return function () {
          return e.apply(this, arguments);
        };
      })();
      return c.jsxs(r("WAWebDrawer.react"), {
        theme: "gallery",
        ref: a,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "newsletter-dsb-step-2",
        },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterDSBDrawerTitle(),
            onBack: u,
            testid: void 0,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "full-height",
              children: [
                c.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "center",
                  wrap: "wrap",
                  margin: 24,
                  paddingStart: 24,
                  paddingEnd: 24,
                  children: c.jsx(o("WAWebText.react").WAWebTextLarge, {
                    xstyle: _.header,
                    testid: void 0,
                    weight: "medium",
                    color: "primary",
                    children: s._(/*BTDS*/ "How to submit a dispute"),
                  }),
                }),
                c.jsx(o("WAWebFlex.react").FlexColumn, {
                  align: "center",
                  justify: "center",
                  paddingStart: 24,
                  paddingEnd: 24,
                  children: c.jsx(
                    o("WAWebNewsletterIntegrityDrawerUiComponents.react")
                      .DSBList,
                    { points: g() },
                  ),
                }),
                c.jsx(o("WAWebFlex.react").FlexColumn, {
                  paddingStart: 24,
                  paddingEnd: 24,
                  margin: 24,
                  align: "center",
                  justify: "center",
                  children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                    xstyle: _.header,
                    paddingTop: 12,
                    testid: void 0,
                    children: s._(
                      /*BTDS*/ "You agree to allow WhatsApp to send a certified dispute settlement body information it might request to resolve your dispute, if it gives us your reference number.",
                    ),
                  }),
                }),
                c.jsx(o("WAWebFlex.react").FlexColumn, {
                  paddingStart: 24,
                  paddingEnd: 24,
                  margin: 24,
                  align: "center",
                  testid: void 0,
                  justify: "center",
                  children: c.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
                    onClick: C,
                    spinner: h === !0,
                    disabled: h === !0,
                    children: s._(/*BTDS*/ "Get reference number"),
                  }),
                }),
              ],
            }),
          }),
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return [
        {
          testid: "newsletter-dsb-flow-step2-bulletpoint-1",
          text: function () {
            return s._(/*BTDS*/ "1. Choose a dispute settlement body");
          },
          subtext: function () {
            return s._(
              /*BTDS*/ "Dispute settlement bodies must be certified. To submit a dispute, go to the website of the one you choose.",
            );
          },
        },
        {
          testid: "newsletter-dsb-flow-step2-bulletpoint-2",
          text: function () {
            return s._(/*BTDS*/ "2. Provide your reference number");
          },
          subtext: function () {
            return s._(
              /*BTDS*/ "You can get a reference number from WhatsApp to give to the dispute settlement body. They can use this number to request information about WhatsApp's decision, such as the details about the decision and a copy of the relevant content.",
            );
          },
        },
        {
          testid: "newsletter-dsb-flow-step2-bulletpoint-3",
          text: function () {
            return s._(/*BTDS*/ "3. Pay a processing fee");
          },
          subtext: function () {
            return s._(
              /*BTDS*/ "The dispute settlement body might collect a fee to process your dispute.",
            );
          },
        },
      ];
    }
    l.WAWebNewsletterDSBFlowStepTwoDrawer = f;
  },
  226,
);

__d(
  "WAWebNewsletterDSBFlowStepOneDrawer.react",
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
    "WAWebIcLightbulbIcon.react",
    "WAWebNewsletterModalsUtils.react",
    "WAWebPeopleIcon.react",
    "WAWebSettingsDocumentIcon.react",
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
        secondaryColor: { color: "xhslqc4", $$css: !0 },
      };
    function p(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.onBack,
        l = a.onClickContinue;
      d(function () {
        r("WAWebEnforcementActionLogging").setSurface(
          o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
            .DSB_FLOW_SCREEN_1,
        );
      }, []);
      var u = s._(/*BTDS*/ "How dispute settlement bodies work in the EU"),
        p = s._(
          /*BTDS*/ "A dispute settlement body is not part of WhatsApp. It's an independent group of experts on online content and rules.",
        );
      return c.jsxs(r("WAWebDrawer.react"), {
        theme: "gallery",
        ref: n,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "newsletter-dsb-step-1",
        },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterDSBDrawerTitle(),
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
                      testid: void 0,
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
                    o("WAWebNewsletterModalsUtils.react").BulletPointList,
                    { bullets: _() },
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
                    children: s._(/*BTDS*/ "Next"),
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
          Icon: o("WAWebIcLightbulbIcon.react").IcLightbulbIcon,
          iconXstyle: m.secondaryColor,
          testid: "newsletter-dsb-flow-step1-bulletpoint-1",
          text: function () {
            return s._(/*BTDS*/ "Review WhatsApp's decisions");
          },
          subtext: function () {
            return s._(
              /*BTDS*/ "People in the EU can ask a dispute settlement body to look at content and account decisions.",
            );
          },
        },
        {
          Icon: o("WAWebSettingsDocumentIcon.react").SettingsDocumentIcon,
          iconXstyle: m.secondaryColor,
          testid: "newsletter-dsb-flow-step1-bulletpoint-2",
          text: function () {
            return s._(/*BTDS*/ "Give optional recommendations");
          },
          subtext: function () {
            return s._(
              /*BTDS*/ "WhatsApp is not required to follow recommendations from a dispute settlement body.",
            );
          },
        },
        {
          Icon: o("WAWebPeopleIcon.react").PeopleIcon,
          iconXstyle: m.secondaryColor,
          testid: "newsletter-dsb-flow-step1-bulletpoint-3",
          text: function () {
            return s._(/*BTDS*/ "Stay impartial and fair");
          },
          subtext: function () {
            return s._(
              /*BTDS*/ "Dispute settlement bodies are certified by EU government officials.",
            );
          },
        },
      ];
    }
    l.default = p;
  },
  226,
);

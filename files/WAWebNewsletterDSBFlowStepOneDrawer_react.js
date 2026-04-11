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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(19),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        u = l.onBack,
        p = l.onClickContinue,
        g;
      (n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = []), (n[3] = g))
        : (g = n[3]),
        d(_, g));
      var h;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "How dispute settlement bodies work in the EU")),
          (n[4] = h))
        : (h = n[4]);
      var y = h,
        C;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(
            /*BTDS*/ "A dispute settlement body is not part of WhatsApp. It's an independent group of experts on online content and rules.",
          )),
          (n[5] = C))
        : (C = n[5]);
      var b = C,
        v;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = { surface: "unknown", viewName: "newsletter-dsb-step-1" }),
          (n[6] = v))
        : (v = n[6]);
      var S;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = o(
            "WAWebCommonNewsletterIntegrityStrings",
          ).getNewsletterDSBDrawerTitle()),
          (n[7] = S))
        : (S = n[7]);
      var R;
      n[8] !== u
        ? ((R = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: S,
            onBack: u,
            testid: void 0,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (n[8] = u),
          (n[9] = R))
        : (R = n[9]);
      var L;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = c.jsxs(o("WAWebFlex.react").FlexRow, {
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
                children: y,
              }),
              c.jsx(o("WAWebText.react").WAWebTextMuted, {
                xstyle: m.header,
                paddingTop: 12,
                children: b,
              }),
            ],
          })),
          (n[10] = L))
        : (L = n[10]);
      var E;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = c.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            paddingStart: 24,
            paddingEnd: 24,
            children: c.jsx(
              o("WAWebNewsletterModalsUtils.react").BulletPointList,
              { bullets: f() },
            ),
          })),
          (n[11] = E))
        : (E = n[11]);
      var k;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = s._(/*BTDS*/ "Next")), (n[12] = k))
        : (k = n[12]);
      var I;
      n[13] !== p
        ? ((I = c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsxs(r("WAWebDrawerSection.react"), {
              theme: "full-height",
              animation: !1,
              children: [
                L,
                E,
                c.jsx(o("WAWebFlex.react").FlexColumn, {
                  paddingStart: 24,
                  paddingEnd: 24,
                  margin: 24,
                  align: "center",
                  justify: "center",
                  children: c.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
                    onClick: p,
                    testid: void 0,
                    children: k,
                  }),
                }),
              ],
            }),
          })),
          (n[13] = p),
          (n[14] = I))
        : (I = n[14]);
      var T;
      return (
        n[15] !== i || n[16] !== I || n[17] !== R
          ? ((T = c.jsxs(r("WAWebDrawer.react"), {
              theme: "gallery",
              ref: i,
              testid: void 0,
              tsNavigationData: v,
              children: [R, I],
            })),
            (n[15] = i),
            (n[16] = I),
            (n[17] = R),
            (n[18] = T))
          : (T = n[18]),
        T
      );
    }
    function _() {
      r("WAWebEnforcementActionLogging").setSurface(
        o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
          .DSB_FLOW_SCREEN_1,
      );
    }
    function f() {
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

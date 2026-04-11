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
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(21),
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
        u = l.entityId,
        p = l.onBack,
        g;
      (n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = []), (n[3] = g))
        : (g = n[3]),
        d(_, g));
      var h;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = { surface: "unknown", viewName: "newsletter-dsb-step-3" }),
          (n[4] = h))
        : (h = n[4]);
      var y;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = o(
            "WAWebCommonNewsletterIntegrityStrings",
          ).getNewsletterDSBDrawerTitle()),
          (n[5] = y))
        : (y = n[5]);
      var C;
      n[6] !== p
        ? ((C = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: y,
            onBack: p,
            testid: void 0,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (n[6] = p),
          (n[7] = C))
        : (C = n[7]);
      var b;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = c.jsx(o("WAWebText.react").WAWebTextLarge, {
            xstyle: m.header,
            weight: "medium",
            color: "primary",
            children: s._(/*BTDS*/ "Your reference number"),
          })),
          (n[8] = b))
        : (b = n[8]);
      var v;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            wrap: "wrap",
            margin: 24,
            paddingStart: 24,
            paddingEnd: 24,
            children: [
              b,
              c.jsx(o("WAWebText.react").WAWebTextMuted, {
                xstyle: m.header,
                paddingTop: 12,
                children: s._(
                  /*BTDS*/ "Only share your reference number with a certified dispute settlement body.",
                ),
              }),
            ],
          })),
          (n[9] = v))
        : (v = n[9]);
      var S;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s._(/*BTDS*/ "Copy reference number")), (n[10] = S))
        : (S = n[10]);
      var R;
      n[11] !== u
        ? ((R = s._(/*BTDS*/ "{entityId}", [s._param("entityId", u)])),
          (n[11] = u),
          (n[12] = R))
        : (R = n[12]);
      var L;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(/*BTDS*/ "Reference number copied")), (n[13] = L))
        : (L = n[13]);
      var E;
      n[14] !== u || n[15] !== R
        ? ((E = c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "full-height",
              children: [
                v,
                c.jsx(r("WAWebIntegrityCopyInformationToClipboard.react"), {
                  onClick: f,
                  ctaLabel: S,
                  textToCopyLabel: R,
                  textToCopy: u,
                  toastMessage: L,
                  testid: void 0,
                }),
              ],
            }),
          })),
          (n[14] = u),
          (n[15] = R),
          (n[16] = E))
        : (E = n[16]);
      var k;
      return (
        n[17] !== i || n[18] !== E || n[19] !== C
          ? ((k = c.jsxs(r("WAWebDrawer.react"), {
              theme: "gallery",
              ref: i,
              testid: void 0,
              tsNavigationData: h,
              children: [C, E],
            })),
            (n[17] = i),
            (n[18] = E),
            (n[19] = C),
            (n[20] = k))
          : (k = n[20]),
        k
      );
    }
    function _() {
      r("WAWebEnforcementActionLogging").setSurface(
        o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
          .DSB_FLOW_SCREEN_3,
      );
    }
    function f() {
      r("WAWebEnforcementActionLogging").logCopyReferenceNumberClick();
    }
    l.default = p;
  },
  226,
);

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
        u = l.enforcementIpData,
        p = l.onBack,
        g;
      (n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = []), (n[3] = g))
        : (g = n[3]),
        d(f, g));
      var h;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "Report details")), (n[4] = h))
        : (h = n[4]);
      var y = h,
        C;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(
            /*BTDS*/ "Include these details in your email to the reporter.",
          )),
          (n[5] = C))
        : (C = n[5]);
      var b = C,
        v;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = {
            surface: "unknown",
            viewName: "newsletter-contact-ip-reporter-step2",
          }),
          (n[6] = v))
        : (v = n[6]);
      var S;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = o(
            "WAWebCommonNewsletterIntegrityStrings",
          ).getNewsletterContactIPReporterDrawerTitle()),
          (n[7] = S))
        : (S = n[7]);
      var R;
      n[8] !== p
        ? ((R = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: S,
            onBack: p,
            testid: void 0,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (n[8] = p),
          (n[9] = R))
        : (R = n[9]);
      var L;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = c.jsxs(o("WAWebFlex.react").FlexColumn, {
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
      n[11] !== u
        ? ((E = o("WAWebContactReporterInformation")
            .getReporterDetails(u)
            .map(_)),
          (n[11] = u),
          (n[12] = E))
        : (E = n[12]);
      var k;
      n[13] !== E
        ? ((k = c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsxs(r("WAWebDrawerSection.react"), {
              theme: "full-height",
              animation: !1,
              children: [L, E],
            }),
          })),
          (n[13] = E),
          (n[14] = k))
        : (k = n[14]);
      var I;
      return (
        n[15] !== i || n[16] !== R || n[17] !== k
          ? ((I = c.jsxs(r("WAWebDrawer.react"), {
              theme: "gallery",
              ref: i,
              testid: void 0,
              tsNavigationData: v,
              children: [R, k],
            })),
            (n[15] = i),
            (n[16] = R),
            (n[17] = k),
            (n[18] = I))
          : (I = n[18]),
        I
      );
    }
    function _(e, t) {
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
              children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                xstyle: m.header,
                paddingTop: 12,
                children: e.headerText,
              }),
            }),
            c.jsx(r("WAWebIntegrityCopyInformationToClipboard.react"), {
              onClick: e.onClick,
              ctaLabel: e.ctaLabel,
              textToCopyLabel: e.textToCopyLabel,
              textToCopy: e.textToCopy,
              toastMessage: e.toastMessage,
              testid: void 0,
            }),
          ],
        },
        t,
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      r("WAWebEnforcementActionLogging").setSurface(
        o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
          .CONTACT_REPORTER_SCREEN_2,
      );
    }
    l.default = p;
  },
  226,
);

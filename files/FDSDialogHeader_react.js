__d(
  "FDSDialogHeader.react",
  [
    "fbt",
    "BaseDialogLabelIDProvider",
    "CometTrackingNodeProvider.react",
    "FBNucleusArrowLeftFilled24Icon.react",
    "FBNucleusArrowRightFilled24Icon.react",
    "FBNucleusCrossFilled24Icon.react",
    "FDSCircleButton.react",
    "FDSDialogHeaderContainer.react",
    "FDSText.react",
    "FDSTextWithIcon.react",
    "Locale",
    "emptyFunction",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
    "useMatchViewport",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        headerItem: {
          marginInlineStart: "xyqm7xq",
          marginInlineEnd: "x1ys307a",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
        headerPlaceholder: { height: "xc9qbxq", width: "x14qfxbe", $$css: !0 },
        headerTextItem: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          minWidth: "xeuugli",
          $$css: !0,
        },
      },
      d = o("Locale").isRTL();
    function m(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.backTestID,
        a = e.closeTestID,
        i = e.disabled,
        l = e.onBack,
        m = e.onClose,
        p = e.showTruncationTooltip,
        _ = e.text,
        f = e.titleImageAddOn,
        g = e.withBackButton,
        h = e.withCloseButton,
        y = e.withoutDivider,
        C = n === void 0 ? "back-button" : n,
        b = a === void 0 ? "close-button" : a,
        v = i === void 0 ? !1 : i,
        S = l === void 0 ? r("emptyFunction") : l,
        R = m === void 0 ? r("emptyFunction") : m,
        L = p === void 0 ? !1 : p,
        E = g === void 0 ? !1 : g,
        k = h === void 0 ? !0 : h,
        I = y === void 0 ? !1 : y,
        T = o("BaseDialogLabelIDProvider").useDialogHeaderID(),
        D = r("useMatchViewport")("max", "width", 375),
        x;
      t[0] !== T || t[1] !== D || t[2] !== L || t[3] !== _
        ? ((x =
            _ != null &&
            u.jsx(r("FDSText.react"), {
              align: "center",
              id: T,
              isSemanticHeading: !0,
              truncationTooltip: L ? _ : void 0,
              type: D ? "headlineEmphasized3" : "headlineEmphasized2",
              children: _,
            })),
          (t[0] = T),
          (t[1] = D),
          (t[2] = L),
          (t[3] = _),
          (t[4] = x))
        : (x = t[4]);
      var $ = x,
        P = !I,
        N;
      t[5] !== C || t[6] !== v || t[7] !== S || t[8] !== E
        ? ((N = E
            ? u.jsx(o("react-strict-dom").html.div, {
                style: c.headerItem,
                children: u.jsx(r("FDSCircleButton.react"), {
                  "aria-label": s._(/*BTDS*/ "Back"),
                  disabled: v,
                  dynamicHoverTiltAngle: 15,
                  dynamicHoverTranslationPercent: 0.15,
                  icon: r(
                    d
                      ? "FBNucleusArrowRightFilled24Icon.react"
                      : "FBNucleusArrowLeftFilled24Icon.react",
                  ),
                  onPress: S,
                  showDynamicHover: !0,
                  size: 36,
                  testid: void 0,
                }),
              })
            : u.jsx(o("react-strict-dom").html.div, {
                style: [c.headerItem, c.headerPlaceholder],
              })),
          (t[5] = C),
          (t[6] = v),
          (t[7] = S),
          (t[8] = E),
          (t[9] = N))
        : (N = t[9]);
      var M;
      t[10] !== $ || t[11] !== f
        ? ((M =
            $ != null
              ? u.jsx(o("react-strict-dom").html.div, {
                  style: c.headerTextItem,
                  children:
                    f != null
                      ? u.jsx(r("FDSTextWithIcon.react"), {
                          iconBefore: f,
                          children: $,
                        })
                      : $,
                })
              : null),
          (t[10] = $),
          (t[11] = f),
          (t[12] = M))
        : (M = t[12]);
      var w;
      t[13] !== b || t[14] !== v || t[15] !== R || t[16] !== k
        ? ((w = k
            ? u.jsx(o("react-strict-dom").html.div, {
                style: c.headerItem,
                children: u.jsx(r("CometTrackingNodeProvider.react"), {
                  trackingNode: 29,
                  children: u.jsx(r("FDSCircleButton.react"), {
                    "aria-label": s._(/*BTDS*/ "Close"),
                    disabled: v,
                    dynamicHoverTiltAngle: 15,
                    dynamicHoverTranslationPercent: 0.15,
                    icon: r("FBNucleusCrossFilled24Icon.react"),
                    onPress: R,
                    showDynamicHover: !0,
                    size: 36,
                    testid: void 0,
                  }),
                }),
              })
            : u.jsx(o("react-strict-dom").html.div, {
                style: [c.headerPlaceholder, c.headerItem],
              })),
          (t[13] = b),
          (t[14] = v),
          (t[15] = R),
          (t[16] = k),
          (t[17] = w))
        : (w = t[17]);
      var A;
      return (
        t[18] !== P || t[19] !== N || t[20] !== M || t[21] !== w
          ? ((A = u.jsxs(r("FDSDialogHeaderContainer.react"), {
              withDivider: P,
              children: [N, M, w],
            })),
            (t[18] = P),
            (t[19] = N),
            (t[20] = M),
            (t[21] = w),
            (t[22] = A))
          : (A = t[22]),
        A
      );
    }
    l.default = m;
  },
  226,
);

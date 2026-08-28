__d(
  "generateUrcTipTextAndOutcomeUtils",
  [
    "fbt",
    "AdsInsightsCloseTheLoopExpansionUtil",
    "AdsMgmtRecommendationIncentiveSection.react",
    "CometPlaceholder.react",
    "GeoBaseText.react",
    "GeoDivider.react",
    "GeoFlexbox.react",
    "GeoIcon.react",
    "HeroInteractionIgnoreWithDiv.react",
    "PerformanceTrendsDataVizUtil",
    "SYDExperimentationUtils",
    "URCTextWithRanges.react",
    "deferredLoadComponent",
    "geoMargin",
    "isTruthy",
    "meta-brand-i-circle-filled-12",
    "react",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("deferredLoadComponent")(
        r("requireDeferred")(
          "AdsRecommendationCompetitiveIndustryBenchmarkingTooltip.react",
        ).__setRef("generateUrcTipTextAndOutcomeUtils"),
      ),
      d = r("deferredLoadComponent")(
        r("requireDeferred")(
          "AdsRecommendationCIBTooltipWithPeersetInfo.react",
        ).__setRef("generateUrcTipTextAndOutcomeUtils"),
      ),
      m = r("deferredLoadComponent")(
        r("requireDeferred")(
          "AdsInsightsCloseTheLoopMetricTooltip.react",
        ).__setRef("generateUrcTipTextAndOutcomeUtils"),
      ),
      p = r("deferredLoadComponent")(
        r("requireDeferred")(
          "AdsInsightsCloseTheLoopURCTitlePopoverSection.react",
        ).__setRef("generateUrcTipTextAndOutcomeUtils"),
      );
    function _(e, t, n, a, l, _) {
      var f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L = a == null || (f = a.explanation) == null ? void 0 : f.body,
        E = n === "budget_limited",
        k =
          (a == null || (g = a.lift) == null || (g = g.urc_qe_info) == null
            ? void 0
            : g.qe_universe_name) != null,
        I =
          (L == null || (h = L[0]) == null ? void 0 : h.urc_variant_name) ===
          "URCCIBExplanationBodyV2Variant",
        T = o(
          "AdsInsightsCloseTheLoopExpansionUtil",
        ).isCloseTheLoopMFRExpansionEnabled(
          a == null || (y = a.title) == null ? void 0 : y.urc_variant_name,
        ),
        D = l == null ? void 0 : l.close_the_loop,
        x =
          Math.ceil(
            (C = l == null || (b = l.mr_ple) == null ? void 0 : b.delta) != null
              ? C
              : 0,
          ) > 0 &&
          o("SYDExperimentationUtils").getShouldSeePLEV2ImprovementsFromInfos(
            a == null || (v = a.title) == null ? void 0 : v.urc_qe_infos,
          ),
        $,
        P;
      if ((k || I) && L != null && L.length > 2) {
        var N, M, w, A, F, O, B, W, q;
        $ = u.jsx(r("HeroInteractionIgnoreWithDiv.react"), {
          children: u.jsx(r("CometPlaceholder.react"), {
            fallback: null,
            name: i.id,
            children:
              I === !0
                ? u.jsx(d, {
                    logInsightsEvent: e,
                    tooltipTextItems: L.map(function (e) {
                      var t;
                      return (t = e == null ? void 0 : e.text) != null ? t : "";
                    }),
                  })
                : u.jsx(c, {
                    logInsightsEvent: e,
                    tooltipTextItems: L.map(function (e) {
                      var t;
                      return (t = e == null ? void 0 : e.text) != null ? t : "";
                    }),
                  }),
          }),
        });
        var U = u.jsx(r("URCTextWithRanges.react"), {
          "data-testid": void 0,
          defaultColor: "valueDescription",
          defaultSize: "valueDescription",
          image_ranges: [],
          inline_style_ranges:
            a == null || (N = a.title) == null ? void 0 : N.inline_style_ranges,
          ranges: [],
          text:
            (M = a == null || (w = a.title) == null ? void 0 : w.text) != null
              ? M
              : "",
        });
        P =
          a != null
            ? u.jsx(r("AdsMgmtRecommendationIncentiveSection.react"), {
                expectedOutcome:
                  (A = (F = a.lift) == null ? void 0 : F.text) != null ? A : "",
                isTableVariant: !0,
                rawURCOutcomeData: a,
                useCustomCurrentStatus: u.jsx(r("GeoBaseText.react"), {
                  color: "placeholder",
                  size: "accent",
                  children:
                    (O = (B = a.footer) == null ? void 0 : B.text) != null
                      ? O
                      : "",
                }),
                useCustomHeading: U,
                useCustomTooltipHeading:
                  (W =
                    (q = a.explanation) == null || (q = q.title) == null
                      ? void 0
                      : q.text) != null
                    ? W
                    : "",
                useCustomTooltipText: $,
              })
            : null;
      } else if (
        E &&
        (a == null || (S = a.explanation) == null ? void 0 : S.body) != null &&
        (a == null || (R = a.explanation) == null || (R = R.body) == null
          ? void 0
          : R.length) === 2
      ) {
        var V,
          H,
          G,
          z,
          j,
          K,
          Q,
          X,
          Y = a.explanation.body,
          J = Y[0],
          Z = Y[1];
        (($ = u.jsx(m, {
          currencyCode: t != null ? t : "",
          day7ActualCPR: parseFloat(r("isTruthy")(J.text) ? J.text : "0"),
          day7PredictedCPR: parseFloat(r("isTruthy")(Z.text) ? Z.text : "0"),
          guidanceName: "budget_limited",
        })),
          (P =
            a != null
              ? u.jsx(r("AdsMgmtRecommendationIncentiveSection.react"), {
                  expectedOutcome:
                    (V = (H = a.lift) == null ? void 0 : H.text) != null
                      ? V
                      : "",
                  isTableVariant: !0,
                  useCustomCurrentStatus: u.jsx(r("GeoBaseText.react"), {
                    color: "placeholder",
                    size: "accent",
                    children:
                      (G = (z = a.footer) == null ? void 0 : z.text) != null
                        ? G
                        : "",
                  }),
                  useCustomHeading:
                    (j = (K = a.title) == null ? void 0 : K.text) != null
                      ? j
                      : "",
                  useCustomTooltipHeading:
                    (Q =
                      (X = a.explanation) == null || (X = X.title) == null
                        ? void 0
                        : X.text) != null
                      ? Q
                      : "",
                  useCustomTooltipText: $,
                })
              : null));
      } else if (T && D != null) {
        var ee, te, ne, re, oe, ae, ie;
        (($ = u.jsx(r("HeroInteractionIgnoreWithDiv.react"), {
          children: u.jsxs(r("CometPlaceholder.react"), {
            fallback: null,
            name: i.id,
            children: [
              u.jsx(p, { ctlData: D, currencyCode: t != null ? t : void 0 }),
              a == null ||
              (ee = a.explanation) == null ||
              (ee = ee.body) == null
                ? void 0
                : ee.map(function (e, t) {
                    var n;
                    return u.jsx(
                      r("GeoFlexbox.react"),
                      {
                        xstyle: t >= 1 ? r("geoMargin").top20 : null,
                        children: u.jsx(r("URCTextWithRanges.react"), {
                          image_ranges: e.image_ranges,
                          inline_style_ranges: e.inline_style_ranges,
                          ranges: e.ranges,
                          text: (n = e.text) != null ? n : "",
                        }),
                      },
                      t,
                    );
                  }),
              a != null && (te = a.explanation) != null && te.footer
                ? u.jsxs(r("GeoFlexbox.react"), {
                    alignItems: "center",
                    xstyle: r("geoMargin").top20,
                    children: [
                      u.jsx(r("GeoFlexbox.react"), {
                        xstyle: r("geoMargin").end8,
                        children: u.jsx(r("GeoIcon.react"), {
                          icon: o("meta-brand-i-circle-filled-12")
                            .metaBrandICircleInfoCircleFilled12,
                        }),
                      }),
                      u.jsx(r("URCTextWithRanges.react"), {
                        image_ranges:
                          a == null ||
                          (ne = a.explanation) == null ||
                          (ne = ne.footer) == null
                            ? void 0
                            : ne.image_ranges,
                        inline_style_ranges:
                          a == null ||
                          (re = a.explanation) == null ||
                          (re = re.footer) == null
                            ? void 0
                            : re.inline_style_ranges,
                        ranges:
                          a == null ||
                          (oe = a.explanation) == null ||
                          (oe = oe.footer) == null
                            ? void 0
                            : oe.ranges,
                        text:
                          (ae =
                            a == null ||
                            (ie = a.explanation) == null ||
                            (ie = ie.footer) == null
                              ? void 0
                              : ie.text) != null
                            ? ae
                            : "",
                      }),
                    ],
                  })
                : null,
            ],
          }),
        })),
          (P = null));
      } else if (x) {
        var le,
          se,
          ue,
          ce,
          de,
          me,
          pe,
          _e,
          fe,
          ge,
          he,
          ye,
          Ce,
          be,
          ve,
          Se,
          Re,
          Le,
          Ee = o(
            "PerformanceTrendsDataVizUtil",
          ).getPerformanceTrendValueFormatter(t != null ? t : ""),
          ke = Number(
            l == null || (le = l.mr_ple) == null
              ? void 0
              : le.base_metric_reading,
          ),
          Ie = Number(
            l == null || (se = l.mr_ple) == null ? void 0 : se.metric_reading,
          );
        (($ = u.jsxs(u.Fragment, {
          children: [
            u.jsxs(r("GeoFlexbox.react"), {
              direction: "column",
              children: [
                u.jsx(r("GeoBaseText.react"), {
                  color: "value",
                  size: "value",
                  children:
                    a == null || (ue = a.footer) == null ? void 0 : ue.text,
                }),
                u.jsxs(r("GeoFlexbox.react"), {
                  direction: "row",
                  xstyle: [r("geoMargin").top8, r("geoMargin").bottom16],
                  children: [
                    u.jsxs(r("GeoFlexbox.react"), {
                      direction: "column",
                      children: [
                        u.jsx(r("GeoBaseText.react"), {
                          color: "placeholder",
                          size: "accent",
                          children: s._(/*BTDS*/ "Current"),
                        }),
                        u.jsx(r("GeoBaseText.react"), {
                          color: "value",
                          size: "header3",
                          children: Ee(ke),
                        }),
                      ],
                    }),
                    u.jsx(r("GeoDivider.react"), { direction: "vertical" }),
                    u.jsxs(r("GeoFlexbox.react"), {
                      direction: "column",
                      children: [
                        u.jsx(r("GeoBaseText.react"), {
                          color: "placeholder",
                          size: "accent",
                          children: s._(/*BTDS*/ "With recommendation"),
                        }),
                        u.jsx(r("GeoBaseText.react"), {
                          color: "success",
                          size: "header3",
                          children: Ee(Ie),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            a == null || (ce = a.explanation) == null || (ce = ce.body) == null
              ? void 0
              : ce.map(function (e, t) {
                  var n;
                  return u.jsx(
                    r("GeoFlexbox.react"),
                    {
                      xstyle: t >= 1 ? r("geoMargin").top20 : null,
                      children: u.jsx(r("URCTextWithRanges.react"), {
                        image_ranges: e.image_ranges,
                        inline_style_ranges: e.inline_style_ranges,
                        ranges: e.ranges,
                        text: (n = e.text) != null ? n : "",
                      }),
                    },
                    t,
                  );
                }),
            a != null && (de = a.explanation) != null && de.footer
              ? u.jsx(r("GeoFlexbox.react"), {
                  alignItems: "center",
                  xstyle: r("geoMargin").top12,
                  children: u.jsx(r("URCTextWithRanges.react"), {
                    image_ranges:
                      a == null ||
                      (me = a.explanation) == null ||
                      (me = me.footer) == null
                        ? void 0
                        : me.image_ranges,
                    inline_style_ranges:
                      a == null ||
                      (pe = a.explanation) == null ||
                      (pe = pe.footer) == null
                        ? void 0
                        : pe.inline_style_ranges,
                    ranges:
                      a == null ||
                      (_e = a.explanation) == null ||
                      (_e = _e.footer) == null
                        ? void 0
                        : _e.ranges,
                    text:
                      (fe =
                        a == null ||
                        (ge = a.explanation) == null ||
                        (ge = ge.footer) == null
                          ? void 0
                          : ge.text) != null
                        ? fe
                        : "",
                  }),
                })
              : null,
          ],
        })),
          (P =
            a != null
              ? u.jsx(r("AdsMgmtRecommendationIncentiveSection.react"), {
                  expectedOutcome:
                    (he = (ye = a.lift) == null ? void 0 : ye.text) != null
                      ? he
                      : "",
                  isTableVariant: !0,
                  useCustomCurrentStatus: u.jsx(r("GeoBaseText.react"), {
                    color: "placeholder",
                    size: "accent",
                    children:
                      (Ce = (be = a.footer) == null ? void 0 : be.text) != null
                        ? Ce
                        : "",
                  }),
                  useCustomHeading:
                    (ve = (Se = a.title) == null ? void 0 : Se.text) != null
                      ? ve
                      : "",
                  useCustomTooltipHeading:
                    (Re =
                      a == null ||
                      (Le = a.explanation) == null ||
                      (Le = Le.title) == null
                        ? void 0
                        : Le.text) != null
                      ? Re
                      : "",
                  useCustomTooltipText: $,
                })
              : null));
      } else {
        var Te, De, xe, $e, Pe, Ne, Me, we, Ae, Fe, Oe, Be, We, qe, Ue;
        (($ = u.jsxs(u.Fragment, {
          children: [
            a == null || (Te = a.explanation) == null || (Te = Te.body) == null
              ? void 0
              : Te.map(function (e, t) {
                  var n;
                  return u.jsx(
                    r("GeoFlexbox.react"),
                    {
                      xstyle: t >= 1 ? r("geoMargin").top20 : null,
                      children: u.jsx(r("URCTextWithRanges.react"), {
                        image_ranges: e.image_ranges,
                        inline_style_ranges: e.inline_style_ranges,
                        ranges: e.ranges,
                        text: (n = e.text) != null ? n : "",
                      }),
                    },
                    t,
                  );
                }),
            a != null && (De = a.explanation) != null && De.footer
              ? u.jsxs(r("GeoFlexbox.react"), {
                  alignItems: "center",
                  xstyle: r("geoMargin").top20,
                  children: [
                    u.jsx(r("GeoFlexbox.react"), {
                      xstyle: r("geoMargin").end8,
                      children: u.jsx(r("GeoIcon.react"), {
                        icon: o("meta-brand-i-circle-filled-12")
                          .metaBrandICircleInfoCircleFilled12,
                      }),
                    }),
                    u.jsx(r("URCTextWithRanges.react"), {
                      image_ranges:
                        a == null ||
                        (xe = a.explanation) == null ||
                        (xe = xe.footer) == null
                          ? void 0
                          : xe.image_ranges,
                      inline_style_ranges:
                        a == null ||
                        ($e = a.explanation) == null ||
                        ($e = $e.footer) == null
                          ? void 0
                          : $e.inline_style_ranges,
                      ranges:
                        a == null ||
                        (Pe = a.explanation) == null ||
                        (Pe = Pe.footer) == null
                          ? void 0
                          : Pe.ranges,
                      text:
                        (Ne =
                          a == null ||
                          (Me = a.explanation) == null ||
                          (Me = Me.footer) == null
                            ? void 0
                            : Me.text) != null
                          ? Ne
                          : "",
                    }),
                  ],
                })
              : null,
          ],
        })),
          (P =
            a != null
              ? u.jsx(r("AdsMgmtRecommendationIncentiveSection.react"), {
                  expectedOutcome:
                    (we = (Ae = a.lift) == null ? void 0 : Ae.text) != null
                      ? we
                      : "",
                  isTableVariant: !0,
                  useCustomCurrentStatus: u.jsx(r("GeoBaseText.react"), {
                    color: "placeholder",
                    size: "accent",
                    children:
                      (Fe = (Oe = a.footer) == null ? void 0 : Oe.text) != null
                        ? Fe
                        : "",
                  }),
                  useCustomHeading:
                    (Be = (We = a.title) == null ? void 0 : We.text) != null
                      ? Be
                      : "",
                  useCustomTooltipHeading:
                    (qe =
                      a == null ||
                      (Ue = a.explanation) == null ||
                      (Ue = Ue.title) == null
                        ? void 0
                        : Ue.text) != null
                      ? qe
                      : "",
                  useCustomTooltipText: $,
                })
              : null));
      }
      return { toolTipText: $, potentialOutcome: P };
    }
    l.generateUrcToolTipAndPotentialOutcome = _;
  },
  226,
);

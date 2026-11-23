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
        S = a == null || (f = a.explanation) == null ? void 0 : f.body,
        R = n === "budget_limited",
        L =
          (a == null || (g = a.lift) == null || (g = g.urc_qe_info) == null
            ? void 0
            : g.qe_universe_name) != null,
        E =
          (S == null || (h = S[0]) == null ? void 0 : h.urc_variant_name) ===
          "URCCIBExplanationBodyV2Variant",
        k = o(
          "AdsInsightsCloseTheLoopExpansionUtil",
        ).isCloseTheLoopMFRExpansionEnabled(
          a == null || (y = a.title) == null ? void 0 : y.urc_variant_name,
        ),
        I = l == null ? void 0 : l.close_the_loop,
        T = o("SYDExperimentationUtils").getPLEInsight(l),
        D = Math.ceil((C = T == null ? void 0 : T.delta) != null ? C : 0) > 0,
        x,
        $;
      if ((L || E) && S != null && S.length > 2) {
        var P, N, M, w, A, F, O, B, W, q;
        x = u.jsx(r("HeroInteractionIgnoreWithDiv.react"), {
          children: u.jsx(r("CometPlaceholder.react"), {
            fallback: null,
            name: i.id,
            children:
              E === !0
                ? u.jsx(d, {
                    logInsightsEvent: e,
                    tooltipTextItems: S.map(function (e) {
                      var t;
                      return (t = e == null ? void 0 : e.text) != null ? t : "";
                    }),
                  })
                : u.jsx(c, {
                    logInsightsEvent: e,
                    tooltipTextItems: S.map(function (e) {
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
            a == null || (P = a.title) == null ? void 0 : P.inline_style_ranges,
          ranges: [],
          text:
            (N = a == null || (M = a.title) == null ? void 0 : M.text) != null
              ? N
              : "",
        });
        $ =
          (a == null || (w = a.lift) == null ? void 0 : w.text) != null
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
                useCustomTooltipText: x,
              })
            : null;
      } else if (
        R &&
        (a == null || (b = a.explanation) == null ? void 0 : b.body) != null &&
        (a == null || (v = a.explanation) == null || (v = v.body) == null
          ? void 0
          : v.length) === 2
      ) {
        var V,
          H,
          G,
          z,
          j,
          K,
          Q,
          X,
          Y,
          J = a.explanation.body,
          Z = J[0],
          ee = J[1];
        ((x = u.jsx(m, {
          currencyCode: t != null ? t : "",
          day7ActualCPR: parseFloat(r("isTruthy")(Z.text) ? Z.text : "0"),
          day7PredictedCPR: parseFloat(r("isTruthy")(ee.text) ? ee.text : "0"),
          guidanceName: "budget_limited",
        })),
          ($ =
            (a == null || (V = a.lift) == null ? void 0 : V.text) != null
              ? u.jsx(r("AdsMgmtRecommendationIncentiveSection.react"), {
                  expectedOutcome:
                    (H = (G = a.lift) == null ? void 0 : G.text) != null
                      ? H
                      : "",
                  isTableVariant: !0,
                  useCustomCurrentStatus: u.jsx(r("GeoBaseText.react"), {
                    color: "placeholder",
                    size: "accent",
                    children:
                      (z = (j = a.footer) == null ? void 0 : j.text) != null
                        ? z
                        : "",
                  }),
                  useCustomHeading:
                    (K = (Q = a.title) == null ? void 0 : Q.text) != null
                      ? K
                      : "",
                  useCustomTooltipHeading:
                    (X =
                      (Y = a.explanation) == null || (Y = Y.title) == null
                        ? void 0
                        : Y.text) != null
                      ? X
                      : "",
                  useCustomTooltipText: x,
                })
              : null));
      } else if (k && I != null) {
        var te, ne, re, oe, ae, ie, le;
        ((x = u.jsx(r("HeroInteractionIgnoreWithDiv.react"), {
          children: u.jsxs(r("CometPlaceholder.react"), {
            fallback: null,
            name: i.id,
            children: [
              u.jsx(p, { ctlData: I, currencyCode: t != null ? t : void 0 }),
              a == null ||
              (te = a.explanation) == null ||
              (te = te.body) == null
                ? void 0
                : te.map(function (e, t) {
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
              a != null && (ne = a.explanation) != null && ne.footer
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
                          (re = a.explanation) == null ||
                          (re = re.footer) == null
                            ? void 0
                            : re.image_ranges,
                        inline_style_ranges:
                          a == null ||
                          (oe = a.explanation) == null ||
                          (oe = oe.footer) == null
                            ? void 0
                            : oe.inline_style_ranges,
                        ranges:
                          a == null ||
                          (ae = a.explanation) == null ||
                          (ae = ae.footer) == null
                            ? void 0
                            : ae.ranges,
                        text:
                          (ie =
                            a == null ||
                            (le = a.explanation) == null ||
                            (le = le.footer) == null
                              ? void 0
                              : le.text) != null
                            ? ie
                            : "",
                      }),
                    ],
                  })
                : null,
            ],
          }),
        })),
          ($ = null));
      } else if (D) {
        var se,
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
          ke = Number(T == null ? void 0 : T.base_metric_reading),
          Ie = Number(T == null ? void 0 : T.metric_reading);
        ((x = u.jsxs(u.Fragment, {
          children: [
            u.jsxs(r("GeoFlexbox.react"), {
              direction: "column",
              children: [
                u.jsx(r("GeoBaseText.react"), {
                  color: "value",
                  size: "value",
                  children:
                    a == null || (se = a.footer) == null ? void 0 : se.text,
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
                          children: s._(/*BTDS*/ ""),
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
                          children: s._(/*BTDS*/ ""),
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
            a == null || (ue = a.explanation) == null || (ue = ue.body) == null
              ? void 0
              : ue.map(function (e, t) {
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
            a != null && (ce = a.explanation) != null && ce.footer
              ? u.jsx(r("GeoFlexbox.react"), {
                  alignItems: "center",
                  xstyle: r("geoMargin").top12,
                  children: u.jsx(r("URCTextWithRanges.react"), {
                    image_ranges:
                      a == null ||
                      (de = a.explanation) == null ||
                      (de = de.footer) == null
                        ? void 0
                        : de.image_ranges,
                    inline_style_ranges:
                      a == null ||
                      (me = a.explanation) == null ||
                      (me = me.footer) == null
                        ? void 0
                        : me.inline_style_ranges,
                    ranges:
                      a == null ||
                      (pe = a.explanation) == null ||
                      (pe = pe.footer) == null
                        ? void 0
                        : pe.ranges,
                    text:
                      (_e =
                        a == null ||
                        (fe = a.explanation) == null ||
                        (fe = fe.footer) == null
                          ? void 0
                          : fe.text) != null
                        ? _e
                        : "",
                  }),
                })
              : null,
          ],
        })),
          ($ =
            (a == null || (ge = a.lift) == null ? void 0 : ge.text) != null
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
                  useCustomTooltipText: x,
                })
              : null));
      } else {
        var Te, De, xe, $e, Pe, Ne, Me, we, Ae, Fe, Oe, Be, We, qe, Ue, Ve;
        ((x = u.jsxs(u.Fragment, {
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
          ($ =
            (a == null || (we = a.lift) == null ? void 0 : we.text) != null
              ? u.jsx(r("AdsMgmtRecommendationIncentiveSection.react"), {
                  expectedOutcome:
                    (Ae = (Fe = a.lift) == null ? void 0 : Fe.text) != null
                      ? Ae
                      : "",
                  isTableVariant: !0,
                  useCustomCurrentStatus: u.jsx(r("GeoBaseText.react"), {
                    color: "placeholder",
                    size: "accent",
                    children:
                      (Oe = (Be = a.footer) == null ? void 0 : Be.text) != null
                        ? Oe
                        : "",
                  }),
                  useCustomHeading:
                    (We = (qe = a.title) == null ? void 0 : qe.text) != null
                      ? We
                      : "",
                  useCustomTooltipHeading:
                    (Ue =
                      a == null ||
                      (Ve = a.explanation) == null ||
                      (Ve = Ve.title) == null
                        ? void 0
                        : Ve.text) != null
                      ? Ue
                      : "",
                  useCustomTooltipText: x,
                })
              : null));
      }
      return { toolTipText: x, potentialOutcome: $ };
    }
    l.generateUrcToolTipAndPotentialOutcome = _;
  },
  226,
);

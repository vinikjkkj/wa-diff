__d(
  "AdsMgmtCampaignTableInspectSidePanelExplanationsUtils",
  [
    "fbt",
    "invariant",
    "AdsDeliveryMidFlightCreativeFatigueConstants",
    "AdsInterfacesLogger",
    "AdsLearnMore.react",
    "AdsMgmtCampaignTableInspectSidePanelExplanationsConfig",
    "AdsMgmtInspectSidePanelErrorStateComponent.react",
    "AnomalyDrivenCreativeMulticellABTestButton.react",
    "GeoBaseText.react",
    "GeoButton.react",
    "GeoDivider.react",
    "GeoFlexbox.react",
    "GeoHeading.react",
    "GeoText.react",
    "filterNulls",
    "geoMargin",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d = c || (c = o("react")),
      m = c.useCallback;
    function p(e) {
      var t = o("AdsMgmtCampaignTableInspectSidePanelExplanationsConfig")
        .AdsMgmtCampaignTableInspectSidePanelExplanationsConfigMap[e];
      return t || u(!1, "Unsupported explanation type %s", e);
    }
    function _(e) {
      return p(e).level;
    }
    function f(e, t) {
      var n = p(t);
      return n.title.getTitle(e);
    }
    function g(e) {
      return p(e).description;
    }
    var h = "1423851372208214";
    function y(e, t) {
      var n = t === "AD_CREATIVE_CHANGED";
      return d.jsxs(d.Fragment, {
        children: [
          d.jsx(r("GeoFlexbox.react"), {
            xstyle: r("geoMargin").top8,
            children: n ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
          }),
          e &&
            d.jsx(r("GeoFlexbox.react"), {
              xstyle: r("geoMargin").top8,
              children: d.jsxs(r("GeoBaseText.react"), {
                color: "value",
                size: "value",
                children: [
                  s._(/*BTDS*/ ""),
                  " ",
                  d.jsx(r("AdsLearnMore.react"), {
                    cmsID: h,
                    label: s._(/*BTDS*/ ""),
                  }),
                ],
              }),
            }),
        ],
      });
    }
    function C(e) {
      var t = e.explanationType,
        n = e.isSidePanelDescription,
        r = t === "CREATIVE_FATIGUE" ? s._(/*BTDS*/ "") : g(t),
        o =
          t === "CREATIVE_FATIGUE" ||
          t === "AD_CREATED" ||
          t === "AD_CREATIVE_CHANGED";
      return o
        ? d.jsxs(d.Fragment, { children: [r, y(n, t)] })
        : u(!1, "Unsupported explanation type %s", t);
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e, t) {
      var n;
      r("AdsInterfacesLogger").logOnce({
        eventName: "applied_insights_anomaly_explanation_click",
        data:
          ((n = {}),
          (n.metadata = JSON.stringify({ adObjectIDs: t, explanationType: e })),
          (n.custom_event_type = e),
          (n.source = "anomaly_detection_inspect_side_panel"),
          n),
      });
    }
    function v(e) {
      var t = e.adAccountID,
        n = e.adObjectID,
        o = e.businessID,
        a = e.eligibleAdObjectIDForMulticellABTest,
        i = e.explanationType,
        l = e.isPerformanceShiftPositive,
        s = e.metric,
        u = e.showCreativeMulticellABTestingEntryPoint,
        c = e.targetObjectIDs,
        _ = p(i),
        f = _.buttonConfig,
        g = m(
          function (e) {
            (b(i, c), e.onClick(c, o));
          },
          [c, i, o],
        );
      if (f == null) return null;
      var h = c.length;
      return u
        ? d.jsx(r("GeoFlexbox.react"), {
            direction: "row",
            children: d.jsx(r("GeoFlexbox.react"), {
              direction: "column",
              children: d.jsx(r("GeoFlexbox.react"), {
                xstyle: r("geoMargin").top8,
                children: d.jsx(
                  r("AnomalyDrivenCreativeMulticellABTestButton.react"),
                  {
                    adAccountID: t,
                    adObjectID: n,
                    explanationType: i,
                    isPerformanceShiftPositive: l,
                    metric: s,
                    selectedAdObjectID: a,
                    source: "anomaly_detection_inspect_side_panel",
                  },
                ),
              }),
            }),
          })
        : d.jsx(r("GeoFlexbox.react"), {
            direction: "row",
            children: d.jsx(r("GeoButton.react"), {
              "data-testid": void 0,
              label: f.getButtonLabel(h),
              logging: {
                surface:
                  "ads_mgmt_campaign_table_inspect_side_panel_explanations_utils_kdku",
              },
              onClick: function () {
                return g(f);
              },
              variant: f.getVariant(l),
              xstyle: r("geoMargin").top8,
            }),
          });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      var e = s._(/*BTDS*/ "");
      return d.jsxs(d.Fragment, {
        children: [
          d.jsx(r("GeoHeading.react"), {
            "data-testid": void 0,
            level: 3,
            children: s._(/*BTDS*/ ""),
          }),
          d.jsx(r("GeoText.react"), {
            "data-testid": void 0,
            xstyle: r("geoMargin").vert8,
            children: e,
          }),
        ],
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R() {
      return d.jsx(
        o("AdsMgmtInspectSidePanelErrorStateComponent.react")
          .AdsMgmtInspectSidePanelErrorStateComponent,
        {
          componentName: o("AdsMgmtInspectSidePanelErrorStateComponent.react")
            .InspectSidePanelComponentName.POTENTIAL_CAUSES,
          xstyle: r("geoMargin").horiz16,
          children: d.jsx(S, {}),
        },
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    var L = {
        CREATIVE_FATIGUE: function () {
          return d.jsxs(d.Fragment, {
            children: [
              d.jsx(r("GeoDivider.react"), {}),
              d.jsxs(r("GeoBaseText.react"), {
                color: "value",
                size: "value",
                children: [
                  s._(/*BTDS*/ ""),
                  d.jsx(
                    "span",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(r("geoMargin").start4),
                      {
                        children: d.jsx(r("AdsLearnMore.react"), {
                          cmsID: o(
                            "AdsDeliveryMidFlightCreativeFatigueConstants",
                          ).CREATIVE_FATIGUE_LEARN_MORE_ID,
                        }),
                      },
                    ),
                  ),
                ],
              }),
            ],
          });
        },
      },
      E = function (t, n) {
        var e = [],
          o = [];
        return (
          t.forEach(function (t) {
            var r;
            n.includes(
              t == null || (r = t.name) == null ? void 0 : r.toLowerCase(),
            )
              ? e.push(t)
              : o.push(t);
          }),
          r("filterNulls")([].concat(e, o))
        );
      },
      k = function (t) {
        return t.every(function (e) {
          var t = e.value;
          return t === 0;
        });
      };
    ((l.getExplanationObjectLevel = _),
      (l.getExplanationTitle = f),
      (l.getExplanationDescription = g),
      (l.getExplanationDescriptionForAnomalyDrivenABTesting = C),
      (l.InspectSidePanelExplanationCardFooter = v),
      (l.AdsMgmtCampaignTableInspectSidePanelExplanationsHeader = S),
      (l.AdsMgmtCampaignTableInspectSidePanelExplanationsErrorState = R),
      (l.nonRecommendationContentForExplanationType = L),
      (l.reorderExplanations = E),
      (l.getIsMetricTimeSeriesZero = k));
  },
  226,
);

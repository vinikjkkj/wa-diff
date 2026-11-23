__d(
  "AdsGuidanceActionInsightsRecommendationsContainer",
  [
    "fbt",
    "AdsDeliveryColumnMFRsConstants",
    "AdsErrorBoundary.react",
    "AdsGuidanceActionInsightsThumbnail.react",
    "AdsGuidanceActionsPanelRecommendationTypeGroupsWidget.react",
    "AdsGuidanceActionsPerfScoreQEUtils",
    "AdsInterfacesLogger",
    "AdsMgmtGuidanceActionsItem.react",
    "AdsMgmtRecommendationsUtils",
    "GeoBaseText.react",
    "GeoButton.react",
    "GeoCard.react",
    "GeoFlexbox.react",
    "GeoHeading.react",
    "SYDGuidanceHubV3ErrorsGuidanceCardContainer",
    "SYDGuidanceHubV3LoggingContext",
    "adsGuidanceActionThumbnailSelector",
    "filterNulls",
    "geoMargin",
    "react",
    "stylex",
    "useUgpExperimentationLogTopLevelExposureForAdObject",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useMemo,
      _ = function (t) {
        var e, n;
        return t
          ? {
              recommendation_data: t,
              score_lift:
                (e = (n = t.scoreLiftData) == null ? void 0 : n.recLift) != null
                  ? e
                  : 0,
              lift_estimation: 0,
            }
          : null;
      },
      f = r("adsGuidanceActionThumbnailSelector")();
    function g(e) {
      switch (e) {
        case "performance_summary_creative_insights":
          return "performance_summary_creative_insights";
        default:
          return "actions_panel";
      }
    }
    function h(e) {
      switch (e) {
        case "performance_summary_creative_insights":
          return "applied_insights";
        default:
          return "performance_summary";
      }
    }
    function y(t) {
      var n,
        a = t.account,
        l = t.actionType,
        u = t.adObjectIds,
        d = t.errors,
        y = t.hideViewMoreButton,
        C = t.isShown,
        b = t.objectType,
        v = t.recommendations,
        S = t.recommendationSource,
        R = t.shouldShowError,
        L = t.shouldShowWarning,
        E = t.warnings,
        k = r("useUgpExperimentationLogTopLevelExposureForAdObject")(
          a.account_id,
          "ads_manager",
          h(S),
          "explicit",
        );
      m(
        function () {
          u.forEach(function (e) {
            k(e);
          });
        },
        [k, u],
      );
      var I = p(
          function () {
            return {
              channel: h(S),
              event_source: S,
              is_actions_panel: !0,
              is_guidance_hub_v3: !1,
              ad_account_id: a.account_id,
            };
          },
          [a.account_id, S],
        ),
        T = [].concat(v, d != null ? d : [], E != null ? E : []),
        D = T.map(function (e) {
          return e.rec;
        }),
        x =
          (n = D[0]) == null || (n = n.scoreLiftData) == null
            ? void 0
            : n.adAccountScore,
        $ = D.reduce(function (e, t) {
          var n, r;
          return (
            e +
            ((n =
              t == null || (r = t.scoreLiftData) == null
                ? void 0
                : r.recLift) != null
              ? n
              : 0)
          );
        }, 0),
        P = T.toSorted(function (e, t) {
          var n, r, o, a;
          return (
            ((n =
              t == null || (r = t.rec) == null || (r = r.scoreLiftData) == null
                ? void 0
                : r.recLift) != null
              ? n
              : 0) -
            ((o =
              e == null || (a = e.rec) == null || (a = a.scoreLiftData) == null
                ? void 0
                : a.recLift) != null
              ? o
              : 0)
          );
        }),
        N = function (n, i) {
          if (
            (n.errorSubStatus != null ||
              n.childrenErrorSubStatus != null ||
              n.grandChildrenErrorSubStatus != null) &&
            R === !0
          )
            return c.createElement(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(r("geoMargin").top12),
                { key: i },
              ),
              c.jsx(r("SYDGuidanceHubV3ErrorsGuidanceCardContainer"), {
                adAccount: a,
                errorGuidanceItem: n,
                objectID: n.objectData.objectID,
                recommendationSource: g(S),
              }),
            );
          if (
            (n.warningSubStatus != null ||
              n.childrenWarningSubStatus != null ||
              n.grandChildrenWarningSubStatus != null) &&
            L === !0
          ) {
            var t,
              l,
              s = f(n.objectData.objectID, b);
            return (
              n.rec == null &&
              c.jsxs(
                r("GeoCard.react"),
                {
                  "data-testid": void 0,
                  xstyle: r("geoMargin").top16,
                  children: [
                    ((t = n.warningSubStatus) == null
                      ? void 0
                      : t.substatusText) &&
                      c.jsxs(r("GeoFlexbox.react"), {
                        alignItems: "center",
                        direction: "row",
                        justifyContent: "space-between",
                        xstyle: [
                          r("geoMargin").top16,
                          r("geoMargin").horiz24,
                          r("geoMargin").bottom8,
                        ],
                        children: [
                          c.jsxs(r("GeoFlexbox.react"), {
                            direction: "column",
                            gap: 8,
                            children: [
                              c.jsxs(r("GeoFlexbox.react"), {
                                direction: "row",
                                gap: 8,
                                children: [
                                  M,
                                  c.jsx(r("GeoHeading.react"), {
                                    "data-testid": void 0,
                                    level: 3,
                                    children:
                                      (l = n.warningSubStatus) == null
                                        ? void 0
                                        : l.substatusText,
                                  }),
                                ],
                              }),
                              c.jsx(r("GeoBaseText.react"), {
                                color: "placeholder",
                                size: "valueDescription",
                                children: n.objectData.objectName,
                              }),
                            ],
                          }),
                          c.jsx(r("AdsGuidanceActionInsightsThumbnail.react"), {
                            objectMedia: s,
                          }),
                        ],
                      }),
                    c.jsx(
                      o("AdsMgmtGuidanceActionsItem.react")
                        .AdsMgmtGuidanceActionsItem,
                      {
                        account: a,
                        adObjectLevel: b,
                        hasHeader: !1,
                        item: n,
                        objectID: n.objectData.objectID,
                        recommendationSource: g(S),
                        xstyle: [
                          r("geoMargin").top16,
                          r("geoMargin").horiz24,
                          r("geoMargin").bottom24,
                        ],
                      },
                      i,
                    ),
                  ],
                },
                i,
              )
            );
          } else if (
            n.rec != null &&
            !(d != null && d.includes(n)) &&
            ((C &&
              !o("AdsMgmtRecommendationsUtils").isRecommendationShownAsWarning(
                n.rec,
              )) ||
              (L === !0 &&
                o("AdsMgmtRecommendationsUtils").isRecommendationShownAsWarning(
                  n.rec,
                )))
          ) {
            var u, m;
            return c.createElement(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(r("geoMargin").top12),
                { key: i },
              ),
              c.jsx(
                r(
                  "AdsGuidanceActionsPanelRecommendationTypeGroupsWidget.react",
                ),
                {
                  adAccount: a,
                  opportunityScore:
                    (u =
                      (m = n.rec) == null || (m = m.scoreLiftData) == null
                        ? void 0
                        : m.adAccountScore) != null
                      ? u
                      : 0,
                  recommendationSource: g(S),
                  scoredRecommendations: r("filterNulls")(
                    [n].map(function (e) {
                      return _(e.rec);
                    }),
                  ),
                },
              ),
            );
          }
        };
      if (T.length === 0 || (!C && R === !1 && L === !1))
        return c.jsx("div", { "data-testid": void 0 });
      var M = o("AdsDeliveryColumnMFRsConstants").getActionItemIcon(l);
      return c.jsx(r("GeoFlexbox.react"), {
        "data-testid": void 0,
        direction: "column",
        gap: 16,
        xstyle: r("geoMargin").bottom20,
        children: c.jsxs(r("GeoFlexbox.react"), {
          direction: "column",
          children: [
            c.jsx(r("AdsErrorBoundary.react"), {
              moduleName:
                i.id + "-SYDGuidanceHubV3RecommendationTypeGroupsWidget",
              children: c.jsx(r("SYDGuidanceHubV3LoggingContext").Provider, {
                value: I,
                children: c.jsx(r("GeoFlexbox.react"), {
                  direction: "column",
                  children: P.map(N),
                }),
              }),
            }),
            y !== !0 &&
              c.jsx(r("GeoButton.react"), {
                "data-testid": void 0,
                label: s._(/*BTDS*/ ""),
                logging: {
                  surface:
                    "ads_guidance_action_insights_recommendations_container_070c",
                },
                onClick: function () {
                  (r("AdsInterfacesLogger").log({
                    data: {
                      ad_account_id: a == null ? void 0 : a.account_id,
                      source: "OpportunityScoreHeader",
                      campaign_optimization_score: x != null ? x : 0,
                      message: JSON.stringify({
                        accountOpportunityScore: x != null ? x : 0,
                        totalScoreUplift: $,
                        osCalculationMethod: o(
                          "AdsGuidanceActionsPerfScoreQEUtils",
                        ).getOpportunityScoreVersionName(),
                      }),
                    },
                    eventName:
                      "opportunity_score_side_panel_info_card_account_overiew_link_click",
                  }),
                    o("AdsMgmtRecommendationsUtils").routeToAccountOverview());
                },
                width: "100%",
                xstyle: r("geoMargin").top12,
              }),
          ],
        }),
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);

__d(
  "AdsBulkEditCampaignOptimizationGoalPlugin",
  [
    "invariant",
    "AdsAPICampaignPaths",
    "AdsBAYouthAdsGuidanceFieldContainer.react",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsBulkEditOptimizationDeliveryContainer.react",
    "AdsBulkValueUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsEditingCampaignEditorContext",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsNameBulkEditPluginUtils",
    "AdsOptimizationStrings",
    "AdsPerformanceGoalLabelString",
    "AdsRoasPlusPlusBulkEditLayout",
    "AdsUniformValue",
    "AdsYouthAdsGuidanceContainer.react",
    "AdsYouthAdsIndonesia18MinAgeUtils",
    "AdsYouthAdsYT2GatingUtils",
    "AdsYouthDeliveryStatusUtils",
    "GeoTableWidth",
    "adsUEditorCampaignKpiExpressionSelectors",
    "isRoasPlusPlusEnabledForAccount",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      if (e.length === 0) return null;
      var n = "optimization_goal",
        a = "targeting",
        i = t == null ? void 0 : t[n];
      (i && t != null) || s(0, 258);
      var l = o("AdsBulkValueUtils").parallelIterator(
          function (e) {
            return { optimization_goal: e[0], targeting: e[1] };
          },
          [i, t[a]],
        ),
        c = l
          .getValues()
          .filter(Boolean)
          .map(function (e) {
            return o(
              "AdsYouthDeliveryStatusUtils",
            ).getDeliveryStatusForOptimizationGoal(
              o("AdsYouthDeliveryStatusUtils").getTargetedAudienceGroups(
                e.targeting.toJS(),
              ),
              e.optimization_goal,
            );
          }),
        d = o("AdsYouthDeliveryStatusUtils").getStrictestDeliveryStatus(
          new Set(c),
        ),
        p = new Set(
          l
            .getValues()
            .filter(Boolean)
            .flatMap(function (e) {
              return Array.from(
                o("AdsYouthDeliveryStatusUtils").getTargetedAudienceGroups(
                  e.targeting.toJS(),
                ),
              );
            }),
        ),
        _ = m(d, p);
      return u.jsxs("div", {
        className: void 0,
        children: [
          u.jsx(r("AdsBulkEditOptimizationDeliveryContainer.react"), {
            campaignIDs: e,
            columnKey: r("AdsCampaignBulkEditColumnKeys").OPTIMIZATION_GOAL,
            isBulkControl: !0,
            optimizationGoal: i,
          }),
          _,
        ],
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t, n) {
      var a = n.className,
        i = t.optimization_goal,
        l = o("AdsYouthDeliveryStatusUtils").getTargetedAudienceGroups(
          t.targeting.toJS(),
        ),
        s = o(
          "AdsYouthDeliveryStatusUtils",
        ).getDeliveryStatusForOptimizationGoal(l, i),
        c = m(s, l, !0),
        d = new (r("AdsUniformValue"))(i);
      return u.jsxs("div", {
        className: r("joinClasses")(void 0, a),
        children: [
          u.jsx(r("AdsBulkEditOptimizationDeliveryContainer.react"), {
            campaignIDs: e,
            columnKey: r("AdsCampaignBulkEditColumnKeys").OPTIMIZATION_GOAL,
            isBulkControl: !1,
            optimizationGoal: d,
          }),
          c,
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t, n) {
      if (
        (n === void 0 && (n = !1),
        e === o("AdsYouthDeliveryStatusUtils").YouthAdsDeliveryStatus.ALLOWED)
      )
        return null;
      if (!o("AdsYouthAdsYT2GatingUtils").isYouthAdsYT2AdExEnabled()) {
        if (
          o(
            "AdsYouthAdsIndonesia18MinAgeUtils",
          ).shouldEnable18MinAgeInIndonesia()
        ) {
          var a = !1;
          return (
            n
              ? (a =
                  t != null &&
                  t.size > 0 &&
                  Array.from(t).every(function (e) {
                    return (
                      (e ===
                        o("AdsYouthDeliveryStatusUtils").YouthAdsAudienceGroup
                          .BAY ||
                        e ===
                          o("AdsYouthDeliveryStatusUtils").YouthAdsAudienceGroup
                            .YT2) &&
                      e !==
                        o("AdsYouthDeliveryStatusUtils").YouthAdsAudienceGroup
                          .ADULT
                    );
                  }))
              : (a =
                  t != null &&
                  t.size > 0 &&
                  Array.from(t).some(function (e) {
                    return (
                      (e ===
                        o("AdsYouthDeliveryStatusUtils").YouthAdsAudienceGroup
                          .BAY ||
                        e ===
                          o("AdsYouthDeliveryStatusUtils").YouthAdsAudienceGroup
                            .YT2) &&
                      e !==
                        o("AdsYouthDeliveryStatusUtils").YouthAdsAudienceGroup
                          .ADULT
                    );
                  })),
            u.jsx(r("AdsBAYouthAdsGuidanceFieldContainer.react"), {
              field: "optimization_goal",
              isBulkEditPanel: !0,
              isError: a,
            })
          );
        }
        return null;
      }
      return u.jsx(r("AdsYouthAdsGuidanceContainer.react"), {
        deliveryStatus: e,
        field: "optimization_goal",
        isBulkEditPanel: !0,
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignOptimizationGoal",
          dialogType: r("AdsBulkEditDialogTypes").OPTIMIZATION_GOAL,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o(
              "adsUEditorCampaignKpiExpressionSelectors",
            ).adsUEditorCampaignIsKpiExpressionEligibleSelector(
              r("AdsEditingCampaignEditorContext"),
            )
              ? o("AdsPerformanceGoalLabelString").getPerformanceGoalLabel()
              : o("AdsBulkEditMenuContent").CAMPAIGN_OPTIMIZATION_GOAL;
          },
          getTooltip: function (t) {
            return t.hasWhatsAppMMOnlyCampaign === !0
              ? o("AdsBulkEditMenuContent")
                  .WHATSAPP_MARKETING_MESSAGES_ONLY_TOOLTIP
              : t.hasSAPCampaign === !0
                ? o("AdsBulkEditMenuContent")
                    .SAP_DISABLED_PERFORMANCE_GOAL_FIELD_TOOLTIP
                : t.isRF === !0
                  ? o("AdsBulkEditMenuContent").CAMPAIGN_RF_TOOLTIP
                  : !o(
                        "adsUEditorCampaignKpiExpressionSelectors",
                      ).adsUEditorCampaignIsKpiExpressionEligibleSelector(
                        r("AdsEditingCampaignEditorContext"),
                      ) &&
                      o("AdsBulkEditMenuItemUtils").isCBOAndHasAutobidCampaign(
                        t,
                      )
                    ? o("AdsBulkEditMenuContent").CBO_WITH_AUTOBID
                    : t.hasBudgetFlex === !0
                      ? o("AdsBulkEditMenuContent").CAMPAIGN_BUDGET_FLEX_TOOLTIP
                      : null;
          },
          getTestID: function () {
            return "quick_edit_optimization_goal_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").OPTIMIZATION_GOAL,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            return (
              t.hasWhatsAppMMOnlyCampaign === !0 ||
              t.hasSAPCampaign === !0 ||
              t.isRF === !0 ||
              (!o(
                "adsUEditorCampaignKpiExpressionSelectors",
              ).adsUEditorCampaignIsKpiExpressionEligibleSelector(
                r("AdsEditingCampaignEditorContext"),
              ) &&
                o("AdsBulkEditMenuItemUtils").isCBOAndHasAutobidCampaign(t)) ||
              t.hasSalesBwPCampaign === !0 ||
              t.hasBudgetFlex === !0
            );
          },
          pivots: { dialogType: r("AdsBulkEditDialogTypes").OPTIMIZATION_GOAL },
          getBulkControlConfig: function () {
            return { renderer: c };
          },
          getSchema: function () {
            return {
              optimization_goal: r("AdsEmptyUniformMixedBulkValueTypes"),
              targeting: r("AdsEmptyUniformMixedBulkValueTypes"),
            };
          },
          columnConfigs: [
            babelHelpers.extends(
              {},
              o(
                "AdsNameBulkEditPluginUtils",
              ).getBulkEditCampaignNameColumnConfig(),
            ),
            {
              cellRenderer: d,
              columnKey: r("AdsCampaignBulkEditColumnKeys").OPTIMIZATION_GOAL,
              label: o(
                "adsUEditorCampaignKpiExpressionSelectors",
              ).adsUEditorCampaignIsKpiExpressionEligibleSelector(
                r("AdsEditingCampaignEditorContext"),
              )
                ? o("AdsPerformanceGoalLabelString").getPerformanceGoalLabel()
                : o("AdsOptimizationStrings").getOptimizationGoalLabel(),
              width: o(
                "isRoasPlusPlusEnabledForAccount",
              ).isRoasPlusPlusEnabledForAccount()
                ? o("GeoTableWidth").pixel(
                    o("AdsRoasPlusPlusBulkEditLayout")
                      .ROAS_PLUS_PLUS_BULK_EDIT_PERFORMANCE_GOAL_COLUMN_WIDTH,
                  )
                : o("GeoTableWidth").pixel(360),
              fieldsPaths: [r("AdsAPICampaignPaths").OPTIMIZATION_GOAL],
            },
          ],
        },
      ),
      _ = p;
    l.default = _;
  },
  98,
);

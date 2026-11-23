__d(
  "AdsBulkEditCampaignFrequencyControlPlugin",
  [
    "fbt",
    "AdsAPICampaignPaths",
    "AdsAuctionFrequencyControlProvider",
    "AdsBulkEditChangeFrequencyControlDataAction",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupFrequencyControlStrings",
    "AdsEditingCampaignEditorContext",
    "AdsFluxHooks",
    "AdsFrequencyControlEditorConstants",
    "AdsNameBulkEditPluginUtils",
    "AdsPECampaignLiveSelectors",
    "AdsReachFrequencyOptimizeDeliveryStrings",
    "AdsReachFrequencyTargetFrequencyControls.react",
    "AdsReachFrequencyUtils",
    "AdsReasonBindings",
    "AdsTargetFrequencyInAuctionPredictionStatusProvider",
    "AdsUEditorSelectors",
    "AdsUnificationContentUtils",
    "GeoTableWidth",
    "ReachFrequencyBalancedFrequencySitevarConfig.experimental",
    "adsCreateSelector",
    "adsUEditorCampaignCanUseTargetFrequencyInAuctionSelector",
    "first",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = r("AdsAuctionFrequencyControlProvider").toFluxSelector(),
      d = r(
        "AdsTargetFrequencyInAuctionPredictionStatusProvider",
      ).toFluxSelector(),
      m = r("adsCreateSelector")(
        [
          c,
          o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(function (e) {
            return e.id;
          }),
        ],
        function (t, n) {
          var e = new Map();
          return (
            n.getValues().forEach(function (n) {
              e.set(n, t.get(n));
            }),
            e
          );
        },
        { name: i.id + ".optionsIndexSelector" },
      ),
      p = r("adsCreateSelector")(
        [
          o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(function (e) {
            return e.id;
          }),
          d,
          r("adsUEditorCampaignCanUseTargetFrequencyInAuctionSelector"),
        ],
        function (t, n, r) {
          var e = new Map();
          return (
            t.getValues().forEach(function (t) {
              var a = n.get(t);
              r && a != null
                ? e.set(
                    t,
                    o("AdsFrequencyControlEditorConstants")
                      .TARGET_FREQUENCY_SELECTOR_OPTION_INDEX,
                  )
                : e.set(
                    t,
                    o("AdsFrequencyControlEditorConstants")
                      .CAP_FREQUENCY_SELECTOR_OPTION_INDEX,
                  );
            }),
            e
          );
        },
        { name: i.id + ".retrievedIndexSelector" },
      ),
      _ = r("adsCreateSelector")(
        [
          o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(function (e) {
            return e.id;
          }),
          m,
          p,
        ],
        function (t, n, r) {
          var e = new Map();
          return (
            t.getValues().forEach(function (t) {
              var a = n.get(t),
                i = r.get(t),
                l = a != null ? a : i;
              e.set(
                t,
                l != null
                  ? l
                  : o("AdsFrequencyControlEditorConstants")
                      .CAP_FREQUENCY_SELECTOR_OPTION_INDEX,
              );
            }),
            e
          );
        },
        { name: i.id + ".selectedIndexSelector" },
      );
    function f(e, t, n) {
      var r,
        a,
        i = o("AdsPECampaignLiveSelectors").getCachedByFieldsSelector()(e, {
          end_time: null,
          start_time: null,
        }),
        l = i.getValue();
      return {
        originalStartDate:
          (r = l == null ? void 0 : l.start_time) != null ? r : t,
        originalEndDate: (a = l == null ? void 0 : l.end_time) != null ? a : n,
      };
    }
    var g = o("AdsFluxHooks").adsFluxContainer(
      function (t) {
        var e = _(r("AdsEditingCampaignEditorContext")),
          n = r("first")(t.campaignIDs),
          a =
            t.isBalancedFrequency === !0 ||
            e.get(n != null ? n : "") ===
              o("AdsFrequencyControlEditorConstants")
                .TARGET_FREQUENCY_SELECTOR_OPTION_INDEX,
          l = function (n) {
            r("AdsBulkEditChangeFrequencyControlDataAction").dispatch(
              {
                adObjectIDs: t.campaignIDs || [],
                frequencyCap: n,
                frequencyCapResetPeriod: t.intervalFrequencyCapResetPeriod || 0,
                columnKey: r("AdsCampaignBulkEditColumnKeys")
                  .CAMPAIGN_FREQUENCY_CONTROL,
                billingEvent: t.billingEvent || "",
              },
              {
                line: "178",
                module: "AdsBulkEditCampaignFrequencyControlPlugin.js",
                moduleID: i.id,
              },
            );
          },
          s = function (n) {
            r("AdsBulkEditChangeFrequencyControlDataAction").dispatch(
              {
                adObjectIDs: t.campaignIDs || [],
                frequencyCap: t.intervalFrequencyCap || 0,
                frequencyCapResetPeriod: n,
                columnKey: r("AdsCampaignBulkEditColumnKeys")
                  .CAMPAIGN_FREQUENCY_CONTROL,
                billingEvent: t.billingEvent || "",
              },
              {
                line: "187",
                module: "AdsBulkEditCampaignFrequencyControlPlugin.js",
                moduleID: i.id,
              },
            );
          };
        return u.jsx(r("AdsReachFrequencyTargetFrequencyControls.react"), {
          campaignDuration: t.campaignDuration,
          campaignIDs: t.campaignIDs,
          intervalFrequencyCap: t.intervalFrequencyCap,
          intervalFrequencyCapResetPeriod: t.intervalFrequencyCapResetPeriod,
          isBalancedFrequency: a,
          isFrequencyControlDisabled: !1,
          isFrequencyControlFromAuction: !0,
          isMidCampaignEdit: t.isMidCampaignEdit,
          isTargetFrequencyDisabled: t.isTargetFrequencyDisabled,
          onCapFrequencyChange: l,
          onCapFrequencyResetIntervalChange: s,
          onSelectionChange: function () {},
          onTargetFrequencyChange: l,
          onTargetFrequencyResetIntervalChange: s,
          renderCompact: !0,
          showTargetedFrequencyControls: !0,
          targetFrequency: t.targetFrequency,
          targetFrequencyResetPeriod: t.targetFrequencyResetPeriod,
        });
      },
      null,
      { containerName: i.id },
    );
    function h(e, t, n) {
      var a,
        i = r("first")((a = t.frequency_control_specs) != null ? a : []),
        l =
          parseInt(String(i == null ? void 0 : i.get("max_frequency")), 10) ||
          r("ReachFrequencyBalancedFrequencySitevarConfig.experimental")
            .MINIMUM_TARGET_FREQUENCY,
        s =
          parseInt(String(i == null ? void 0 : i.get("interval_days")), 10) ||
          r("ReachFrequencyBalancedFrequencySitevarConfig.experimental")
            .MINIMUM_TARGET_FREQUENCY_RESET_PERIOD_IN_DAYS,
        c = new Date(t.start_time),
        d = t.end_time,
        m =
          d != null
            ? new Date(d)
            : new Date(new Date(c).setDate(c.getDate() + 90)),
        p = o("AdsReasonBindings").getDaysBetween(c, m),
        _ =
          t.lifetime_budget != null &&
          t.lifetime_budget > 0 &&
          (t.daily_budget == null || t.daily_budget === 0),
        h = t.bid_amount == null,
        y = _ && h && p >= 7,
        C = t.rf_prediction_id != null,
        b = r("AdsCampaignDraftFragmentStore").isNew(t.id),
        v = f(t.id, t.start_time, t.end_time),
        S = v.originalEndDate,
        R = v.originalStartDate,
        L = o(
          "AdsReachFrequencyUtils",
        ).getIsMidCampaignEditAndImmutableCampaign({
          isNewCampaign: b,
          originalStartDate: R,
          originalEndDate: S,
          campaignEffectiveStatus: t.effective_status,
        }),
        E = L.isMidCampaignEdit;
      return u.jsx("div", {
        className: r("joinClasses")(void 0, n.className),
        children: u.jsx(g, {
          billingEvent: t.billing_event,
          campaignDuration: p,
          campaignIDs: e,
          intervalFrequencyCap: l,
          intervalFrequencyCapResetPeriod: s,
          isBalancedFrequency: C,
          isFrequencyControlDisabled: !1,
          isFrequencyControlFromAuction: !0,
          isMidCampaignEdit: E,
          isTargetFrequencyDisabled: y,
          renderCompact: !0,
          showTargetedFrequencyControls: !0,
          targetFrequency: l,
          targetFrequencyResetPeriod: s,
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    var y = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignFrequencyControl",
          dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_FREQUENCY_CONTROL,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").CAMPAIGN_FREQUENCY_CONTROL;
          },
          getTooltip: function (t) {
            var e, n;
            return t.hasCampaignGroupFrequencyControl === !0
              ? o("AdsCampaignGroupFrequencyControlStrings")
                  .CAMPAIGN_FREQUENCY_CONTROL_DISABLED_BY_CAMPAIGN_GROUP_FREQUENCY_CONTROL
              : ((e = t.isCBO) == null ? void 0 : e.all) === !0 ||
                  ((n = t.isCBO) == null ? void 0 : n.some) === !0 ||
                  t.isCampaignLengthLessThan7Days === !0 ||
                  t.isCampaignUsingBidControl === !0
                ? o(
                    "AdsUnificationContentUtils",
                  ).getAUOSUpdateACBNewNameOrDefault(
                    o("AdsReachFrequencyOptimizeDeliveryStrings")
                      .AUOS_TARGET_FREQUENCY_REQUIREMENTS_NOTICE_REWORD,
                    o("AdsReachFrequencyOptimizeDeliveryStrings")
                      .TARGET_FREQUENCY_REQUIREMENTS_NOTICE_REWORD,
                  )
                : null;
          },
          getTestID: function () {
            return "quick_edit_frequency_control_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").CAMPAIGN_FREQUENCY_CONTROL,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            var e, n;
            return (
              t.hasCampaignGroupFrequencyControl === !0 ||
              t.isRF === !0 ||
              ((e = t.isCBO) == null ? void 0 : e.all) === !0 ||
              ((n = t.isCBO) == null ? void 0 : n.some) === !0 ||
              t.isCampaignLengthLessThan7Days === !0 ||
              t.isCampaignUsingBidControl === !0
            );
          },
          isHidden: function (t) {
            return t.canUseTargetFrequencyInAuction !== !0;
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_FREQUENCY_CONTROL,
          },
          getBulkControlConfig: function () {
            return null;
          },
          columnConfigs: [
            babelHelpers.extends(
              {},
              o(
                "AdsNameBulkEditPluginUtils",
              ).getBulkEditCampaignNameColumnConfig(),
            ),
            {
              cellRenderer: h,
              columnKey: r("AdsCampaignBulkEditColumnKeys")
                .CAMPAIGN_FREQUENCY_CONTROL,
              label: s._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(650),
              fieldsPaths: [r("AdsAPICampaignPaths").FREQUENCY_CONTROL_SPECS],
            },
          ],
        },
      ),
      C = y;
    l.default = C;
  },
  226,
);

__d(
  "AdsBulkEditCampaignGroupFrequencyControlPlugin",
  [
    "AdsAPICampaignGroupPaths",
    "AdsBulkEditChangeCampaignGroupFrequencyControlDataAction",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsCampaignGroupBulkEditColumnKeys",
    "AdsCampaignGroupBulkEditStore",
    "AdsCampaignGroupFrequencyControlStrings",
    "AdsFrequencyControlEditorConstants",
    "AdsFrequencyControlGKUtils",
    "AdsNameBulkEditPluginUtils",
    "AdsReachFrequencyTargetFrequencyControls.react",
    "DateTime",
    "GeoTableWidth",
    "emptyFunction",
    "first",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      r("AdsBulkEditChangeCampaignGroupFrequencyControlDataAction").dispatch(
        {
          adObjectIDs: e,
          columnKey: r("AdsCampaignGroupBulkEditColumnKeys")
            .CAMPAIGN_GROUP_FREQUENCY_CONTROL,
          frequencyControlSpecs: t,
        },
        {
          line: "52",
          module: "AdsBulkEditCampaignGroupFrequencyControlPlugin.js",
          moduleID: i.id,
        },
      );
    }
    function c(e, t, n) {
      var a,
        i = r("first")(e),
        l = r("first")((a = t.frequency_control_specs) != null ? a : []);
      if (i == null || l == null)
        return s.jsx("div", {
          className: r("joinClasses")(void 0, n.className),
          children: o("AdsCampaignGroupFrequencyControlStrings")
            .CAMPAIGN_GROUP_FREQUENCY_CONTROL_NOT_ENABLED,
        });
      var c = l.toJS(),
        d = c.type === "TARGET",
        m = t.start_time,
        p = r("DateTime").now(0).getUnixTimestampSeconds(),
        _ =
          m != null
            ? r("DateTime").createFromISOString(m, 0).getUnixTimestampSeconds()
            : 0,
        f = _ > 0 && _ < p,
        g = r("AdsCampaignGroupBulkEditStore").getCampaignGroupDuration(i),
        h = function (n) {
          u(e, [babelHelpers.extends({}, c, { max_frequency: n })]);
        },
        y = function (n) {
          u(e, [babelHelpers.extends({}, c, { interval_days: n })]);
        };
      return s.jsx("div", {
        className: r("joinClasses")(void 0, n.className),
        children: s.jsx(r("AdsReachFrequencyTargetFrequencyControls.react"), {
          campaignDuration:
            g != null
              ? g
              : o("AdsFrequencyControlEditorConstants")
                  .DEFAULT_MAX_FREQUENCY_RESET_PERIOD,
          intervalFrequencyCap: d ? null : c.max_frequency,
          intervalFrequencyCapResetPeriod: d ? null : c.interval_days,
          isBalancedFrequency: d,
          isFrequencyControlDisabled: !1,
          isFrequencyControlFromAuction: !0,
          isMidCampaignEdit: f,
          onCapFrequencyChange: h,
          onCapFrequencyResetIntervalChange: y,
          onSelectionChange: r("emptyFunction"),
          onTargetFrequencyChange: h,
          onTargetFrequencyResetIntervalChange: y,
          renderCompact: !0,
          showTargetedFrequencyControls: !0,
          targetFrequency: d ? c.max_frequency : null,
          targetFrequencyResetPeriod: d ? c.interval_days : null,
        }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = babelHelpers.extends(
        {
          type: "campaignGroupBulkEditMenu",
          key: "campaignGroupFrequencyControl",
          dialogType: r("AdsBulkEditDialogTypes")
            .CAMPAIGN_GROUP_FREQUENCY_CONTROL,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsCampaignGroupFrequencyControlStrings")
              .CAMPAIGN_FREQUENCY_CONTROL_TITLE;
          },
          getTestID: function () {
            return "quick_edit_campaign_group_frequency_control_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").CAMPAIGN_GROUP_FREQUENCY_CONTROL,
              "campaign",
              t.source,
            );
          },
          isDisabled: function () {
            return !1;
          },
          isHidden: function () {
            return !o(
              "AdsFrequencyControlGKUtils",
            ).isAccountEligibleForTargetFrequencyAuctionCBOWriteExperience();
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes")
              .CAMPAIGN_GROUP_FREQUENCY_CONTROL,
          },
          getBulkControlConfig: function () {
            return null;
          },
          columnConfigs: [
            babelHelpers.extends(
              {},
              o(
                "AdsNameBulkEditPluginUtils",
              ).getBulkEditCampaignGroupNameColumnConfig(),
            ),
            {
              cellRenderer: c,
              columnKey: r("AdsCampaignGroupBulkEditColumnKeys")
                .CAMPAIGN_GROUP_FREQUENCY_CONTROL,
              label: o("AdsBulkEditMenuContent").CAMPAIGN_FREQUENCY_CONTROL,
              width: o("GeoTableWidth").pixel(650),
              fieldsPaths: [
                r("AdsAPICampaignGroupPaths").FREQUENCY_CONTROL_SPECS,
                r("AdsAPICampaignGroupPaths").START_TIME,
              ],
            },
          ],
        },
      ),
      m = d;
    l.default = m;
  },
  98,
);

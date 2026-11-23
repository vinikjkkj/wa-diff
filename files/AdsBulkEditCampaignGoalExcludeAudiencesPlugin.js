__d(
  "AdsBulkEditCampaignGoalExcludeAudiencesPlugin",
  [
    "fbt",
    "AdsAPICampaignPaths",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuItemUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignGoalExpressionUtils",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsNameBulkEditPluginUtils",
    "AdsUEditorCampaignGoalExcludeAudiencesBulkEditContainer.react",
    "GeoTableWidth",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = 400,
      d = o("AdsCampaignGoalExpressionUtils").shouldSplitExclusionSection();
    function m(e, t) {
      return u.jsx(
        r("AdsUEditorCampaignGoalExcludeAudiencesBulkEditContainer.react"),
        { disabled: e.length === 0 },
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e, t, n) {
      return u.jsx(
        r("AdsUEditorCampaignGoalExcludeAudiencesBulkEditContainer.react"),
        {},
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignGoalExcludeAudiences",
          dialogType: r("AdsBulkEditDialogTypes")
            .CAMPAIGN_GOAL_EXCLUDE_AUDIENCES,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o(
              "AdsCampaignGoalExpressionUtils",
            ).shouldSplitExclusionSection()
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "");
          },
          getTestID: function () {
            return "quick_edit_exclude_audiences_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").CAMPAIGN_GOAL_EXCLUDE_AUDIENCES,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            return !t.allCampaignsHaveNCAOnlyReachNewGoalType;
          },
          getTooltip: function (t) {
            return t.allCampaignsHaveNCAOnlyReachNewGoalType
              ? null
              : s._(/*BTDS*/ "");
          },
          isHidden: function (t) {
            return !t.shouldRenderCampaignGoalPGDSection;
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes")
              .CAMPAIGN_GOAL_EXCLUDE_AUDIENCES,
          },
          getSchema: function () {
            return { campaign_goal: r("AdsEmptyUniformMixedBulkValueTypes") };
          },
          getBulkControlConfig: function () {
            return { renderer: m };
          },
          columnConfigs: [
            babelHelpers.extends(
              {},
              o(
                "AdsNameBulkEditPluginUtils",
              ).getBulkEditCampaignNameColumnConfig(),
            ),
            d
              ? {
                  cellRenderer: p,
                  columnKey: r("AdsCampaignBulkEditColumnKeys")
                    .CAMPAIGN_GOAL_EXISTING_CUSTOMER_EXCLUSION,
                  label: s._(/*BTDS*/ ""),
                  width: o("GeoTableWidth").pixel(c),
                  fieldsPaths: [
                    r("AdsAPICampaignPaths").CAMPAIGN_GOAL
                      .EXISTING_CUSTOMERS_EXCLUSIONS,
                    r("AdsAPICampaignPaths").CAMPAIGN_GOAL
                      .EXISTING_CUSTOMERS_AUTO_EXCLUSION_RETENTION_DAYS,
                  ],
                }
              : {
                  cellRenderer: p,
                  columnKey: r("AdsCampaignBulkEditColumnKeys")
                    .CAMPAIGN_GOAL_EXCLUDE_AUDIENCES,
                  label: s._(/*BTDS*/ ""),
                  width: o("GeoTableWidth").pixel(c),
                  fieldsPaths: [
                    r("AdsAPICampaignPaths").CAMPAIGN_GOAL
                      .EXISTING_CUSTOMERS_EXCLUSIONS,
                    r("AdsAPICampaignPaths").CAMPAIGN_GOAL
                      .ENGAGED_AUDIENCES_EXCLUSIONS,
                    r("AdsAPICampaignPaths").CAMPAIGN_GOAL
                      .EXISTING_CUSTOMERS_AUTO_EXCLUSION_RETENTION_DAYS,
                  ],
                },
          ],
        },
      ),
      f = _;
    l.default = f;
  },
  226,
);

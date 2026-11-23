__d(
  "AdsBulkEditCampaignGoalExcludeEngagedAudiencesPlugin",
  [
    "fbt",
    "AdsAPICampaignPaths",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuItemUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsNameBulkEditPluginUtils",
    "AdsUEditorCampaignGoalExcludeEngagedAudiencesBulkEditContainer.react",
    "GeoTableWidth",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = 400;
    function d(e, t) {
      return u.jsx(
        r(
          "AdsUEditorCampaignGoalExcludeEngagedAudiencesBulkEditContainer.react",
        ),
        { disabled: e.length === 0 },
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t, n) {
      return u.jsx(
        r(
          "AdsUEditorCampaignGoalExcludeEngagedAudiencesBulkEditContainer.react",
        ),
        {},
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignGoalExcludeEngagedAudiences",
          dialogType: r("AdsBulkEditDialogTypes")
            .CAMPAIGN_GOAL_EXCLUDE_ENGAGED_AUDIENCES,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return s._(/*BTDS*/ "");
          },
          getTestID: function () {
            return "quick_edit_exclude_engaged_audiences_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes")
                .CAMPAIGN_GOAL_EXCLUDE_ENGAGED_AUDIENCES,
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
              .CAMPAIGN_GOAL_EXCLUDE_ENGAGED_AUDIENCES,
          },
          getSchema: function () {
            return { campaign_goal: r("AdsEmptyUniformMixedBulkValueTypes") };
          },
          getBulkControlConfig: function () {
            return { renderer: d };
          },
          columnConfigs: [
            babelHelpers.extends(
              {},
              o(
                "AdsNameBulkEditPluginUtils",
              ).getBulkEditCampaignNameColumnConfig(),
            ),
            {
              cellRenderer: m,
              columnKey: r("AdsCampaignBulkEditColumnKeys")
                .CAMPAIGN_GOAL_AUDIENCE_ENGAGEMENT,
              label: s._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(c),
              fieldsPaths: [
                r("AdsAPICampaignPaths").CAMPAIGN_GOAL
                  .ENGAGED_AUDIENCES_EXCLUSIONS,
              ],
            },
          ],
        },
      ),
      _ = p;
    l.default = _;
  },
  226,
);

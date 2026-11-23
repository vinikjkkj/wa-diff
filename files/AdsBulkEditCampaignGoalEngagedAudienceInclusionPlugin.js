__d(
  "AdsBulkEditCampaignGoalEngagedAudienceInclusionPlugin",
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
    "AdsUEditorCampaignGoalEngagedAudienceInclusionBulkEditContainer.react",
    "GeoTableWidth",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = 400;
    function d(e, t) {
      return e.length === 0
        ? null
        : u.jsx(
            r(
              "AdsUEditorCampaignGoalEngagedAudienceInclusionBulkEditContainer.react",
            ),
            {},
          );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t, n) {
      return u.jsx(
        r(
          "AdsUEditorCampaignGoalEngagedAudienceInclusionBulkEditContainer.react",
        ),
        {},
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignGoalEngagedAudienceInclusion",
          dialogType: r("AdsBulkEditDialogTypes")
            .CAMPAIGN_GOAL_ENGAGED_AUDIENCE_INCLUSION,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return s._(/*BTDS*/ "");
          },
          getTestID: function () {
            return "quick_edit_engaged_audience_inclusion_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes")
                .CAMPAIGN_GOAL_ENGAGED_AUDIENCE_INCLUSION,
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
            return (
              t.shouldRenderCampaignGoalPGDSection !== !0 ||
              !o("AdsCampaignGoalExpressionUtils").shouldUseGoalExpressionFull()
            );
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes")
              .CAMPAIGN_GOAL_ENGAGED_AUDIENCE_INCLUSION,
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
                .CAMPAIGN_GOAL_ENGAGED_AUDIENCE_INCLUSION,
              label: s._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(c),
              fieldsPaths: [
                r("AdsAPICampaignPaths").CAMPAIGN_GOAL
                  .ENGAGED_AUDIENCES_INCLUSIONS,
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

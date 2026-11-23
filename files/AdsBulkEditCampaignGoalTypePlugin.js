__d(
  "AdsBulkEditCampaignGoalTypePlugin",
  [
    "fbt",
    "AdsAPICampaignPaths",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuItemUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsNameBulkEditPluginUtils",
    "AdsUEditorCampaignNCARecommendationsBulkEditMount.react",
    "AdsUEditorCampaignTopLevelGoalEditorContainer.react",
    "GeoTableWidth",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = 400;
    function d(e, t) {
      return u.jsxs("div", {
        children: [
          u.jsx(r("AdsUEditorCampaignTopLevelGoalEditorContainer.react"), {
            disabled: e.length === 0,
          }),
          e.length > 0 &&
            u.jsx(
              r("AdsUEditorCampaignNCARecommendationsBulkEditMount.react"),
              {},
            ),
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t, n) {
      return u.jsx("div", {
        className: r("joinClasses")(void 0, n.className),
        children: u.jsx(
          r("AdsUEditorCampaignTopLevelGoalEditorContainer.react"),
          {},
        ),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignGoalType",
          dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_GOAL_TYPE,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return s._(/*BTDS*/ "");
          },
          getTestID: function () {
            return "quick_edit_campaign_goal_type_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").CAMPAIGN_GOAL_TYPE,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            return !1;
          },
          isHidden: function (t) {
            return t.shouldRenderCampaignGoalPGDSection !== !0;
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes").CAMPAIGN_GOAL_TYPE,
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
              columnKey: r("AdsCampaignBulkEditColumnKeys").CAMPAIGN_GOAL_TYPE,
              label: s._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(c),
              fieldsPaths: [r("AdsAPICampaignPaths").CAMPAIGN_GOAL.TYPE],
            },
          ],
        },
      ),
      _ = p;
    l.default = _;
  },
  226,
);

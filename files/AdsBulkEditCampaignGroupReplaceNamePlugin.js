__d(
  "AdsBulkEditCampaignGroupReplaceNamePlugin",
  [
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        { type: "campaignGroupBulkEditMenu", key: "campaignGroupReplaceName" },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").FIND_AND_REPLACE_LABEL;
          },
          getTestID: function () {
            return "quick_edit_find_and_replace_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").REPLACE_NAME,
              "campaign",
              t.source,
            );
          },
          isDisabled: function (t) {
            return !1;
          },
          dialogType: r("AdsBulkEditDialogTypes").REPLACE_NAME,
          pivots: { dialogType: r("AdsBulkEditDialogTypes").REPLACE_NAME },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);

__d(
  "AdsBulkEditAdgroupCapaGenderPlugin",
  [
    "fbt",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "CapaUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = babelHelpers.extends(
        {
          type: "adgroupBulkEditMenu",
          key: "adgroupCapaGender",
          dialogType: r("AdsBulkEditDialogTypes").ADGROUP_CAPA_GENDER,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").ADGROUP_CAPA_GENDER;
          },
          getTestID: function () {
            return "quick_edit_adgroup_capa_gender_button";
          },
          getTooltip: function (t) {
            return s._(/*BTDS*/ "");
          },
          isDisabled: function (t) {
            return !0;
          },
          isHidden: function (t) {
            return (
              !r("CapaUtils").isCapaEnabled() ||
              t.hasCapaCampaign !== !0 ||
              t.hasCapaL0Campaign === !0
            );
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes").ADGROUP_CAPA_GENDER,
          },
        },
      ),
      u = e;
    l.default = u;
  },
  226,
);

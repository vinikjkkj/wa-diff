__d(
  "AdsBulkEditAdgroupCapaAudiencePlugin",
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
          key: "adgroupCapaAudience",
          dialogType: r("AdsBulkEditDialogTypes").ADGROUP_CAPA_AUDIENCE,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").ADGROUP_CAPA_AUDIENCE;
          },
          getTestID: function () {
            return "quick_edit_adgroup_capa_audience_button";
          },
          getTooltip: function (t) {
            return s._(/*BTDS*/ "");
          },
          isDisabled: function (t) {
            return !0;
          },
          isHidden: function (t) {
            return (
              !r("CapaUtils").isCapaL0OpenBetaEnabled() ||
              t.hasCapaL0Campaign !== !0
            );
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes").ADGROUP_CAPA_AUDIENCE,
          },
        },
      ),
      u = e;
    l.default = u;
  },
  226,
);

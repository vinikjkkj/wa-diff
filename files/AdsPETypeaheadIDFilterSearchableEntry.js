__d(
  "AdsPETypeaheadIDFilterSearchableEntry",
  [
    "AdsObjectTypes",
    "AdsPEFilterFieldConfig",
    "AdsPEFilterFields",
    "AdsPETypeaheadIDBaseFilterSearchableEntry",
    "AdsPETypeaheadSearchableEntryTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        ((e = {}),
        (e[r("AdsObjectTypes").CAMPAIGN_GROUP] =
          "SEARCH_BY_CAMPAIGN_GROUP_IDS"),
        (e[r("AdsObjectTypes").CAMPAIGN] = "SEARCH_BY_CAMPAIGN_IDS"),
        (e[r("AdsObjectTypes").ADGROUP] = "SEARCH_BY_ADGROUP_IDS"),
        e),
      u = "ANY",
      c = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getFilterFieldType = function (t) {
            return s[t];
          }),
          (n.getFilterField = function (t) {
            return r("AdsPEFilterFields")[t];
          }),
          (n.getFilterFieldsConfig = function () {
            return r("AdsPEFilterFieldConfig");
          }),
          (n.getFilterOperator = function () {
            return u;
          }),
          (n.getEntryType = function () {
            return o("AdsPETypeaheadSearchableEntryTypes").ID;
          }),
          (t.create = function (n) {
            return new t({
              auxiliaryData: n,
              title: "",
              uniqueID: "id_filter_" + n.objectType,
              type: o("AdsPETypeaheadSearchableEntryTypes").ID,
            });
          }),
          t
        );
      })(r("AdsPETypeaheadIDBaseFilterSearchableEntry"));
    l.default = c;
  },
  98,
);

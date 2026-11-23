__d(
  "AdsPETypeaheadNameFilterSearchableEntry",
  [
    "AdsObjectTypes",
    "AdsPEFilterFieldConfig",
    "AdsPEFilterFields",
    "AdsPETypeaheadFilterInputUtils",
    "AdsPETypeaheadNameBaseFilterSearchableEntry",
    "AdsPETypeaheadSearchableEntryTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        ((e = {}),
        (e[r("AdsObjectTypes").CAMPAIGN_GROUP] =
          "SEARCH_BY_CAMPAIGN_GROUP_NAME"),
        (e[r("AdsObjectTypes").CAMPAIGN] = "SEARCH_BY_CAMPAIGN_NAME"),
        (e[r("AdsObjectTypes").ADGROUP] = "SEARCH_BY_ADGROUP_NAME"),
        e),
      u = (function (e) {
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
            return "CONTAINS_ANY";
          }),
          (n.getJSONStringInputForOrFilter = function (t) {
            return o("AdsPETypeaheadFilterInputUtils").parseFilterValueTokens(
              t,
            );
          }),
          (n.getParseFilterValue = function (t) {
            return typeof t == "string" && t.trim() !== ""
              ? this.getJSONStringInputForOrFilter(t)
              : t;
          }),
          (n.getEntryType = function () {
            return o("AdsPETypeaheadSearchableEntryTypes").NAME;
          }),
          (t.create = function (n) {
            return new t({
              auxiliaryData: n,
              title: "",
              uniqueID: "name_filter_" + n.objectType,
              type: o("AdsPETypeaheadSearchableEntryTypes").NAME,
            });
          }),
          t
        );
      })(r("AdsPETypeaheadNameBaseFilterSearchableEntry"));
    l.default = u;
  },
  98,
);

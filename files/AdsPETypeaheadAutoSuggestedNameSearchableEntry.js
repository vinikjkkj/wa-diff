__d(
  "AdsPETypeaheadAutoSuggestedNameSearchableEntry",
  [
    "fbt",
    "AdsObjectTypes",
    "AdsPEFilterFieldConfig",
    "AdsPEFilterFields",
    "AdsPETypeaheadFilterHighlightedText.react",
    "AdsPETypeaheadFilterInputUtils",
    "AdsPETypeaheadNameBaseFilterSearchableEntry",
    "AdsPETypeaheadSearchableEntryTypes",
    "AdsPETypeaheadViewLabel.react",
    "enumUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d =
        ((e = {}),
        (e[r("AdsObjectTypes").CAMPAIGN_GROUP] =
          "SEARCH_BY_CAMPAIGN_GROUP_NAME"),
        (e[r("AdsObjectTypes").CAMPAIGN] = "SEARCH_BY_CAMPAIGN_NAME"),
        (e[r("AdsObjectTypes").ADGROUP] = "SEARCH_BY_ADGROUP_NAME"),
        e),
      m = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getFilterFieldType = function (t) {
            return d[t];
          }),
          (n.getFilterField = function (t) {
            return o("enumUtils").assertFromKey(t, r("AdsPEFilterFields"));
          }),
          (n.getFilterFieldsConfig = function () {
            return r("AdsPEFilterFieldConfig");
          }),
          (n.getFilterOperator = function () {
            return "CONTAINS_ALL";
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
            return o("AdsPETypeaheadSearchableEntryTypes").AUTOSUGGESTED_NAME;
          }),
          (n.getViewLabel = function (t) {
            var e,
              n = (e = this.getAuxiliaryData()) == null ? void 0 : e.objectType,
              o =
                n === r("AdsObjectTypes").CAMPAIGN
                  ? s._(/*BTDS*/ "")
                  : n === r("AdsObjectTypes").ADGROUP
                    ? s._(/*BTDS*/ "")
                    : (n === r("AdsObjectTypes").CAMPAIGN_GROUP,
                      s._(/*BTDS*/ ""));
            return c.jsx(r("AdsPETypeaheadViewLabel.react"), {
              description: o,
              label: s._(/*BTDS*/ "", [
                s._implicitParam(
                  "=m0",
                  c.jsx(r("AdsPETypeaheadFilterHighlightedText.react"), {
                    textToHighlight: t,
                    textToSearch: this.getTitle(),
                    children: s._(/*BTDS*/ ""),
                  }),
                ),
              ]),
              truncatedTooltip: this.getTitle(),
            });
          }),
          (t.create = function (n) {
            return new t({
              auxiliaryData: n,
              title: "",
              uniqueID: "autosuggested_name_filter_" + n.objectType,
              type: o("AdsPETypeaheadSearchableEntryTypes").AUTOSUGGESTED_NAME,
            });
          }),
          t
        );
      })(r("AdsPETypeaheadNameBaseFilterSearchableEntry"));
    l.default = m;
  },
  226,
);

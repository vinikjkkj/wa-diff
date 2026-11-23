__d(
  "AdsPETypeaheadActionCategoryFilterSearchableEntry",
  [
    "fbt",
    "invariant",
    "$InternalEnum",
    "AdsGenericFilter",
    "AdsGenericFilterFieldConfigUtil",
    "AdsGenericFilterSet",
    "AdsPEFilterFieldConfig",
    "AdsPEFilterFields",
    "AdsPEFilterLabels",
    "AdsPEFilterOperatorConfigUtil",
    "AdsPETypeaheadAbstractSearchableEntry",
    "AdsPETypeaheadFilterHighlightedText.react",
    "AdsPETypeaheadSearchableEntryApplyBehaviors",
    "AdsPETypeaheadSearchableEntryTypes",
    "GeoBaseText.react",
    "expectationViolation",
    "firstx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = n("$InternalEnum").Mirrored([
        "ADGROUP",
        "CAMPAIGN",
        "CAMPAIGN_GROUP",
      ]),
      m = (function (e) {
        function t(t) {
          var n, o, a;
          a = e.call(this, t) || this;
          var i = (n = t.auxiliaryData) == null ? void 0 : n.adObjectLevel,
            l = (o = t.auxiliaryData) == null ? void 0 : o.actionCategory;
          (i != null || u(0, 102123), l != null || u(0, 102124));
          var s = a.getFilterFieldType(i),
            c = a.getFilterField(s),
            d = a.getFilterOperator(),
            m = a.getParseFilterValue(l);
          return (
            (a.filterSet = new (r("AdsGenericFilterSet"))([
              new (r("AdsGenericFilter"))(c, d, m),
            ])),
            a
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getFilterFieldType = function (t) {
            return t === d.ADGROUP
              ? "ADGROUP_ACTION_CATEGORIES"
              : t === d.CAMPAIGN
                ? "CAMPAIGN_ACTION_CATEGORIES"
                : t === d.CAMPAIGN_GROUP
                  ? "CAMPAIGN_GROUP_ACTION_CATEGORIES"
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          t,
                      );
                    })();
          }),
          (n.getFilterField = function (t) {
            return r("AdsPEFilterFields")[t];
          }),
          (n.getApplyBehavior = function () {
            return r("AdsPETypeaheadSearchableEntryApplyBehaviors").MERGE;
          }),
          (n.getFilterFieldsConfig = function () {
            return r("AdsPEFilterFieldConfig");
          }),
          (n.getFilterOperator = function () {
            return "IN";
          }),
          (n.getParseFilterValue = function (t) {
            return [t];
          }),
          (n.getEntryType = function () {
            return o("AdsPETypeaheadSearchableEntryTypes").ACTION_CATEGORIES;
          }),
          (n.getViewLabel = function (t) {
            var e = r("firstx")(this.getFilterSet().getValues()),
              n = r("AdsGenericFilterFieldConfigUtil").getConfigByFieldOrNull(
                this.getFilterFieldsConfig(),
                e.getField(),
              );
            if (!n)
              return (
                r("expectationViolation")(
                  "Cannot find field config for filter: %s",
                  e.toString(),
                ),
                null
              );
            var o = r("AdsPEFilterOperatorConfigUtil")(
                n,
                this.getFilterOperator(),
              ),
              a = o.text;
            return s._(/*BTDS*/ "", [
              s._param("objectName", n.text),
              s._param(
                "operator",
                c.jsx(r("GeoBaseText.react"), {
                  color: "placeholder",
                  size: "value",
                  children: a,
                }),
              ),
              s._param(
                "queryString",
                c.jsx(r("AdsPETypeaheadFilterHighlightedText.react"), {
                  textToHighlight: t,
                  textToSearch: this.getTitle(),
                }),
              ),
            ]);
          }),
          (t.create = function (n) {
            var e = n.adObjectLevel;
            return new t({
              auxiliaryData: n,
              title: o("AdsPEFilterLabels")
                .getActionCategoryFilterLabel(n.actionCategory)
                .toString(),
              uniqueID: "action_category_filter_" + e + "_" + n.actionCategory,
              type: o("AdsPETypeaheadSearchableEntryTypes").ACTION_CATEGORIES,
            });
          }),
          t
        );
      })(r("AdsPETypeaheadAbstractSearchableEntry"));
    ((l.ActionFilterFieldObjectLevel = d),
      (l.AdsPETypeaheadActionCategoryFilterSearchableEntry = m));
  },
  226,
);

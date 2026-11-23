__d(
  "AdsPETypeaheadAutoSuggestedLabelFilterSearchableEntry",
  [
    "fbt",
    "invariant",
    "AdsGenericFilter",
    "AdsGenericFilterFieldConfigUtil",
    "AdsGenericFilterSet",
    "AdsPEFilterFieldConfig",
    "AdsPEFilterFields",
    "AdsPEFilterOperatorConfigUtil",
    "AdsPETypeaheadAbstractSearchableEntry",
    "AdsPETypeaheadFilterHighlightedText.react",
    "AdsPETypeaheadSearchableEntryApplyBehaviors",
    "AdsPETypeaheadSearchableEntryTypes",
    "AdsPETypeaheadViewLabel.react",
    "GeoBaseText.react",
    "expectationViolation",
    "firstx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = (function (e) {
        function t(t) {
          var n, o, a, i;
          i = e.call(this, t) || this;
          var l = (n = t.auxiliaryData) == null ? void 0 : n.objectLevel,
            s =
              (o = (a = t.auxiliaryData) == null ? void 0 : a.labelEntID) !=
              null
                ? o
                : "";
          (l != null || u(0, 106921), s != null || u(0, 107683));
          var c = i.getFilterFieldType(),
            d = i.getFilterField(c),
            m = i.getFilterOperator();
          return (
            (i.filterSet = new (r("AdsGenericFilterSet"))([
              new (r("AdsGenericFilter"))(d, m, [s]),
            ])),
            i
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getFilterFieldType = function () {
            return "SEARCH_BY_LABEL";
          }),
          (n.getFilterField = function (t) {
            return r("AdsPEFilterFields")[t];
          }),
          (n.getFilterFieldsConfig = function () {
            return r("AdsPEFilterFieldConfig");
          }),
          (n.getApplyBehavior = function () {
            return r("AdsPETypeaheadSearchableEntryApplyBehaviors").MERGE;
          }),
          (n.getFilterOperator = function () {
            return "ALL";
          }),
          (n.getParseFilterValue = function (t) {
            return [t];
          }),
          (n.getEntryType = function () {
            return o("AdsPETypeaheadSearchableEntryTypes").AUTOSUGGESTED_LABELS;
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
              a = o.text,
              i = this.getTitle();
            return c.jsx(r("AdsPETypeaheadViewLabel.react"), {
              description: s._(/*BTDS*/ ""),
              label: s._(/*BTDS*/ "", [
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
                    textToSearch: i,
                  }),
                ),
              ]),
              truncatedTooltip: i,
            });
          }),
          (t.create = function (n) {
            var e = n.objectLevel;
            return new t({
              auxiliaryData: n,
              title: "",
              uniqueID: "autosuggested_tag_filter_" + e,
              type: o("AdsPETypeaheadSearchableEntryTypes")
                .AUTOSUGGESTED_LABELS,
            });
          }),
          t
        );
      })(r("AdsPETypeaheadAbstractSearchableEntry"));
    l.AdsPETypeaheadAutoSuggestedLabelFilterSearchableEntry = d;
  },
  226,
);

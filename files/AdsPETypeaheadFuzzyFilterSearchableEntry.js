__d(
  "AdsPETypeaheadFuzzyFilterSearchableEntry",
  [
    "AdsGenericFilter",
    "AdsGenericFilterSet",
    "AdsGenericFilterValueUtil",
    "AdsPEFilterOperatorConfig",
    "AdsPETypeaheadAbstractSearchableEntry",
    "AdsPETypeaheadFilterHighlightedText.react",
    "AdsPETypeaheadSearchableEntryApplyBehaviors",
    "AdsPETypeaheadSearchableEntryTypes",
    "expectationViolation",
    "firstx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = (function (e) {
        function t(t) {
          var n, a;
          ((a = e.call(this, t) || this), (a.isReadOnly = !1));
          var i = (n = t.auxiliaryData) != null ? n : {},
            l = i.fieldConfig,
            s = i.timezoneID;
          if (l == null)
            return (
              r("expectationViolation")(
                "fieldConfig must be set for AdsPETypeaheadFuzzyFilterSearchableEntry",
                l,
              ),
              babelHelpers.assertThisInitialized(a)
            );
          s == null && r("expectationViolation")("Invalid timezoneID %s", s);
          var u = l.field,
            c = l.operators;
          if (c == null)
            return (
              r("expectationViolation")(
                "operators must be set for AdsPETypeaheadFuzzyFilterSearchableEntry",
                c,
              ),
              babelHelpers.assertThisInitialized(a)
            );
          var d = r("firstx")(c),
            m = d.operator;
          return (
            (a.filterSet = new (r("AdsGenericFilterSet"))([
              new (r("AdsGenericFilter"))(
                u,
                m,
                o(
                  "AdsGenericFilterValueUtil",
                ).getDefaultValueForFieldAndOperator(
                  l,
                  r("AdsPEFilterOperatorConfig")[m],
                  s,
                ),
              ),
            ])),
            (a.isReadOnly = !!l.isReadOnly),
            a
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getApplyBehavior = function () {
            return r("AdsPETypeaheadSearchableEntryApplyBehaviors")
              .MERGE_AND_EDIT;
          }),
          (n.getViewLabel = function (t) {
            return s.jsx(r("AdsPETypeaheadFilterHighlightedText.react"), {
              isDisabled: this.isReadOnly,
              textToHighlight: t,
              textToSearch: this.getTitle(),
            });
          }),
          (n.getEntryType = function () {
            return o("AdsPETypeaheadSearchableEntryTypes").FIELD;
          }),
          (t.create = function (n, r) {
            return (
              r === void 0 && (r = "fuzzy_"),
              new t({
                auxiliaryData: n,
                title: n.fieldConfig.text,
                uniqueID: r + "filter_field_" + n.fieldConfig.field.toString(),
                type: o("AdsPETypeaheadSearchableEntryTypes").FIELD,
              })
            );
          }),
          t
        );
      })(r("AdsPETypeaheadAbstractSearchableEntry"));
    l.default = u;
  },
  98,
);

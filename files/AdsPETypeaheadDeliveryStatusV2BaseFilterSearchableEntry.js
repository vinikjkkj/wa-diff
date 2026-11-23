__d(
  "AdsPETypeaheadDeliveryStatusV2BaseFilterSearchableEntry",
  [
    "fbt",
    "invariant",
    "AdsGenericFilter",
    "AdsGenericFilterFieldConfigUtil",
    "AdsGenericFilterSet",
    "AdsPEFilterLabels",
    "AdsPEFilterOperatorConfig",
    "AdsPETypeaheadAbstractSearchableEntry",
    "AdsPETypeaheadFilterHighlightedText.react",
    "AdsPETypeaheadSearchableEntryApplyBehaviors",
    "GeoBaseText.react",
    "expectationViolation",
    "firstx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = "IN",
      m = (function (e) {
        function t(t) {
          var n, o, a;
          a = e.call(this, t) || this;
          var i = (n = t.auxiliaryData) == null ? void 0 : n.objectType,
            l = (o = t.auxiliaryData) == null ? void 0 : o.deliveryStatus;
          (i != null || u(0, 19124), l != null || u(0, 19123));
          var s = a.getFilterFieldType(i),
            c = a.getFilterField(s);
          return (
            (a.filterSet = new (r("AdsGenericFilterSet"))([
              new (r("AdsGenericFilter"))(c, d, [l]),
            ])),
            a
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getApplyBehavior = function () {
            return r("AdsPETypeaheadSearchableEntryApplyBehaviors").MERGE;
          }),
          (n.getViewLabel = function (t) {
            var e = r("firstx")(this.getFilterSet().getValues()),
              n = r("AdsGenericFilterFieldConfigUtil").getConfigByFieldOrNull(
                this.getFilterFieldsConfig(),
                e.getField(),
              );
            if (n == null)
              return (
                r("expectationViolation")(
                  "Cannot find field config for filter: %s",
                  e.toString(),
                ),
                null
              );
            var o = r("AdsPEFilterOperatorConfig")[d].text;
            return s._(/*BTDS*/ "", [
              s._param("objectName", n.text),
              s._param(
                "operator",
                c.jsx(r("GeoBaseText.react"), {
                  color: "placeholder",
                  size: "value",
                  children: o,
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
          (t.getTitle = function (t) {
            return o("AdsPEFilterLabels").getDeliveryStatusV2Label(
              t.deliveryStatus,
            );
          }),
          t
        );
      })(r("AdsPETypeaheadAbstractSearchableEntry"));
    l.default = m;
  },
  226,
);

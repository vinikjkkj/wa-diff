__d(
  "AdsPETypeaheadIDBaseFilterSearchableEntry",
  [
    "fbt",
    "invariant",
    "AdsGenericFilter",
    "AdsGenericFilterFieldConfigUtil",
    "AdsGenericFilterSet",
    "AdsPEFilterOperatorConfig",
    "AdsPETypeaheadAbstractSearchableEntry",
    "AdsPETypeaheadFilterHighlightedText.react",
    "AdsPETypeaheadFilterUtils",
    "AdsPETypeaheadSearchableEntryApplyBehaviors",
    "GeoBaseText.react",
    "GeoText.react",
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
          var n, a;
          a = e.call(this, t) || this;
          var i = (n = t.auxiliaryData) == null ? void 0 : n.objectType;
          i != null || u(0, 19122);
          var l = a.getFilterFieldType(i),
            s = a.getFilterField(l),
            c = a.getFilterOperator(),
            d = o("AdsPETypeaheadFilterUtils").parseIDs(t.title.toString());
          return (
            (a.filterSet = new (r("AdsGenericFilterSet"))([
              new (r("AdsGenericFilter"))(s, c, d),
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
            if (!n)
              return (
                r("expectationViolation")(
                  "Cannot find field config for filter: %s",
                  e.toString(),
                ),
                null
              );
            var o = r("AdsPEFilterOperatorConfig")[this.getFilterOperator()]
              .text;
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
                c.jsx(r("GeoText.react"), {
                  children: s._(/*BTDS*/ "", [
                    s._implicitParam(
                      "=m0",
                      c.jsx(r("AdsPETypeaheadFilterHighlightedText.react"), {
                        textToHighlight: this.getTitle(),
                        textToSearch: this.getTitle(),
                        children: s._(/*BTDS*/ ""),
                      }),
                    ),
                  ]),
                }),
              ),
            ]);
          }),
          t
        );
      })(r("AdsPETypeaheadAbstractSearchableEntry"));
    l.default = d;
  },
  226,
);

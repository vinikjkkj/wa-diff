__d(
  "AdsPETypeaheadCustomLabelValueSearchableEntry",
  [
    "fbt",
    "invariant",
    "AdsGenericFilter",
    "AdsGenericFilterSet",
    "AdsPEFilterOperatorConfigUtil",
    "AdsPETypeaheadAbstractSearchableEntry",
    "AdsPETypeaheadFilterHighlightedText.react",
    "AdsPETypeaheadSearchableEntryApplyBehaviors",
    "AdsPETypeaheadSearchableEntryTypes",
    "GeoBaseText.react",
    "adsPECustomLabelFilterUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = new WeakMap(),
      m = (function (e) {
        function t(t) {
          var n, o;
          o = e.call(this, t) || this;
          var a = (n = t.auxiliaryData) != null ? n : {},
            i = a.fieldConfig,
            l = a.valueID;
          return (
            (i != null && l != null) || u(0, 184134),
            (o.filterSet = new (r("AdsGenericFilterSet"))([
              new (r("AdsGenericFilter"))(i.field, "ANY", [l]),
            ])),
            (o.fieldConfig = i),
            o
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getApplyBehavior = function () {
            return r("AdsPETypeaheadSearchableEntryApplyBehaviors").MERGE;
          }),
          (n.getViewLabel = function (t) {
            var e = r("AdsPEFilterOperatorConfigUtil")(this.fieldConfig, "ANY"),
              n = e.text;
            return s._(/*BTDS*/ "", [
              s._param("objectName", this.fieldConfig.text),
              s._param(
                "operator",
                c.jsx(r("GeoBaseText.react"), {
                  color: "placeholder",
                  size: "value",
                  children: n,
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
          (n.getEntryType = function () {
            return o("AdsPETypeaheadSearchableEntryTypes").NAME;
          }),
          (t.createAll = function (n) {
            var e = d.get(n);
            if (e != null) return e;
            var r = Object.values(n)
              .filter(function (e) {
                return o(
                  "adsPECustomLabelFilterUtils",
                ).isCustomLabelFilterFieldName(e.field.name);
              })
              .flatMap(function (e) {
                return (Array.isArray(e.values) ? e.values : []).map(
                  function (n) {
                    var r = n.value,
                      a = String(r);
                    return new t({
                      auxiliaryData: { fieldConfig: e, valueID: a },
                      title:
                        typeof e.valueRenderer == "function"
                          ? e.valueRenderer(a)
                          : a,
                      uniqueID: "custom_label_value_" + a,
                      type: o("AdsPETypeaheadSearchableEntryTypes").NAME,
                    });
                  },
                );
              });
            return (d.set(n, r), r);
          }),
          t
        );
      })(r("AdsPETypeaheadAbstractSearchableEntry"));
    l.default = m;
  },
  226,
);

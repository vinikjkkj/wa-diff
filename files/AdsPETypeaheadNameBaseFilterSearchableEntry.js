__d(
  "AdsPETypeaheadNameBaseFilterSearchableEntry",
  [
    "fbt",
    "invariant",
    "AdsGenericFilter",
    "AdsGenericFilterFieldConfigUtil",
    "AdsGenericFilterSet",
    "AdsMgmtFlowSearchAndFilterSR2026H1GatingUtils",
    "AdsPEFilterOperatorConfig",
    "AdsPETypeaheadAbstractSearchableEntry",
    "AdsPETypeaheadFilterHighlightedText.react",
    "AdsPETypeaheadSearchableEntryApplyBehaviors",
    "GeoBaseText.react",
    "GeoText.react",
    "expectationViolation",
    "firstx",
    "intlList",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = (function (e) {
        function t(t) {
          var n, o;
          o = e.call(this, t) || this;
          var a = (n = t.auxiliaryData) == null ? void 0 : n.objectType;
          a != null || u(0, 19121);
          var i = o.getFilterFieldType(a),
            l = o.getFilterField(i),
            s = o.getFilterOperator(),
            c = o.getParseFilterValue(t.title);
          return (
            (o.filterSet = new (r("AdsGenericFilterSet"))([
              new (r("AdsGenericFilter"))(l, s, c),
            ])),
            o
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getApplyBehavior = function () {
            return r("AdsPETypeaheadSearchableEntryApplyBehaviors").MERGE;
          }),
          (n.getHighlightedToken = function (t) {
            var e = t.trim();
            return c.jsx(r("AdsPETypeaheadFilterHighlightedText.react"), {
              textToHighlight: e,
              textToSearch: e,
            });
          }),
          (n.getContent = function () {
            var e = this,
              t = this.getTitle()
                .split(",")
                .map(function (t) {
                  return e.getHighlightedToken(t.trim());
                });
            return r("intlList")(t, r("intlList").CONJUNCTIONS.NONE);
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
            var a = r("AdsPEFilterOperatorConfig")[this.getFilterOperator()]
              .text;
            return s._(/*BTDS*/ "", [
              s._param(
                "objectName",
                o(
                  "AdsMgmtFlowSearchAndFilterSR2026H1GatingUtils",
                ).getIsAccountSearchAndFilterHighlightWithoutExposure()
                  ? c.jsx(r("GeoBaseText.react"), {
                      color: "value",
                      size: "value",
                      children: n.text,
                    })
                  : n.text,
              ),
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
                c.jsx(r("GeoText.react"), { children: this.getContent() }),
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

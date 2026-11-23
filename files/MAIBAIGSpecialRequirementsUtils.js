__d(
  "MAIBAIGSpecialRequirementsUtils",
  ["fbt", "PolarisBoostAudienceSelectionScreenStrings"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ ""),
      u = s._(/*BTDS*/ ""),
      c = [
        {
          category: "FINANCIAL_PRODUCTS_SERVICES",
          description: s._(/*BTDS*/ ""),
          title: o("PolarisBoostAudienceSelectionScreenStrings")
            .SPECIAL_AD_CATEGORY_SELECTION_FPS_TITLE,
        },
        {
          category: "EMPLOYMENT",
          description: s._(/*BTDS*/ ""),
          title: o("PolarisBoostAudienceSelectionScreenStrings")
            .SPECIAL_AD_CATEGORY_SELECTION_EMPLOYMENT_TITLE,
        },
        {
          category: "HOUSING",
          description: s._(/*BTDS*/ ""),
          title: o("PolarisBoostAudienceSelectionScreenStrings")
            .SPECIAL_AD_CATEGORY_SELECTION_HOUSING_TITLE,
        },
      ];
    function d(e) {
      return e.filter(function (e) {
        return e !== "NONE";
      });
    }
    function m(e, t, n, r, o) {
      var a = d(t),
        i = d(n);
      if (
        i.length === a.length &&
        i.every(function (e) {
          return a.includes(e);
        })
      )
        return [];
      var l = i.length === 0 ? [] : r.length === 0 ? [o] : r;
      return [
        {
          adObjectID: e,
          field: "special_ad_category",
          kind: "value",
          laneHint: "llm",
          level: "L3",
          originalValue: t,
          value: i,
        },
      ].concat(
        l === r
          ? []
          : [
              {
                adObjectID: e,
                field: "special_ad_category_country",
                kind: "value",
                laneHint: "llm",
                level: "L3",
                originalValue: r,
                value: l,
              },
            ],
      );
    }
    ((l.SPECIAL_REQUIREMENTS_TITLE = e),
      (l.SPECIAL_REQUIREMENTS_EDITOR_TITLE = u),
      (l.SPECIAL_REQUIREMENTS_OPTIONS = c),
      (l.getIGSpecialRequirementsCategories = d),
      (l.buildIGSpecialRequirementsPatches = m));
  },
  226,
);

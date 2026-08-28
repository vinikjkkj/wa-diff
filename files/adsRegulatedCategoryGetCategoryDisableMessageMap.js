__d(
  "adsRegulatedCategoryGetCategoryDisableMessageMap",
  [
    "fbt",
    "AdsCTVDisabledStrings",
    "AdsRegulatedCategory",
    "AdsRegulatedCategoryConstants",
    "GeoLink.react",
    "ads-objectives",
    "immutable",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t, n, a) {
      var i = r("immutable").Map();
      if (n) {
        var l,
          c = u.jsx(r("GeoLink.react"), {
            href: (l = o("AdsRegulatedCategoryConstants"))
              .SIEP_DISABLE_MESSAGE_IG_LOGIN_VISIT_FB_LINK,
            children: l.SIEP_DISABLE_MESSAGE_IG_LOGIN_VISIT_FB,
          }),
          d = u.jsx(r("GeoLink.react"), {
            href: l.SIEP_DISABLE_MESSAGE_IG_LOGIN_LEARN_MORE_LINK,
            children: s._(/*BTDS*/ "Learn more"),
          });
        i = i.set(
          r("AdsRegulatedCategory").ISSUES_ELECTIONS_POLITICS,
          l.getSIEPDisabledMessageIGLogin(c, d),
        );
      }
      if (
        (e === o("ads-objectives").KPIObjectives.PRODUCT_CATALOG_SALES &&
          (i = i.set(
            r("AdsRegulatedCategory").ISSUES_ELECTIONS_POLITICS,
            o("AdsRegulatedCategoryConstants")
              .SIEP_DISABLE_MESSAGE_CATALOG_SALES,
          )),
        e === o("ads-objectives").KPIObjectives.OUTCOME_SALES &&
          t === !0 &&
          (i = i.set(
            r("AdsRegulatedCategory").ISSUES_ELECTIONS_POLITICS,
            o("AdsRegulatedCategoryConstants")
              .SIEP_DISABLE_MESSAGE_SALES_WITH_CATALOG,
          )),
        a)
      ) {
        var m = o(
          "AdsCTVDisabledStrings",
        ).getSIEPCategoryDisabledForCTVTooltip();
        for (var p of o("AdsRegulatedCategoryConstants")
          .AdsRegulatedCategorySIEPCategories)
          i = i.set(p, m);
      }
      return i;
    }
    l.default = c;
  },
  226,
);

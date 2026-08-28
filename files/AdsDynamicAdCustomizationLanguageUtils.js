__d(
  "AdsDynamicAdCustomizationLanguageUtils",
  [
    "AdsDLOLanguageUtils",
    "AdsDynamicAdCustomizationAssetFeedUtils",
    "AdsDynamicAdCustomizationCustomizationSpecUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (o("AdsDynamicAdCustomizationAssetFeedUtils").isAssetFeedBasedMMDA(e))
        return o("AdsDLOLanguageUtils").getAddedLanguagesCountFromAdgroup(e);
      var t = o(
          "AdsDynamicAdCustomizationCustomizationSpecUtils",
        ).getCustomizationSpecPathFromAdgroup(e),
        n = e.getIn(t);
      return n
        ? n.count(function (e) {
            return !o(
              "AdsDynamicAdCustomizationCustomizationSpecUtils",
            ).isPrimaryRule(e);
          })
        : 0;
    }
    function s(e) {
      if (o("AdsDynamicAdCustomizationAssetFeedUtils").isAssetFeedBasedMMDA(e))
        return o("AdsDLOLanguageUtils").getAddedLanguaguesFromAdgroup(e);
      var t = o(
          "AdsDynamicAdCustomizationCustomizationSpecUtils",
        ).getCustomizationSpecFromAdgroup(e),
        n = u(e);
      return t.reduce(function (e, t) {
        var r = o(
          "AdsDynamicAdCustomizationCustomizationSpecUtils",
        ).getLanguageFromRule(t);
        return r == null || r === n ? e : e.push(r);
      }, r("immutable").List());
    }
    function u(e) {
      if (
        o("AdsDynamicAdCustomizationAssetFeedUtils").isAssetFeedBasedMMDA(e)
      ) {
        var t;
        return (t = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(
          e,
        )) != null
          ? t
          : void 0;
      }
      var n = o(
          "AdsDynamicAdCustomizationCustomizationSpecUtils",
        ).getCustomizationSpecFromAdgroup(e),
        r = n.find(
          o("AdsDynamicAdCustomizationCustomizationSpecUtils").isPrimaryRule,
        );
      return o(
        "AdsDynamicAdCustomizationCustomizationSpecUtils",
      ).getLanguageFromRule(r);
    }
    ((l.getAddedLanguageCount = e),
      (l.getAdditionalLanguagesFromAdgroup = s),
      (l.getPrimaryLanguageFromAdgroup = u));
  },
  98,
);

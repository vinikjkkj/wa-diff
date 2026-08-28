__d(
  "adsConvertAssetCustomizationRuleToPlacementList",
  ["AdsTargetingRuleUtils", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s(e.toJS());
    }
    function s(e) {
      var t = e.customization_spec;
      if (t == null) return r("immutable").List();
      var n = Object.keys(
        o("AdsTargetingRuleUtils").TARGETING_POSITION_FIELDS_TO_PLATFORMS,
      );
      return n.reduce(function (e, n) {
        var r = t == null ? void 0 : t[n];
        if (r == null || !(r instanceof Array)) return e;
        var a = o("AdsTargetingRuleUtils")
          .TARGETING_POSITION_FIELDS_TO_PLATFORMS[n];
        return e.concat(
          r.filter(Boolean).map(function (e) {
            return { platform: a, position: e };
          }),
        );
      }, r("immutable").List());
    }
    l.adsConvertAssetCustomizationRuleToPlacementList = e;
  },
  98,
);

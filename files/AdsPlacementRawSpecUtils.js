__d(
  "AdsPlacementRawSpecUtils",
  [
    "AdsCampaignPlacementsFieldsValueHelper",
    "AdsPartialAutomaticPlacementUtils",
    "AdsPlacementAPISpecDefaultsUtils",
    "AdsPlacementConstants",
    "AdsPlacementValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e
        ? !o("AdsCampaignPlacementsFieldsValueHelper").placementMapperKeys.some(
            function (t) {
              return e[t];
            },
          )
        : !0;
    }
    function s(t) {
      return e(t.spec);
    }
    function u(e) {
      var t = e.first();
      if (!t) return r("AdsPlacementValues").AUTOMATIC;
      var n = s(t);
      for (var o of e.keys()) {
        var a = e.get(o);
        if (!a) return r("AdsPlacementValues").AUTOMATIC;
        var i = s(a);
        if (n !== i) return r("AdsPlacementValues").MIXED;
      }
      return n
        ? r("AdsPlacementValues").AUTOMATIC
        : r("AdsPlacementValues").MANUAL;
    }
    function c(e, t) {
      var n = e.get(t);
      if (!n) return r("AdsPlacementValues").AUTOMATIC;
      var o = s(n);
      return o
        ? r("AdsPlacementValues").AUTOMATIC
        : r("AdsPlacementValues").MANUAL;
    }
    function d(e, t) {
      var n = o(
          "AdsPartialAutomaticPlacementUtils",
        ).getPartialAutomaticPlatformsFromPlacementSpec(e),
        r = {};
      return (
        n.forEach(function (e) {
          var n,
            a = o(
              "AdsPlacementConstants",
            ).PLACEMENT_PLATFORM_TO_POSITION_FIELDS.get(e),
            i = o("AdsPlacementAPISpecDefaultsUtils").getPositionsForPlatform(
              e,
              t,
            );
          r = babelHelpers.extends(
            {},
            r,
            ((n = {}), (n[a] = i != null ? i.toArray() : []), n),
          );
        }),
        babelHelpers.extends({}, e, r)
      );
    }
    ((l.isRawPlacementSpecAutomatic = e),
      (l.isRawEligibilitySpecAutomatic = s),
      (l.getPlacementValue = u),
      (l.getPlacementValueFromEligibilityMapByCampaignID = c),
      (l.mergePartialPlacement = d));
  },
  98,
);

__d(
  "AdsCampaignRawSpecUtils",
  [
    "AdsCampaignPlacementsFieldsValueHelper",
    "AdsPlacementAPISpecDefaultsUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementConstants",
    "AdsPlacementRawSpecUtils",
    "enumObjectKeys",
    "getByPath",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e;
      for (var a of o(
        "AdsPlacementConstants",
      ).PLACEMENT_FIELD_TO_AD_SET_PATHS.entries()) {
        var i = a[0],
          l = a[1],
          s = r("getByPath")(t, [i]);
        s ? (n = n.setIn(l, r("immutable").fromJS(s))) : (n = n.deleteIn(l));
      }
      return n;
    }
    function s(t, n) {
      return e(
        t,
        o("AdsPlacementAPISpecDefaultsUtils").getPlacementSpecWithDefaults(n),
      );
    }
    function u(e) {
      return !r("enumObjectKeys")(
        o("AdsCampaignPlacementsFieldsValueHelper").effectivePlacementsFieldMap,
      ).some(function (t) {
        return e.targeting && e.targeting[t];
      });
    }
    function c(t, n, r) {
      var a = e(
        t,
        o("AdsPlacementRawSpecUtils").mergePartialPlacement(
          o(
            "AdsPlacementAPISpecReaderUtils",
          ).convertCampaignToPlacementSpec_LEGACY(t),
          n,
        ),
      );
      if (!u(a)) return a;
      switch (r) {
        case "KEEP_AUTOMATIC":
          return "JUST_RETURN";
        case "CONVERT_TO_MANUAL":
          return s(a, n);
        default:
          return a;
      }
    }
    function d(e, t, n) {
      var r = o("AdsPlacementRawSpecUtils").mergePartialPlacement(e, t);
      if (!o("AdsPlacementRawSpecUtils").isRawPlacementSpecAutomatic(r))
        return r;
      switch (n) {
        case "KEEP_AUTOMATIC":
          return "JUST_RETURN";
        case "CONVERT_TO_MANUAL":
          return o(
            "AdsPlacementAPISpecDefaultsUtils",
          ).getPlacementSpecWithDefaults(t);
        default:
          return r;
      }
    }
    ((l.setCampaignPlacement = e),
      (l.isAutomaticPlacements = u),
      (l.handleAutomaticPlacementForCampaign = c),
      (l.handleAutomaticPlacementForPlacementSpec = d));
  },
  98,
);

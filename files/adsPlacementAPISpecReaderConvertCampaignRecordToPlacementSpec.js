__d(
  "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
  ["AdsPlacementConstants", "DeepRecord", "memoizeWithArgsByKey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o(
        "AdsPlacementConstants",
      ).PLACEMENT_CAMPAIGN_SPEC_DEPENDENCIES.targeting.reduce(function (t, n) {
        var r, o;
        return e != null && (r = e.targeting) != null && r[n]
          ? babelHelpers.extends({}, t, ((o = {}), (o[n] = e.targeting[n]), o))
          : t;
      }, {});
      return t;
    }
    var s = r("memoizeWithArgsByKey")(e);
    function u(e) {
      if (r("DeepRecord").isDeepRecord(e)) {
        var t = e;
        return s(t.id, t.toJSCached());
      }
      var n = e;
      return s(n.id, n);
    }
    l.convertCampaignRecordToPlacementSpec = u;
  },
  98,
);

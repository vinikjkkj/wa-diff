__d(
  "AdsAdvantageAudienceBulkUtils",
  ["AdsBulkValueUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e = "targeting",
        n = o("AdsBulkValueUtils").mapBulkValue(
          t == null ? void 0 : t[e],
          function (e) {
            return e.targeting_automation;
          },
        ),
        r = (n == null ? void 0 : n.getValues()) || [];
      return r.some(function (e) {
        var t =
          e == null || e.get == null ? void 0 : e.get("advantage_audience");
        return t === 1;
      });
    };
    l.isAdvantageAudienceEnabledInBulkTargetSpec = e;
  },
  98,
);

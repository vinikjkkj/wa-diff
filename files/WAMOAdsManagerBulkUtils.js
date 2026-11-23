__d(
  "WAMOAdsManagerBulkUtils",
  ["AdsBulkValueUtils", "WAMOStatusAdsManagerUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = "targeting",
        n = o("AdsBulkValueUtils").mapBulkValue(
          e == null ? void 0 : e[t],
          function (e) {
            return e.whatsapp_positions;
          },
        ),
        r = (n == null ? void 0 : n.getValues()) || [],
        a = r.every(function (e) {
          return e == null ? void 0 : e.includes("status");
        }),
        i = o("AdsBulkValueUtils").mapBulkValue(
          e == null ? void 0 : e[t],
          function (e) {
            return e.publisher_platforms;
          },
        ),
        l = (i == null ? void 0 : i.getValues()) || [],
        s = l.every(function (e) {
          return e == null ? void 0 : e.includes("whatsapp");
        });
      return a && s;
    }
    function s(t) {
      return (
        o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForUnknownAge() &&
        e(t)
      );
    }
    l.shouldShowUnknownAgeInBulkSpec = s;
  },
  98,
);

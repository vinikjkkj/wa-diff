__d(
  "adsCampaignConvertISOStringToTimeStamp",
  ["AdsBulkEditFlowTypes", "AdsBulkValueUtils", "DateTime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("AdsBulkValueUtils").aggregate(
        e.getValues().map(function (e) {
          return !e ||
            e ===
              o("AdsBulkEditFlowTypes").AdsCampaignScheduleConstants
                .PENDING_SCHEDULE_TOKEN
            ? null
            : r("DateTime")
                .fromISOString(e, t)
                .getEquivalentInUTC()
                .getUnixTimestamp();
        }),
      );
    }
    l.default = e;
  },
  98,
);

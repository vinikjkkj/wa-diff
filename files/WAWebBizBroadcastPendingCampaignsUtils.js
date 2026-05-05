__d(
  "WAWebBizBroadcastPendingCampaignsUtils",
  [
    "WAWebBizBroadcastCampaignAPI",
    "WAWebSchemaBusinessBroadcastCampaign",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebBizBroadcastCampaignAPI",
          ).getBizBroadcastCampaignsByStatuses([
            o("WAWebSchemaBusinessBroadcastCampaign")
              .BusinessBroadcastCampaignStatus.SCHEDULED,
            o("WAWebSchemaBusinessBroadcastCampaign")
              .BusinessBroadcastCampaignStatus.PROCESSING,
          ]);
          return e
            .filter(function (e) {
              return e.reservedQuota != null && e.reservedQuota > 0;
            })
            .map(function (e) {
              var t;
              return {
                freeReservedMsgs: (t = e.reservedQuota) != null ? t : 0,
                sendTimestamp: e.scheduledTimestamp,
              };
            });
        })),
        s.apply(this, arguments)
      );
    }
    l.getBizBroadcastPendingCampaigns = e;
  },
  98,
);

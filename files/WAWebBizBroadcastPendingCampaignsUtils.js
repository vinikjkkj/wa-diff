__d(
  "WAWebBizBroadcastPendingCampaignsUtils",
  [
    "WAWebBizBroadcastCampaignAPI",
    "WAWebSchemaBusinessBroadcastCampaign",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3,
      s = 1e12;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                sendTimestamp: d(e.scheduledTimestamp),
              };
            });
        })),
        c.apply(this, arguments)
      );
    }
    function d(t) {
      return t == null ? null : t < s ? t : Math.floor(t / e);
    }
    l.getBizBroadcastPendingCampaigns = u;
  },
  98,
);

__d(
  "WAWebBizBroadcastPendingCampaignsUtils",
  ["WAWebBizBroadcastCampaignAPI", "WAWebSchemaBusinessBroadcastCampaign"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3,
      s = 1e12;
    async function u() {
      var e = await o(
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
            sendTimestamp: c(e.scheduledTimestamp),
          };
        });
    }
    function c(t) {
      return t == null ? null : t < s ? t : Math.floor(t / e);
    }
    l.getBizBroadcastPendingCampaigns = u;
  },
  98,
);

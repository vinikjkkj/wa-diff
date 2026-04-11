__d(
  "WAWebBizBroadcastRateUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e.deliveredCount,
        n = e.readCount,
        r = e.recipientCount,
        o = e.repliedCount,
        a = t > 0 ? t : r;
      return {
        readRate: {
          count: n,
          percentage: a > 0 ? Math.round((n / a) * 100) : 0,
        },
        replyRate: {
          count: o,
          percentage: a > 0 ? Math.round((o / a) * 100) : 0,
        },
      };
    }
    i.computeCampaignRates = e;
  },
  66,
);

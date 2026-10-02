__d(
  "WAWebBizBroadcastProInsightMetrics",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t, n, r, o, a, i, s, u;
      return {
        customReplyClickCount: l(e.quick_reply_clicks),
        deliveredCount:
          (t = (n = e.ads_delivered) == null ? void 0 : n.count) != null
            ? t
            : 0,
        readCount:
          (r = (o = e.read) == null ? void 0 : o.count) != null ? r : 0,
        readRatePercentage: e.read_rate,
        replyCount:
          (a = (i = e.first_customer_reply) == null ? void 0 : i.count) != null
            ? a
            : 0,
        replyRatePercentage: e.reply_rate,
        sentCount:
          (s = (u = e.sent) == null ? void 0 : u.count) != null ? s : 0,
        websiteClickCount: l(e.cta_url_clicks),
      };
    }
    function l(e) {
      if (e == null) return null;
      var t = 0;
      for (var n of e) {
        var r, o;
        t +=
          (r = n == null || (o = n.count_data) == null ? void 0 : o.count) !=
          null
            ? r
            : 0;
      }
      return t;
    }
    i.deriveProInsightMetrics = e;
  },
  66,
);

__d(
  "WAWebBizBroadcastProInsightMetrics",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        u,
        c,
        d = (t = (n = e.sent) == null ? void 0 : n.count) != null ? t : 0,
        m =
          (r = (o = e.ads_delivered) == null ? void 0 : o.count) != null
            ? r
            : 0,
        p = (a = (i = e.read) == null ? void 0 : i.count) != null ? a : 0,
        _ =
          (u = (c = e.first_customer_reply) == null ? void 0 : c.count) != null
            ? u
            : 0;
      return {
        customReplyClickCount: s(e.quick_reply_clicks),
        deliveredCount: m,
        readCount: p,
        readRatePercentage: l(p, m),
        replyCount: _,
        replyRatePercentage: l(_, m),
        sentCount: d,
        websiteClickCount: s(e.cta_url_clicks),
      };
    }
    function l(e, t) {
      return t > 0 ? Math.trunc((e * 100) / t) : null;
    }
    function s(e) {
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
    ((i.deriveProInsightMetrics = e), (i.computeProRatePercentage = l));
  },
  66,
);

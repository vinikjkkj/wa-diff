__d(
  "WAWebStatusPSAUtils",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.length === 0) return -1;
      for (var n = 0, r = t[0].campaignId, o = 1; o < t.length; o++) {
        var a = t[o],
          i = a.campaignId,
          l = a.id;
        if ((r !== i ? ((r = i), (n = 0)) : n++, l.toString() === e.toString()))
          return n;
      }
      return -1;
    }
    function s(e) {
      var t = u(e),
        n = [];
      return (
        Object.keys(t).forEach(function (e) {
          var r = t[e],
            o = r.numberOfReadStatus,
            a = r.numberOfStatus,
            i = a - o;
          n.push(e + ":" + i);
        }),
        n.join(",")
      );
    }
    function u(e) {
      var t = {};
      return (
        e.forEach(function (e) {
          var n = e.campaignDuration,
            r = e.campaignId,
            o = e.statusPSAReadTimestamp,
            a = e.t;
          if (r) {
            t[r] ||
              (t[r] = {
                id: r,
                t: a,
                duration: n,
                firstReadTimestamp: null,
                numberOfStatus: 0,
                numberOfReadStatus: 0,
              });
            var i = t[r];
            (i.numberOfStatus++,
              o != null &&
                (i.numberOfReadStatus++,
                (i.firstReadTimestamp == null || o < i.firstReadTimestamp) &&
                  (i.firstReadTimestamp = o)));
          }
        }),
        t
      );
    }
    function c(e, t) {
      var n = e.firstReadTimestamp;
      if (n != null) return o("WATimeUtils").unixTime() - n > t;
      var r = e.duration;
      return r != null ? o("WATimeUtils").unixTime() - e.t > r : !1;
    }
    function d(e, t) {
      var n = u(e);
      return Object.keys(n).every(function (e) {
        return c(n[e], t);
      });
    }
    ((l.getPsaCampaignIndex = e),
      (l.getPsaCampaignsString = s),
      (l.getPSACampaigns = u),
      (l.isCampaignExpired = c),
      (l.isExpiredStatusPSA = d));
  },
  98,
);

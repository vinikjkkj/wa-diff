__d(
  "WAWebForwardReachScore",
  [
    "WAWebDailyAggregatedStatsCollection",
    "WAWebForwardReachDailyStatsUtils",
    "WAWebForwardReachGating",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 65535,
      s = 5e3,
      u = [32, 64, 128, 256, 512, 1e3, 2e3, 5e3],
      c = [
        4, 8, 16, 32, 64, 128, 256, 512, 1e3, 1500, 2e3, 2500, 3e3, 3500, 4e3,
        4500, 5e3,
      ];
    function d(e) {
      for (var t of c) if (t > e) return t;
      return 5e3;
    }
    function m(t) {
      var n = t.groupMemberCountsExcludingSender,
        r = t.inherited,
        o = t.oneToOneCount;
      if (r != null && o + n.length !== 0) {
        var a = r + o;
        for (var i of n) a += d(i);
        return Math.min(e, a);
      }
    }
    function p(e, t) {
      if ((t === void 0 && (t = _), e != null)) {
        var n = u.findIndex(function (t) {
          return e <= t;
        });
        if (n === -1) return s;
        var r = u[n];
        if (n === 0) return r;
        var o = u[n - 1];
        return t(r - o) < e - o ? r : o;
      }
    }
    function _(e) {
      for (
        var t = Math.pow(2, 32) - (Math.pow(2, 32) % e),
          n = new Uint32Array(1),
          r = self.crypto.getRandomValues(n)[0];
        r >= t;
      )
        r = self.crypto.getRandomValues(n)[0];
      return r % e;
    }
    function f(e) {
      if (e == null) return 0;
      var t = u.findIndex(function (t) {
        return t > e;
      });
      return t === -1 ? u.length + 1 : t + 1;
    }
    function g(e, t, n) {
      return (
        f(e) * 2 +
        (t >= 2 ? 1 : 0) +
        (n
          ? o("WAWebForwardReachDailyStatsUtils").FORWARD_REACH_AI_SLOT_OFFSET
          : 0)
      );
    }
    function h(e, t, n) {
      var r;
      if (
        !(t <= 0) &&
        o("WAWebForwardReachGating").isForwardReachStatsLoggingEnabled()
      ) {
        var a = o(
            "WAWebDailyAggregatedStatsCollection",
          ).DailyAggregatedStatsCollection.gaddForToday(),
          i = [].concat((r = a.forwardReachCounts) != null ? r : []),
          l = Math.max(
            1,
            o("WAWebForwardReachGating").getForwardReachStatsDailyBucketCap(),
          ),
          s = [g(e, t, !1)];
        n && s.push(g(e, t, !0));
        for (var u of s) {
          var c;
          if (((c = i[u]) != null ? c : 0) < l) {
            var d;
            i[u] = ((d = i[u]) != null ? d : 0) + 1;
          }
        }
        a.forwardReachCounts = i;
      }
    }
    ((l.FORWARD_REACH_SCORE_CAP = e),
      (l.FORWARD_REACH_SCORE_WIRE_CAP = s),
      (l.groupWeight = d),
      (l.computeOutgoingForwardReachScore = m),
      (l.roundForwardReachScore = p),
      (l.scoreBucketIndex = f),
      (l.forwardReachSlotIndex = g),
      (l.recordForwardReachScore = h));
  },
  98,
);

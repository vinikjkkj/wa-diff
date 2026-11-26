__d(
  "WAWebForwardReachDailyStatsUtils",
  ["WAWebForwardReachGating", "WAWebNullFunc", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    var e = r("requireDeferred")("ForwardReachDailyStatsFalcoEvent").__setRef(
        "WAWebForwardReachDailyStatsUtils",
      ),
      s,
      u = 40,
      c = 20,
      d = Math.pow(2, 31) - 1,
      m = 100;
    function p(e) {
      var t;
      return ((t = e.forwardReachCounts) != null ? t : []).every(function (e) {
        return (e != null ? e : 0) === 0;
      });
    }
    function _(e, t) {
      (t === void 0 && (t = e.forwardReachCounts),
        (e.forwardReachCounts = e.forwardReachCounts.map(function (e, n) {
          var r;
          return Math.max(0, e - ((r = t[n]) != null ? r : 0));
        })));
    }
    async function f(e, t, n) {
      var r;
      if (
        (n === void 0 && (n = C),
        !!o("WAWebForwardReachGating").isForwardReachStatsLoggingEnabled())
      ) {
        var a = s != null ? s : new WeakMap();
        return ((s = a), (r = a.get(e)) != null ? r : g(e, t, a, n));
      }
    }
    function g(e, t, n, r) {
      var o = p(e),
        a = [].concat(e.forwardReachCounts),
        i = y(e, a, o, r);
      if (i == null) {
        var l = Promise.resolve();
        return (n.set(e, l), l);
      }
      var s = h(e, t, a, i).finally(function () {
        o || n.delete(e);
      });
      return (n.set(e, s), s);
    }
    async function h(t, n, r, a) {
      var i = await Promise.all([
          e.load(),
          n().catch(o("WAWebNullFunc").returnNull),
        ]),
        l = i[0],
        s = i[1];
      (l.log(function () {
        return babelHelpers.extends({}, a, { country: s != null ? s : void 0 });
      }),
        (t.forwardReachTracked = !1),
        _(t, r));
    }
    function y(e, t, n, r) {
      var a;
      if (n) {
        if (e.forwardReachTracked !== !0) return;
        var i = r() < 1 / m;
        return (
          (e.forwardReachTracked = i),
          i ? { zero_forward_sample_weight: String(m) } : void 0
        );
      }
      var l = Math.max(
          1,
          o("WAWebForwardReachGating").getForwardReachStatsDailyBucketCap(),
        ),
        s = t.slice(0, c).reduce(
          function (e, t) {
            return e + Math.max(0, (t != null ? t : 0) - l);
          },
          (a = t[u]) != null ? a : 0,
        ),
        d = function (n) {
          var e;
          return String(Math.min((e = t[n]) != null ? e : 0, l));
        },
        p = function (n) {
          var e;
          return ((e = t[n]) != null ? e : 0) > 0 ? d(n) : void 0;
        };
      return {
        forward_reach_over_cap_count: s > 0 ? String(Math.min(s, l)) : void 0,
        forward_reach_unknown_single_dest_count: d(0),
        forward_reach_unknown_multi_dest_count: d(1),
        forward_reach_lt32_single_dest_count: d(2),
        forward_reach_lt32_multi_dest_count: d(3),
        forward_reach_lt64_single_dest_count: d(4),
        forward_reach_lt64_multi_dest_count: d(5),
        forward_reach_lt128_single_dest_count: d(6),
        forward_reach_lt128_multi_dest_count: d(7),
        forward_reach_lt256_single_dest_count: d(8),
        forward_reach_lt256_multi_dest_count: d(9),
        forward_reach_lt512_single_dest_count: d(10),
        forward_reach_lt512_multi_dest_count: d(11),
        forward_reach_lt1000_single_dest_count: d(12),
        forward_reach_lt1000_multi_dest_count: d(13),
        forward_reach_lt2000_single_dest_count: d(14),
        forward_reach_lt2000_multi_dest_count: d(15),
        forward_reach_lt5000_single_dest_count: d(16),
        forward_reach_lt5000_multi_dest_count: d(17),
        forward_reach_gte5000_single_dest_count: d(18),
        forward_reach_gte5000_multi_dest_count: d(19),
        forward_reach_unknown_single_dest_ai_source_count: p(20),
        forward_reach_unknown_multi_dest_ai_source_count: p(21),
        forward_reach_lt32_single_dest_ai_source_count: p(22),
        forward_reach_lt32_multi_dest_ai_source_count: p(23),
        forward_reach_lt64_single_dest_ai_source_count: p(24),
        forward_reach_lt64_multi_dest_ai_source_count: p(25),
        forward_reach_lt128_single_dest_ai_source_count: p(26),
        forward_reach_lt128_multi_dest_ai_source_count: p(27),
        forward_reach_lt256_single_dest_ai_source_count: p(28),
        forward_reach_lt256_multi_dest_ai_source_count: p(29),
        forward_reach_lt512_single_dest_ai_source_count: p(30),
        forward_reach_lt512_multi_dest_ai_source_count: p(31),
        forward_reach_lt1000_single_dest_ai_source_count: p(32),
        forward_reach_lt1000_multi_dest_ai_source_count: p(33),
        forward_reach_lt2000_single_dest_ai_source_count: p(34),
        forward_reach_lt2000_multi_dest_ai_source_count: p(35),
        forward_reach_lt5000_single_dest_ai_source_count: p(36),
        forward_reach_lt5000_multi_dest_ai_source_count: p(37),
        forward_reach_gte5000_single_dest_ai_source_count: p(38),
        forward_reach_gte5000_multi_dest_ai_source_count: p(39),
      };
    }
    function C() {
      return (
        self.crypto.getRandomValues(new Uint32Array(1))[0] / Math.pow(2, 32)
      );
    }
    ((l.FORWARD_REACH_SLOT_COUNT = u),
      (l.FORWARD_REACH_AI_SLOT_OFFSET = c),
      (l.FORWARD_REACH_COUNT_MAX = d),
      (l.isForwardReachDailyStatsEmpty = p),
      (l.resetForwardReachDailyStats = _),
      (l.submitForwardReachDailyStats = f));
  },
  98,
);

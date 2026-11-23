__d(
  "WAWebForwardReachDailyStatsUtils",
  ["WAWebForwardReachGating", "WAWebNullFunc", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    var e = r("requireDeferred")("ForwardReachDailyStatsFalcoEvent").__setRef(
        "WAWebForwardReachDailyStatsUtils",
      ),
      s,
      u = 40,
      c = 20;
    function d(e) {
      var t;
      return ((t = e.forwardReachCounts) != null ? t : []).every(function (e) {
        return e === 0;
      });
    }
    function m(e, t) {
      (t === void 0 && (t = e.forwardReachCounts),
        (e.forwardReachCounts = e.forwardReachCounts.map(function (e, n) {
          var r;
          return Math.max(0, e - ((r = t[n]) != null ? r : 0));
        })));
    }
    async function p(e, t) {
      var n;
      if (o("WAWebForwardReachGating").isForwardReachStatsLoggingEnabled()) {
        var r = s != null ? s : new WeakMap();
        return ((s = r), (n = r.get(e)) != null ? n : _(e, t, r));
      }
    }
    function _(e, t, n) {
      if (d(e)) return Promise.resolve();
      var r = Math.max(
          1,
          o("WAWebForwardReachGating").getForwardReachStatsDailyBucketCap(),
        ),
        a = [].concat(e.forwardReachCounts),
        i = function (t) {
          var e;
          return String(Math.min((e = a[t]) != null ? e : 0, r));
        },
        l = function (t) {
          var e;
          return ((e = a[t]) != null ? e : 0) > 0 ? i(t) : void 0;
        },
        s = {
          forward_reach_unknown_single_dest_count: i(0),
          forward_reach_unknown_multi_dest_count: i(1),
          forward_reach_lt32_single_dest_count: i(2),
          forward_reach_lt32_multi_dest_count: i(3),
          forward_reach_lt64_single_dest_count: i(4),
          forward_reach_lt64_multi_dest_count: i(5),
          forward_reach_lt128_single_dest_count: i(6),
          forward_reach_lt128_multi_dest_count: i(7),
          forward_reach_lt256_single_dest_count: i(8),
          forward_reach_lt256_multi_dest_count: i(9),
          forward_reach_lt512_single_dest_count: i(10),
          forward_reach_lt512_multi_dest_count: i(11),
          forward_reach_lt1000_single_dest_count: i(12),
          forward_reach_lt1000_multi_dest_count: i(13),
          forward_reach_lt2000_single_dest_count: i(14),
          forward_reach_lt2000_multi_dest_count: i(15),
          forward_reach_lt5000_single_dest_count: i(16),
          forward_reach_lt5000_multi_dest_count: i(17),
          forward_reach_gte5000_single_dest_count: i(18),
          forward_reach_gte5000_multi_dest_count: i(19),
          forward_reach_unknown_single_dest_ai_source_count: l(20),
          forward_reach_unknown_multi_dest_ai_source_count: l(21),
          forward_reach_lt32_single_dest_ai_source_count: l(22),
          forward_reach_lt32_multi_dest_ai_source_count: l(23),
          forward_reach_lt64_single_dest_ai_source_count: l(24),
          forward_reach_lt64_multi_dest_ai_source_count: l(25),
          forward_reach_lt128_single_dest_ai_source_count: l(26),
          forward_reach_lt128_multi_dest_ai_source_count: l(27),
          forward_reach_lt256_single_dest_ai_source_count: l(28),
          forward_reach_lt256_multi_dest_ai_source_count: l(29),
          forward_reach_lt512_single_dest_ai_source_count: l(30),
          forward_reach_lt512_multi_dest_ai_source_count: l(31),
          forward_reach_lt1000_single_dest_ai_source_count: l(32),
          forward_reach_lt1000_multi_dest_ai_source_count: l(33),
          forward_reach_lt2000_single_dest_ai_source_count: l(34),
          forward_reach_lt2000_multi_dest_ai_source_count: l(35),
          forward_reach_lt5000_single_dest_ai_source_count: l(36),
          forward_reach_lt5000_multi_dest_ai_source_count: l(37),
          forward_reach_gte5000_single_dest_ai_source_count: l(38),
          forward_reach_gte5000_multi_dest_ai_source_count: l(39),
        },
        u = f(e, t, a, s).finally(function () {
          return n.delete(e);
        });
      return (n.set(e, u), u);
    }
    async function f(t, n, r, a) {
      var i = await Promise.all([
          e.load(),
          n().catch(o("WAWebNullFunc").returnNull),
        ]),
        l = i[0],
        s = i[1];
      (l.log(function () {
        return babelHelpers.extends({}, a, { country: s != null ? s : void 0 });
      }),
        m(t, r));
    }
    ((l.FORWARD_REACH_SLOT_COUNT = u),
      (l.FORWARD_REACH_AI_SLOT_OFFSET = c),
      (l.isForwardReachDailyStatsEmpty = d),
      (l.resetForwardReachDailyStats = m),
      (l.submitForwardReachDailyStats = p));
  },
  98,
);

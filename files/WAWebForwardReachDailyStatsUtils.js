__d(
  "WAWebForwardReachDailyStatsUtils",
  ["WAWebForwardReachGating", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    var e = r("requireDeferred")("ForwardReachDailyStatsFalcoEvent").__setRef(
        "WAWebForwardReachDailyStatsUtils",
      ),
      s = 40,
      u = 20;
    function c(e) {
      var t;
      return ((t = e.forwardReachCounts) != null ? t : []).every(function (e) {
        return e === 0;
      });
    }
    function d(e) {
      e.forwardReachCounts = [];
    }
    function m(t, n) {
      var r;
      if (
        o("WAWebForwardReachGating").isForwardReachStatsLoggingEnabled() &&
        !c(t)
      ) {
        var a = Math.max(
            1,
            o("WAWebForwardReachGating").getForwardReachStatsDailyBucketCap(),
          ),
          i = (r = t.forwardReachCounts) != null ? r : [],
          l = function (t) {
            var e;
            return String(Math.min((e = i[t]) != null ? e : 0, a));
          },
          s = function (t) {
            var e;
            return ((e = i[t]) != null ? e : 0) > 0 ? l(t) : void 0;
          },
          u = {
            forward_reach_unknown_single_dest_count: l(0),
            forward_reach_unknown_multi_dest_count: l(1),
            forward_reach_lt32_single_dest_count: l(2),
            forward_reach_lt32_multi_dest_count: l(3),
            forward_reach_lt64_single_dest_count: l(4),
            forward_reach_lt64_multi_dest_count: l(5),
            forward_reach_lt128_single_dest_count: l(6),
            forward_reach_lt128_multi_dest_count: l(7),
            forward_reach_lt256_single_dest_count: l(8),
            forward_reach_lt256_multi_dest_count: l(9),
            forward_reach_lt512_single_dest_count: l(10),
            forward_reach_lt512_multi_dest_count: l(11),
            forward_reach_lt1000_single_dest_count: l(12),
            forward_reach_lt1000_multi_dest_count: l(13),
            forward_reach_lt2000_single_dest_count: l(14),
            forward_reach_lt2000_multi_dest_count: l(15),
            forward_reach_lt5000_single_dest_count: l(16),
            forward_reach_lt5000_multi_dest_count: l(17),
            forward_reach_gte5000_single_dest_count: l(18),
            forward_reach_gte5000_multi_dest_count: l(19),
            forward_reach_unknown_single_dest_ai_source_count: s(20),
            forward_reach_unknown_multi_dest_ai_source_count: s(21),
            forward_reach_lt32_single_dest_ai_source_count: s(22),
            forward_reach_lt32_multi_dest_ai_source_count: s(23),
            forward_reach_lt64_single_dest_ai_source_count: s(24),
            forward_reach_lt64_multi_dest_ai_source_count: s(25),
            forward_reach_lt128_single_dest_ai_source_count: s(26),
            forward_reach_lt128_multi_dest_ai_source_count: s(27),
            forward_reach_lt256_single_dest_ai_source_count: s(28),
            forward_reach_lt256_multi_dest_ai_source_count: s(29),
            forward_reach_lt512_single_dest_ai_source_count: s(30),
            forward_reach_lt512_multi_dest_ai_source_count: s(31),
            forward_reach_lt1000_single_dest_ai_source_count: s(32),
            forward_reach_lt1000_multi_dest_ai_source_count: s(33),
            forward_reach_lt2000_single_dest_ai_source_count: s(34),
            forward_reach_lt2000_multi_dest_ai_source_count: s(35),
            forward_reach_lt5000_single_dest_ai_source_count: s(36),
            forward_reach_lt5000_multi_dest_ai_source_count: s(37),
            forward_reach_gte5000_single_dest_ai_source_count: s(38),
            forward_reach_gte5000_multi_dest_ai_source_count: s(39),
          },
          m = n().catch(function () {
            return null;
          });
        (e.onReady(function (e) {
          m.then(function (t) {
            e.log(function () {
              return babelHelpers.extends({}, u, {
                country: t != null ? t : void 0,
              });
            });
          });
        }),
          d(t));
      }
    }
    ((l.FORWARD_REACH_SLOT_COUNT = s),
      (l.FORWARD_REACH_AI_SLOT_OFFSET = u),
      (l.isForwardReachDailyStatsEmpty = c),
      (l.resetForwardReachDailyStats = d),
      (l.submitForwardReachDailyStats = m));
  },
  98,
);

__d(
  "WAWebForwardReachDailyStatsUtils",
  [
    "Promise",
    "WAWebForwardReachGating",
    "WAWebNullFunc",
    "asyncToGeneratorRuntime",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("requireDeferred")("ForwardReachDailyStatsFalcoEvent").__setRef(
        "WAWebForwardReachDailyStatsUtils",
      ),
      u,
      c = 40,
      d = 20;
    function m(e) {
      var t;
      return ((t = e.forwardReachCounts) != null ? t : []).every(function (e) {
        return e === 0;
      });
    }
    function p(e, t) {
      (t === void 0 && (t = e.forwardReachCounts),
        (e.forwardReachCounts = e.forwardReachCounts.map(function (e, n) {
          var r;
          return Math.max(0, e - ((r = t[n]) != null ? r : 0));
        })));
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (
            o("WAWebForwardReachGating").isForwardReachStatsLoggingEnabled()
          ) {
            var r = u != null ? u : new WeakMap();
            return ((u = r), (n = r.get(e)) != null ? n : g(e, t, r));
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(t, r, a) {
      if (m(t)) return (e || (e = n("Promise"))).resolve();
      var i = Math.max(
          1,
          o("WAWebForwardReachGating").getForwardReachStatsDailyBucketCap(),
        ),
        l = [].concat(t.forwardReachCounts),
        s = function (t) {
          var e;
          return String(Math.min((e = l[t]) != null ? e : 0, i));
        },
        u = function (t) {
          var e;
          return ((e = l[t]) != null ? e : 0) > 0 ? s(t) : void 0;
        },
        c = {
          forward_reach_unknown_single_dest_count: s(0),
          forward_reach_unknown_multi_dest_count: s(1),
          forward_reach_lt32_single_dest_count: s(2),
          forward_reach_lt32_multi_dest_count: s(3),
          forward_reach_lt64_single_dest_count: s(4),
          forward_reach_lt64_multi_dest_count: s(5),
          forward_reach_lt128_single_dest_count: s(6),
          forward_reach_lt128_multi_dest_count: s(7),
          forward_reach_lt256_single_dest_count: s(8),
          forward_reach_lt256_multi_dest_count: s(9),
          forward_reach_lt512_single_dest_count: s(10),
          forward_reach_lt512_multi_dest_count: s(11),
          forward_reach_lt1000_single_dest_count: s(12),
          forward_reach_lt1000_multi_dest_count: s(13),
          forward_reach_lt2000_single_dest_count: s(14),
          forward_reach_lt2000_multi_dest_count: s(15),
          forward_reach_lt5000_single_dest_count: s(16),
          forward_reach_lt5000_multi_dest_count: s(17),
          forward_reach_gte5000_single_dest_count: s(18),
          forward_reach_gte5000_multi_dest_count: s(19),
          forward_reach_unknown_single_dest_ai_source_count: u(20),
          forward_reach_unknown_multi_dest_ai_source_count: u(21),
          forward_reach_lt32_single_dest_ai_source_count: u(22),
          forward_reach_lt32_multi_dest_ai_source_count: u(23),
          forward_reach_lt64_single_dest_ai_source_count: u(24),
          forward_reach_lt64_multi_dest_ai_source_count: u(25),
          forward_reach_lt128_single_dest_ai_source_count: u(26),
          forward_reach_lt128_multi_dest_ai_source_count: u(27),
          forward_reach_lt256_single_dest_ai_source_count: u(28),
          forward_reach_lt256_multi_dest_ai_source_count: u(29),
          forward_reach_lt512_single_dest_ai_source_count: u(30),
          forward_reach_lt512_multi_dest_ai_source_count: u(31),
          forward_reach_lt1000_single_dest_ai_source_count: u(32),
          forward_reach_lt1000_multi_dest_ai_source_count: u(33),
          forward_reach_lt2000_single_dest_ai_source_count: u(34),
          forward_reach_lt2000_multi_dest_ai_source_count: u(35),
          forward_reach_lt5000_single_dest_ai_source_count: u(36),
          forward_reach_lt5000_multi_dest_ai_source_count: u(37),
          forward_reach_gte5000_single_dest_ai_source_count: u(38),
          forward_reach_gte5000_multi_dest_ai_source_count: u(39),
        },
        d = h(t, r, l, c).finally(function () {
          return a.delete(t);
        });
      return (a.set(t, d), d);
    }
    function h(e, t, n, r) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            var l = yield (e || (e = n("Promise"))).all([
                s.load(),
                r().catch(o("WAWebNullFunc").returnNull),
              ]),
              u = l[0],
              c = l[1];
            (u.log(function () {
              return babelHelpers.extends({}, i, {
                country: c != null ? c : void 0,
              });
            }),
              p(t, a));
          },
        )),
        y.apply(this, arguments)
      );
    }
    ((l.FORWARD_REACH_SLOT_COUNT = c),
      (l.FORWARD_REACH_AI_SLOT_OFFSET = d),
      (l.isForwardReachDailyStatsEmpty = m),
      (l.resetForwardReachDailyStats = p),
      (l.submitForwardReachDailyStats = _));
  },
  98,
);

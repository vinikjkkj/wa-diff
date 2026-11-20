__d(
  "WAWebLabyrinthShadowSeries",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [
        0,
        (e = o("WATimeUtils")).HOUR_SECONDS,
        3 * e.HOUR_SECONDS,
        6 * e.HOUR_SECONDS,
        12 * e.HOUR_SECONDS,
        e.DAY_SECONDS,
        3 * e.DAY_SECONDS,
        e.WEEK_SECONDS,
      ];
    function u(e, t) {
      return e != null && e.pairingSec === t
        ? e
        : { lastRunSec: null, pairingSec: t, runs: 0 };
    }
    function c(e) {
      var t = e.lastRunSec,
        n = e.pairingSec,
        r = e.runs,
        a = s[r];
      return a != null
        ? n + a
        : (t != null ? t : n) + o("WATimeUtils").WEEK_SECONDS;
    }
    function d(e, t) {
      var n = Math.max(e.runs, p(e.pairingSec, t) - 1);
      return n < s.length ? s[n] : c(e) - e.pairingSec;
    }
    function m(e, t) {
      return babelHelpers.extends({}, e, {
        lastRunSec: t,
        runs: Math.max(e.runs + 1, p(e.pairingSec, t)),
      });
    }
    function p(e, t) {
      return s.filter(function (n) {
        return e + n <= t;
      }).length;
    }
    ((l.LABYRINTH_SHADOW_CHECKPOINTS_SEC = s),
      (l.getLabyrinthShadowSeries = u),
      (l.getNextLabyrinthShadowCheckpointSec = c),
      (l.getLabyrinthShadowCheckpointSec = d),
      (l.recordLabyrinthShadowSeriesRun = m));
  },
  98,
);

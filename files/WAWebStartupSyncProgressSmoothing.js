__d(
  "WAWebStartupSyncProgressSmoothing",
  [],
  function (t, n, r, o, a, i) {
    var e = 0.95,
      l = 0.05,
      s = 300,
      u = 80,
      c = 100,
      d = 0.5,
      m = 0.001;
    function p(e, t) {
      return { displayed: 0, target: e, targetAtMs: t, ratePerMs: 0 };
    }
    function _(e, t, n) {
      if (t <= e.target) return e;
      var r = n - e.targetAtMs;
      if (r <= 0) return babelHelpers.extends({}, e, { target: t });
      var o = (t - e.target) / r,
        a = e.ratePerMs === 0 ? o : e.ratePerMs + d * (o - e.ratePerMs);
      return babelHelpers.extends({}, e, {
        target: t,
        targetAtMs: n,
        ratePerMs: a,
      });
    }
    function f(t, n, r) {
      var o = Math.min(n, c),
        a = r ? 1 : e,
        i = r ? 1 : Math.min(t.target, a),
        d;
      if (t.displayed < i) {
        var p = r ? u : s,
          _ = 1 - Math.exp(-o / p);
        ((d = t.displayed + (i - t.displayed) * _), i - d < m && (d = i));
      } else {
        var f = Math.min(i + l, a);
        d = Math.min(t.displayed + t.ratePerMs * o, f);
      }
      return babelHelpers.extends({}, t, {
        displayed: Math.max(d, t.displayed),
      });
    }
    function g(t, n) {
      return n ? 1 : Math.min(t.target, e);
    }
    ((i.MAX_SYNCING_TURN = e),
      (i.createSmoothedTurn = p),
      (i.updateSmoothedTarget = _),
      (i.stepSmoothedTurn = f),
      (i.getUnsmoothedTurn = g));
  },
  66,
);

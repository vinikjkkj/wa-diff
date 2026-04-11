__d(
  "WAPttComposerScaleWaveform",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return t === e.length
        ? e
        : t === 0
          ? []
          : e.length === 0
            ? new Array(t).fill(0)
            : t > e.length
              ? u(e, t)
              : c(e, t);
    }
    function u(e, t) {
      t > e.length || s(0, 75746, t, e.length);
      var n;
      if (e.length === 1) n = 0;
      else {
        var r = (t - e.length) / (e.length - 1);
        n = 1 / (1 + r);
      }
      var o = [];
      t >= 1 && o.push(e[0]);
      for (var a = 1; a < t - 1; a++) {
        var i = a * n,
          l = Math.floor(i),
          u = i - l;
        o.push(d(e[l], e[Math.ceil(i)], u));
      }
      return (t >= 2 && o.push(e[e.length - 1]), o);
    }
    function c(e, t) {
      t < e.length || s(0, 75747, t, e.length);
      var n = [],
        r = t / e.length,
        o = 0,
        a = 0,
        i = 0;
      for (var l of e)
        ((o += l),
          (i += 1),
          (a += r),
          a >= 1 && (n.push(o / i), (i = 0), (o = 0), (a -= 1)));
      return (i > 0 && n.push(o / i), n);
    }
    function d(e, t, n) {
      return e + (t - e) * n;
    }
    l.default = e;
  },
  98,
);

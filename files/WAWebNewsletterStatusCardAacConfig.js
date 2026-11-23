__d(
  "WAWebNewsletterStatusCardAacConfig",
  [],
  function (t, n, r, o, a, i) {
    var e = 3,
      l = 4,
      s = 5,
      u = 128,
      c = 64,
      d = 32,
      m = 2,
      p = 1,
      _ = 13,
      f = 128;
    function g(t) {
      if (t[0] !== e) return t;
      var n = C(t, 1).end,
        r = h(t, n + m + p, t[n + m]);
      if (t[r] !== l) return t;
      var o = C(t, r + 1).end + _;
      if (t[o] !== s) return t;
      var a = C(t, o + 1),
        i = a.end,
        u = a.length;
      return t.slice(i, i + u);
    }
    function h(e, t, n) {
      var r = y(n, u) ? t + m : t,
        o = y(n, c) ? r + 1 + e[r] : r;
      return y(n, d) ? o + m : o;
    }
    function y(e, t) {
      return Math.floor(e / t) % 2 === 1;
    }
    function C(e, t) {
      for (var n = 0, r = t, o = f; o >= f && r < e.length; )
        ((o = e[r]), (n = n * f + (o % f)), r++);
      return { end: r, length: n };
    }
    i.getAudioSpecificConfig = g;
  },
  66,
);

__d(
  "WAWebMusicClip",
  [],
  function (t, n, r, o, a, i) {
    var e = 1e3,
      l = 5e3,
      s = 15e3,
      u = 3e4;
    function c(e) {
      return g(e) >= l;
    }
    function d(e, t) {
      var n = g(e),
        r = f(t) ? t : s;
      return Math.min(r, n);
    }
    function m(e, t) {
      return Math.min(u, g(e - t));
    }
    function p(e, t) {
      var n,
        r = e.durationMs,
        o = e.highlightTimesMs;
      return _((n = o[0]) != null ? n : 0, r, t);
    }
    function _(e, t, n) {
      return Math.min(Math.max(e, 0), Math.max(t - n, 0));
    }
    function f(t) {
      return typeof t == "number" && t % e === 0 && t >= l && t <= u;
    }
    function g(t) {
      return Math.floor(t / e) * e;
    }
    ((i.MIN_CLIP_MS = l),
      (i.canClipSong = c),
      (i.getDefaultClipDurationMs = d),
      (i.getMaxClipDurationMs = m),
      (i.getDefaultClipStartMs = p),
      (i.clampClipStartMs = _),
      (i.isValidClipDurationMs = f));
  },
  66,
);

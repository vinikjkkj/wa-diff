__d(
  "WAWebContactsAndGroupsFling",
  [],
  function (t, n, r, o, a, i) {
    var e = 8,
      l = 4,
      s = 3,
      u = 150,
      c = 600,
      d = new Set([
        " ",
        "ArrowDown",
        "ArrowUp",
        "End",
        "Home",
        "PageDown",
        "PageUp",
      ]);
    function m(e) {
      return d.has(e);
    }
    function p(e, t) {
      return [].concat(e, [t]).slice(-s);
    }
    function _(t, n) {
      var r = t.slice(1).map(function (e, n) {
        return f(t[n], e);
      });
      return n
        ? r.length > 0 && r[r.length - 1] >= l
        : r.length === s - 1 &&
            r.every(function (t) {
              return t >= e;
            });
    }
    function f(e, t) {
      var n = t.time - e.time;
      return n > 0 ? Math.abs(t.top - e.top) / n : 0;
    }
    ((i.FLING_IDLE_MS = u),
      (i.KEY_SCROLL_MS = c),
      (i.isScrollKey = m),
      (i.addScrollSample = p),
      (i.isFlingSpeed = _));
  },
  66,
);

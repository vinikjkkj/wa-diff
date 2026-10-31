__d(
  "WAWebVoipNativeMissedCallRandomId",
  [],
  function (t, n, r, o, a, i) {
    var e = 65536,
      l = [32557, 19605, 62509, 22609],
      s = 268435456,
      u = 2684354560,
      c = 4;
    function d(t) {
      for (
        var n = Math.floor(t / 1e3),
          r = (((n % s) + s) % s) + u,
          o = [(r - 1) % e, Math.floor((r - 1) / e), 0, 0],
          a = "",
          i = 0;
        i < c;
        i++
      )
        ((o = m(o)), (a += p(o).toString(16).padStart(8, "0")));
      return a;
    }
    function m(t) {
      for (var n = [1, 0, 0, 0], r = 0; r < 4; r++)
        for (var o = 0; r + o < 4; o++) n[r + o] += l[r] * t[o];
      for (var a = 0; a < 3; a++)
        ((n[a + 1] += Math.floor(n[a] / e)), (n[a] %= e));
      return ((n[3] %= e), n);
    }
    function p(e) {
      return e[3] * 32768 + Math.floor(e[2] / 2);
    }
    i.getNativeMissedCallRandomId = d;
  },
  66,
);

__d(
  "WAWebPixCodeUtils",
  ["WACrc16", "WANullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "0014br.gov.bcb.pix01",
      s = "000201",
      u = "26",
      c = "52040000",
      d = "5303986",
      m = "5802BR",
      p = "59",
      _ = "6001",
      f = "54",
      g = "62",
      h = "05",
      y = "070503***",
      C = "6304",
      b = 25;
    function v(t, n, r, a) {
      var i = e + S(n),
        l = L(t),
        g = l.substring(0, b),
        h = s.concat(u, S(i), c, d, m, p, S(g), _, "*", f, S(r), E(a));
      return h.concat(o("WACrc16").crc16(h).toString(16).toUpperCase());
    }
    function S(e) {
      return R(e) ? "" : e.length.toString().padStart(2, "0") + e;
    }
    function R(e) {
      return e == null || e.trim().length === 0;
    }
    function L(e) {
      return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    function E(e) {
      return g.concat(R(e) ? y : S(h.concat(S(r("WANullthrows")(e)))), C);
    }
    l.getPixStaticCode = v;
  },
  98,
);

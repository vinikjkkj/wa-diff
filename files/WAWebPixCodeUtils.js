__d(
  "WAWebPixCodeUtils",
  ["WACrc16", "nullthrows"],
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
    function v(t) {
      var n = t.merchantName,
        r = t.pixKey,
        a = t.referenceId,
        i = t.transactionAmount,
        l = e + S(r),
        g = L(n),
        h = g.substring(0, b),
        y = s.concat(u, S(l), c, d, m, p, S(h), _, "*", f, S(i), E(a));
      return y.concat(o("WACrc16").crc16(y).toString(16).toUpperCase());
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
      return g.concat(R(e) ? y : S(h.concat(S(r("nullthrows")(e)))), C);
    }
    l.getPixStaticCode = v;
  },
  98,
);

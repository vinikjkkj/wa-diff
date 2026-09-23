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
      b = 4,
      v = 25;
    function S(t) {
      var n = t.merchantName,
        r = t.pixKey,
        a = t.referenceId,
        i = t.transactionAmount,
        l = e + R(r),
        g = E(n),
        h = g.substring(0, v),
        y = s.concat(u, R(l), c, d, m, p, R(h), _, "*", f, R(i), k(a));
      return y.concat(
        o("WACrc16").crc16(y).toString(16).padStart(b, "0").toUpperCase(),
      );
    }
    function R(e) {
      return L(e) ? "" : e.length.toString().padStart(2, "0") + e;
    }
    function L(e) {
      return e == null || e.trim().length === 0;
    }
    function E(e) {
      return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    function k(e) {
      return g.concat(L(e) ? y : R(h.concat(R(r("nullthrows")(e)))), C);
    }
    l.getPixStaticCode = S;
  },
  98,
);

__d(
  "WAWebBloksSendFieldStatUtils",
  [],
  function (t, n, r, o, a, i) {
    var e = 1,
      l = 2,
      s = 3,
      u = 4,
      c = 5,
      d = 4;
    function m(e) {
      if (!Array.isArray(e) || e.length % d !== 0) return null;
      for (var t = {}, n = 0; n < e.length; n += d) {
        var r = e[n],
          o = e[n + 2],
          a = e[n + 3];
        if (!(a == null || typeof r != "number" || typeof o != "number")) {
          var i = p(o, a);
          i != null && (t[r] = i);
        }
      }
      return t;
    }
    function p(t, n) {
      if (t === e) return typeof n == "boolean" ? n : !!n;
      if (t === l || t === s) {
        var r = typeof n == "number" ? n : Number(n);
        return Number.isFinite(r) ? r : null;
      }
      if (t === u) return String(n);
      if (t === c) {
        var o = String(n),
          a = o.indexOf("|"),
          i = a === -1 ? o : o.slice(0, a),
          d = parseInt(i, 10);
        return Number.isNaN(d) ? null : d;
      }
      return null;
    }
    i.parseFieldStatFields = m;
  },
  66,
);

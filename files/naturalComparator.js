__d(
  "naturalComparator",
  ["gkx", "memoizeWithArgs"],
  function (t, n, r, o, a, i, l) {
    var e = 48,
      s = 57,
      u = function (n) {
        return n >= e && n <= s;
      };
    function c(e) {
      for (var t = [], n = "", r = 0; r < e.length; r++) {
        var o = e.charAt(r);
        n.length
          ? u(n.charCodeAt(0)) === u(e.charCodeAt(r))
            ? (n += o)
            : (t.push(n), (n = o))
          : (n += o);
      }
      return (n.length && t.push(n), t);
    }
    function d(e, t) {
      if (!e && !t) return 0;
      if (e) {
        if (!t) return -1;
      } else return 1;
      for (var n = c(e), r = c(t), o = 0; o < n.length && o < r.length; ) {
        var a = n[o],
          i = r[o],
          l = u(a.charCodeAt(0)),
          s = u(i.charCodeAt(0)),
          d = l && s ? parseInt(a, 10) - parseInt(i, 10) : a.localeCompare(i);
        if (d !== 0) return d;
        o++;
      }
      return o === n.length && o === r.length ? 0 : o === n.length ? -1 : 1;
    }
    var m = r("gkx")("15730")
        ? d
        : r("memoizeWithArgs")(d, function (e, t) {
            return '"' + (e || "") + '"."' + (t || "") + '"';
          }),
      p = m;
    l.default = p;
  },
  98,
);

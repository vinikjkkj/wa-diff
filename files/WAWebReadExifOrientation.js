__d(
  "WAWebReadExifOrientation",
  [],
  function (t, n, r, o, a, i) {
    var e = -1,
      l = 65496,
      s = 65504,
      u = 65505,
      c = 65519,
      d = 1165519206,
      m = 18761,
      p = 19789,
      _ = 42,
      f = 274,
      g = 3,
      h = 1,
      y = 1,
      C = 8,
      b = 2,
      v = 4,
      S = 4,
      R = 10,
      L = 2,
      E = 4,
      k = 2,
      I = 12,
      T = 2,
      D = 4,
      x = 8;
    function $(t) {
      for (var n = b; n + R <= t.byteLength; ) {
        var r = t.getUint16(n, !1);
        if (r < s || r > c) break;
        if (
          r === u &&
          t.getUint32(n + v, !1) === d &&
          t.getUint8(n + v + S) === 0
        )
          return n + R;
        n += b + t.getUint16(n + b, !1);
      }
      return e;
    }
    function P(t, n) {
      var r = t.getUint16(n, !1),
        o;
      if (r === m) o = !0;
      else if (r === p) o = !1;
      else return e;
      if (t.getUint16(n + L, o) !== _) return e;
      var a = n + t.getUint32(n + E, o);
      if (a + k > t.byteLength) return e;
      for (var i = t.getUint16(a, o), l = 0; l < i; l++) {
        var s = a + k + l * I;
        if (s + I > t.byteLength) break;
        if (
          t.getUint16(s, o) === f &&
          t.getUint16(s + T, o) === g &&
          t.getUint32(s + D, o) === h
        ) {
          var u = t.getUint16(s + x, o);
          return u >= y && u <= C ? u : e;
        }
      }
      return e;
    }
    function N(t) {
      if (t.byteLength < b) return e;
      try {
        var n = new DataView(t);
        if (n.getUint16(0, !1) !== l) return e;
        var r = $(n);
        return r === e ? e : P(n, r);
      } catch (t) {
        return e;
      }
    }
    ((i.INVALID_ORIENTATION = e), (i.readExifOrientation = N));
  },
  66,
);

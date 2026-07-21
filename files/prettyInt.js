__d(
  "prettyInt",
  [],
  function (t, n, r, o, a, i) {
    var e = ["", "k", "M", "B", "T", "P", "E", "Z", "Y"],
      l = e.map(function (e, t) {
        return Math.pow(1e3, t);
      }),
      s = e.map(function (e, t) {
        return Math.pow(1024, t);
      });
    function u(t, n, r, o) {
      var a = 1,
        i = t;
      t < 0 && ((a = -1), (i = -t));
      var u = !1,
        c = 2,
        d = !1,
        m = !1,
        p = !1,
        _ = "",
        f = !0;
      o &&
        (o.round != null && (u = o.round),
        o.precision != null && (c = o.precision),
        o.fixedPrecision != null && (d = o.fixedPrecision),
        o.useSignificantDigits != null && (m = o.useSignificantDigits),
        o.unit != null && (_ = o.unit),
        o.powerOfTwo != null && (p = o.powerOfTwo),
        o.spaceSuffix != null && (f = o.spaceSuffix));
      for (
        var g = n != null ? n : e,
          h = (r != null ? r : p ? s : l).slice(0, g.length),
          y = 0;
        y + 1 < h.length && h[y + 1] <= i;
      )
        y++;
      var C = _;
      C && (C = " " + C);
      var b;
      if (
        (u
          ? (y !== 0 &&
              y + 1 < h.length &&
              Math.round((i / h[y + 1]) * 1e5) / 1e5 >= 1 &&
              y++,
            (b = function (t) {
              return Math.round(t);
            }))
          : (b = function (t) {
              return Math.trunc(t);
            }),
        m)
      ) {
        var v = Math.trunc(Math.abs(i / h[y]));
        v > 0 && (c = Math.max(c - Math.floor(Math.log10(v)) - 1, 0));
      }
      if (d === !1 && i > 0 && i < Math.pow(10, -c)) {
        var S = (a * i).toPrecision(1).toString();
        return S.includes("e")
          ? (a * i)
              .toPrecision(3)
              .toString()
              .replace(".00e", "e")
              .replace("0e", "e") + C
          : S + C;
      }
      ((C = g[y] + _), C && (C = (f ? " " : "") + C));
      var R = Math.pow(10, c),
        L = b((i / h[y]) * R) / R;
      return d ? (a * L).toFixed(c) + C : (a * L).toString() + C;
    }
    i.default = u;
  },
  66,
);

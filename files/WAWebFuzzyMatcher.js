__d(
  "WAWebFuzzyMatcher",
  [
    "WAWebFuzzySearchMatchResult",
    "WAWebIdentityFunction",
    "WAWebL10NIsWordSeparator",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e(e, t) {
          ((this.length = e), (this.cost = t));
        }
        var t = e.prototype;
        return (
          (t.compareTo = function (t) {
            return this.cost !== t.cost
              ? this.cost - t.cost
              : t.length - this.length;
          }),
          (t.plus = function (n, r) {
            return new e(this.length + n, this.cost + r);
          }),
          e
        );
      })(),
      s = 1,
      u = 1,
      c = 1,
      d = 1,
      m = Object.freeze(new e(0, 0));
    function p(e, t, n, r) {
      return e[n].toLowerCase() === t[r].toLowerCase() ? 0 : c;
    }
    function _(t) {
      for (
        var n = t.costTolerance,
          r = t.input,
          a = t.prefixCost,
          i = t.query,
          l = t.separatorFunction,
          c = i.length,
          _ = r.length,
          f = new Array(c + 1).fill(m),
          g = new Array(c + 1).fill(m),
          h = new Array(c + 1).fill(m),
          y = new (o(
            "WAWebFuzzySearchMatchResult",
          ).WAWebFuzzySearchMatchResult)(0, _, _),
          C = [m, m, m, m],
          b = 0;
        b < c;
        b++
      )
        ((f[b] = new e(0, b * u)), (g[b] = new e(0, b * u)));
      ((f[c] = new e(0, c * u)), (g[c] = new e(0, c * u)));
      for (var v = 0; v < _; v++) {
        var S = r[v],
          R = l(S) ? 0 : a;
        h[0] = new e(0, R);
        for (var L = 0; L < c; L++) {
          var E = g[L + 1].plus(1, s),
            k = h[L].plus(0, u),
            I = g[L].plus(1, p(r, i, v, L)),
            T = void 0;
          if (L > 0 && v > 0) {
            var D = p(r, i, v, L - 1) + p(r, i, v - 1, L) + d;
            T = f[L - 1].plus(2, D);
          } else T = new e(0, Number.MAX_SAFE_INTEGER);
          ((C[0] = E),
            (C[1] = k),
            (C[2] = I),
            (C[3] = T),
            C.sort(function (e, t) {
              return e.compareTo(t);
            }),
            (h[L + 1] = C[0]));
        }
        var x = h[c],
          $ = new (o(
            "WAWebFuzzySearchMatchResult",
          ).WAWebFuzzySearchMatchResult)(v - x.length + 1, x.length, x.cost);
        $.compareTo(y) < 0 && (y = $);
        var P = f;
        ((f = g), (g = h), (h = P));
      }
      return y.cost <= n
        ? y
        : o(
            "WAWebFuzzySearchMatchResult",
          ).WAWebFuzzySearchMatchResult.noMatch();
    }
    function f(e, t, n, r, a, i) {
      if (
        (n === void 0 && (n = 0),
        r === void 0 && (r = 0),
        a === void 0 && (a = o("WAWebIdentityFunction").identityFunction),
        i === void 0 && (i = o("WAWebL10NIsWordSeparator").isWordSeparator),
        e == null || e.trim() === "" || t == null || t.trim() === "")
      )
        return o(
          "WAWebFuzzySearchMatchResult",
        ).WAWebFuzzySearchMatchResult.noMatch();
      var l = a(e),
        s = a(t);
      return _({
        costTolerance: n,
        input: l,
        prefixCost: r,
        query: s,
        separatorFunction: i,
      });
    }
    l.fuzzyMatch = f;
  },
  98,
);

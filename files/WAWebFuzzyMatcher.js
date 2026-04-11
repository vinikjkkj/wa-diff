__d(
  "WAWebFuzzyMatcher",
  [
    "WAWebFuzzySearchMatchResult",
    "WAWebL10NIsWordSeparator",
    "WAWebL10NRemoveDiacritics",
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
    function _(t, n, r, a, i) {
      for (
        var l = n.length,
          c = t.length,
          _ = new Array(l + 1).fill(m),
          f = new Array(l + 1).fill(m),
          g = new Array(l + 1).fill(m),
          h = new (o(
            "WAWebFuzzySearchMatchResult",
          ).WAWebFuzzySearchMatchResult)(0, c, c),
          y = [m, m, m, m],
          C = 0;
        C < l;
        C++
      )
        ((_[C] = new e(0, C * u)), (f[C] = new e(0, C * u)));
      ((_[l] = new e(0, l * u)), (f[l] = new e(0, l * u)));
      for (var b = 0; b < c; b++) {
        var v = t[b],
          S = i(v) ? 0 : a;
        g[0] = new e(0, S);
        for (var R = 0; R < l; R++) {
          var L = f[R + 1].plus(1, s),
            E = g[R].plus(0, u),
            k = f[R].plus(1, p(t, n, b, R)),
            I = void 0;
          if (R > 0 && b > 0) {
            var T = p(t, n, b, R - 1) + p(t, n, b - 1, R) + d;
            I = _[R - 1].plus(2, T);
          } else I = new e(0, Number.MAX_SAFE_INTEGER);
          ((y[0] = L),
            (y[1] = E),
            (y[2] = k),
            (y[3] = I),
            y.sort(function (e, t) {
              return e.compareTo(t);
            }),
            (g[R + 1] = y[0]));
        }
        var D = g[l],
          x = new (o(
            "WAWebFuzzySearchMatchResult",
          ).WAWebFuzzySearchMatchResult)(b - D.length + 1, D.length, D.cost);
        x.compareTo(h) < 0 && (h = x);
        var $ = _;
        ((_ = f), (f = g), (g = $));
      }
      return h.cost <= r
        ? h
        : o(
            "WAWebFuzzySearchMatchResult",
          ).WAWebFuzzySearchMatchResult.noMatch();
    }
    function f(e, t, n, r, a, i) {
      if (
        (n === void 0 && (n = 0),
        r === void 0 && (r = 0),
        a === void 0 && (a = o("WAWebL10NRemoveDiacritics").removeDiacritics),
        i === void 0 && (i = o("WAWebL10NIsWordSeparator").isWordSeparator),
        e == null || e.trim() === "" || t == null || t.trim() === "")
      )
        return o(
          "WAWebFuzzySearchMatchResult",
        ).WAWebFuzzySearchMatchResult.noMatch();
      var l = a(e),
        s = a(t);
      return _(l, s, n, r, i);
    }
    l.fuzzyMatch = f;
  },
  98,
);

__d(
  "IntlPunctuation",
  ["FbtHooks", "IntlPhonologicalRewrites", "IntlRedundantStops"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "[.!?\u3002\uFF01\uFF1F\u0964\u2026\u0EAF\u1801\u0E2F\uFF0E]",
      u = {};
    function c(e) {
      var t = e != null ? e : "",
        n = u[t];
      return (n == null && (n = u[t] = d(e)), n);
    }
    function d(e) {
      var t = [],
        n = r("IntlPhonologicalRewrites").get(e);
      for (var o in n.patterns) {
        var a = n.patterns[o];
        for (var i in n.meta) {
          var l = new RegExp(i.slice(1, -1), "g"),
            s = n.meta[i];
          ((o = o.replace(l, s)), (a = a.replace(l, s)));
        }
        (a === "javascript" &&
          (a = function (t) {
            return t.slice(1).toLowerCase();
          }),
          t.push([new RegExp(o.slice(1, -1), "g"), a]));
      }
      return t;
    }
    function m(t) {
      for (
        var n = c((e || (e = r("FbtHooks"))).getViewerContext().locale),
          o = t,
          a = 0;
        a < n.length;
        a++
      ) {
        var i = n[a],
          l = i[0],
          s = i[1];
        o = o.replace(l, s);
      }
      return o.replace(/\x01/g, "");
    }
    var p = new Map();
    for (var _ in r("IntlRedundantStops").equivalencies)
      for (var f of [_].concat(r("IntlRedundantStops").equivalencies[_]))
        p.set(f, _);
    var g = new Map();
    for (var h in r("IntlRedundantStops").redundancies)
      g.set(h, new Set(r("IntlRedundantStops").redundancies[h]));
    function y(e, t) {
      var n,
        r = p.get(e),
        o = p.get(t);
      return ((n = g.get(r)) == null ? void 0 : n.has(o)) === !0;
    }
    function C(e, t) {
      return y(e[e.length - 1], t) ? "" : t;
    }
    ((l.PUNCT_CHAR_CLASS = s),
      (l.applyPhonologicalRules = m),
      (l.dedupeStops = C));
  },
  98,
);

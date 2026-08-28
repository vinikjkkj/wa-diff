__d(
  "DeepRecordUtils",
  ["invariant", "AdsChange", "DeepRecord", "immutable"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("DeepRecord")({}),
      u = new e({});
    function c(e, t) {
      return e === t;
    }
    function d(e, t, n) {
      (n === void 0 && (n = c),
        (r("DeepRecord").isDeepRecord(e) && r("DeepRecord").isDeepRecord(t)) ||
          s(0, 284));
      var o = _(e, t),
        a = [];
      for (var i of o) {
        var l = e.getIn(i),
          u = t.getIn(i);
        if (!n(l, u)) {
          var d = r("DeepRecord").isDeepRecord(l) ? f(l).toJS() : l,
            m = r("DeepRecord").isDeepRecord(u) ? f(u).toJS() : u;
          a.push(new (r("AdsChange"))(i, d, m));
        }
      }
      return r("immutable").List(a);
    }
    function m(e, t, n) {
      for (var r of e) {
        var o = r[0],
          a = r[1],
          i = t.get(o);
        a !== i && n.add(o);
      }
    }
    function p(e, t) {
      var n = new Set();
      return (m(e, t, n), m(t, e, n), n);
    }
    function _(e, t) {
      var n = e == null ? u : e,
        o = t == null ? u : t,
        a = p(n, o),
        i = [];
      for (var l of a) {
        var s = n.get(l),
          c = o.get(l);
        if (
          r("DeepRecord").isDeepRecord(s) &&
          r("DeepRecord").isDeepRecord(c)
        ) {
          var d = _(s, c);
          for (var m of d) i.push([l].concat(m));
        } else s !== c && i.push([l]);
      }
      return i;
    }
    function f(e) {
      if (!r("DeepRecord").isDeepRecord(e) || e.isEmpty()) return e;
      var t = Array.from(e.keys()),
        n = [];
      for (var o of t) {
        var a = e.get(o);
        if (r("DeepRecord").isDeepRecord(a)) {
          var i = f(a);
          i.isEmpty() ? n.push([o, void 0]) : i !== a && n.push([o, i]);
        }
      }
      return e.withMutations(function (e) {
        for (var t of n) e.set(t[0], t[1]);
      });
    }
    function g(e) {
      return e == null
        ? e
        : e instanceof r("DeepRecord") || e instanceof r("immutable").Iterable
          ? e.toJS()
          : e instanceof Object
            ? e
            : null;
    }
    ((l.computeChanges = d), (l.clean = f), (l.maybeToPlainObject = g));
  },
  98,
);

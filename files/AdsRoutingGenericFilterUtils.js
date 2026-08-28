__d(
  "AdsRoutingGenericFilterUtils",
  [
    "AdsGenericFilter",
    "AdsGenericFilterField",
    "AdsGenericFilterSet",
    "FBLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "",
      s = "-",
      u = "",
      c = 0,
      d = 0,
      m = 1,
      p = 2,
      _ = 1,
      f = 2,
      g = 3;
    function h(t) {
      var n = t.getField(),
        r = t.getOperator(),
        o = t.getValue();
      return "" + n.toString() + e + r + e + String(JSON.stringify(o));
    }
    function y(t) {
      var n = t.split(e);
      if (n.length !== g)
        return (
          r("FBLogger")("ads", "routing").warn(
            "Encoded filter: %s not well defined. Dropping this filter value.",
            t,
          ),
          null
        );
      var o = n[c],
        a = o.split(s),
        i = new (r("AdsGenericFilterField"))(a[d], a[m], a[p]),
        l = n[_],
        u;
      try {
        u = JSON.parse(n[f]);
      } catch (e) {
        (r("FBLogger")("ads").warn("Could not parse %s", n[f]), (u = ""));
      }
      return new (r("AdsGenericFilter"))(i, l, u);
    }
    function C(e) {
      if (!e || !e.values) return null;
      var t = e.values.map(function (e) {
        return h(e);
      });
      return t.join(u);
    }
    function b(e) {
      if (e == null || e === "") return null;
      var t = e.split(u),
        n = t.reduce(function (e, t) {
          var n = y(t);
          return (n != null && e.push(n), e);
        }, []);
      return n.length === 0 ? null : new (r("AdsGenericFilterSet"))(n);
    }
    ((l.encodeFilter = h),
      (l.decodeFilter = y),
      (l.encode = C),
      (l.decode = b));
  },
  98,
);

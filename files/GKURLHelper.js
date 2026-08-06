__d(
  "GKURLHelper",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (typeof e != "object" || e == null) return null;
      var t = {};
      for (var n in e) {
        if (typeof e[n] != "boolean") return null;
        t[n] = e[n];
      }
      return t;
    }
    function l(e, t) {
      var n = u(e),
        r = babelHelpers.extends({}, n, t),
        o = [],
        a = [];
      (Object.keys(r).forEach(function (e) {
        r[e] ? o.push(e) : a.push(e);
      }),
        e.searchParams.set("gk_debug", "1"),
        (r.haas_enable_sample_profiling || r.ig_haas_enable_sample_profiling) &&
          (e.searchParams.delete("mh_p_min"),
          e.searchParams.set("mh_p_min", "min_with_symbols")),
        e.searchParams.delete("gk_enable"),
        e.searchParams.delete("gk_disable"),
        o.length > 0 && e.searchParams.set("gk_enable", o.join(",")),
        a.length > 0 && e.searchParams.set("gk_disable", a.join(",")));
    }
    function s(e) {
      (e.searchParams.delete("gk_debug"),
        e.searchParams.delete("gk_enable"),
        e.searchParams.delete("gk_disable"));
    }
    function u(e) {
      var t = e.searchParams.get("gk_disable"),
        n = e.searchParams.get("gk_enable"),
        r = {};
      return (
        t !== null &&
          t.split(",").forEach(function (e) {
            r[e] = !1;
          }),
        n !== null &&
          n.split(",").forEach(function (e) {
            r[e] = !0;
          }),
        r
      );
    }
    ((i.asGKMap = e), (i.assignURL = l), (i.clearURL = s), (i.fromURL = u));
  },
  66,
);

__d(
  "MAIBAUserAgentGraphPathAllowlist",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "https://graph.invalid",
      l = new Set(["access_token", "batch", "ids"]),
      s = /^[A-Za-z0-9_]+(\.[A-Za-z0-9_]+\([^(){}[\]]*\))*$/,
      u = new Set([
        "access_token",
        "fields",
        "profile_switcher_eligible_profiles",
        "session_info",
      ]);
    function c(e) {
      return (
        e != null &&
        Object.keys(e).some(function (e) {
          return l.has(e.toLowerCase());
        })
      );
    }
    function d(e) {
      var t,
        n = e == null || (t = e.fields) == null ? void 0 : t.trim();
      return n == null || n === ""
        ? !0
        : n.split(",").every(function (e) {
            var t = e.trim();
            return s.test(t)
              ? t
                  .replace(/\([^)]*\)/g, "")
                  .split(".")
                  .every(function (e) {
                    return !u.has(e.toLowerCase());
                  })
              : !1;
          });
    }
    function m(e, t) {
      var n = e.split("/");
      return (
        n.length === t.length &&
        n.every(function (e, n) {
          return e === "*" || e === t[n];
        })
      );
    }
    function p(t, n, r) {
      var o,
        a,
        i,
        l = n != null ? n : {},
        s = l.body,
        u = l.method,
        p = l.params;
      if (c(p) || c(s) || !d(p) || !d(s)) return !1;
      var _ = (
          (o =
            (a =
              (i = s == null ? void 0 : s.method) != null
                ? i
                : p == null
                  ? void 0
                  : p.method) != null
              ? a
              : u) != null
            ? o
            : "GET"
        ).toUpperCase(),
        f = r.allow[_];
      if (f == null || t.includes("?") || t.includes("#")) return !1;
      var g = "/" + r.graph_api_version + "/",
        h;
      try {
        h = new URL(t.replace(/^\/+/, ""), "" + e + g);
      } catch (e) {
        return !1;
      }
      if (h.origin !== e || !h.pathname.startsWith(g)) return !1;
      var y = h.pathname.slice(g.length).split("/");
      if (
        (y[y.length - 1] === "" && y.pop(),
        y.length === 0 ||
          y.some(function (e) {
            return e === "";
          }))
      )
        return !1;
      var C = y[0],
        b = babelHelpers.arrayLikeToArray(y).slice(1);
      return Object.keys(f).some(function (e) {
        var t = r.root_patterns[e];
        if (t == null || !new RegExp(t).test(C)) return !1;
        var n = f[e];
        return b.length === 0
          ? n.allow_self
          : n.edges.some(function (e) {
              return m(e, b);
            });
      });
    }
    i.isGraphRequestAllowed = p;
  },
  66,
);

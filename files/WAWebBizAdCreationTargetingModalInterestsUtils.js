__d(
  "WAWebBizAdCreationTargetingModalInterestsUtils",
  ["fbt", "LWICometTargetingUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = [];
      for (var n of Object.entries(e)) {
        var r = n[0],
          o = n[1];
        if (Array.isArray(o)) {
          for (var a of o)
            if (
              a != null &&
              typeof a == "object" &&
              a.id != null &&
              a.name != null
            ) {
              var i = { id: String(a.id), name: String(a.name) };
              t.push([r, i]);
            }
        }
      }
      return t;
    }
    function u(e) {
      var t;
      return e == null ? "" : (t = e.split("_")[0]) != null ? t : "";
    }
    function c(e) {
      if (e.length === 0) return [];
      var t = [];
      for (var n of e) {
        var r,
          a,
          i,
          l,
          s = (r = n.node) == null ? void 0 : r.id,
          c = (a = n.node) == null ? void 0 : a.name;
        if (!(s == null || c == null)) {
          var d = u(s),
            m = (i = n.node) == null ? void 0 : i.path,
            p = (l = n.node) == null ? void 0 : l.target_type;
          if (p != null) {
            var _ = {
                key: s,
                label: c,
                rawData: { id: d, name: c, path: m, targetType: p },
                type: "entry",
              },
              f = o("LWICometTargetingUtils").getFlexibleSpecFromEntry(_, t);
            f != null && (t = f);
          }
        }
      }
      return t;
    }
    function d(t) {
      var n = t == null ? void 0 : t[0];
      if (n == null) return s._(/*BTDS*/ "None selected");
      var r = e(n);
      if (r.length === 0) return s._(/*BTDS*/ "None selected");
      var o = r.map(function (e) {
        var t = e[1];
        return t.name;
      });
      return s._(/*BTDS*/ "{interestNames}", [
        s._param("interestNames", o.join(", ")),
      ]);
    }
    function m(t) {
      var n = t == null ? void 0 : t[0];
      if (n == null) return [];
      var r = e(n);
      return r.map(function (e) {
        var t = e[0],
          n = e[1];
        return {
          children: [],
          node: {
            id: n.id + "_" + t,
            name: n.name,
            path: [],
            raw_name: n.name,
            target_type: t,
          },
          pathName: null,
        };
      });
    }
    ((l.convertInterestsToFlexibleSpec = c),
      (l.formatInterestsDisplayWithPlaceholder = d),
      (l.convertFlexibleSpecToInterests = m));
  },
  226,
);

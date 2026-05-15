__d(
  "WAWebBizAdCreationTargetingModalInterestsUtils",
  ["fbt", "LWICometTargetingUtils", "justknobx"],
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
    function c(e, t) {
      var n = t[0];
      if (n == null) return e;
      var r = e[0],
        o = { type: n.type },
        a = babelHelpers.extends({}, r != null ? r : o);
      (n.college_years != null && (a.college_years = n.college_years),
        n.education_statuses != null &&
          (a.education_statuses = n.education_statuses),
        n.interested_in != null && (a.interested_in = n.interested_in),
        n.relationship_statuses != null &&
          (a.relationship_statuses = n.relationship_statuses),
        n.custom_audiences != null && (a.custom_audiences = n.custom_audiences),
        n.product_audience_specs != null &&
          (a.product_audience_specs = n.product_audience_specs));
      var i = t.slice(1);
      return [a].concat(i);
    }
    function d(e, t) {
      var n = [];
      for (var a of e) {
        var i,
          l,
          s,
          d,
          m = (i = a.node) == null ? void 0 : i.id,
          p = (l = a.node) == null ? void 0 : l.name;
        if (!(m == null || p == null)) {
          var _ = u(m),
            f = (s = a.node) == null ? void 0 : s.path,
            g = (d = a.node) == null ? void 0 : d.target_type;
          if (g != null) {
            var h = {
                key: m,
                label: p,
                rawData: { id: _, name: p, path: f, targetType: g },
                type: "entry",
              },
              y = o("LWICometTargetingUtils").getFlexibleSpecFromEntry(h, n);
            y != null && (n = y);
          }
        }
      }
      return (
        t != null && t.length > 0 && r("justknobx")._("3010") && (n = c(n, t)),
        n
      );
    }
    function m(t) {
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
    function p(t) {
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
    ((l.convertInterestsToFlexibleSpec = d),
      (l.formatInterestsDisplayWithPlaceholder = m),
      (l.convertFlexibleSpecToInterests = p));
  },
  226,
);

__d(
  "WAWebBizAdCreationTargetingModalInterestsUtils",
  ["fbt", "LWICometTargetingUtils", "justknobx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = new Set([
      "college_years",
      "education_statuses",
      "interested_in",
      "relationship_statuses",
    ]);
    function u(e, t) {
      if (e === "college_years") return t;
      var n = null;
      if (e === "education_statuses") {
        var r = {
          1: s._(/*BTDS*/ "In high school"),
          2: s._(/*BTDS*/ "In college"),
          3: s._(/*BTDS*/ "College grad"),
          4: s._(/*BTDS*/ "High school grad"),
          5: s._(/*BTDS*/ "Some college"),
          6: s._(/*BTDS*/ "Associate degree"),
          7: s._(/*BTDS*/ "In grad school"),
          8: s._(/*BTDS*/ "Some grad school"),
          9: s._(/*BTDS*/ "Master's degree"),
          10: s._(/*BTDS*/ "Professional degree"),
          11: s._(/*BTDS*/ "Doctorate degree"),
          12: s._(/*BTDS*/ "Unspecified"),
          13: s._(/*BTDS*/ "Some high school"),
        };
        n = r[t];
      } else if (e === "relationship_statuses") {
        var o = {
          1: s._(/*BTDS*/ "Single"),
          2: s._(/*BTDS*/ "In a relationship"),
          3: s._(/*BTDS*/ "Married"),
          4: s._(/*BTDS*/ "Engaged"),
          6: s._(/*BTDS*/ "Unspecified"),
          7: s._(/*BTDS*/ "In a civil union"),
          8: s._(/*BTDS*/ "In a domestic partnership"),
          9: s._(/*BTDS*/ "In an open relationship"),
          10: s._(/*BTDS*/ "It's complicated"),
          11: s._(/*BTDS*/ "Separated"),
          12: s._(/*BTDS*/ "Divorced"),
          13: s._(/*BTDS*/ "Widowed"),
        };
        n = o[t];
      } else if (e === "interested_in") {
        var a = { 1: s._(/*BTDS*/ "Men"), 2: s._(/*BTDS*/ "Women") };
        n = a[t];
      }
      return n != null ? String(n) : null;
    }
    function c(t) {
      var n = [];
      for (var r of Object.entries(t)) {
        var o = r[0],
          a = r[1];
        if (Array.isArray(a)) {
          for (var i of a)
            if (
              i != null &&
              typeof i == "object" &&
              i.id != null &&
              i.name != null
            ) {
              var l = { id: String(i.id), name: String(i.name) };
              n.push([o, l]);
            } else if (e.has(o)) {
              var s = String(typeof i == "object" && i != null ? i.id : i),
                c = u(o, s);
              c != null && n.push([o, { id: s, name: c }]);
            }
        }
      }
      return n;
    }
    function d(e) {
      var t;
      return e == null ? "" : (t = e.split("_")[0]) != null ? t : "";
    }
    function m(e, t) {
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
    function p(e, t) {
      return JSON.parse(JSON.stringify([].concat(e, [t])));
    }
    function _(e, t, n) {
      var r = Number(n);
      if (t === "education_statuses") {
        var o,
          a = (o = e.education_statuses) != null ? o : [];
        return a.some(function (e) {
          return Number(e) === r;
        })
          ? e
          : babelHelpers.extends({}, e, { education_statuses: p(a, r) });
      } else if (t === "relationship_statuses") {
        var i,
          l = (i = e.relationship_statuses) != null ? i : [];
        return l.some(function (e) {
          return Number(e) === r;
        })
          ? e
          : babelHelpers.extends({}, e, { relationship_statuses: p(l, r) });
      } else if (t === "college_years") {
        var s,
          u = (s = e.college_years) != null ? s : [];
        return u.includes(r)
          ? e
          : babelHelpers.extends({}, e, { college_years: [].concat(u, [r]) });
      } else if (t === "interested_in") {
        var c,
          d = (c = e.interested_in) != null ? c : [];
        return d.some(function (e) {
          return Number(e) === r;
        })
          ? e
          : babelHelpers.extends({}, e, { interested_in: p(d, r) });
      }
      return e;
    }
    function f(t, n) {
      var a = [];
      for (var i of t) {
        var l,
          s,
          u,
          c,
          p = (l = i.node) == null ? void 0 : l.id,
          f = (s = i.node) == null ? void 0 : s.name;
        if (!(p == null || f == null)) {
          var g = d(p),
            h = (u = i.node) == null ? void 0 : u.path,
            y = (c = i.node) == null ? void 0 : c.target_type;
          if (y != null)
            if (e.has(y))
              (a.length === 0 && (a = [{ type: "" }]),
                (a = [_(a[0], y, g)].concat(a.slice(1))));
            else {
              var C = {
                  key: p,
                  label: f,
                  rawData: { id: g, name: f, path: h, targetType: y },
                  type: "entry",
                },
                b = o("LWICometTargetingUtils").getFlexibleSpecFromEntry(C, a);
              b != null && (a = b);
            }
        }
      }
      return (
        n != null && n.length > 0 && r("justknobx")._("3010") && (a = m(a, n)),
        a
      );
    }
    function g(e) {
      var t = e == null ? void 0 : e[0];
      if (t == null) return s._(/*BTDS*/ "None selected");
      var n = c(t);
      if (n.length === 0) return s._(/*BTDS*/ "None selected");
      var r = n.map(function (e) {
        var t = e[1];
        return t.name;
      });
      return s._(/*BTDS*/ "{interestNames}", [
        s._param("interestNames", r.join(", ")),
      ]);
    }
    function h(e) {
      var t = e == null ? void 0 : e[0];
      if (t == null) return [];
      var n = c(t);
      return n.map(function (e) {
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
    ((l.convertInterestsToFlexibleSpec = f),
      (l.formatInterestsDisplayWithPlaceholder = g),
      (l.convertFlexibleSpecToInterests = h));
  },
  226,
);

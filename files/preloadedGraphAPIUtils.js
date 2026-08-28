__d(
  "preloadedGraphAPIUtils",
  ["areEqual", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "filtering",
      u = [
        "actions",
        "action_values",
        "catalog_segment_actions",
        "catalog_segment_value",
        "conversion_values",
        "conversions",
        "cost_per_action_type",
        "cost_per_conversion",
        "cost_per_unique_action_type",
        "unique_actions",
      ];
    function c(t, n, o, a) {
      (o === void 0 && (o = "fields"), a === void 0 && (a = {}));
      var i = [];
      function l(e, t, n) {
        var r, o;
        i.push({
          field: e,
          clientValue:
            typeof t == "string"
              ? t
              : (r = JSON.stringify(t != null ? t : null)) != null
                ? r
                : "",
          serverValue:
            typeof n == "string"
              ? n
              : (o = JSON.stringify(n != null ? n : null)) != null
                ? o
                : "",
        });
      }
      return (
        (e || (e = r("areEqual")))(t, n) ||
          (t == null || n == null
            ? l("queryDataParam", t, n)
            : (Object.keys(n).forEach(function (e) {
                if (
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  n[e] != null
                ) {
                  if (a[e]) return;
                  l(e, null, n[e]);
                }
              }),
              Object.keys(t).forEach(function (u) {
                var c = e || (e = r("areEqual"));
                if ((u === o ? (c = g) : a[u] && (c = a[u]), u === s))
                  return c(t[u], n[u])
                    ? void 0
                    : (h(t, n, o) || l(u, t[u], n[u]), i);
                c(t[u], n[u]) || l(u, t[u], n[u]);
              }))),
        i
      );
    }
    function d(e, t, n, r) {
      return (n === void 0 && (n = "fields"), c(e, t, n, r).length === 0);
    }
    function m(t, n) {
      if ((e || (e = r("areEqual")))(t, n) || !t) return [];
      if (!n) return t instanceof Array ? t : [t];
      if (typeof t == "string" && t !== n) return [t];
      if (Array.isArray(t)) {
        var o = Array.isArray(n) ? n : [n];
        return Array.from(p(t, o));
      }
      return [];
    }
    function p(e, t) {
      var n = _(e),
        r = _(t),
        o = new Set(),
        a = function () {
          var e = l[0];
          i = l[1];
          var t = i.rawField,
            n = i.subfields,
            a = r.get(e);
          if (a == null) o.add(t);
          else {
            var s = Array.from(n).filter(function (e) {
              return !a.subfields.has(e);
            });
            s.length > 0 && o.add(e + "{" + s.join(",") + "}");
          }
        },
        i;
      for (var l of n) a();
      return o;
    }
    function _(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = f(e),
            r = n.field,
            o = n.subfields;
          t.set(r, { subfields: o, rawField: e });
        }),
        t
      );
    }
    function f(e) {
      var t = e.match(/(\w+)({[\w,]+})?/),
        n = (r("isTruthy")(t) ? t : []).filter(function (t) {
          return t != e;
        });
      if (n.length === 0 || n.includes(void 0))
        return { field: e, subfields: new Set() };
      var o = n[0],
        a = n[1];
      return { field: o, subfields: new Set(a.replace(/{|}/g, "").split(",")) };
    }
    function g(e, t) {
      return m(e, t).length === 0;
    }
    function h(t, n, o) {
      var a, i;
      o === void 0 && (o = "fields");
      var l = t[s],
        c = n[s];
      if (l && l.length && (!c || !c.length)) return !0;
      var d = !1,
        m = t[o];
      (Array.isArray(m) || (m = [m]), y(m, u) || (d = !0));
      var p =
          (a = c) == null
            ? void 0
            : a.filter(function (e) {
                return e.field === "action_type" && e.operator === "IN";
              }),
        _ =
          (i = l) == null
            ? void 0
            : i.filter(function (e) {
                return e.field === "action_type" && e.operator === "IN";
              });
      if (!p || !p.length) d = !0;
      else if (p && p.length === 1 && _ && _.length === 1) {
        var f = _[0].value,
          g = p[0].value,
          h = function (t) {
            if (
              !g.find(function (e) {
                return t === e;
              })
            )
              return { v: !1 };
          },
          C;
        for (var b of f) if (((C = h(b)), C)) return C.v;
        d = !0;
      }
      if (d) {
        var v, S;
        ((l =
          (v = l) == null
            ? void 0
            : v.filter(function (e) {
                return e.field !== "action_type";
              })),
          (c =
            (S = c) == null
              ? void 0
              : S.filter(function (e) {
                  return e.field !== "action_type";
                })));
      }
      return (e || (e = r("areEqual")))(l, c);
    }
    function y(e, t) {
      var n = new Set(e);
      for (var r of t) if (n.has(r)) return !0;
      return !1;
    }
    ((l.getSubsetDeltas = c),
      (l.isSubsetOf = d),
      (l.getFieldSubsetDeltas = m),
      (l.isFieldsSubsetOf = g),
      (l.filterComparisonForActionTypesMatches = h),
      (l.haveOverlap = y));
  },
  98,
);

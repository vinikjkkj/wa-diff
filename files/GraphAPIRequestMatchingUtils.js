__d(
  "GraphAPIRequestMatchingUtils",
  [
    "GraphAPIFieldUtils",
    "arrayContainsArray",
    "deepEquals",
    "filterObject",
    "someSet",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "am_call_tags",
        "locale",
        "pretty",
        "sessionId",
        "xref",
        "access_token",
        "accessToken",
        "qpl_active_flow_instance_ids",
        "qpl_active_flow_ids",
        "qpl_active_e2e_trace_ids",
      ],
      s = ["fields", "column_fields", "action_attribution_windows"];
    function u(t, n, o) {
      n === void 0 && (n = []);
      var a = r("filterObject")(t != null ? t : {}, function (t, r) {
          var a;
          return (a = n) != null && a.includes(r)
            ? !0
            : (t == null &&
                  (o == null ? void 0 : o.allowIgnoreEmptyParams) === !0) ||
                r.startsWith("_")
              ? !1
              : !e.includes(r);
        }),
        i = a.ids;
      return (
        Array.isArray(i)
          ? (a.ids = i.slice().sort())
          : typeof i == "string" &&
            i.includes(",") &&
            (a.ids = i.split(",").sort().join(",")),
        Object.keys(a).forEach(function (e) {
          s.includes(e) && Array.isArray(a[e]) && (a[e] = a[e].slice().sort());
        }),
        a
      );
    }
    function c(e, t) {
      var n = e.map(o("GraphAPIFieldUtils").parseField),
        r = t.map(o("GraphAPIFieldUtils").parseField),
        a = function (t) {
          var e = n.find(function (e) {
            return d(e, t);
          });
          if (e == null) return { v: !1 };
        },
        i;
      for (var l of r) if (((i = a(l)), i)) return i.v;
      return !0;
    }
    function d(e, t) {
      if (t.field !== e.field) return !1;
      if (t.subFields != null) {
        if (e.subFields == null) return !1;
        var n = function (n) {
            var t = r("someSet")(e.subFields, function (e) {
              return d(e, n);
            });
            if (!t) return { v: !1 };
          },
          o;
        for (var a of t.subFields) if (((o = n(a)), o)) return o.v;
      }
      return !0;
    }
    function m(e, t, n) {
      return e === t
        ? !0
        : typeof e == "string" && typeof t == "string"
          ? p(e.split(","), t.split(","), n)
          : p(e, t, n);
    }
    function p(e, t, n) {
      if (Array.isArray(e) && Array.isArray(t))
        if (n) {
          var o = [],
            a = [];
          for (var i of e) typeof i == "string" && o.push(i);
          for (var l of t) typeof l == "string" && a.push(l);
          return o.length === e.length && a.length === t.length
            ? c(o, a)
            : r("arrayContainsArray")(e, t);
        } else return r("arrayContainsArray")(e, t);
      else return e === t;
    }
    function _(e, t, n) {
      var r = u(e, null, n),
        o = u(t, null, n),
        a = Object.keys(r);
      return a.length !== Object.keys(o).length
        ? !1
        : a.every(function (e) {
            var t = r[e],
              a = o[e];
            return f(e, t, a, n);
          });
    }
    function f(e, t, n, o) {
      var a;
      switch (e) {
        case "ids":
          return (o == null ? void 0 : o.allowIDsSubset) === !0
            ? m(t, n, !1)
            : r("deepEquals")(t, n);
        case "fields":
        case "column_fields":
          return p(
            t,
            n,
            (a = o == null ? void 0 : o.allowSubfieldSuperset) != null ? a : !1,
          );
        default:
          return r("deepEquals")(t, n);
      }
    }
    function g(e, t, n) {
      if (e.method !== t.method || e.path !== t.path) return !1;
      var r = e.params,
        o = t.params;
      return r == null ||
        o == null ||
        r instanceof FormData ||
        o instanceof FormData
        ? r === o
        : _(r, o, n);
    }
    function h(e) {
      return typeof e == "string"
        ? e
        : e === void 0
          ? "undefined"
          : JSON.stringify(e != null ? e : null);
    }
    function y(e) {
      return e == null
        ? new Set()
        : Array.isArray(e)
          ? new Set(e.map(h))
          : typeof e == "string"
            ? new Set(e.split(","))
            : new Set([h(e)]);
    }
    function C(e, t, n, r, o) {
      (o === void 0 && (o = 1),
        (e.pairs[t] = { original: h(n), incoming: h(r) }),
        (e.distance += n !== void 0 && r !== void 0 ? o : o * 2));
    }
    function b(e, t) {
      var n = new Set(Object.keys(e));
      for (var r of Object.keys(t)) n.has(r) || n.add(r);
      return Array.from(n);
    }
    function v(e, t, n) {
      var r = { pairs: {}, distance: 0 };
      (e.method !== t.method && C(r, "method", e.method, t.method, 1e3),
        e.path !== t.path && C(r, "path", e.path, t.path, 100));
      var o = e.params,
        a = t.params;
      if (o instanceof FormData || a instanceof FormData)
        return (
          o !== a &&
            C(
              r,
              "params_form_data",
              o instanceof FormData,
              a instanceof FormData,
              100,
            ),
          r
        );
      var i = u(o, null, n),
        l = u(a, null, n),
        s = b(i, l);
      return (
        s.forEach(function (e) {
          var t = i[e],
            o = l[e];
          if (e === "fields" || e === "column_fields") {
            var a = y(t),
              s = y(o),
              u = [];
            for (var c of s.values()) a.has(c) || u.push(c);
            if (
              ((r.missingIncomingFields = u),
              r.missingIncomingFields.length > 0 && s.size > 0)
            ) {
              var d = r.missingIncomingFields.length / s.size;
              C(r, e, t, o, d);
            }
          } else f(e, t, o, n) || C(r, e, t, o);
        }),
        r
      );
    }
    ((l.normalizeParamsForMatching = u),
      (l.matchGraphAPIFieldSubset = d),
      (l.areRequestsEquivalent = g),
      (l.getRequestDeltas = v));
  },
  98,
);

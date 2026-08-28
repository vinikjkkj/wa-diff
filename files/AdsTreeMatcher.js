__d(
  "AdsTreeMatcher",
  ["$InternalEnum", "immutable", "isFalsey", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored(["OBJECT", "ARRAY"]),
      s = [];
    function u(t, n, o, a, i, l) {
      if ((l === void 0 && (l = null), g(t, n, a, i, l))) return !0;
      if (t.length !== n.length) return !1;
      for (var u = !0, c = 0; c < t.length; ++c) {
        var d,
          m,
          p,
          _ = a == null ? void 0 : a.__global;
        if (
          (s.push({ value: String(c), source: e.ARRAY }),
          h(
            t[c],
            n[c],
            o,
            r("isTruthy")(
              (d = a == null ? void 0 : a.applySuboptionsToArrayElements) !=
                null
                ? d
                : _ == null
                  ? void 0
                  : _.applySuboptionsToArrayElements,
            )
              ? a
              : { __global: a == null ? void 0 : a.__global },
            i,
            l,
          ))
        ) {
          s.pop();
          continue;
        }
        if (
          ((u = !1),
          r("isTruthy")(
            (m = a == null ? void 0 : a.applyOnMismatchAtArrayIndices) != null
              ? m
              : _ == null
                ? void 0
                : _.applyOnMismatchAtArrayIndices,
          ) &&
            (a == null ||
              a.onMismatch == null ||
              a.onMismatch([].concat(s), t[c], n[c])),
          r("isTruthy")(_ == null ? void 0 : _.applyOnMismatchAtArrayIndices) &&
            (_ == null ||
              _.onMismatch == null ||
              _.onMismatch([].concat(s), t[c], n[c])),
          s.pop(),
          r("isFalsey")(
            (p = a == null ? void 0 : a.continueAfterMismatch) != null
              ? p
              : _ == null
                ? void 0
                : _.continueAfterMismatch,
          ))
        )
          break;
      }
      return u;
    }
    var c = [Object, Array, Map];
    function d(e) {
      return c.includes(e.constructor);
    }
    var m = [o("immutable").Map, o("immutable").List, o("immutable").Set];
    function p(e) {
      return m.includes(e.constructor) || e instanceof o("immutable").Record;
    }
    var _ = new Map();
    function f(t, n, o, a, i) {
      if ((i === void 0 && (i = null), g(t, n, a))) return !0;
      var l = _.get(t);
      if (l) return l === n;
      _.set(t, n);
      var u = !0,
        c = new Set(Object.keys(t).concat(Object.keys(n)));
      for (var d of c) {
        var m,
          p,
          f,
          y,
          C = a == null ? void 0 : a.__global,
          b =
            (m = o == null ? void 0 : o[d]) != null
              ? m
              : C == null || (p = C.matchers) == null
                ? void 0
                : p[d],
          v = t[d],
          S = n[d],
          R =
            (a == null || (f = a.suboptions) == null ? void 0 : f[d]) != null
              ? babelHelpers.extends({}, a.suboptions[d], {
                  __global: a.__global,
                })
              : a;
        if ((s.push({ value: d, source: e.OBJECT }), h(v, S, b, R, d, i))) {
          s.pop();
          continue;
        }
        if (
          ((u = !1),
          R == null || R.onMismatch == null || R.onMismatch([].concat(s), v, S),
          C == null || C.onMismatch == null || C.onMismatch([].concat(s), v, S),
          s.pop(),
          r("isFalsey")(
            (y = R == null ? void 0 : R.continueAfterMismatch) != null
              ? y
              : C == null
                ? void 0
                : C.continueAfterMismatch,
          ))
        )
          break;
      }
      return (_.delete(t), u);
    }
    function g(e, t, n, a, i) {
      var l;
      if (
        (a === void 0 && (a = null),
        i === void 0 && (i = null),
        i == null ||
          (a !== null && (l = i) != null && l.has(a != null ? a : "")) ||
          s.find(function (e) {
            return i.has(e.value);
          }) != null)
      ) {
        var u, c, d, m;
        if (e == null && t == null) return !0;
        var p = r("isTruthy")(
          (u = n == null ? void 0 : n.useImmutableIs) != null
            ? u
            : n == null || (c = n.__global) == null
              ? void 0
              : c.useImmutableIs,
        );
        if (p && o("immutable").is(e, t)) return !0;
        var _ = r("isTruthy")(
          (d = n == null ? void 0 : n.useObjectIs) != null
            ? d
            : n == null || (m = n.__global) == null
              ? void 0
              : m.useObjectIs,
        );
        return _ ? Object.is(e, t) : e === t;
      }
      return !0;
    }
    function h(e, t, n, r, o, a) {
      return (
        a === void 0 && (a = null),
        typeof n == "function" && n(e, t)
          ? !0
          : Array.isArray(e) && Array.isArray(t)
            ? u(e, t, n, r, o, a)
            : typeof e == "object" &&
                e != null &&
                typeof t == "object" &&
                t != null
              ? p(e) && p(t)
                ? f(
                    e,
                    t,
                    n,
                    babelHelpers.extends({}, r, { useImmutableIs: !0 }),
                    a,
                  )
                : !d(e) && !d(t)
                  ? g(e, t, r, o, a)
                  : f(e, t, n, r, a)
              : g(e, t, r, o, a)
      );
    }
    function y(e, t, n, r, o) {
      (o === void 0 && (o = null), _.clear(), (s.length = 0));
      var a = f(e, t, n, r, o);
      return (_.clear(), (s.length = 0), a);
    }
    function C(e, t) {
      return function (n, r) {
        return y(n, r, e, t);
      };
    }
    function b(t) {
      if (r("isFalsey")(t)) return "";
      for (var n = "", o = 0; o < t.length; ++o)
        t[o].source === e.ARRAY
          ? (n += "[" + t[o].value + "]")
          : (n += (o === 0 ? "" : ".") + t[o].value);
      return n;
    }
    function v(t) {
      var n;
      return (n = t.reverse().find(function (t) {
        return t.source === e.OBJECT;
      })) == null
        ? void 0
        : n.value;
    }
    ((l.FieldSource = e),
      (l.fieldTrace = s),
      (l.matchTree = y),
      (l.createMatcher = C),
      (l.fieldTraceToString = b),
      (l.fieldTraceGetLastKey = v));
  },
  98,
);

__d(
  "MAIBAPreviewPublishStructuredDiff",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function l(e, t, n) {
      return n.normalizeValue == null ? e : n.normalizeValue(e, t);
    }
    function s(t, n, r) {
      var o,
        a = l(t, n, r);
      if (Array.isArray(a)) {
        var i,
          u = a.map(function (e) {
            return s(e, [].concat(n, ["[]"]), r);
          }),
          c = r.getArrayMode == null ? void 0 : r.getArrayMode(n);
        return (
          (c === "unordered_full_list" ||
            c === "unordered_leaf_multiset" ||
            c === "unordered_multiset") &&
            u.sort(),
          (i = JSON.stringify(["array", u])) != null ? i : ""
        );
      }
      var d = e(a);
      if (d != null) {
        var m;
        return (m = JSON.stringify([
          "object",
          Object.keys(d)
            .sort()
            .map(function (e) {
              return [e, s(d[e], [].concat(n, [e]), r)];
            }),
        ])) != null
          ? m
          : "";
      }
      return (o = JSON.stringify([typeof a, String(a)])) != null ? o : "";
    }
    function u(e, t, n, r) {
      return s(e, n, r) === s(t, n, r);
    }
    function c(e, t, n, r) {
      var o = new Map();
      for (var a of t) {
        var i,
          l = s(a, [].concat(n, ["[]"]), r);
        o.set(l, ((i = o.get(l)) != null ? i : 0) + 1);
      }
      return e.filter(function (e) {
        var t,
          a = s(e, [].concat(n, ["[]"]), r),
          i = (t = o.get(a)) != null ? t : 0;
        return i === 0 ? !0 : (o.set(a, i - 1), !1);
      });
    }
    function d(e, t, n, r) {
      return { after: c(t, e, n, r), before: c(e, t, n, r), path: n };
    }
    function m(e) {
      var t;
      return (t = JSON.stringify(e)) != null ? t : "";
    }
    function p(e, t, n) {
      var r = m(t),
        o = e.get(r);
      if (o != null) {
        o.values.push(n);
        return;
      }
      e.set(r, { path: t, values: [n] });
    }
    function _(t, n, r) {
      if (Array.isArray(t)) {
        if (t.length === 0) {
          p(r, n, t);
          return;
        }
        for (var o of t) _(o, n, r);
        return;
      }
      var a = e(t);
      if (a == null) {
        p(r, n, t);
        return;
      }
      var i = Object.keys(a).sort();
      if (i.length === 0) {
        p(r, n, t);
        return;
      }
      for (var l of i) _(a[l], [].concat(n, [l]), r);
    }
    function f(e, t, n, r) {
      var o = c(e, t, n, r),
        a = c(t, e, n, r),
        i = new Map(),
        l = new Map();
      for (var s of o) _(s, n, i);
      for (var u of a) _(u, n, l);
      var d = new Set();
      (i.forEach(function (e, t) {
        return d.add(t);
      }),
        l.forEach(function (e, t) {
          return d.add(t);
        }));
      var m = Array.from(d).sort(),
        p = [];
      for (var f of m) {
        var g,
          h,
          y,
          C,
          b = i.get(f),
          v = l.get(f),
          S =
            (g =
              (h = b == null ? void 0 : b.path) != null
                ? h
                : v == null
                  ? void 0
                  : v.path) != null
              ? g
              : n,
          R = (y = b == null ? void 0 : b.values) != null ? y : [],
          L = (C = v == null ? void 0 : v.values) != null ? C : [],
          E = c(R, L, S, r),
          k = c(L, R, S, r);
        (E.length > 0 || k.length > 0) &&
          p.push({ after: k, before: E, path: S });
      }
      var I =
        p.length > 0 && ((o.length <= 1 && a.length <= 1) || p.length === 1);
      return I ? p : [{ after: a, before: o, path: n }];
    }
    function g(e, t, n) {
      return n === "after_keys"
        ? Object.keys(t)
        : Array.from(new Set([].concat(Object.keys(e), Object.keys(t)))).sort();
    }
    function h(t, n, r, o, a) {
      if (!u(n, r, o, a)) {
        var i = e(n),
          l = e(r);
        if (i != null && l != null) {
          for (var s of g(i, l, (c = a.objectMode) != null ? c : "symmetric")) {
            var c, m, p;
            h(
              t,
              (m = i[s]) != null ? m : null,
              (p = l[s]) != null ? p : null,
              [].concat(o, [s]),
              a,
            );
          }
          return;
        }
        var _ = a.getArrayMode == null ? void 0 : a.getArrayMode(o);
        if (Array.isArray(n) && Array.isArray(r)) {
          if (_ === "unordered_leaf_multiset") {
            t.push.apply(t, f(n, r, o, a));
            return;
          }
          if (_ === "unordered_multiset") {
            t.push(d(n, r, o, a));
            return;
          }
        }
        t.push({ after: r, before: n, path: o });
      }
    }
    function y(e, t, n) {
      n === void 0 && (n = {});
      var r = [];
      return (h(r, e, t, [], n), r);
    }
    function C(e, t) {
      return Object.getOwnPropertyDescriptor(e, t) != null;
    }
    function b(t) {
      if (Array.isArray(t)) return t.length === 0;
      var n = e(t);
      return n != null && Object.keys(n).length === 0;
    }
    function v(t, n, r, o) {
      var a = e(n);
      if (a != null) {
        for (var i of Object.keys(a).sort()) {
          var l = a[i];
          E(t, r ? l : void 0, r, r ? void 0 : l, !r, [].concat(o, [i]));
        }
        return;
      }
      Array.isArray(n) &&
        n.forEach(function (e, n) {
          return E(t, r ? e : void 0, r, r ? void 0 : e, !r, [].concat(o, [n]));
        });
    }
    var S = function () {
      return !1;
    };
    function R(t, n, r) {
      var o,
        a = function (t, n) {
          return (t != null && typeof t == "object") || !r(n, t);
        };
      if (Array.isArray(t)) {
        var i,
          l = t.flatMap(function (e, t) {
            return a(e, [].concat(n, [t])) ? [R(e, [].concat(n, [t]), r)] : [];
          });
        return (i = JSON.stringify(["array", l])) != null ? i : "";
      }
      var s = e(t);
      if (s != null) {
        var u,
          c = Object.keys(s)
            .sort()
            .filter(function (e) {
              return a(s[e], [].concat(n, [e]));
            })
            .map(function (e) {
              return [e, R(s[e], [].concat(n, [e]), r)];
            });
        return (u = JSON.stringify(["object", c])) != null ? u : "";
      }
      return (o = JSON.stringify([typeof t, String(t)])) != null ? o : "";
    }
    function L(e, t, n, r) {
      for (
        var o = function (t, r) {
            return t.map(function (e, t) {
              return R(e, [].concat(n, [t]), r);
            });
          },
          a = o(e, S),
          i = o(t, S),
          l = r === S ? a : o(e, r),
          s = r === S ? i : o(t, r),
          u = Math.min(e.length, t.length) + 1,
          c = function (t, n) {
            return a[t] === i[n];
          },
          d = function (t, n) {
            return c(t, n) ? u + 1 : l[t] === s[n] ? u : 0;
          },
          m = Array.from({ length: e.length + 1 }, function () {
            return new Array(t.length + 1).fill(0);
          }),
          p = e.length - 1;
        p >= 0;
        p--
      )
        for (var _ = t.length - 1; _ >= 0; _--) {
          var f = d(p, _);
          m[p][_] = Math.max(
            m[p + 1][_],
            m[p][_ + 1],
            f > 0 ? m[p + 1][_ + 1] + f : 0,
          );
        }
      for (
        var g = [],
          h = [],
          y = [],
          C = function () {
            for (var e = 0; e < Math.max(h.length, y.length); e++) {
              var t = e < h.length ? h[e] : null,
                n = e < y.length ? y[e] : null;
              g.push({ after: n, before: t, index: n != null ? n : h[e] });
            }
            ((h = []), (y = []));
          },
          b = 0,
          v = 0;
        b < e.length || v < t.length;
      ) {
        var L = b < e.length && v < t.length ? d(b, v) : 0;
        L > 0 && m[b][v] === m[b + 1][v + 1] + L
          ? (C(),
            c(b, v) || g.push({ after: v, before: b, index: v }),
            b++,
            v++)
          : v === t.length || (b < e.length && m[b + 1][v] >= m[b][v + 1])
            ? h.push(b++)
            : y.push(v++);
      }
      return (C(), g);
    }
    function E(t, n, r, o, a, i, l) {
      if ((l === void 0 && (l = S), !(!r && !a))) {
        var s = r ? e(n) : null,
          u = a ? e(o) : null;
        if (s != null && u != null) {
          var c = Array.from(
            new Set([].concat(Object.keys(s), Object.keys(u))),
          ).sort();
          for (var d of c)
            E(t, s[d], C(s, d), u[d], C(u, d), [].concat(i, [d]), l);
          return;
        }
        if (Array.isArray(n) && Array.isArray(o) && r && a) {
          for (var m of L(n, o, i, l))
            E(
              t,
              m.before == null ? void 0 : n[m.before],
              m.before != null,
              m.after == null ? void 0 : o[m.after],
              m.after != null,
              [].concat(i, [m.index]),
              l,
            );
          return;
        }
        var p = s != null || (r && Array.isArray(n)),
          _ = u != null || (a && Array.isArray(o)),
          f = p && b(n),
          g = _ && b(o);
        if ((f || g) && (f || !p) && (g || !_)) {
          t.push({ after: o, before: n, hasAfter: a, hasBefore: r, path: i });
          return;
        }
        if (p || _) {
          (p
            ? v(t, n, !0, i)
            : r &&
              n !== null &&
              t.push({
                after: o,
                before: n,
                hasAfter: !1,
                hasBefore: !0,
                path: i,
              }),
            _
              ? v(t, o, !1, i)
              : a &&
                o !== null &&
                t.push({
                  after: o,
                  before: n,
                  hasAfter: !0,
                  hasBefore: !1,
                  path: i,
                }));
          return;
        }
        (r && a && Object.is(n, o)) ||
          t.push({ after: o, before: n, hasAfter: a, hasBefore: r, path: i });
      }
    }
    function k(e, t, n) {
      var r, o, a;
      n === void 0 && (n = {});
      var i = [];
      return (
        E(
          i,
          e,
          (r = n.hasBefore) != null ? r : !0,
          t,
          (o = n.hasAfter) != null ? o : !0,
          [],
          (a = n.isMetadataLeaf) != null ? a : S,
        ),
        i
      );
    }
    ((i.asStructuredObject = e),
      (i.diffStructuredValues = y),
      (i.diffStructuredLeaves = k));
  },
  66,
);

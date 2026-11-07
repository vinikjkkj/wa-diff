__d(
  "relay-runtime/store/RelayIncrementalDeliveryConverter",
  ["invariant"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.$1 = void 0),
          (this.$2 = []),
          (this.$3 = new Map()),
          (this.$4 = new Set()),
          (this.$5 = !1));
      }
      var t = e.prototype;
      return (
        (t.convert = function (t) {
          var e,
            n = this,
            r = t;
          if (!d(r, this.$5)) return [r.hasNext != null ? s(t) : t];
          this.$5 = !0;
          var o = r.completed,
            a = r.data,
            i = r.errors,
            u = r.hasNext,
            c = r.incremental,
            p = r.pending,
            g = [];
          if (((e = this.$2).push.apply(e, i != null ? i : []), a !== void 0)) {
            this.$1 = a;
            var h = babelHelpers.extends({}, r.extensions, { is_final: !1 });
            g.push(
              i != null
                ? { data: a, errors: [].concat(i), extensions: h }
                : a != null
                  ? { data: a, extensions: h }
                  : { data: null, extensions: h },
            );
          }
          if (
            (p == null ||
              p.forEach(function (e) {
                var t = e.id,
                  r = e.label,
                  o = e.path;
                (r != null || l(0, 192158, t),
                  n.$3.set(t, { label: r, nextIndex: null, path: o }),
                  n.$4.add(m(r, o)));
              }),
            c == null ||
              c.forEach(function (e) {
                var t = e.data;
                if (t != null) {
                  var r,
                    o,
                    a,
                    i = n.$6(e.id),
                    l = i.path;
                  ((n.$1 = f(
                    n.$1,
                    [].concat(l, (r = e.subPath) != null ? r : []),
                    t,
                  )),
                    (o = n.$2).push.apply(o, (a = e.errors) != null ? a : []));
                }
              }),
            c == null ||
              c.forEach(function (e) {
                var t,
                  r,
                  o = e.errors,
                  a = e.id,
                  i = e.items;
                if (i != null) {
                  (t = n.$2).push.apply(t, o != null ? o : []);
                  var l = n.$6(a),
                    s = _(n.$1, l.path),
                    u =
                      (r = l.nextIndex) != null
                        ? r
                        : Array.isArray(s)
                          ? s.length
                          : 0;
                  (i.forEach(function (e, t) {
                    var r = [].concat(l.path, [u + t]);
                    ((n.$1 = f(n.$1, r, e)), g.push(n.$7(l.label, r, e)));
                  }),
                    (l.nextIndex = u + i.length));
                }
              }),
            o == null ||
              o.forEach(function (e) {
                var t = e.errors,
                  r = e.id,
                  o = n.$6(r),
                  a = o.label,
                  i = o.path;
                n.$3.delete(r);
                var l = _(n.$1, i);
                if (t != null) {
                  var s;
                  ((s = n.$2).push.apply(s, t), g.push(n.$7(a, i, null)));
                } else
                  Array.isArray(l) || g.push(n.$7(a, i, l != null ? l : {}));
              }),
            u === !1)
          ) {
            var y = g.pop();
            g.push(
              y != null
                ? babelHelpers.extends({}, y, {
                    extensions: babelHelpers.extends({}, y.extensions, {
                      is_final: !0,
                    }),
                  })
                : { data: null, extensions: { is_final: !0 } },
            );
          }
          return g;
        }),
        (t.unannouncedFragment = function (t, n) {
          if (!this.$5 || this.$4.has(m(t, n))) return null;
          var e = p(_(this.$1, n));
          if (e == null) return null;
          var r = this.$8(n);
          return r != null ? { data: e, errors: r } : { data: e };
        }),
        (t.$6 = function (t) {
          var e = this.$3.get(t);
          return (e != null || l(0, 192156, t), e);
        }),
        (t.$7 = function (t, n, r) {
          var e = p(r),
            o = this.$8(n);
          return e == null
            ? {
                data: null,
                errors: o != null ? o : [],
                label: t,
                path: [].concat(n),
              }
            : {
                data: e,
                errors: o != null ? o : void 0,
                label: t,
                path: [].concat(n),
              };
        }),
        (t.$8 = function (t) {
          var e = this.$2
            .filter(function (e) {
              var n;
              return c((n = e.path) != null ? n : [], t);
            })
            .map(function (e) {
              return u(e, t);
            });
          return e.length > 0 ? e : null;
        }),
        e
      );
    })();
    function s(e) {
      if (Object.keys(e).length === 1)
        return { data: null, extensions: { is_final: !0 } };
      var t = e.errors,
        n = e.path;
      return t == null || n == null
        ? e
        : babelHelpers.extends({}, e, {
            errors: t.map(function (e) {
              var t;
              return c((t = e.path) != null ? t : [], n) ? u(e, n) : e;
            }),
          });
    }
    function u(e, t) {
      var n = e.extensions,
        r = e.locations,
        o = e.message,
        a = e.path,
        i = e.severity;
      return {
        extensions: n,
        locations: r,
        message: o,
        path: a == null ? void 0 : a.slice(t.length),
        severity: i,
      };
    }
    function c(e, t) {
      return (
        e.length >= t.length &&
        t.every(function (t, n) {
          return String(e[n]) === String(t);
        })
      );
    }
    function d(e, t) {
      var n, r;
      return (
        e.label == null &&
        e.path == null &&
        e.hasNext != null &&
        (t ||
          e.pending != null ||
          e.completed != null ||
          ((n =
            (r = e.incremental) == null
              ? void 0
              : r.some(function (e) {
                  return e.id != null;
                })) != null
            ? n
            : !1))
      );
    }
    function m(e, t) {
      return e + "\0" + t.map(String).join(".");
    }
    function p(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function _(e, t) {
      for (var n = e, r = 0; r < t.length; r++) {
        var o;
        n = Array.isArray(n)
          ? n[Number(t[r])]
          : (o = p(n)) == null
            ? void 0
            : o[String(t[r])];
      }
      return n;
    }
    function f(e, t, n) {
      var r, o;
      if (t.length === 0) return g(e, n);
      var a = t[0],
        i = babelHelpers.arrayLikeToArray(t).slice(1);
      if (typeof a == "number") {
        var l = Array.isArray(e) ? [].concat(e) : [];
        return ((l[a] = f(l[a], i, n)), l);
      }
      return babelHelpers.extends(
        {},
        p(e),
        ((o = {}), (o[a] = f((r = p(e)) == null ? void 0 : r[a], i, n)), o),
      );
    }
    function g(e, t) {
      var n = p(e),
        r = p(t);
      if (n == null || r == null) return t === void 0 ? e : t;
      var o = babelHelpers.extends({}, n);
      return (
        Object.keys(r).forEach(function (e) {
          o[e] = g(o[e], r[e]);
        }),
        o
      );
    }
    a.exports = e;
  },
  null,
);

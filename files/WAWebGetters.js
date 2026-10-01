__d(
  "WAWebGetters",
  ["WAWebABProps", "err"],
  function (t, n, r, o, a, i, l) {
    var e = -1,
      s = function () {
        var e = u;
        return (u++, e);
      },
      u = 0,
      c = [];
    function d() {
      for (var e = 0, t = 0; t < c.length; t++) {
        var n = c[t];
        ((e += n.size), n.clear());
      }
      return e;
    }
    function m(t) {
      var n = t || {},
        a = n.root,
        i = n.rootEqualityCheck,
        l = n.createCache,
        u = l === void 0 ? E : l,
        d = u();
      c.push(d);
      var m = s(),
        f = function () {
          var e = g;
          return (g++, e);
        },
        g = 0,
        h = [],
        y = !1,
        C = function () {
          var e = h;
          if (
            e != null &&
            ((h = null),
            (y = o("WAWebABProps").getABPropConfigValue(
              "web_getters_lazy_slot_allocation",
            )),
            !y)
          )
            for (var t = 0; t < e.length; t++) v(e[t], f());
        },
        b = function () {
          var t = {
            prevResultIndex: e,
            changedAtIndex: e,
            checkedAtIndex: e,
            allocateGetterId: f,
            resolveAllocationOrder: C,
          };
          return (h != null ? h.push(t) : y || v(t, f()), t);
        },
        S =
          a != null
            ? a
            : _({
                getterGroupId: m,
                slots: b(),
                resultEqualityCheck: i != null ? i : L,
                cache: d,
              });
      if (S.kind !== "identity")
        throw r("err")(
          "root must be an identity getter but got kind " + S.kind,
        );
      return {
        field: function (t, n) {
          var e = n || {},
            r = e.default,
            o = e.getDefault,
            a = e.resultEqualityCheck,
            i = a === void 0 ? L : a,
            l;
          return (
            o != null
              ? (l = function (n) {
                  var e,
                    r = n[0];
                  return (e = r[t]) != null ? e : o();
                })
              : r === void 0
                ? (l = function (n) {
                    var e = n[0];
                    return e[t];
                  })
                : (l = function (n) {
                    var e,
                      o = n[0];
                    return (e = o[t]) != null ? e : r;
                  }),
            p({
              getterGroupId: m,
              slots: b(),
              root: S,
              cache: d,
              resultFunc: l,
              resultEqualityCheck: i,
              props: { kind: "field", dependencyKey: t, dependencies: [S] },
            })
          );
        },
        computed: function (t, n, r) {
          var e = r || {},
            o = e.resultEqualityCheck,
            a = o === void 0 ? L : o;
          return p({
            getterGroupId: m,
            slots: b(),
            root: S,
            cache: d,
            resultFunc: t,
            resultEqualityCheck: a,
            props: { kind: "computed", dependencies: n },
          });
        },
        unsafeIdentityGetter: S,
        clearCacheFor: function (t) {
          d.delete(k(t));
        },
      };
    }
    function p(e) {
      var t = e.cache,
        n = e.getterGroupId,
        o = e.props,
        a = e.resultEqualityCheck,
        i = e.resultFunc,
        l = e.root,
        s = e.slots,
        u = o.dependencies,
        c = u.length;
      return f({
        getterGroupId: n,
        slots: s,
        root: l,
        cache: t,
        props: babelHelpers.extends({}, o, { resultFunc: i }),
        recomputeIfNeeded: function (t, o, l) {
          b(s);
          var e = s.changedAtIndex,
            d = s.checkedAtIndex,
            m = s.prevResultIndex,
            p = l[n],
            _ = p[e],
            f = p[d];
          if (f != null && _ != null) {
            if (f === o) return _;
            if (f != null && c > 0) {
              for (var g = !1, h = 0; h < c; h++) {
                var y = u[h],
                  C = y.$$extractChangedAt(l[y.$$getterGroupId]);
                if (((g = C == null || C > f), g)) break;
              }
              if (!g) return ((p[d] = o), _);
            }
          }
          for (var v = new Array(c), S = 0; S < c; S++) {
            var L = u[S],
              E = L.$$extractResult(l[L.$$getterGroupId]);
            if (E === void 0) throw r("err")("No result was stored");
            v[S] = I(E);
          }
          var k = i(v),
            T = p[m];
          return _ != null && T !== void 0 && a(k, I(T))
            ? ((p[d] = o), _)
            : ((p[m] = k === void 0 ? R : k), (p[e] = o), (p[d] = o), o);
        },
      });
    }
    function _(e) {
      var t = e.cache,
        n = e.getterGroupId,
        r = e.resultEqualityCheck,
        o = e.slots;
      return f({
        getterGroupId: n,
        slots: o,
        root: null,
        cache: t,
        props: { kind: "identity", dependencies: [] },
        recomputeIfNeeded: function (t, a, i) {
          b(o);
          var e = o.changedAtIndex,
            l = o.checkedAtIndex,
            s = o.prevResultIndex,
            u = i[n],
            c = u[s],
            d = t,
            m = u[l],
            p = t == null ? 0 : t.revisionNumber || 0;
          if (c !== void 0 && m === p && r(d, I(c))) return a;
          var _ = a + 1;
          return ((u[s] = d === void 0 ? R : d), (u[e] = _), (u[l] = p), _);
        },
      });
    }
    function f(e) {
      for (
        var t,
          n = e.cache,
          o = e.getterGroupId,
          a = e.props,
          i = e.recomputeIfNeeded,
          l = e.root,
          s = e.slots,
          u = a.dependencies,
          c = function (t) {
            b(s);
            for (var e = k(t), n = {}, a = 0; a < h.length; a++) {
              var i = h[a],
                l = f[i],
                u = l.get(e);
              (u == null && ((u = {}), l.set(e, u)), (n[i] = u));
            }
            var c = p.$$recomputeIfNeeded(
                t,
                p.$$extractChangedAt(n[p.$$getterGroupId]) || 0,
                n,
              ),
              d = n[o],
              _ = d[s.checkedAtIndex];
            if (_ == null || c > _)
              for (var g = 0; g < m.length; g++) {
                for (var y = _ != null, C = m[g], v = 0; v < C.length; v++) {
                  var S = C[v].$$recomputeIfNeeded(t, c, n);
                  (_ == null || S > _) && (y = !1);
                }
                if (y) break;
              }
            var R = d[s.prevResultIndex];
            if (R === void 0) throw r("err")("No result was stored");
            return I(R);
          },
          d = Object.assign(c, {
            kind: a.kind,
            dependencies: u,
            dependencyKey: a.dependencyKey,
            resultFunc: a.resultFunc,
            $$getterGroupId: o,
            $$root: l || c,
            $$cache: n,
            $$recomputeIfNeeded: i,
            $$extractChangedAt: function (t) {
              return t[s.changedAtIndex];
            },
            $$extractResult: function (t) {
              return t[s.prevResultIndex];
            },
          }),
          m = g(d),
          p = d.$$root,
          _ = 0;
        _ < u.length;
        _++
      )
        if (u[_].$$root !== p)
          throw r("err")(
            "Getter created with multiple roots. This means you used getters that came from different `createGetterFactories()` calls as dependencies in a `computed()` getter. If you want to do this, you must pass the identity getter created by one of the `createGetterFactories()` calls as the `root` option to the other.",
          );
      for (
        var f = ((t = {}), (t[p.$$getterGroupId] = p.$$cache), t),
          h = [p.$$getterGroupId],
          y = 0;
        y < m.length;
        y++
      )
        for (var C = 0; C < m[y].length; C++) {
          var v = m[y][C],
            S = v.$$cache,
            R = v.$$getterGroupId;
          f[R] == null && (h.push(R), (f[R] = S));
        }
      return d;
    }
    function g(e) {
      for (var t = [e], n = 0; n < t.length; n++) {
        var r = t[n];
        r.dependencies != null && t.push.apply(t, r.dependencies);
      }
      for (
        var o = Array.from(new Set(t.reverse())), a = [], i = [], l = 0;
        l < o.length;
        l++
      ) {
        var s = o[l];
        e: {
          if (s.kind === "identity") break e;
          if (s.kind === "field") {
            a.push(s);
            break e;
          }
          if (s.kind === "computed") {
            i.push(s);
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              s.kind,
          );
        }
      }
      return [a, i].filter(function (e) {
        return e.length > 0;
      });
    }
    var h = function (t) {
        return 3 * t;
      },
      y = function (t) {
        return 3 * t + 1;
      },
      C = function (t) {
        return 3 * t + 2;
      };
    function b(t) {
      t.prevResultIndex === e &&
        (t.resolveAllocationOrder(),
        t.prevResultIndex === e && v(t, t.allocateGetterId()));
    }
    function v(e, t) {
      ((e.prevResultIndex = h(t)),
        (e.changedAtIndex = y(t)),
        (e.checkedAtIndex = C(t)));
    }
    var S = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.toString = function () {
            return "UndefinedSentinel";
          }),
          e
        );
      })(),
      R = new S();
    function L(e, t) {
      return e === t;
    }
    function E() {
      return new Map();
    }
    function k(e) {
      if (e == null)
        throw r("err")("Getter was called with " + String(e) + " data.");
      var t = e.id;
      if (t == null)
        throw r("err")(
          "Data passed to getter must include an id property (it's how we memoize) but got " +
            String(t),
        );
      return t.toString();
    }
    function I(e) {
      return e === R ? void 0 : e;
    }
    ((l.clearAllGetterCaches = d), (l.createGetterFactories = m));
  },
  98,
);

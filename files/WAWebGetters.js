__d(
  "WAWebGetters",
  ["WAWebABProps", "err"],
  function (t, n, r, o, a, i, l) {
    var e = -1,
      s = function () {
        var e = u;
        return (u++, e);
      },
      u = 0;
    function c(t) {
      var n = t || {},
        a = n.root,
        i = n.rootEqualityCheck,
        l = n.createCache,
        u = l === void 0 ? R : l,
        c = u(),
        p = s(),
        _ = function () {
          var e = f;
          return (f++, e);
        },
        f = 0,
        g = [],
        h = !1,
        y = function () {
          var e = g;
          if (
            e != null &&
            ((g = null),
            (h = o("WAWebABProps").getABPropConfigValue(
              "web_getters_lazy_slot_allocation",
            )),
            !h)
          )
            for (var t = 0; t < e.length; t++) C(e[t], _());
        },
        b = function () {
          var t = {
            prevResultIndex: e,
            changedAtIndex: e,
            checkedAtIndex: e,
            allocateGetterId: _,
            resolveAllocationOrder: y,
          };
          return (g != null ? g.push(t) : h || C(t, _()), t);
        },
        v =
          a != null
            ? a
            : m({
                getterGroupId: p,
                slots: b(),
                resultEqualityCheck: i != null ? i : S,
                cache: c,
              });
      if (v.kind !== "identity")
        throw r("err")(
          "root must be an identity getter but got kind " + v.kind,
        );
      return {
        field: function (t, n) {
          var e = n || {},
            r = e.default,
            o = e.getDefault,
            a = e.resultEqualityCheck,
            i = a === void 0 ? S : a,
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
            d({
              getterGroupId: p,
              slots: b(),
              root: v,
              cache: c,
              resultFunc: l,
              resultEqualityCheck: i,
              props: { kind: "field", dependencyKey: t, dependencies: [v] },
            })
          );
        },
        computed: function (t, n, r) {
          var e = r || {},
            o = e.resultEqualityCheck,
            a = o === void 0 ? S : o;
          return d({
            getterGroupId: p,
            slots: b(),
            root: v,
            cache: c,
            resultFunc: t,
            resultEqualityCheck: a,
            props: { kind: "computed", dependencies: n },
          });
        },
        unsafeIdentityGetter: v,
        clearCacheFor: function (t) {
          c.delete(L(t));
        },
      };
    }
    function d(e) {
      var t = e.cache,
        n = e.getterGroupId,
        o = e.props,
        a = e.resultEqualityCheck,
        i = e.resultFunc,
        l = e.root,
        s = e.slots,
        u = o.dependencies,
        c = u.length;
      return p({
        getterGroupId: n,
        slots: s,
        root: l,
        cache: t,
        props: babelHelpers.extends({}, o, { resultFunc: i }),
        recomputeIfNeeded: function (t, o, l) {
          y(s);
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
                var C = u[h],
                  b = C.$$extractChangedAt(l[C.$$getterGroupId]);
                if (((g = b == null || b > f), g)) break;
              }
              if (!g) return ((p[d] = o), _);
            }
          }
          for (var S = new Array(c), R = 0; R < c; R++) {
            var L = u[R],
              k = L.$$extractResult(l[L.$$getterGroupId]);
            if (k === void 0) throw r("err")("No result was stored");
            S[R] = E(k);
          }
          var I = i(S),
            T = p[m];
          return _ != null && T !== void 0 && a(I, E(T))
            ? ((p[d] = o), _)
            : ((p[m] = I === void 0 ? v : I), (p[e] = o), (p[d] = o), o);
        },
      });
    }
    function m(e) {
      var t = e.cache,
        n = e.getterGroupId,
        r = e.resultEqualityCheck,
        o = e.slots;
      return p({
        getterGroupId: n,
        slots: o,
        root: null,
        cache: t,
        props: { kind: "identity", dependencies: [] },
        recomputeIfNeeded: function (t, a, i) {
          y(o);
          var e = o.changedAtIndex,
            l = o.checkedAtIndex,
            s = o.prevResultIndex,
            u = i[n],
            c = u[s],
            d = t,
            m = u[l],
            p = t == null ? 0 : t.revisionNumber || 0;
          if (c !== void 0 && m === p && r(d, E(c))) return a;
          var _ = a + 1;
          return ((u[s] = d === void 0 ? v : d), (u[e] = _), (u[l] = p), _);
        },
      });
    }
    function p(e) {
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
            y(s);
            for (var e = L(t), n = {}, a = 0; a < h.length; a++) {
              var i = h[a],
                l = g[i],
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
              for (var f = 0; f < m.length; f++) {
                for (var C = _ != null, b = m[f], v = 0; v < b.length; v++) {
                  var S = b[v].$$recomputeIfNeeded(t, c, n);
                  (_ == null || S > _) && (C = !1);
                }
                if (C) break;
              }
            var R = d[s.prevResultIndex];
            if (R === void 0) throw r("err")("No result was stored");
            return E(R);
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
          m = _(d),
          p = d.$$root,
          f = 0;
        f < u.length;
        f++
      )
        if (u[f].$$root !== p)
          throw r("err")(
            "Getter created with multiple roots. This means you used getters that came from different `createGetterFactories()` calls as dependencies in a `computed()` getter. If you want to do this, you must pass the identity getter created by one of the `createGetterFactories()` calls as the `root` option to the other.",
          );
      for (
        var g = ((t = {}), (t[p.$$getterGroupId] = p.$$cache), t),
          h = [p.$$getterGroupId],
          C = 0;
        C < m.length;
        C++
      )
        for (var b = 0; b < m[C].length; b++) {
          var v = m[C][b],
            S = v.$$cache,
            R = v.$$getterGroupId;
          g[R] == null && (h.push(R), (g[R] = S));
        }
      return d;
    }
    function _(e) {
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
    var f = function (t) {
        return 3 * t;
      },
      g = function (t) {
        return 3 * t + 1;
      },
      h = function (t) {
        return 3 * t + 2;
      };
    function y(t) {
      t.prevResultIndex === e &&
        (t.resolveAllocationOrder(),
        t.prevResultIndex === e && C(t, t.allocateGetterId()));
    }
    function C(e, t) {
      ((e.prevResultIndex = f(t)),
        (e.changedAtIndex = g(t)),
        (e.checkedAtIndex = h(t)));
    }
    var b = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.toString = function () {
            return "UndefinedSentinel";
          }),
          e
        );
      })(),
      v = new b();
    function S(e, t) {
      return e === t;
    }
    function R() {
      return new Map();
    }
    function L(e) {
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
    function E(e) {
      return e === v ? void 0 : e;
    }
    l.createGetterFactories = c;
  },
  98,
);

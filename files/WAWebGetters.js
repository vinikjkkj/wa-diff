__d(
  "WAWebGetters",
  ["err"],
  function (t, n, r, o, a, i, l) {
    var e = function () {
        var e = s;
        return (s++, e);
      },
      s = 0;
    function u(t) {
      var n = t || {},
        o = n.root,
        a = n.rootEqualityCheck,
        i = n.createCache,
        l = i === void 0 ? b : i,
        s = l(),
        u = e(),
        m = function () {
          var e = p;
          return (p++, e);
        },
        p = 0,
        _ =
          o != null
            ? o
            : d({
                getterGroupId: u,
                getterId: m(),
                resultEqualityCheck: a != null ? a : C,
                cache: s,
              });
      if (_.kind !== "identity")
        throw r("err")(
          "root must be an identity getter but got kind " + _.kind,
        );
      return {
        field: function (t, n) {
          var e = n || {},
            r = e.default,
            o = e.getDefault,
            a = e.resultEqualityCheck,
            i = a === void 0 ? C : a,
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
            c({
              getterGroupId: u,
              getterId: m(),
              root: _,
              cache: s,
              resultFunc: l,
              resultEqualityCheck: i,
              props: { kind: "field", dependencyKey: t, dependencies: [_] },
            })
          );
        },
        computed: function (t, n, r) {
          var e = r || {},
            o = e.resultEqualityCheck,
            a = o === void 0 ? C : o;
          return c({
            getterGroupId: u,
            getterId: m(),
            root: _,
            cache: s,
            resultFunc: t,
            resultEqualityCheck: a,
            props: { kind: "computed", dependencies: n },
          });
        },
        unsafeIdentityGetter: _,
        clearCacheFor: function (t) {
          s.delete(v(t));
        },
      };
    }
    function c(e) {
      var t = e.cache,
        n = e.getterGroupId,
        o = e.getterId,
        a = e.props,
        i = e.resultEqualityCheck,
        l = e.resultFunc,
        s = e.root,
        u = a.dependencies,
        c = u.length,
        d = _(o),
        p = f(o),
        h = g(o);
      return m({
        getterGroupId: n,
        getterId: o,
        root: s,
        cache: t,
        props: babelHelpers.extends({}, a, { resultFunc: l }),
        recomputeIfNeeded: function (t, o, a) {
          var e = a[n],
            s = e[p],
            m = e[h];
          if (m != null && s != null) {
            if (m === o) return s;
            if (m != null && c > 0) {
              for (var _ = !1, f = 0; f < c; f++) {
                var g = u[f],
                  C = g.$$extractChangedAt(a[g.$$getterGroupId]);
                if (((_ = C == null || C > m), _)) break;
              }
              if (!_) return ((e[h] = o), s);
            }
          }
          for (var b = new Array(c), v = 0; v < c; v++) {
            var R = u[v],
              L = R.$$extractResult(a[R.$$getterGroupId]);
            if (L === void 0) throw r("err")("No result was stored");
            b[v] = S(L);
          }
          var E = l(b),
            k = e[d];
          return s != null && k !== void 0 && i(E, S(k))
            ? ((e[h] = o), s)
            : ((e[d] = E === void 0 ? y : E), (e[p] = o), (e[h] = o), o);
        },
      });
    }
    function d(e) {
      var t = e.cache,
        n = e.getterGroupId,
        r = e.getterId,
        o = e.resultEqualityCheck,
        a = _(r),
        i = f(r),
        l = g(r);
      return m({
        getterGroupId: n,
        getterId: r,
        root: null,
        cache: t,
        props: { kind: "identity", dependencies: [] },
        recomputeIfNeeded: function (t, r, s) {
          var e = s[n],
            u = e[a],
            c = t,
            d = e[l],
            m = t == null ? 0 : t.revisionNumber || 0;
          if (u !== void 0 && d === m && o(c, S(u))) return r;
          var p = r + 1;
          return ((e[a] = c === void 0 ? y : c), (e[i] = p), (e[l] = m), p);
        },
      });
    }
    function m(e) {
      for (
        var t,
          n = e.cache,
          o = e.getterGroupId,
          a = e.getterId,
          i = e.props,
          l = e.recomputeIfNeeded,
          s = e.root,
          u = i.dependencies,
          c = _(a),
          d = f(a),
          m = g(a),
          h = function (t) {
            for (var e = v(t), n = {}, a = 0; a < E.length; a++) {
              var i = E[a],
                l = L[i],
                s = l.get(e);
              (s == null && ((s = {}), l.set(e, s)), (n[i] = s));
            }
            var u = b.$$recomputeIfNeeded(
                t,
                b.$$extractChangedAt(n[b.$$getterGroupId]) || 0,
                n,
              ),
              d = n[o],
              p = d[m];
            if (p == null || u > p)
              for (var _ = 0; _ < C.length; _++) {
                for (var f = p != null, g = C[_], h = 0; h < g.length; h++) {
                  var y = g[h].$$recomputeIfNeeded(t, u, n);
                  (p == null || y > p) && (f = !1);
                }
                if (f) break;
              }
            var R = d[c];
            if (R === void 0) throw r("err")("No result was stored");
            return S(R);
          },
          y = Object.assign(h, {
            kind: i.kind,
            dependencies: u,
            dependencyKey: i.dependencyKey,
            resultFunc: i.resultFunc,
            $$getterGroupId: o,
            $$root: s || h,
            $$cache: n,
            $$recomputeIfNeeded: l,
            $$extractChangedAt: function (t) {
              return t[d];
            },
            $$extractResult: function (t) {
              return t[c];
            },
          }),
          C = p(y),
          b = y.$$root,
          R = 0;
        R < u.length;
        R++
      )
        if (u[R].$$root !== b)
          throw r("err")(
            "Getter created with multiple roots. This means you used getters that came from different `createGetterFactories()` calls as dependencies in a `computed()` getter. If you want to do this, you must pass the identity getter created by one of the `createGetterFactories()` calls as the `root` option to the other.",
          );
      for (
        var L = ((t = {}), (t[b.$$getterGroupId] = b.$$cache), t),
          E = [b.$$getterGroupId],
          k = 0;
        k < C.length;
        k++
      )
        for (var I = 0; I < C[k].length; I++) {
          var T = C[k][I],
            D = T.$$cache,
            x = T.$$getterGroupId;
          L[x] == null && (E.push(x), (L[x] = D));
        }
      return y;
    }
    function p(e) {
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
    var _ = function (t) {
        return 3 * t;
      },
      f = function (t) {
        return 3 * t + 1;
      },
      g = function (t) {
        return 3 * t + 2;
      },
      h = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.toString = function () {
            return "UndefinedSentinel";
          }),
          e
        );
      })(),
      y = new h();
    function C(e, t) {
      return e === t;
    }
    function b() {
      return new Map();
    }
    function v(e) {
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
    function S(e) {
      return e === y ? void 0 : e;
    }
    l.createGetterFactories = u;
  },
  98,
);

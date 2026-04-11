__d(
  "WebBloksBind",
  [
    "WebBloksConstants",
    "WebBloksErrors",
    "WebBloksInterpreterEnvironment",
    "WebBloksModel",
    "WebBloksNormaliseYogaDimension",
    "WebBloksScopedIds",
    "WebBloksScriptExecutor",
    "WebBloksUpdateTraversal",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "$DESCENDANT_BIND_VARIABLE_DEPENDENCIES",
      s = "$DESCENDANT_EXPANDED_VARIABLES",
      u = (function () {
        function e(e, t, n, r) {
          if (
            ((this.previousVariableDependencies = o("WebBloksUtils").EMPTY_MAP),
            (this.expandedVariables = new Map()),
            (this.bloksContext = e),
            (this.resources = t),
            (this.clientIdToScopedIdMapper = n),
            r)
          )
            if (
              ((this.nextCache = new c(r.bindCache)),
              (this.cache = r.bindCache),
              (this.previousExpandedVariables = r.expandedVariables),
              (this.variablesChanged = new Set()),
              r.dependencies)
            ) {
              this.previousVariableDependencies = r.dependencies;
              for (var a of r.dependencies) {
                var i = a[0],
                  l = a[1];
                l !== t.variables.get(i) && this.variablesChanged.add(i);
              }
            } else
              this.previousVariableDependencies = o("WebBloksUtils").EMPTY_MAP;
          else
            ((this.nextCache = new c(null)),
              (this.cache = new c(null)),
              (this.previousExpandedVariables = o("WebBloksUtils").EMPTY_MAP),
              (this.previousVariableDependencies =
                o("WebBloksUtils").EMPTY_MAP),
              (this.variablesChanged = void 0));
        }
        var t = e.prototype;
        return (
          (t.apply = function (n, a, i, l, s) {
            var t,
              u,
              c = n,
              d = c.getExpression(o("WebBloksConstants").ON_BIND);
            if (d == null) return c;
            var m = r("WebBloksInterpreterEnvironment").forBind(
              this.bloksContext,
              d.getSourceMapNode(),
              this.resources,
              this.expandedVariables,
            );
            ((m.scope =
              (t = c.keyPath) != null ? t : o("WebBloksUtils").EMPTY_KEY_PATH),
              (m.variableAccessLog = l));
            for (
              var p = o("WebBloksScriptExecutor").execute(
                  m,
                  d.getValue(),
                  o("WebBloksUtils").EMPTY_ARRAY,
                ),
                _ = null,
                f = c.getId(),
                g = (u = c.keyPath) != null ? u : [],
                v = this.bloksContext.objectSet.environment.traversalKeys,
                S = p.length > 0 && !Array.isArray(p[0]),
                R = 0;
              R < p.length;
              R++
            ) {
              var L = null,
                E = void 0,
                k = void 0;
              if (S) ((k = p[R]), (E = p[++R]));
              else {
                var I = p[R];
                ((L = I[0] == null ? null : "" + I[0]),
                  (k = "" + I[1]),
                  (E = I[2]));
              }
              var T = void 0;
              if (h(k, c.styleId, v)) {
                var D = C(this, c, i, g, s, E, v);
                for (var x of D) _ = this.addToTemplateCache(_, x);
                T = D;
              } else if (y(k, c.styleId, v)) {
                var $ = b(this, c, i, g, s, E, v);
                ((T = $), $ != null && (_ = this.addToTemplateCache(_, $)));
              } else T = E;
              if (S || L === f) c = e.applyOperation(c, a, k, T);
              else
                throw new (o("WebBloksErrors").WebBloksError)(
                  'Encountered binding targeted for a descendant from bind script "' +
                    k +
                    '"',
                );
            }
            return (this.nextCache.cacheUnboundChildTemplates(c, _), c);
          }),
          (t.addToTemplateCache = function (t, n) {
            var e = t != null ? t : new Map();
            return (e.set(n.clientId, n), e);
          }),
          (t.addExpandedVariable = function (t, n) {
            if ((this.expandedVariables.set(t, n), this.variablesChanged)) {
              var e = this.previousExpandedVariables.get(t);
              if (e !== n) {
                var r;
                (r = this.variablesChanged) == null || r.add(t);
              }
            }
          }),
          (e.applyOperation = function (n, r, o, a) {
            return e.applyAttribute(n, r, o, a);
          }),
          (e.applyAttribute = function (n, r, o, a) {
            if (n !== r || r.get(o) !== a) {
              var t = e.ensureUnique(n, r);
              return (t.set(o, a), t);
            }
            return n;
          }),
          (e.ensureUnique = function (t, n) {
            return t === n ? n.makeBoundCopy() : t;
          }),
          e
        );
      })(),
      c = (function () {
        function e(e) {
          var t, n, r;
          ((this.expandedVariables =
            (t = e == null ? void 0 : e.expandedVariables) != null
              ? t
              : new Map()),
            (this.unboundChildTemplates =
              (n = e == null ? void 0 : e.unboundChildTemplates) != null
                ? n
                : new Map()),
            (this.variableDependencies =
              (r = e == null ? void 0 : e.variableDependencies) != null
                ? r
                : new Map()));
        }
        var t = e.prototype;
        return (
          (t.transferCache = function (t, n, r) {
            var e = this;
            t.traverse(function (t) {
              return (e.$1(t, n), !1);
            }, r);
          }),
          (t.cacheUnboundChildTemplates = function (t, n) {
            n && this.unboundChildTemplates.set(t.clientId, n);
          }),
          (t.cacheVariableDependencies = function (t, n) {
            this.variableDependencies.set(t.clientId, n);
          }),
          (t.cacheExpandedVariables = function (t, n) {
            n.size > 0 && this.expandedVariables.set(t.clientId, n);
          }),
          (t.getVariableDependencies = function (t) {
            return this.variableDependencies.get(t.clientId);
          }),
          (t.getExpandedVariables = function (t) {
            return this.expandedVariables.get(t.clientId);
          }),
          (t.getUnboundChildTemplates = function (t) {
            return t ? this.unboundChildTemplates.get(t.clientId) : null;
          }),
          (t.$1 = function (t, n) {
            var e = t.clientId,
              r = this.expandedVariables.get(e);
            r && n.expandedVariables.set(e, r);
            var o = this.unboundChildTemplates.get(e);
            o && n.unboundChildTemplates.set(e, o);
            var a = this.variableDependencies.get(e);
            a && n.variableDependencies.set(e, a);
          }),
          e
        );
      })();
    function d(e, t, n, r, a) {
      var i = r != null ? n.withVariableUpdates(r) : n,
        l = m(e, t, i, a);
      return (
        (l.boundModel = o("WebBloksNormaliseYogaDimension").normaliseBoundModel(
          l.boundModel,
          e.objectSet.environment.traversalKeys,
        )),
        l
      );
    }
    function m(e, t, n, r) {
      var o = new u(e, n, e.scopedClientIdMapper, r);
      return p(t, r, o);
    }
    function p(e, t, n) {
      var r = new Set(),
        a = new Map(),
        i = _(e, t == null ? void 0 : t.boundModel, n, r, a),
        l = new Map();
      for (var s of r) l.set(s, n.resources.variables.get(s));
      return (
        o("WebBloksUtils").putAll(l, n.expandedVariables),
        {
          unboundModel: e,
          boundModel: i,
          variables: n.resources.variables,
          expandedVariables: n.expandedVariables,
          dependencies: l,
          bindCache: n.nextCache,
        }
      );
    }
    function _(t, n, r, a, i) {
      if (t.get(o("WebBloksConstants").DESCENDANT_HAS_BIND) === !1) return t;
      var l = t,
        c = new Set(),
        d = new Map();
      ((l = r.apply(l, t, n, c, d)),
        (l = f(l, t, n, r, c, d)),
        d.size > 0 && (l = u.applyAttribute(l, t, s, d)),
        l !== t && (l = u.applyAttribute(l, t, e, c)));
      for (var m of c) a.add(m);
      return (o("WebBloksUtils").putAll(i, d), l);
    }
    function f(e, t, n, r, a, i) {
      var l = e,
        s = r.bloksContext.objectSet.environment.traversalKeys[l.styleId];
      if (s == null) return l;
      var c = s.plural_subnodes,
        d = s.subnodes;
      if (d)
        for (var m of d) {
          var p = l.getSubNode(m);
          if (p instanceof o("WebBloksModel").WebBloksModel) {
            var f = n == null ? void 0 : n.getSubNode(m);
            if (f instanceof o("WebBloksModel").WebBloksModel || f == null) {
              var h = _(p, f, r, a, i);
              l = u.applyAttribute(l, t, m, h);
            }
          }
        }
      if (c) {
        for (var y of c)
          if (y !== o("WebBloksConstants").CHILD_TEMPLATES) {
            for (
              var C = l.getChildren_DEPRECATED(y),
                b = C,
                v = n == null ? void 0 : n.getChildren_DEPRECATED(y),
                S = 0,
                R = 0;
              R < C.length;
              R++
            ) {
              var L = C[R];
              if (L) {
                var E = g(L, v, R),
                  k = _(L, E, r, a, i);
                if (k !== L)
                  if (
                    (b === C && (b = C.slice()),
                    k.styleId ===
                      o("WebBloksConstants").BK_INTERNAL_MERGE_WITH_BIND)
                  ) {
                    var I,
                      T = k.getChildren_DEPRECATED();
                    ((I = b).splice.apply(I, [R + S, 1].concat(T)),
                      (S += T.length - 1));
                  } else b[R + S] = k;
              }
            }
            b !== C && (l = u.applyAttribute(l, t, y, b));
          }
      }
      return l;
    }
    function g(e, t, n) {
      var r;
      if (t)
        return ((r = t[n]) == null ? void 0 : r.clientId) === e.clientId
          ? t[n]
          : t.find(function (t) {
              return t.clientId === e.clientId;
            });
    }
    function h(e, t, n) {
      var r;
      return !!(
        (r = n[t]) != null &&
        (r = r.plural_subnodes) != null &&
        r.includes(e)
      );
    }
    function y(e, t, n) {
      var r;
      return !!(
        (r = n[t]) != null &&
        (r = r.subnodes) != null &&
        r.includes(e)
      );
    }
    function C(e, t, n, r, o, a, i) {
      return a
        .map(function (a) {
          return b(e, t, n, r, o, a, i);
        })
        .filter(Boolean);
    }
    function b(e, t, n, r, a, i, l) {
      if (i == null) return null;
      var s;
      Array.isArray(i)
        ? (s = {
            templateId: i[0],
            expandedVariables: new Map(Object.entries(i[1])),
            scopeKey: i[2],
            keyPathBase: r,
          })
        : (s = i);
      var u;
      if (typeof s.templateId == "number") {
        var c = s.templateId,
          d = t.getChildren_DEPRECATED(o("WebBloksConstants").CHILD_TEMPLATES);
        if (c < 0 || c >= d.length)
          throw new (o("WebBloksErrors").WebBloksError)(
            "Invalid child template index " + c + " for " + s.scopeKey,
          );
        u = d[c];
      } else {
        var m = e.resources.templates.get(s.templateId);
        if (m == null)
          throw new (o("WebBloksErrors").WebBloksError)(
            "No such template in tree resources: " + s.templateId,
          );
        u = m;
      }
      var p = e.clientIdToScopedIdMapper.getScopedClientId(u, s.scopeKey),
        _ = o("WebBloksScopedIds").extendKeyPath(s.keyPathBase, p),
        f = o("WebBloksScopedIds").buildKeypathBase(_);
      s.expandedVariables.size > 0 && v(e, s.expandedVariables, f, a);
      var g = e.cache.getUnboundChildTemplates(n);
      if (g) {
        var h = g.get(p);
        if (h) return h;
      }
      return o("WebBloksUpdateTraversal").runUpdateTraversal(
        u,
        {
          apply: function (n) {
            return e.clientIdToScopedIdMapper.copyModelWithKeyPath(
              n,
              _,
              s.scopeKey,
            );
          },
          onUpdatesApplied: function () {},
        },
        l,
      );
    }
    function v(e, t, n, r) {
      for (var a of t.entries()) {
        var i = a[0],
          l = a[1],
          s = o("WebBloksScopedIds").buildScopedVariableIdentifier(i, n);
        (e.addExpandedVariable(s, l), r.set(s, l));
      }
    }
    l.bind = d;
  },
  98,
);

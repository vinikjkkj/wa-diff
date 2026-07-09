__d(
  "WebBloksBind",
  [
    "BindResourceProcessingDelegate",
    "WebBloksConstants",
    "WebBloksDataModule",
    "WebBloksErrors",
    "WebBloksInterpreterEnvironment",
    "WebBloksModel",
    "WebBloksNormaliseYogaDimension",
    "WebBloksPayloadParser",
    "WebBloksScopedIds",
    "WebBloksScriptExecutor",
    "WebBloksScriptTokens",
    "WebBloksUpdateTraversal",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "$DESCENDANT_BIND_VARIABLE_DEPENDENCIES",
      s = "$DESCENDANT_EXPANDED_VARIABLES",
      u = (function () {
        function e(e, t, n, r) {
          var a = this;
          if (
            ((this.previousVariableDependencies = o("WebBloksUtils").EMPTY_MAP),
            (this.expandedVariables = new Map()),
            (this.$1 = new Set()),
            (this.$2 = new Map()),
            (this.$3 = new Map()),
            (this.bindDataModuleDelegate = new (o(
              "BindResourceProcessingDelegate",
            ).BindResourceProcessingDelegate)({
              containsVariable: function (t) {
                return a.containsVariable(t);
              },
            })),
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
              for (var i of r.dependencies) {
                var l = i[0],
                  s = i[1];
                s !== t.variables.get(l) && this.variablesChanged.add(l);
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
            var p = d.getValue(),
              _ =
                Array.isArray(p) &&
                p.length > 0 &&
                !(
                  p[0] instanceof
                  o("WebBloksScriptTokens").WebBloksIdentifierToken
                ),
              f;
            if (_) {
              var g = o("WebBloksUtils").cast(p);
              f = [];
              for (var v = 0; v < g.length; v += 2) {
                var S = g[v],
                  R = o("WebBloksUtils").cast(g[v + 1]),
                  L = o("WebBloksScriptExecutor").execute(
                    m,
                    R,
                    o("WebBloksUtils").EMPTY_ARRAY,
                  );
                f.push(S, L);
              }
            } else
              f = o("WebBloksUtils").cast(
                o("WebBloksScriptExecutor").execute(
                  m,
                  p,
                  o("WebBloksUtils").EMPTY_ARRAY,
                ),
              );
            for (
              var E = null,
                k = c.getId(),
                I = (u = c.keyPath) != null ? u : [],
                T = this.bloksContext.objectSet.environment.traversalKeys,
                D = _ || (f.length > 0 && !Array.isArray(f[0])),
                x = 0;
              x < f.length;
              x++
            ) {
              var $ = null,
                P = void 0,
                N = void 0;
              if (D) ((N = f[x]), (P = f[++x]));
              else {
                var M = f[x];
                (($ = M[0] == null ? null : "" + M[0]),
                  (N = "" + M[1]),
                  (P = M[2]));
              }
              var w = void 0;
              if (h(N, c.styleId, T)) {
                var A = C(this, c, i, I, s, P, T);
                for (var F of A) E = this.addToTemplateCache(E, F);
                w = A;
              } else if (y(N, c.styleId, T)) {
                var O = b(this, c, i, I, s, P, T);
                ((w = O), O != null && (E = this.addToTemplateCache(E, O)));
              } else w = P;
              if (D || $ === k) c = e.applyOperation(c, a, N, w);
              else
                throw new (o("WebBloksErrors").WebBloksError)(
                  'Encountered binding targeted for a descendant from bind script "' +
                    N +
                    '"',
                );
            }
            return (this.nextCache.cacheUnboundChildTemplates(c, E), c);
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
          (t.isResourceProcessed = function (t) {
            return this.$1.has(t);
          }),
          (t.collectTreeResource = function (t, n) {
            this.$1.has(n) || (this.$1.add(n), this.$2.set(n, t));
          }),
          (t.mergeFunctionTable = function (t) {
            var e = t.ftDeclare,
              n = t.ftInclude,
              r = t.functionTable;
            (r == null && e == null && n == null) ||
              (this.resources = this.resources.withFunctionTableUpdates(
                r,
                e,
                n,
              ));
          }),
          (t.getCollectedTreeResources = function () {
            return this.$2;
          }),
          (t.getCachedTemplatePayload = function (t) {
            return this.$3.get(t);
          }),
          (t.cacheTemplatePayload = function (t, n) {
            this.$3.set(t, n);
          }),
          (t.containsVariable = function (t) {
            return (
              this.expandedVariables.has(t) || this.resources.variables.has(t)
            );
          }),
          (t.processVariableManifestsInBind = function (t, n) {
            var e = this;
            if (t.length !== 0) {
              var a =
                  n.length > 0
                    ? o("WebBloksScopedIds").buildKeypathBase(n)
                    : null,
                i = new Map();
              for (var l of t) {
                var s,
                  u = l.id,
                  c =
                    l.scoped === !0 && a != null
                      ? o("WebBloksScopedIds").buildScopedVariableIdentifier(
                          u,
                          a,
                        )
                      : u;
                if (!this.containsVariable(c)) {
                  var d = l.type,
                    m = o("WebBloksDataModule").getDataModuleFromContext(
                      this.bloksContext,
                      d,
                    );
                  if (!m)
                    throw new (o("WebBloksErrors").WebBloksError)(
                      "Missing variable module with type: " + d,
                    );
                  var p = function (a) {
                      var t = r("WebBloksInterpreterEnvironment").forBind(
                        e.bloksContext,
                        null,
                        e.resources,
                        e.expandedVariables,
                      );
                      return (
                        (t.scope = n),
                        o("WebBloksScriptExecutor").execute(t, a, [])
                      );
                    },
                    _ = (s = i.get(d)) != null ? s : new Map(),
                    f = m.setup(this.bloksContext, l, p, _);
                  (f.snapshot != null && i.set(d, f.snapshot),
                    this.addExpandedVariable(c, f.initialData.initialValue),
                    this.bindDataModuleDelegate.collectVariable(
                      c,
                      l,
                      f.initialData,
                      f.snapshot,
                    ));
                }
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
          bindDataModuleDelegate: n.bindDataModuleDelegate,
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
        var m = s.templateId,
          p = e.resources.payloads.get(m);
        if (p != null) {
          var _ = e.getCachedTemplatePayload(m);
          (_ == null &&
            ((_ = o("WebBloksPayloadParser").parseTree(p.payload, l, null)),
            e.cacheTemplatePayload(m, _)),
            (u = _.unboundModel));
          var f = m;
          if (!e.isResourceProcessed(f)) {
            var g;
            (e.collectTreeResource(_.resources, f),
              e.mergeFunctionTable(_.resources));
            var h = (g = _.resources.variableDefinitions) != null ? g : [];
            h.length > 0 && e.processVariableManifestsInBind(h, r);
          }
        } else {
          var y = e.resources.templates.get(m);
          if (y == null)
            throw new (o("WebBloksErrors").WebBloksError)(
              "No such template in tree resources: " + m,
            );
          u = y;
        }
      }
      var C = e.clientIdToScopedIdMapper.getScopedClientId(u, s.scopeKey),
        b = o("WebBloksScopedIds").extendKeyPath(s.keyPathBase, C),
        S = o("WebBloksScopedIds").buildKeypathBase(b);
      s.expandedVariables.size > 0 && v(e, s.expandedVariables, S, a);
      var R = e.cache.getUnboundChildTemplates(n);
      if (R) {
        var L = R.get(C);
        if (L) return L;
      }
      return o("WebBloksUpdateTraversal").runUpdateTraversal(
        u,
        {
          apply: function (n) {
            return e.clientIdToScopedIdMapper.copyModelWithKeyPath(
              n,
              b,
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

__d(
  "WebBloksBind",
  [
    "BindResourceProcessingDelegate",
    "WebBloksBindInstrumentation",
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
    "webBloksGlobalAttributeKeys",
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
            (this.$4 = null),
            (this.subtreeReuseEnabled = !1),
            (this.instrumentationEnabled = !1),
            (this.$5 = !1),
            (this.bindDataModuleDelegate = new (o(
              "BindResourceProcessingDelegate",
            ).BindResourceProcessingDelegate)({
              containsVariable: function (t) {
                return a.containsVariable(t);
              },
            })),
            (this.$6 = 0),
            (this.bloksContext = e),
            (this.resources = t),
            (this.clientIdToScopedIdMapper = n),
            (this.subtreeReuseEnabled =
              e.objectSet.environment.enableBindSubtreeReuse),
            (this.instrumentationEnabled =
              e.objectSet.environment.enableBindInstrumentation),
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
          (t.getClockReadCount = function () {
            return this.$6;
          }),
          (t.getBindTimeSnapshotMs = function () {
            return (
              this.subtreeReuseEnabled && this.$6++,
              this.$4 == null && (this.$4 = Date.now()),
              this.$4
            );
          }),
          (t.cacheDependencies = function (t, n, r, o) {
            (this.nextCache.cacheVariableDependencies(t, n),
              this.nextCache.cacheExpandedVariables(t, r),
              this.nextCache.cacheClockDependentSubtree(t, o));
          }),
          (t.$7 = function (t) {
            var e = this.variablesChanged;
            if (e == null) return !0;
            for (var n of t) if (e.has(n)) return !0;
            return !1;
          }),
          (t.processNodeForOptimization = function (t, n, r) {
            if (this.variablesChanged == null || this.cache.isClockDependent(t))
              return !1;
            var e = this.cache.getVariableDependencies(t);
            if (e == null)
              return (
                this.$5 ||
                  ((this.$5 = !0),
                  this.bloksContext.objectSet.environment.logger.warn(
                    "WebBloksBind: a previously bound node has no variable dependency set; skipping subtree reuse for it",
                  )),
                !1
              );
            if (this.$7(e)) return !1;
            for (var o of e) n.add(o);
            var a = this.cache.getExpandedVariables(t);
            if (a != null)
              for (var i of a) {
                var l = i[0],
                  s = i[1];
                (this.addExpandedVariable(l, s), r.set(l, s));
              }
            return !0;
          }),
          (e.isValidCachedModel = function (t, n) {
            return n.sourceModel === t;
          }),
          (t.apply = function (n, a, i, l, s) {
            var t = this,
              u,
              c,
              d = n,
              m = d.getExpression(
                d.usesCanonicalKeys()
                  ? r("webBloksGlobalAttributeKeys").toCanonicalAttrs.on_bind
                  : "on_bind",
              );
            if (m == null) return d;
            var p = r("WebBloksInterpreterEnvironment").forBind(
              this.bloksContext,
              m.getSourceMapNode(),
              this.resources,
              this.expandedVariables,
              function () {
                return t.getBindTimeSnapshotMs();
              },
            );
            ((p.scope =
              (u = d.keyPath) != null ? u : o("WebBloksUtils").EMPTY_KEY_PATH),
              (p.variableAccessLog = l));
            var _ = m.getValue(),
              f =
                Array.isArray(_) &&
                _.length > 0 &&
                !(
                  _[0] instanceof
                  o("WebBloksScriptTokens").WebBloksIdentifierToken
                ),
              g;
            if (f) {
              var v = o("WebBloksUtils").cast(_);
              g = [];
              for (var S = 0; S < v.length; S += 2) {
                var R = v[S],
                  L = o("WebBloksUtils").cast(v[S + 1]),
                  E = o("WebBloksScriptExecutor").execute(
                    p,
                    L,
                    o("WebBloksUtils").EMPTY_ARRAY,
                  );
                g.push(R, E);
              }
            } else
              g = o("WebBloksUtils").cast(
                o("WebBloksScriptExecutor").execute(
                  p,
                  _,
                  o("WebBloksUtils").EMPTY_ARRAY,
                ),
              );
            for (
              var k = null,
                I = d.getId(),
                T = (c = d.keyPath) != null ? c : [],
                D = this.bloksContext.objectSet.environment,
                x = D.minificationMap,
                $ = D.traversalKeys,
                P = D.unminificationMap,
                N = D.useMinification,
                M = N || P != null,
                w = f || (g.length > 0 && !Array.isArray(g[0])),
                A = 0;
              A < g.length;
              A++
            ) {
              var F = null,
                O = void 0,
                B = void 0;
              if (w) ((B = g[A]), (O = g[++A]));
              else {
                var W = g[A];
                ((F = W[0] == null ? null : "" + W[0]),
                  (B = "" + W[1]),
                  (O = W[2]));
              }
              var q = d.getCanonicalAttributeKey(B),
                U = void 0;
              if (h(q, d.styleId, $)) {
                var V = C(this, d, i, T, s, O, $, x, P, M);
                for (var H of V) k = this.addToTemplateCache(k, H);
                U = V;
              } else if (y(q, d.styleId, $)) {
                var G = b(this, d, i, T, s, O, $, x, P, M);
                ((U = G), G != null && (k = this.addToTemplateCache(k, G)));
              } else U = O;
              if (w || F === I) d = e.applyOperation(d, a, B, U);
              else
                throw new (o("WebBloksErrors").WebBloksError)(
                  'Encountered binding targeted for a descendant from bind script "' +
                    B +
                    '"',
                );
            }
            return (this.nextCache.cacheUnboundChildTemplates(d, k), d);
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
                        function () {
                          return e.getBindTimeSnapshotMs();
                        },
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
            return e.applyWireAttribute(n, r, o, a);
          }),
          (e.applyWireAttribute = function (n, r, o, a) {
            if (n !== r || r.getWireValue(o) !== a) {
              var t = e.ensureUnique(n, r);
              return (t.setWireValue(o, a), t);
            }
            return n;
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
          var t, n, r, o;
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
                : new Map()),
            (this.clockDependentSubtrees =
              (o = e == null ? void 0 : e.clockDependentSubtrees) != null
                ? o
                : new Set()));
        }
        var t = e.prototype;
        return (
          (t.transferCache = function (t, n, r) {
            var e = this;
            t.traverse(function (t) {
              return (e.$1(t, n), !1);
            }, r);
          }),
          (t.cacheClockDependentSubtree = function (t, n) {
            n
              ? this.clockDependentSubtrees.add(t.clientId)
              : this.clockDependentSubtrees.delete(t.clientId);
          }),
          (t.isClockDependent = function (t) {
            return this.clockDependentSubtrees.has(t.clientId);
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
      var i = e.objectSet.environment.enableBindInstrumentation,
        l = i ? o("WebBloksBindInstrumentation").bindClockNowMs() : 0,
        s = r != null ? n.withVariableUpdates(r) : n,
        u = m(e, t, s, a);
      return (
        (u.boundModel = o("WebBloksNormaliseYogaDimension").normaliseBoundModel(
          u.boundModel,
          e.objectSet.environment.traversalKeys,
        )),
        i &&
          (o("WebBloksBindInstrumentation").bindCounters.bindMs +=
            o("WebBloksBindInstrumentation").bindClockNowMs() - l),
        u
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
      r.instrumentationEnabled &&
        o("WebBloksBindInstrumentation").bindCounters.nodesVisited++;
      var l = r.subtreeReuseEnabled;
      if (
        l &&
        n != null &&
        u.isValidCachedModel(t, n) &&
        r.processNodeForOptimization(n, a, i)
      )
        return (
          r.instrumentationEnabled &&
            o("WebBloksBindInstrumentation").bindCounters
              .subtreesReusedAtEntry++,
          n
        );
      var c = l ? r.getClockReadCount() : 0,
        d = t,
        m = new Set(),
        p = new Map();
      ((d = r.apply(d, t, n, m, p)),
        (d = f(d, t, n, r, m, p)),
        l
          ? r.cacheDependencies(d, m, p, r.getClockReadCount() > c)
          : (p.size > 0 && (d = u.applyAttribute(d, t, s, p)),
            d !== t && (d = u.applyAttribute(d, t, e, m))));
      for (var _ of m) a.add(_);
      return (
        o("WebBloksUtils").putAll(i, p),
        r.instrumentationEnabled &&
          d !== t &&
          o("WebBloksBindInstrumentation").bindCounters.modelsRebuilt++,
        d
      );
    }
    function f(e, t, n, a, i, l) {
      var s = e,
        c = a.bloksContext.objectSet.environment.traversalKeys[s.styleId];
      if (c == null) return s;
      var d = a.subtreeReuseEnabled,
        m = d
          ? e !== t ||
            t.get(
              t.usesCanonicalKeys()
                ? r("webBloksGlobalAttributeKeys").toCanonicalAttrs.on_bind
                : "on_bind",
            ) != null
          : !0,
        p = c.plural_subnodes,
        f = c.subnodes;
      if (f)
        for (var h of f) {
          var y = s.getSubNode(h);
          if (y instanceof o("WebBloksModel").WebBloksModel) {
            var C = n == null ? void 0 : n.getSubNode(h);
            if (C instanceof o("WebBloksModel").WebBloksModel || C == null) {
              var b = _(y, C, a, i, l);
              ((m = m || b !== C), (s = u.applyAttribute(s, t, h, b)));
            } else m = !0;
          }
        }
      if (p) {
        for (var v of p)
          if (
            !(
              v === o("WebBloksConstants").CHILD_TEMPLATES ||
              v ===
                r("webBloksGlobalAttributeKeys").toCanonicalAttrs
                  .child_templates
            )
          ) {
            for (
              var S = s.getChildren_DEPRECATED(v),
                R = S,
                L = n == null ? void 0 : n.getChildren_DEPRECATED(v),
                E = 0,
                k = 0;
              k < S.length;
              k++
            ) {
              var I = S[k];
              if (I) {
                var T = g(I, L, k),
                  D = _(I, T, a, i, l);
                if (((m = m || D !== T), D !== I))
                  if (
                    (R === S && (R = S.slice()),
                    D.styleId ===
                      o("WebBloksConstants").BK_INTERNAL_MERGE_WITH_BIND)
                  ) {
                    var x,
                      $ = D.getChildren_DEPRECATED();
                    ((x = R).splice.apply(x, [k + E, 1].concat($)),
                      (E += $.length - 1));
                  } else R[k + E] = D;
              }
            }
            R !== S && (s = u.applyAttribute(s, t, v, R));
          }
      }
      return d && !m && n != null && u.isValidCachedModel(t, n)
        ? (a.instrumentationEnabled &&
            o("WebBloksBindInstrumentation").bindCounters
              .subtreesReusedAtExit++,
          n)
        : s;
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
    function C(e, t, n, r, o, a, i, l, s, u) {
      return a
        .map(function (a) {
          return b(e, t, n, r, o, a, i, l, s, u);
        })
        .filter(Boolean);
    }
    function b(e, t, n, a, i, l, s, u, c, d) {
      if (l == null) return null;
      var m;
      Array.isArray(l)
        ? (m = {
            templateId: l[0],
            expandedVariables: new Map(Object.entries(l[1])),
            scopeKey: l[2],
            keyPathBase: a,
          })
        : (m = l);
      var p;
      if (typeof m.templateId == "number") {
        var _ = m.templateId,
          f = t.getChildren_DEPRECATED(
            t.usesCanonicalKeys()
              ? r("webBloksGlobalAttributeKeys").toCanonicalAttrs
                  .child_templates
              : o("WebBloksConstants").CHILD_TEMPLATES,
          );
        if (_ < 0 || _ >= f.length)
          throw new (o("WebBloksErrors").WebBloksError)(
            "Invalid child template index " + _ + " for " + m.scopeKey,
          );
        p = f[_];
      } else {
        var g = m.templateId,
          h = e.resources.payloads.get(g);
        if (h != null) {
          var y = e.getCachedTemplatePayload(g);
          (y == null &&
            ((y = o("WebBloksPayloadParser").parseTree(
              h.payload,
              s,
              u,
              null,
              c,
              d,
            )),
            e.cacheTemplatePayload(g, y)),
            (p = y.unboundModel));
          var C = g;
          if (!e.isResourceProcessed(C)) {
            var b;
            (e.collectTreeResource(y.resources, C),
              e.mergeFunctionTable(y.resources));
            var S = (b = y.resources.variableDefinitions) != null ? b : [];
            S.length > 0 && e.processVariableManifestsInBind(S, a);
          }
        } else {
          var R = e.resources.templates.get(g);
          if (R == null)
            throw new (o("WebBloksErrors").WebBloksError)(
              "No such template in tree resources: " + g,
            );
          p = R;
        }
      }
      var L = e.clientIdToScopedIdMapper.getScopedClientId(p, m.scopeKey),
        E = o("WebBloksScopedIds").extendKeyPath(m.keyPathBase, L),
        k = o("WebBloksScopedIds").buildKeypathBase(E);
      m.expandedVariables.size > 0 && v(e, m.expandedVariables, k, i);
      var I = e.cache.getUnboundChildTemplates(n);
      if (I) {
        var T = I.get(L);
        if (T) return T;
      }
      return o("WebBloksUpdateTraversal").runUpdateTraversal(
        p,
        {
          apply: function (n) {
            return e.clientIdToScopedIdMapper.copyModelWithKeyPath(
              n,
              E,
              m.scopeKey,
            );
          },
          onUpdatesApplied: function () {},
        },
        s,
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

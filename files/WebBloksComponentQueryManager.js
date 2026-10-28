__d(
  "WebBloksComponentQueryManager",
  [
    "WebBloksChildrenOperationsHelper",
    "WebBloksMutations",
    "WebBloksParseResult",
    "WebBloksRenderDiagnostics",
    "WebBloksScopedComponentQueryDefinition",
    "WebBloksScopedIds",
    "WebBloksScriptExecutor",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "query_info_",
      s = (function () {
        function t(e, t) {
          ((this.$3 = new Map()),
            (this.$4 = new Map()),
            (this.$5 = new Map()),
            (this.$6 = new Map()),
            (this.$7 = new WeakMap()),
            (this.$8 = new Map()),
            (this.$9 = new Map()),
            (this.$1 = e),
            (this.$2 = t));
        }
        var n = t.prototype;
        return (
          (n.setup = function (t, n) {
            var e = this,
              r = [],
              a = function (t) {
                return o("WebBloksScriptExecutor").execute(n, t, []);
              },
              i = [],
              l = function (i) {
                var t = o("WebBloksUtils").cast(a(i.appIdExpression));
                o(
                  "WebBloksRenderDiagnostics",
                ).isWebBloksRenderDiagnosticsInstalled() &&
                  (e.$6.set(i.id, t), e.$7.set(i, t));
                var l =
                    i.paramsExpression != null
                      ? o("WebBloksUtils").cast(a(i.paramsExpression))
                      : {},
                  s =
                    i.cacheTTLExpression != null
                      ? o("WebBloksUtils").cast(a(i.cacheTTLExpression))
                      : null;
                if (s == null)
                  return (
                    o(
                      "WebBloksRenderDiagnostics",
                    ).isWebBloksRenderDiagnosticsInstalled() &&
                      o("WebBloksRenderDiagnostics").reportWebBloksRenderDrop(
                        "async_query_skipped",
                        { queryAppId: e.$6.get(i.id), queryId: i.id },
                      ),
                    e.$6.delete(i.id),
                    1
                  );
                o(
                  "WebBloksRenderDiagnostics",
                ).isWebBloksRenderDiagnosticsInstalled() &&
                  e.$9.set(
                    i.id,
                    o(
                      "WebBloksRenderDiagnostics",
                    ).getWebBloksDocumentGeneration(),
                  );
                var u = e.$2.getCachedComponentsOrSubscribeToQuery(
                  t,
                  l,
                  s,
                  function (t, r) {
                    e.$10(i, r, n);
                  },
                );
                u.value == null || r.push([i, u.value]);
              };
            for (var s of t) l(s);
            for (var u of r) {
              var c = u[0],
                d = u[1],
                m = this.$11(c, d, n, "resolved_sync");
              for (var p of m) i.push(p);
              this.$12(d);
            }
            return i;
          }),
          (n.$12 = function (t) {
            var e,
              n = t.stackedScreens;
            n != null &&
              (t.claimStackedScreens == null || t.claimStackedScreens(),
              this.$1.bloksContext.objectSet.pushStackedScreens(
                n,
                {},
                (e = t.stackedScreensDelayMs) != null ? e : 0,
              ));
          }),
          (n.$10 = function (t, n, r) {
            var e = this,
              o = this.$11(t, n, r, "resolved_async");
            (o.forEach(function (t) {
              e.$1.enqueueTreeUpdateOperation(t);
            }),
              this.$12(n));
          }),
          (n.$11 = function (t, n, r, a) {
            var e = n.success ? a : "failed",
              i = !1;
            for (var l of (s = t.dependencies) != null ? s : new Set()) {
              var s;
              if (!this.$4.has(l)) {
                var u = this.$5.get(l);
                (u == null && ((u = new Set()), this.$5.set(l, u)),
                  u.add(t.id),
                  (i = !0));
              }
              if (i)
                return (
                  this.$3.set(t.id, { queryDefinition: t, response: n }),
                  []
                );
            }
            if (
              o(
                "WebBloksRenderDiagnostics",
              ).isWebBloksRenderDiagnosticsInstalled()
            ) {
              var c = this.$3.get(t.id),
                d =
                  c != null && c.queryDefinition !== t
                    ? this.$7.get(c.queryDefinition)
                    : null;
              d != null && this.$8.set(t.id, d);
            }
            (this.$4.set(t.id, n), this.$3.delete(t.id));
            var m = this.$13(t, n, r, e);
            for (var p of (_ = this.$5.get(t.id)) != null ? _ : new Set()) {
              var _,
                f = this.$3.get(p);
              if (f == null) {
                if (
                  o(
                    "WebBloksRenderDiagnostics",
                  ).isWebBloksRenderDiagnosticsInstalled()
                ) {
                  var g;
                  this.$14(p, "async_dependency_abandoned", {
                    queryAppId:
                      (g = this.$8.get(p)) != null ? g : this.$6.get(p),
                    queryId: p,
                  });
                }
                (this.$8.delete(p), this.$6.delete(p), this.$9.delete(p));
                continue;
              }
              ((m = m.concat(this.$11(f.queryDefinition, f.response, r, e))),
                this.$5.delete(t.id));
            }
            return m;
          }),
          (n.$13 = function (t, n, r, a) {
            var e,
              i = this,
              l = { resolution_type: a, response_summary: {} };
            if (!n.success) {
              var s = n.error;
              return (
                this.$1.bloksContext.objectSet.environment.logger.mustfix(
                  "Async component query " + t.id + " failed",
                  s instanceof Error ? s : null,
                ),
                o(
                  "WebBloksRenderDiagnostics",
                ).isWebBloksRenderDiagnosticsInstalled() &&
                  this.$14(t.id, "async_fetch_failed", {
                    errorClass: o(
                      "WebBloksRenderDiagnostics",
                    ).classifyWebBloksRenderError(s),
                    message:
                      s instanceof Error
                        ? o("WebBloksRenderDiagnostics").safeErrorMessage(s)
                        : null,
                    queryAppId: this.$6.get(t.id),
                    queryId: t.id,
                  }),
                this.$6.delete(t.id),
                this.$9.delete(t.id),
                [
                  {
                    treeModification: null,
                    variableUpdate: {
                      variableIdentifier: this.$15(t.id),
                      value: l,
                    },
                  },
                ]
              );
            }
            var u = this.$16(
              (e = t.targets) != null ? e : new Map(),
              n.result.components,
              t.id,
            );
            (this.$6.delete(t.id), this.$9.delete(t.id));
            var c = t.isScoped ? o("WebBloksScopedIds").extendKeyPath() : null,
              d = [],
              m = function () {
                var e = p[0],
                  n = p[1],
                  a = i.$17(n, e.serverId, c),
                  s = function (n) {
                    var t = r.createBloksModelScopedContext(e.keyPath);
                    return o("WebBloksScriptExecutor").execute(t, n, []);
                  },
                  u =
                    t.clientParamsExpression != null
                      ? o("WebBloksUtils").cast(s(t.clientParamsExpression))
                      : {};
                for (var m of Object.entries(u)) {
                  var _ = m[0],
                    f = m[1];
                  d.push({
                    treeModification: null,
                    variableUpdate: {
                      variableIdentifier: i.$18(_, c),
                      value: f,
                    },
                  });
                }
                d.push({
                  treeModification: a,
                  variableUpdate: {
                    variableIdentifier: i.$18(i.$15(t.id), e.keyPath),
                    value: l,
                  },
                });
              };
            for (var p of u.entries()) m();
            return d;
          }),
          (n.$17 = function (t, n, a) {
            var e = this.$1.bloksContext.objectSet.environment.traversalKeys,
              i = t.unboundModel.makeDeepCopyWithNewClientIds(a, e),
              l = t.resources.clone();
            l.componentQueries = l.componentQueries.map(function (t) {
              return o(
                "WebBloksScopedComponentQueryDefinition",
              ).generateTreeScopedComponentQueryDefFromScopedDef(i, t, e);
            });
            var s = o(
              "WebBloksChildrenOperationsHelper",
            ).getReplaceChildUpdateOperation(this.$1, n, [i]);
            return {
              target: new (o("WebBloksMutations").ChildServerIdTarget)(n, e),
              updateOperation: s,
              parseResult: new (r("WebBloksParseResult"))(i, l),
            };
          }),
          (n.$16 = function (t, n, r) {
            var e = new Map();
            for (var a of t.entries()) {
              var i = a[0],
                l = a[1],
                s = n.get(i);
              if (s == null) {
                o(
                  "WebBloksRenderDiagnostics",
                ).isWebBloksRenderDiagnosticsInstalled() &&
                  this.$14(r, "async_target_missing", {
                    componentId: i,
                    queryAppId: this.$6.get(r),
                    queryId: r,
                  });
                continue;
              }
              e.set(l, s);
            }
            return e;
          }),
          (n.$14 = function (t, n, r) {
            if (
              o(
                "WebBloksRenderDiagnostics",
              ).isWebBloksRenderDiagnosticsInstalled()
            ) {
              var e = this.$9.get(t);
              (e != null &&
                e !==
                  o(
                    "WebBloksRenderDiagnostics",
                  ).getWebBloksDocumentGeneration()) ||
                o("WebBloksRenderDiagnostics").reportWebBloksRenderDrop(n, r);
            }
          }),
          (n.$18 = function (t, n) {
            if (n == null || n.length === 0) return t;
            var e = o("WebBloksScopedIds").buildKeypathBase(n);
            return o("WebBloksScopedIds").buildScopedVariableIdentifier(t, e);
          }),
          (n.$15 = function (n) {
            return "" + e + n;
          }),
          (n.__queryDocumentGenerationsSizeForTest = function () {
            return this.$9.size;
          }),
          (n.__abandonedAppIdsSizeForTest = function () {
            return this.$8.size;
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);

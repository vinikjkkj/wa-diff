__d(
  "WebBloksTreeManager",
  [
    "Promise",
    "TreeManagerResourceProcessingDelegate",
    "WebBloksBindInstrumentation",
    "WebBloksComponentQueryManager",
    "WebBloksDataModule",
    "WebBloksErrors",
    "WebBloksInterpreterEnvironment",
    "WebBloksParseResult",
    "WebBloksScopedIds",
    "WebBloksScriptExecutor",
    "WebBloksTreeResources",
    "WebBloksUpdateTraversal",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t(e) {
          var t;
          if (
            ((this.id = o("WebBloksUtils").getNextGlobalBloksClientId()),
            (this.treeResourcesState = new (o(
              "WebBloksTreeResources",
            ).WebBloksTreeResourcesState)()),
            (this.committedVariables = new Map()),
            (this.$1 = 0),
            (this.updateOperationList = []),
            (this.updateVariableOperations = new Map()),
            (this.updateResourcesOperations = []),
            (this.$2 = !1),
            (this.$3 = !1),
            (this.$4 = !1),
            (this.onNewTreeAndVariablesListener = new (o(
              "WebBloksUtils",
            ).EventEmitter)()),
            !e.unboundModel)
          )
            throw new (o("WebBloksErrors").WebBloksError)(
              "Missing unboundModel",
            );
          ((this.unboundModel = e.unboundModel),
            (this.initialTreeResources = e.resources),
            (this.loggingIDForInternalFrameworkUseOnly =
              e == null ? void 0 : e.loggingID),
            (t = window.WebBloksPreHydrationInteractionsRecorder) == null ||
              t.replayIfNeeded());
        }
        var a = t.prototype;
        return (
          (a.getBoundTree = function () {
            var e;
            return (e = this.bindResult) == null ? void 0 : e.boundModel;
          }),
          (a.getExpandedVariables = function () {
            var e, t;
            return (e =
              (t = this.bindResult) == null ? void 0 : t.expandedVariables) !=
              null
              ? e
              : o("WebBloksUtils").EMPTY_MAP;
          }),
          (a.getCommittedTreeResources = function () {
            return this.treeResourcesState.withUpdatedEntries(
              null,
              this.committedVariables,
            );
          }),
          (a.setCommittedBoundTree = function (t) {
            var e = this;
            ((this.bindResult = t), (this.committedVariables = t.variables));
            var n = t.bindDataModuleDelegate;
            if (n != null) {
              var r = new Map(this.committedVariables);
              (n.commitAll(this, function (t, n, o, a) {
                (r.set(t, o), a != null && e.subscriptions.add(a));
              }),
                (this.committedVariables = r));
            }
            this.$7();
          }),
          (a.waitForCommittedTree = function () {
            var t;
            return (t = this.$5) != null
              ? t
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.$7 = function () {
            var e;
            ((e = this.$6) == null || e.call(this),
              (this.$5 = void 0),
              (this.$6 = void 0));
          }),
          (a.initVariablesAndObserver = function (t, n) {
            ((this.treeResourcesState =
              this.treeResourcesState.withUpdatedParameters(n)),
              (this.bloksContext = t),
              (this.bloksContext.loggingIDForInternalFrameworkUseOnly =
                this == null
                  ? void 0
                  : this.loggingIDForInternalFrameworkUseOnly),
              (this.subscriptions = new Set()));
            var e = this.processResources([
              new (r("WebBloksParseResult"))(
                this.unboundModel,
                this.initialTreeResources,
              ),
            ]);
            if (e[1].length > 0) {
              for (var o of e[1]) this.updateOperationList.push(o);
              this.$3 = !0;
            }
            return (
              (this.$2 = !0),
              this.$3 && this.flushUpdates(),
              {
                unboundModel: this.unboundModel,
                treeResourcesState: this.treeResourcesState,
              }
            );
          }),
          (a.processAsyncComponents = function (t, n) {
            if (t.length === 0) return [];
            if (this.componentQueryManager == null) {
              var e = this.bloksContext.objectSet.componentQueryStore;
              this.componentQueryManager = new (r(
                "WebBloksComponentQueryManager",
              ))(this, e);
            }
            return this.componentQueryManager.setup(t, n);
          }),
          (a.processResources = function (t) {
            for (
              var e = this,
                n = [].concat(t),
                a = [],
                i = this.treeResourcesState,
                l = function () {
                  var t,
                    i,
                    l = n[s],
                    u = l.unboundModel,
                    c = l.resources;
                  ((e.treeResourcesState =
                    e.treeResourcesState.withPayloadUpdates(c.payloads)),
                    (e.treeResourcesState =
                      e.treeResourcesState.withFunctionTableUpdates(
                        c.functionTable,
                        c.ftDeclare,
                        c.ftInclude,
                      )),
                    (e.treeResourcesState =
                      e.treeResourcesState.withTemplateUpdates(c.templates)),
                    (e.treeResourcesState =
                      e.treeResourcesState.withValueUpdates(c.values)));
                  var d = null,
                    m = null,
                    p = new (o(
                      "TreeManagerResourceProcessingDelegate",
                    ).TreeManagerResourceProcessingDelegate)({
                      observer: e,
                      onCollectVariable: function (n, r, o, a) {
                        var t = r.id,
                          i =
                            m != null
                              ? m
                              : e.treeResourcesState.variableDefinitions;
                        (i.has(t) ||
                          (m ||
                            (m = new Map(
                              e.treeResourcesState.variableDefinitions,
                            )),
                          m.set(t, r)),
                          d || (d = new Map(e.treeResourcesState.variables)),
                          d.set(n, o),
                          a != null && e.subscriptions.add(a));
                      },
                      containsVariable: function (n) {
                        var t =
                          d != null
                            ? d
                            : new Map(e.treeResourcesState.variables);
                        return t.has(n);
                      },
                    }),
                    _ =
                      u.keyPath != null
                        ? o("WebBloksScopedIds").buildKeypathBase(u.keyPath)
                        : null;
                  for (var f of c.variableDefinitions) {
                    var g = f.id,
                      h =
                        f.scoped === !0 && _ != null
                          ? o(
                              "WebBloksScopedIds",
                            ).buildScopedVariableIdentifier(g, _)
                          : g;
                    if (!p.containsVariable(h)) {
                      var y = f.type,
                        C = o("WebBloksDataModule").getDataModuleFromContext(
                          e.bloksContext,
                          y,
                        );
                      if (!C)
                        throw new (o("WebBloksErrors").WebBloksError)(
                          "Missing variable module with type: " + y,
                        );
                      var b = babelHelpers.extends({}, f);
                      e.initialTreeResources.shouldCommitPublishStateUpdates() ===
                        !1 &&
                        b.data.key != null &&
                        b.data.mode === "p" &&
                        (b = babelHelpers.extends({}, b, {
                          data: babelHelpers.extends({}, b.data, { mode: "d" }),
                        }));
                      var v = function (n) {
                          var t,
                            a = r("WebBloksInterpreterEnvironment"),
                            i = new a(e.bloksContext);
                          ((i.expandedVariablesOverride =
                            (t = e.bindResult) == null
                              ? void 0
                              : t.expandedVariables),
                            (i.resources = e.treeResourcesState));
                          var l = i.createBloksModelScopedContext(u.keyPath);
                          return o("WebBloksScriptExecutor").execute(l, n, []);
                        },
                        S = C.setup(e.bloksContext, b, v, null);
                      p.collectVariable(h, b, S.initialData, null);
                    }
                  }
                  e.treeResourcesState =
                    e.treeResourcesState.withUpdatedEntries(m, d);
                  var R = d;
                  if (R != null && R.size) {
                    var L = new Map(e.committedVariables);
                    (R.forEach(function (e, t) {
                      L.set(t, e);
                    }),
                      (e.committedVariables = L));
                  }
                  var E = new (r("WebBloksInterpreterEnvironment"))(
                    e.bloksContext,
                  );
                  ((E.expandedVariablesOverride =
                    (t = e.bindResult) == null ? void 0 : t.expandedVariables),
                    (E.scope =
                      (i = u.keyPath) != null
                        ? i
                        : o("WebBloksUtils").EMPTY_KEY_PATH),
                    (E.resources = e.treeResourcesState));
                  var k = e.processAsyncComponents(c.componentQueries, E);
                  for (var I of k) {
                    var T = I.treeModification,
                      D = I.variableUpdate;
                    if (
                      (T != null &&
                        (T.parseResult != null && n.push(T.parseResult),
                        a.push([T.target, T.updateOperation])),
                      D != null)
                    ) {
                      var x = new Map();
                      (x.set(D.variableIdentifier, D.value),
                        (e.treeResourcesState =
                          e.treeResourcesState.withVariableUpdates(x)));
                    }
                  }
                },
                s = 0;
              s < n.length;
              s++
            )
              l();
            return (
              this.initialTreeResources.setShouldCommitPublishStateUpdates(!1),
              [!this.treeResourcesState.equalsTo(i), a]
            );
          }),
          (a.synchronouslyAddTreeResources = function (t, n) {
            if (!this.$4) {
              this.initialTreeResources.setShouldCommitPublishStateUpdates(!0);
              var e = this.processResources([t]);
              for (var r of e[1]) this.updateOperationList.push(r);
              var a = new Map();
              if (
                (o("WebBloksUtils").putAll(
                  a,
                  this.treeResourcesState.variables,
                ),
                n != null && o("WebBloksUtils").putAll(a, n),
                a.size > 0)
              ) {
                this.treeResourcesState =
                  this.treeResourcesState.withVariableUpdates(a);
                var i = new Map(this.committedVariables);
                (o("WebBloksUtils").putAll(i, a),
                  (this.committedVariables = i));
              }
            }
          }),
          (a.enqueueVariableUpdateOperation = function (t, n) {
            if (!this.$4) {
              if ((this.updateVariableOperations.set(t, n), !this.$2)) {
                this.$3 = !0;
                return;
              }
              this.$1 === 0 && this.$8();
            }
          }),
          (a.enqueueUpdateOperation = function (t, n) {
            this.updateOperationList.push([t, n]);
          }),
          (a.enqueueResourcesUpdateOperation = function (t) {
            (this.updateResourcesOperations.push(t),
              this.$1 === 0 && this.$8());
          }),
          (a.enqueueUpdateOperationWithResources = function (t) {
            (t.parseResult != null &&
              this.enqueueResourcesUpdateOperation(t.parseResult),
              this.enqueueUpdateOperation(t.target, t.updateOperation));
          }),
          (a.enqueueTreeUpdateOperation = function (t) {
            (t.variableUpdate != null &&
              this.enqueueVariableUpdateOperation(
                t.variableUpdate.variableIdentifier,
                t.variableUpdate.value,
              ),
              t.treeModification != null &&
                this.enqueueUpdateOperationWithResources(t.treeModification));
          }),
          (a.beginUpdates = function () {
            var t = this;
            (this.$1++,
              this.$5 ||
                (this.$5 = new (e || (e = n("Promise")))(function (e) {
                  t.$6 = e;
                })));
          }),
          (a.endUpdates = function () {
            (this.$1 === 1 && this.flushUpdates(), this.$1--);
          }),
          (a.flushUpdates = function () {
            if (!this.$4) {
              var e =
                this.bloksContext.objectSet.environment
                  .enableBindInstrumentation;
              e &&
                (o("WebBloksBindInstrumentation").bindCounters.flushes++,
                (o(
                  "WebBloksBindInstrumentation",
                ).bindCounters.variableWritesApplied +=
                  this.updateVariableOperations.size));
              var t = !1,
                n = null;
              if (this.updateVariableOperations.size) {
                var r = this.treeResourcesState.variables;
                if (
                  ((this.treeResourcesState =
                    this.treeResourcesState.withVariableUpdates(
                      this.updateVariableOperations,
                    )),
                  !this.bloksContext.objectSet.environment
                    .enableNoOpVariableWriteFilter)
                )
                  t = !0;
                else {
                  var a;
                  n = this.updateVariableOperations;
                  var i =
                    (a = this.bindResult) == null ? void 0 : a.dependencies;
                  for (var l of this.updateVariableOperations) {
                    var s = l[0],
                      u = l[1],
                      c =
                        u == null ||
                        (typeof u != "object" && typeof u != "function");
                    if (
                      !(c && r.has(s) && u === r.get(s)) &&
                      (i == null || i.has(s))
                    ) {
                      t = !0;
                      break;
                    }
                  }
                }
                this.updateVariableOperations = new Map();
              }
              if (this.updateResourcesOperations.length) {
                this.initialTreeResources.setShouldCommitPublishStateUpdates(
                  !0,
                );
                var d = this.processResources(this.updateResourcesOperations);
                t = t || d[0];
                for (var m of d[1]) this.updateOperationList.push(m);
                this.updateResourcesOperations = [];
              }
              var p = this.snapshotPendingComponent();
              if (
                ((t = t || this.unboundModel !== p),
                (this.unboundModel = p),
                (this.updateOperationList = []),
                (this.pendingUnboundTree = null),
                e &&
                  (t
                    ? o("WebBloksBindInstrumentation").bindCounters
                        .passesEmitted++
                    : o("WebBloksBindInstrumentation").bindCounters
                        .passesSuppressed++),
                t)
              )
                (this.$4 &&
                  this.bloksContext.objectSet.environment.logger.warn(
                    "Received model updates for a TreeManager that was already destroyed",
                  ),
                  this.onNewTreeAndVariablesListener.emit({
                    unboundModel: this.unboundModel,
                    treeResourcesState: this.treeResourcesState,
                  }));
              else {
                if (n != null) {
                  var _ = new Map(this.committedVariables);
                  (o("WebBloksUtils").putAll(_, n),
                    (this.committedVariables = _));
                }
                this.$7();
              }
            }
          }),
          (a.$8 = function () {
            var t = this;
            (this.beginUpdates(),
              (e || (e = n("Promise")))
                .resolve()
                .then(function () {
                  t.endUpdates();
                })
                .catch(function (e) {
                  t.bloksContext.objectSet.environment.logger.mustfix(
                    "Unexpected error when flushing updates",
                    e,
                  );
                }));
          }),
          (a.snapshotPendingComponent = function () {
            var e,
              t = (e = this.pendingUnboundTree) != null ? e : this.unboundModel,
              n = new Set(this.updateOperationList.splice(0));
            return n.size === 0
              ? t
              : o("WebBloksUpdateTraversal").runUpdateTraversal(
                  t,
                  {
                    apply: function (t) {
                      var e,
                        r = t,
                        o;
                      for (var a of n) {
                        var i = a[0],
                          l = a[1],
                          s = l.shouldUpdate,
                          u = l.update;
                        i.targets(r) &&
                          (o ? o.push(a) : (o = [a]),
                          (!s || s(r)) &&
                            (r === t && (r = t.makeCopy()), u(r)));
                      }
                      return (
                        (e = o) == null ||
                          e.forEach(function (e) {
                            n.delete(e);
                          }),
                        r
                      );
                    },
                    onUpdatesApplied: function () {},
                  },
                  this.bloksContext.objectSet.environment.traversalKeys,
                );
          }),
          (a.destroy = function () {
            ((this.$4 = !0),
              this.onNewTreeAndVariablesListener.clear(),
              this.subscriptions.forEach(function (e) {
                return e();
              }),
              this.subscriptions.clear());
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);

__d(
  "WebBloksTreeManager",
  [
    "Promise",
    "WebBloksComponentQueryManager",
    "WebBloksDataModule",
    "WebBloksErrors",
    "WebBloksInterpreterEnvironment",
    "WebBloksParseResult",
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
            ((this.bindResult = t),
              (this.committedVariables = t.variables),
              this.$7());
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
                    l,
                    u = n[s],
                    c = u.unboundModel,
                    d = u.resources;
                  ((e.treeResourcesState =
                    e.treeResourcesState.withPayloadUpdates(d.payloads)),
                    (e.treeResourcesState =
                      e.treeResourcesState.withFunctionTableUpdates(
                        d.functionTable,
                        d.ftDeclare,
                        d.ftInclude,
                      )),
                    (e.treeResourcesState =
                      e.treeResourcesState.withTemplateUpdates(d.templates)),
                    (e.treeResourcesState =
                      e.treeResourcesState.withValueUpdates(d.values)));
                  var m = null,
                    p = null;
                  for (var _ of d.variableDefinitions) {
                    var f = _.id,
                      g =
                        p != null
                          ? p
                          : e.treeResourcesState.variableDefinitions;
                    g.has(f) ||
                      (p ||
                        (p = new Map(e.treeResourcesState.variableDefinitions)),
                      p.set(f, _));
                    var h =
                      m != null ? m : new Map(e.treeResourcesState.variables);
                    if (!h.has(f)) {
                      var y = _.type,
                        C = o("WebBloksDataModule").getDataModuleFromContext(
                          e.bloksContext,
                          y,
                        );
                      if (!C)
                        throw new (o("WebBloksErrors").WebBloksError)(
                          "Missing variable module with type: " + y,
                        );
                      var b = babelHelpers.extends({}, _);
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
                          var l = i.createBloksModelScopedContext(c.keyPath);
                          return o("WebBloksScriptExecutor").execute(l, n, []);
                        },
                        S = C.setup(e.bloksContext, b, e, v),
                        R = S.cancelToken,
                        L = S.initialValue;
                      (m || (m = new Map(e.treeResourcesState.variables)),
                        m.set(f, L),
                        R != null && e.subscriptions.add(R));
                    }
                  }
                  if (
                    (e.initialTreeResources.setShouldCommitPublishStateUpdates(
                      !1,
                    ),
                    (e.treeResourcesState =
                      e.treeResourcesState.withUpdatedEntries(p, m)),
                    (t = m) != null && t.size)
                  ) {
                    var E = new Map(e.committedVariables);
                    (m.forEach(function (e, t) {
                      E.set(t, e);
                    }),
                      (e.committedVariables = E));
                  }
                  var k = new (r("WebBloksInterpreterEnvironment"))(
                    e.bloksContext,
                  );
                  ((k.expandedVariablesOverride =
                    (i = e.bindResult) == null ? void 0 : i.expandedVariables),
                    (k.scope =
                      (l = c.keyPath) != null
                        ? l
                        : o("WebBloksUtils").EMPTY_KEY_PATH),
                    (k.resources = e.treeResourcesState));
                  var I = e.processAsyncComponents(d.componentQueries, k);
                  for (var T of I) {
                    var D = T.treeModification,
                      x = T.variableUpdate;
                    if (
                      (D != null &&
                        (D.parseResult != null && n.push(D.parseResult),
                        a.push([D.target, D.updateOperation])),
                      x != null)
                    ) {
                      var $ = new Map();
                      ($.set(x.variableIdentifier, x.value),
                        (e.treeResourcesState =
                          e.treeResourcesState.withVariableUpdates($)));
                    }
                  }
                },
                s = 0;
              s < n.length;
              s++
            )
              l();
            return [!this.treeResourcesState.equalsTo(i), a];
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
              var e = !1;
              if (
                (this.updateVariableOperations.size &&
                  ((this.treeResourcesState =
                    this.treeResourcesState.withVariableUpdates(
                      this.updateVariableOperations,
                    )),
                  (e = !0),
                  (this.updateVariableOperations = new Map())),
                this.updateResourcesOperations.length)
              ) {
                var t = this.processResources(this.updateResourcesOperations);
                e = e || t[0];
                for (var n of t[1]) this.updateOperationList.push(n);
                this.updateResourcesOperations = [];
              }
              var r = this.snapshotPendingComponent();
              ((e = e || this.unboundModel !== r),
                (this.unboundModel = r),
                (this.updateOperationList = []),
                (this.pendingUnboundTree = null),
                e
                  ? (this.$4 &&
                      this.bloksContext.objectSet.environment.logger.warn(
                        "Received model updates for a TreeManager that was already destroyed",
                      ),
                    this.onNewTreeAndVariablesListener.emit({
                      unboundModel: this.unboundModel,
                      treeResourcesState: this.treeResourcesState,
                    }))
                  : this.$7());
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

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
    "WebBloksMutations",
    "WebBloksParseResult",
    "WebBloksRenderDiagnostics",
    "WebBloksScopedIds",
    "WebBloksScriptExecutor",
    "WebBloksTreePendingUpdates",
    "WebBloksTreeResources",
    "WebBloksUpdateTraversal",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return e instanceof o("WebBloksMutations").ClientIdTarget
        ? { id: String(e.id), kind: "ClientIdTarget" }
        : e instanceof o("WebBloksMutations").ChildServerIdTarget
          ? { id: e.id, kind: "ChildServerIdTarget" }
          : e instanceof o("WebBloksMutations").ServerIdTarget
            ? { id: e.id, kind: "ServerIdTarget" }
            : { id: null, kind: "WebBloksTarget" };
    }
    var u = function (t, n) {
        ((this.operations = t), (this.updates = n));
      },
      c = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(u),
      d = (function () {
        function t(e) {
          var t;
          if (
            ((this.id = o("WebBloksUtils").getNextGlobalBloksClientId()),
            (this.treeResourcesState = new (o(
              "WebBloksTreeResources",
            ).WebBloksTreeResourcesState)()),
            (this.committedVariables = new Map()),
            (this.$1 = this.$2()),
            (this.$3 = !1),
            (this.$4 = 0),
            (this.$5 = !1),
            (this.$6 = !1),
            (this.$7 = !1),
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
            for (var n of t.collectedTreeResources.values())
              this.treeResourcesState = this.treeResourcesState
                .withDataManifestEntryUpdates(n.variableDefinitions)
                .withTreeResourceUpdates(n);
            var r = t.bindDataModuleDelegate;
            if (r != null) {
              var o = new Map(this.committedVariables);
              (r.commitAll(this, function (t, n, r, a) {
                (o.set(t, r), a != null && e.subscriptions.add(a));
              }),
                (this.committedVariables = o));
            }
            this.$10();
          }),
          (a.waitForCommittedTree = function () {
            var t;
            return (t = this.$8) != null
              ? t
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.$10 = function () {
            var e;
            ((e = this.$9) == null || e.call(this),
              (this.$8 = void 0),
              (this.$9 = void 0));
          }),
          (a.initVariablesAndObserver = function (t, n) {
            ((this.treeResourcesState =
              this.treeResourcesState.withUpdatedParameters(n)),
              (this.bloksContext = t),
              this.$3 ||
                ((this.$3 = !0),
                t.objectSet.environment.gkx.getGK(
                  "bloks_web_variable_queue_batching",
                ) && (this.$1 = new c(this.$1.operations, this.$1.updates))),
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
              for (var o of e[1]) this.enqueueUpdateOperation(o[0], o[1]);
              this.$6 = !0;
            }
            return (
              (this.$5 = !0),
              this.$6 && this.flushUpdates(),
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
            if (!this.$7) {
              this.initialTreeResources.setShouldCommitPublishStateUpdates(!0);
              var e = this.processResources([t]);
              for (var r of e[1]) this.enqueueUpdateOperation(r[0], r[1]);
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
            this.$1.operations.enqueueVariableUpdateOperation(t, n);
          }),
          (a.enqueueUpdateOperation = function (t, n) {
            this.$1.operations.enqueueUpdateOperation(t, n);
          }),
          (a.enqueueResourcesUpdateOperation = function (t) {
            this.$1.operations.enqueueResourcesUpdateOperation(t);
          }),
          (a.enqueueUpdateOperationWithResources = function (t) {
            (t.parseResult != null &&
              this.enqueueResourcesUpdateOperation(t.parseResult),
              this.enqueueUpdateOperation(t.target, t.updateOperation));
          }),
          (a.enqueueTreeUpdateOperation = function (t) {
            this.$1.operations.enqueueTreeUpdateOperation(t);
          }),
          (a.beginUpdates = function () {
            this.$1.operations.beginUpdates();
          }),
          (a.endUpdates = function () {
            this.$1.operations.endUpdates();
          }),
          (a.flushUpdates = function () {
            this.$1.operations.flushUpdates();
          }),
          (a.$11 = function () {
            this.$1.operations.scheduleUpdates();
          }),
          (a.snapshotPendingComponent = function () {
            return this.$1.operations.snapshotPendingComponent();
          }),
          (a.hasPendingVariableUpdates = function () {
            return this.$1.updates.variableUpdates.hasPendingWrites();
          }),
          (a.$2 = function () {
            var t = this,
              a = {
                variableUpdates: new (r("WebBloksTreePendingUpdates"))(),
                updateOperationList: [],
                updateResourcesOperations: [],
                pendingUnboundTree: null,
              },
              i = {
                enqueueVariableUpdateOperation: function (n, r) {
                  if (!t.$7) {
                    if ((a.variableUpdates.enqueueWrite(n, r), !t.$5)) {
                      t.$6 = !0;
                      return;
                    }
                    t.$4 === 0 && t.$11();
                  }
                },
                enqueueUpdateOperation: function (t, n) {
                  a.updateOperationList.push([t, n]);
                },
                enqueueResourcesUpdateOperation: function (n) {
                  (a.updateResourcesOperations.push(n), t.$4 === 0 && t.$11());
                },
                enqueueTreeUpdateOperation: function (n) {
                  (n.variableUpdate != null &&
                    t.enqueueVariableUpdateOperation(
                      n.variableUpdate.variableIdentifier,
                      n.variableUpdate.value,
                    ),
                    n.treeModification != null &&
                      t.enqueueUpdateOperationWithResources(
                        n.treeModification,
                      ));
                },
                beginUpdates: function () {
                  (t.$4++,
                    t.$8 ||
                      (t.$8 = new (e || (e = n("Promise")))(function (e) {
                        t.$9 = e;
                      })));
                },
                endUpdates: function () {
                  (t.$4 === 1 && t.flushUpdates(), t.$4--);
                },
                flushUpdates: function () {
                  if (!t.$7) {
                    var e = a.variableUpdates.hasPendingWrites()
                        ? a.variableUpdates.takePendingWrites()
                        : o("WebBloksUtils").EMPTY_MAP,
                      n = o(
                        "WebBloksBindInstrumentation",
                      ).isBindInstrumentationEnabled();
                    n &&
                      (o("WebBloksBindInstrumentation").bindCounters.flushes++,
                      (o(
                        "WebBloksBindInstrumentation",
                      ).bindCounters.variableWritesApplied += e.size));
                    var r = !1,
                      i = null;
                    if (e.size) {
                      var l = t.treeResourcesState.variables;
                      if (
                        ((t.treeResourcesState =
                          t.treeResourcesState.withVariableUpdates(e)),
                        !t.bloksContext.objectSet.environment
                          .enableNoOpVariableWriteFilter)
                      )
                        r = !0;
                      else {
                        var s;
                        i = e;
                        var u =
                          (s = t.bindResult) == null ? void 0 : s.dependencies;
                        for (var c of e) {
                          var d = c[0],
                            m = c[1],
                            p =
                              m == null ||
                              (typeof m != "object" && typeof m != "function");
                          if (
                            !(p && l.has(d) && m === l.get(d)) &&
                            (u == null || u.has(d))
                          ) {
                            r = !0;
                            break;
                          }
                        }
                      }
                    }
                    if (a.updateResourcesOperations.length) {
                      t.initialTreeResources.setShouldCommitPublishStateUpdates(
                        !0,
                      );
                      var _ = t.processResources(a.updateResourcesOperations);
                      r = r || _[0];
                      for (var f of _[1]) a.updateOperationList.push(f);
                      a.updateResourcesOperations = [];
                    }
                    var g = t.snapshotPendingComponent();
                    if (
                      ((r = r || t.unboundModel !== g),
                      (t.unboundModel = g),
                      (a.updateOperationList = []),
                      (a.pendingUnboundTree = null),
                      n &&
                        (r
                          ? o("WebBloksBindInstrumentation").bindCounters
                              .passesEmitted++
                          : o("WebBloksBindInstrumentation").bindCounters
                              .passesSuppressed++),
                      r)
                    )
                      (t.$7 &&
                        t.bloksContext.objectSet.environment.logger.warn(
                          "Received model updates for a TreeManager that was already destroyed",
                        ),
                        t.onNewTreeAndVariablesListener.emit({
                          unboundModel: t.unboundModel,
                          treeResourcesState: t.treeResourcesState,
                        }));
                    else {
                      if (i != null) {
                        var h = new Map(t.committedVariables);
                        (o("WebBloksUtils").putAll(h, i),
                          (t.committedVariables = h));
                      }
                      t.$10();
                    }
                  }
                },
                scheduleUpdates: function () {
                  (t.beginUpdates(),
                    (e || (e = n("Promise")))
                      .resolve()
                      .then(function () {
                        t.endUpdates();
                      })
                      .catch(function (e) {
                        t.bloksContext.objectSet.environment.logger.mustfix(
                          "Unexpected error when flushing updates",
                          e instanceof Error ? e : String(e),
                        );
                      }));
                },
                snapshotPendingComponent: function () {
                  var e,
                    n = (e = a.pendingUnboundTree) != null ? e : t.unboundModel,
                    r = new Set(a.updateOperationList.splice(0));
                  if (r.size === 0) return n;
                  var i = t.$7,
                    l = o("WebBloksUpdateTraversal").runUpdateTraversal(
                      n,
                      {
                        apply: function (t) {
                          var e,
                            n = t,
                            a;
                          for (var l of r) {
                            var u = l[0],
                              c = l[1],
                              d = c.shouldUpdate,
                              m = c.update;
                            if (
                              u.targets(n) &&
                              (a ? a.push(l) : (a = [l]), !d || d(n))
                            ) {
                              n === t && (n = t.makeCopy());
                              try {
                                m(n);
                              } catch (e) {
                                if (
                                  !i &&
                                  o(
                                    "WebBloksRenderDiagnostics",
                                  ).isWebBloksRenderDiagnosticsInstalled()
                                )
                                  try {
                                    var p = s(u),
                                      _ = p.id,
                                      f = p.kind;
                                    o(
                                      "WebBloksRenderDiagnostics",
                                    ).reportWebBloksRenderDrop(
                                      "mutation_error",
                                      {
                                        componentId: _,
                                        styleId: f,
                                        message: o(
                                          "WebBloksRenderDiagnostics",
                                        ).safeErrorMessage(e),
                                      },
                                    );
                                  } catch (e) {}
                                throw e;
                              }
                            }
                          }
                          return (
                            (e = a) == null ||
                              e.forEach(function (e) {
                                r.delete(e);
                              }),
                            n
                          );
                        },
                        onUpdatesApplied: function () {},
                      },
                      t.bloksContext.objectSet.environment.traversalKeys,
                    );
                  if (
                    !t.$7 &&
                    o(
                      "WebBloksRenderDiagnostics",
                    ).isWebBloksRenderDiagnosticsInstalled()
                  )
                    try {
                      for (var u of r) {
                        var c = u[0],
                          d = s(c),
                          m = d.id,
                          p = d.kind;
                        o("WebBloksRenderDiagnostics").reportWebBloksRenderDrop(
                          "mutation_target_missing",
                          { componentId: m, styleId: p },
                        );
                      }
                    } catch (e) {}
                  return l;
                },
                destroy: function () {},
              };
            return new u(i, a);
          }),
          (a.destroy = function () {
            ((this.$7 = !0),
              this.$1.operations.destroy(),
              this.onNewTreeAndVariablesListener.clear(),
              this.subscriptions.forEach(function (e) {
                return e();
              }),
              this.subscriptions.clear());
          }),
          t
        );
      })();
    l.default = d;
  },
  98,
);

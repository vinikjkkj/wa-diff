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
    "WebBloksScriptDebuggingUtils",
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
      c = function (t, n) {
        ((this.operations = t), (this.updates = n));
      },
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
            this.$11();
          }),
          (a.waitForCommittedTree = function () {
            var t;
            return (t = this.$8) != null
              ? t
              : (e || (e = n("Promise"))).resolve();
          }),
          (a.$11 = function () {
            var e;
            ((e = this.$9) == null || e.call(this),
              (this.$8 = void 0),
              (this.$9 = void 0),
              (this.$10 = void 0));
          }),
          (a.$12 = function (t) {
            var e;
            ((e = this.$10) == null || e.call(this, t),
              (this.$8 = void 0),
              (this.$9 = void 0),
              (this.$10 = void 0));
          }),
          (a.initVariablesAndObserver = function (t, n) {
            ((this.treeResourcesState =
              this.treeResourcesState.withUpdatedParameters(n)),
              (this.bloksContext = t),
              this.$3 ||
                ((this.$3 = !0),
                t.objectSet.environment.gkx.getGK(
                  "bloks_web_variable_queue_batching",
                ) &&
                  (this.$1 =
                    this.$1 instanceof u
                      ? this.$13(this.$1.updates)
                      : this.$1)),
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
          (a.enqueueLocalStateUpdateOperation = function (t, n, r, o) {
            var e = this;
            this.$14(function (a, i, l) {
              if (e.$7) return null;
              try {
                var s = l.has(t) || a.has(t) || i.has(t) ? t : n,
                  u =
                    s == null
                      ? void 0
                      : l.has(s)
                        ? l.get(s)
                        : a.has(s)
                          ? a.get(s)
                          : i.get(s),
                  c = r(u);
                return e.$7 ? null : [t, c];
              } catch (e) {
                try {
                  o(e);
                } catch (e) {}
                return null;
              }
            });
          }),
          (a.$14 = function (t) {
            this.$1.operations.enqueueVariableOperation(t);
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
          (a.$15 = function () {
            var t = this;
            this.$8 ||
              ((this.$8 = new (e || (e = n("Promise")))(function (e, n) {
                ((t.$9 = e), (t.$10 = n));
              })),
              this.$8.catch(function () {}));
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
          (a.$16 = function () {
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
              r = {
                variableUpdates: new (o(
                  "WebBloksTreePendingUpdates",
                ).WebBloksLegacyPendingUpdates)(),
                updateOperationList: [],
                updateResourcesOperations: [],
                pendingUnboundTree: null,
              },
              a = {
                enqueueVariableUpdateOperation: function (n, o) {
                  if (!t.$7) {
                    if ((r.variableUpdates.enqueueWrite(n, o), !t.$5)) {
                      t.$6 = !0;
                      return;
                    }
                    t.$4 === 0 && t.$16();
                  }
                },
                enqueueUpdateOperation: function (t, n) {
                  r.updateOperationList.push([t, n]);
                },
                enqueueResourcesUpdateOperation: function (n) {
                  (r.updateResourcesOperations.push(n), t.$4 === 0 && t.$16());
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
                    var e = r.variableUpdates.hasPendingWrites()
                        ? r.variableUpdates.takePendingWrites()
                        : o("WebBloksUtils").EMPTY_MAP,
                      n = o(
                        "WebBloksBindInstrumentation",
                      ).isBindInstrumentationEnabled();
                    n &&
                      (o("WebBloksBindInstrumentation").bindCounters.flushes++,
                      (o(
                        "WebBloksBindInstrumentation",
                      ).bindCounters.variableWritesApplied += e.size));
                    var a = !1,
                      i = null;
                    if (e.size) {
                      var l = t.treeResourcesState.variables;
                      if (
                        ((t.treeResourcesState =
                          t.treeResourcesState.withVariableUpdates(e)),
                        !t.bloksContext.objectSet.environment
                          .enableNoOpVariableWriteFilter)
                      )
                        a = !0;
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
                            a = !0;
                            break;
                          }
                        }
                      }
                    }
                    if (r.updateResourcesOperations.length) {
                      t.initialTreeResources.setShouldCommitPublishStateUpdates(
                        !0,
                      );
                      var _ = t.processResources(r.updateResourcesOperations);
                      a = a || _[0];
                      for (var f of _[1]) r.updateOperationList.push(f);
                      r.updateResourcesOperations = [];
                    }
                    var g = t.snapshotPendingComponent();
                    if (
                      ((a = a || t.unboundModel !== g),
                      (t.unboundModel = g),
                      (r.updateOperationList = []),
                      (r.pendingUnboundTree = null),
                      n &&
                        (a
                          ? o("WebBloksBindInstrumentation").bindCounters
                              .passesEmitted++
                          : o("WebBloksBindInstrumentation").bindCounters
                              .passesSuppressed++),
                      a)
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
                      t.$11();
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
                    n = (e = r.pendingUnboundTree) != null ? e : t.unboundModel,
                    a = new Set(r.updateOperationList.splice(0));
                  if (a.size === 0) return n;
                  var i = t.$7,
                    l = o("WebBloksUpdateTraversal").runUpdateTraversal(
                      n,
                      {
                        apply: function (t) {
                          var e,
                            n = t,
                            r;
                          for (var l of a) {
                            var u = l[0],
                              c = l[1],
                              d = c.shouldUpdate,
                              m = c.update;
                            if (
                              u.targets(n) &&
                              (r ? r.push(l) : (r = [l]), !d || d(n))
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
                            (e = r) == null ||
                              e.forEach(function (e) {
                                a.delete(e);
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
                      for (var u of a) {
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
                enqueueVariableOperation: function (n) {
                  var e = n(
                    t.committedVariables,
                    t.treeResourcesState.variables,
                    o("WebBloksUtils").EMPTY_MAP,
                  );
                  e != null && a.enqueueVariableUpdateOperation(e[0], e[1]);
                },
              };
            return new u(a, r);
          }),
          (a.$13 = function (a) {
            var t = this,
              i = new (o(
                "WebBloksTreePendingUpdates",
              ).WebBloksTreePendingUpdates)();
            for (var l of a.variableUpdates.takePendingWrites()) {
              var s = l[0],
                u = l[1];
              i.enqueueWrite(s, u);
            }
            for (var d of a.updateOperationList) i.enqueueMutation(d);
            for (var m of a.updateResourcesOperations) i.enqueueResource(m);
            i.root = a.pendingUnboundTree;
            var p = {
                variableUpdates: i,
                activeUpdates: null,
                flushingUpdates: !1,
                updateScheduled: !1,
              },
              _ = {
                enqueueVariableUpdateOperation: function (n, r) {
                  if (!t.$7) {
                    if ((p.variableUpdates.enqueueWrite(n, r), !t.$5)) {
                      t.$6 = !0;
                      return;
                    }
                    t.$4 === 0 && t.$16();
                  }
                },
                enqueueUpdateOperation: function (n, r) {
                  t.$7 || p.variableUpdates.enqueueMutation([n, r]);
                },
                enqueueResourcesUpdateOperation: function (n) {
                  t.$7 ||
                    (p.variableUpdates.enqueueResource(n),
                    t.$4 === 0 && t.$16());
                },
                enqueueTreeUpdateOperation: function (n) {
                  if (!t.$7) {
                    n.treeModification != null &&
                      t.enqueueUpdateOperationWithResources(n.treeModification);
                    var e = n.variableUpdate;
                    e != null
                      ? t.enqueueVariableUpdateOperation(
                          e.variableIdentifier,
                          e.value,
                        )
                      : n.treeModification != null &&
                        (t.$5 ? t.$4 === 0 && t.$16() : (t.$6 = !0));
                  }
                },
                beginUpdates: function () {
                  (t.$4++, t.$15());
                },
                endUpdates: function () {
                  if (t.$4 <= 0)
                    throw new (o("WebBloksErrors").WebBloksError)(
                      "Unmatched endUpdates",
                    );
                  (t.$4--,
                    t.$4 === 0 &&
                      (p.variableUpdates.pendingMutations().length > 0 ||
                      p.variableUpdates.root != null
                        ? t.flushUpdates()
                        : p.variableUpdates.hasRenderUpdates()
                          ? t.$16()
                          : p.flushingUpdates || t.$11()));
                },
                flushUpdates: function () {
                  if (!t.$7) {
                    if (p.flushingUpdates) {
                      t.$16();
                      return;
                    }
                    if (!t.$5) {
                      t.$6 = !0;
                      return;
                    }
                    var e = t.$8,
                      n = p.variableUpdates;
                    ((p.variableUpdates = new (o(
                      "WebBloksTreePendingUpdates",
                    ).WebBloksTreePendingUpdates)()),
                      (p.activeUpdates = n),
                      (p.flushingUpdates = !0));
                    try {
                      t.$17(p, n);
                    } catch (n) {
                      throw (t.$8 === e && t.$12(n), n);
                    } finally {
                      (n.reset(),
                        (p.activeUpdates = null),
                        (p.flushingUpdates = !1),
                        !t.$7 &&
                          p.variableUpdates.hasRenderUpdates() &&
                          t.$16());
                    }
                  }
                },
                scheduleUpdates: function () {
                  if (!(t.$7 || p.updateScheduled)) {
                    if (!t.$5) {
                      t.$6 = !0;
                      return;
                    }
                    (t.$15(),
                      (p.updateScheduled = !0),
                      (e || (e = n("Promise")))
                        .resolve()
                        .then(function () {
                          ((p.updateScheduled = !1),
                            t.$4 === 0 &&
                              p.variableUpdates.hasRenderUpdates() &&
                              t.flushUpdates());
                        })
                        .catch(function (e) {
                          e instanceof o("WebBloksErrors").WebBloksScriptError
                            ? o("WebBloksScriptDebuggingUtils").logScriptError(
                                t.bloksContext.objectSet,
                                e,
                                null,
                                new (r("WebBloksInterpreterEnvironment"))(
                                  t.bloksContext,
                                ),
                              )
                            : t.bloksContext.objectSet.environment.logger.mustfix(
                                "Unexpected error when flushing updates",
                                e instanceof Error ? e : String(e),
                              );
                        }));
                  }
                },
                snapshotPendingComponent: function () {
                  var e,
                    n = p.variableUpdates,
                    r = p.activeUpdates,
                    o = n.pendingMutations();
                  if (r == null || n.root != null) {
                    var a;
                    return t.$18((a = n.root) != null ? a : t.unboundModel, o);
                  }
                  var i =
                    o.length === 0
                      ? r.pendingMutations()
                      : [].concat(r.pendingMutations(), o);
                  return t.$18((e = r.root) != null ? e : t.unboundModel, i);
                },
                enqueueVariableOperation: function (n) {
                  if (!t.$7) {
                    if ((p.variableUpdates.enqueueOperation(n), !t.$5)) {
                      t.$6 = !0;
                      return;
                    }
                    t.$4 === 0 && t.$16();
                  }
                },
                destroy: function () {
                  p.variableUpdates.reset();
                },
              };
            return new c(_, p);
          }),
          (a.$17 = function (t, n) {
            var e,
              r = n.takeWrites(
                this.treeResourcesState.variables,
                this.committedVariables,
              );
            if (!this.$7) {
              var a = o(
                "WebBloksBindInstrumentation",
              ).isBindInstrumentationEnabled();
              a &&
                (o("WebBloksBindInstrumentation").bindCounters.flushes++,
                (o(
                  "WebBloksBindInstrumentation",
                ).bindCounters.variableWritesApplied += r.size));
              var i = !1,
                l = null;
              if (r.size) {
                var s = this.treeResourcesState.variables;
                if (
                  ((this.treeResourcesState =
                    this.treeResourcesState.withVariableUpdates(r)),
                  !this.bloksContext.objectSet.environment
                    .enableNoOpVariableWriteFilter)
                )
                  i = !0;
                else {
                  var u;
                  l = r;
                  var c =
                    (u = this.bindResult) == null ? void 0 : u.dependencies;
                  for (var d of r) {
                    var m = d[0],
                      p = d[1],
                      _ =
                        p == null ||
                        (typeof p != "object" && typeof p != "function");
                    if (
                      !(_ && s.has(m) && p === s.get(m)) &&
                      (c == null || c.has(m))
                    ) {
                      i = !0;
                      break;
                    }
                  }
                }
              }
              if (n.pendingResources().length > 0) {
                this.initialTreeResources.setShouldCommitPublishStateUpdates(
                  !0,
                );
                var f = this.processResources(n.pendingResources());
                i = i || f[0];
                for (var g of f[1]) n.enqueueMutation(g);
              }
              if (!this.$7) {
                var h = this.$18(
                  (e = n.root) != null ? e : this.unboundModel,
                  n.pendingMutations(),
                );
                if (!this.$7)
                  if (
                    ((i = i || this.unboundModel !== h),
                    (this.unboundModel = h),
                    (t.activeUpdates = null),
                    a &&
                      (i
                        ? o("WebBloksBindInstrumentation").bindCounters
                            .passesEmitted++
                        : o("WebBloksBindInstrumentation").bindCounters
                            .passesSuppressed++),
                    i)
                  )
                    (this.$7 &&
                      this.bloksContext.objectSet.environment.logger.warn(
                        "Received model updates for a TreeManager that was already destroyed",
                      ),
                      this.onNewTreeAndVariablesListener.emit({
                        unboundModel: this.unboundModel,
                        treeResourcesState: this.treeResourcesState,
                      }));
                  else {
                    if (l != null) {
                      var y = new Map(this.committedVariables);
                      (o("WebBloksUtils").putAll(y, l),
                        (this.committedVariables = y));
                    }
                    this.$11();
                  }
              }
            }
          }),
          (a.$18 = function (t, n) {
            if (n.length === 0) return t;
            var e = new Set(n),
              r = this,
              a = o("WebBloksUpdateTraversal").runUpdateTraversal(
                t,
                {
                  apply: function (n) {
                    var t,
                      a = n,
                      i;
                    for (var l of e) {
                      if (r.$7) return n;
                      var u = l[0],
                        c = l[1],
                        d = c.shouldUpdate,
                        m = c.update;
                      if (
                        u.targets(a) &&
                        (i ? i.push(l) : (i = [l]), !d || d(a))
                      ) {
                        a === n && (a = n.makeCopy());
                        try {
                          m(a);
                        } catch (e) {
                          if (
                            !r.$7 &&
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
                              ).reportWebBloksRenderDrop("mutation_error", {
                                componentId: _,
                                styleId: f,
                                message: o(
                                  "WebBloksRenderDiagnostics",
                                ).safeErrorMessage(e),
                              });
                            } catch (e) {}
                          throw e;
                        }
                      }
                    }
                    return (
                      (t = i) == null ||
                        t.forEach(function (t) {
                          e.delete(t);
                        }),
                      a
                    );
                  },
                  onUpdatesApplied: function () {},
                },
                this.bloksContext.objectSet.environment.traversalKeys,
              );
            if (
              !this.$7 &&
              o(
                "WebBloksRenderDiagnostics",
              ).isWebBloksRenderDiagnosticsInstalled()
            )
              try {
                for (var i of e) {
                  var l = i[0],
                    u = s(l),
                    c = u.id,
                    d = u.kind;
                  o("WebBloksRenderDiagnostics").reportWebBloksRenderDrop(
                    "mutation_target_missing",
                    { componentId: c, styleId: d },
                  );
                }
              } catch (e) {}
            return a;
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

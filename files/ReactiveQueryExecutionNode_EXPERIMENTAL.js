__d(
  "ReactiveQueryExecutionNode_EXPERIMENTAL",
  [
    "invariant",
    "JSResourceReference",
    "JSScheduler",
    "ReactiveExecutorUtils",
    "ReactiveQueryExecutionStore_EXPERIMENTAL",
    "gkx",
    "nullthrows",
    "relay-runtime",
    "relay-runtime/store/RelayStoreUtils",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (function () {
        function t(e) {
          this.store = e;
        }
        var n = t.prototype;
        return (
          (n.execute = function (n) {
            var t = this;
            return o("relay-runtime").Observable.create(function (a) {
              var i = {
                  hasBeenFinal: !1,
                  isPublishScheduled: !1,
                  pendingScopesCounter: { count: 0 },
                  recordSource: new (o("relay-runtime").RecordSource)(),
                  sink: a,
                },
                l = new c(
                  t.store,
                  n,
                  n.node.operation.selections,
                  t.store.getRootStoreNode(),
                  function (e) {
                    a.next({
                      kind: "PAYLOAD",
                      payload: {
                        data: e.toJSON(),
                        extensions: {
                          is_final: i.pendingScopesCounter.count === 0,
                          is_normalized: !0,
                        },
                      },
                    });
                  },
                  function () {},
                  i,
                );
              return (
                t.store.updater.scheduleUpdate(),
                function () {
                  r("gkx")("19338")
                    ? r("gkx")("4996")
                      ? (e || (e = r("JSScheduler"))).defer(function () {
                          return l.dispose();
                        })
                      : r("setTimeout")(function () {
                          return l.dispose();
                        }, 0)
                    : l.dispose();
                }
              );
            });
          }),
          t
        );
      })(),
      c = (function () {
        function e(e, t, n, r, o, a, i, l) {
          (a === void 0 && (a = function () {}),
            (this.pendingExecNodes = new Set()),
            (this.execNodesToRead = []),
            (this.isReadScheduled = !1),
            (this.store = e),
            (this.request = t),
            (this.onNext = o),
            (this.onSuspense = a),
            (this.parentScope = l),
            (this.publisher = i));
          var s = [],
            u = {
              children: s,
              parentNodeForRead: null,
              scope: this,
              selection: null,
              shouldRead: !0,
              storageKey: "",
              storeNode: r,
              value: r.value,
            };
          (this.createChildrenFromSelections(u, n, s),
            r.executionNodes.push(u),
            (this.rootNode = u),
            this.execNodesToRead.push(u),
            this.publisher
              ? this.store.updater.scheduleScopeToRead(this)
              : (this.readAndMaybeFlush(), (this.isReadScheduled = !1)));
        }
        var t = e.prototype;
        return (
          (t.readAndMaybeFlush = function () {
            var e, t;
            if (this.pendingExecNodes.size > 0) {
              this.onSuspense();
              return;
            }
            if (
              !(
                this.parentScope != null &&
                this.parentScope.pendingExecNodes.size > 0
              )
            ) {
              for (
                var n =
                    (e =
                      (t = this.publisher) == null ? void 0 : t.recordSource) !=
                    null
                      ? e
                      : new (o("relay-runtime").RecordSource)(),
                  r = 0;
                r < this.execNodesToRead.length;
                r++
              )
                this.readInto(this.execNodesToRead[r], n);
              ((this.execNodesToRead = []),
                !this.publisher && n.size() > 0 && this.onNext(n));
            }
          }),
          (t.readInto = function (t, n, a) {
            if (t.shouldRead) {
              t.shouldRead = !1;
              var e = t.children;
              if (e == null) {
                var i = t.storeNode.value,
                  l = t.storeNode.error;
                (l != null &&
                  o("relay-runtime").Record.setErrors(
                    r("nullthrows")(a),
                    t.storageKey,
                    [{ message: l.toString(), path: [] }],
                  ),
                  o("relay-runtime").Record.setValue(
                    r("nullthrows")(a),
                    t.storageKey,
                    i === void 0 ? null : i,
                  ));
              } else {
                if (t.storeNode.value == null) {
                  if (a != null) {
                    var s = t.storeNode.error;
                    (s != null &&
                      o("relay-runtime").Record.setErrors(
                        r("nullthrows")(a),
                        t.storageKey,
                        [{ message: s.toString(), path: [] }],
                      ),
                      o("relay-runtime").Record.setValue(
                        a,
                        t.storageKey,
                        null,
                      ));
                  }
                  return;
                }
                if (t.scope !== this && t.scope.rootNode === t) {
                  if (t.scope.pendingExecNodes.size === 0)
                    for (var u = 0; u < e.length; u++)
                      t.scope.readInto(e[u], n, a);
                  else t.shouldRead = !0;
                  return;
                }
                if (t.storeNode.nodeType === 2) {
                  for (var c = [], d = 0; d < e.length; d++) {
                    var m = e[d];
                    m.children == null || m.storeNode.value == null
                      ? c.push(null)
                      : m.storeNode.nodeType === 1
                        ? m.children[0] == null ||
                          m.children[0].storeNode.value == null
                          ? c.push(null)
                          : (c.push(m.children[0].storeNode.id),
                            this.readInto(m, n))
                        : (c.push(m.storeNode.id), this.readInto(m, n));
                  }
                  o("relay-runtime").Record.setLinkedRecordIDs(
                    r("nullthrows")(a),
                    t.storageKey,
                    c,
                  );
                  return;
                } else if (
                  t.storeNode.nodeType === 1 ||
                  t.storeNode.nodeType === 3
                ) {
                  for (var p = 0; p < e.length; p++) this.readInto(e[p], n, a);
                  if (
                    t.storeNode.nodeType === 1 &&
                    t.children != null &&
                    t.children.length
                  ) {
                    var _ = t.storeNode.value;
                    if (
                      typeof _ == "object" &&
                      _ != null &&
                      "id" in _ &&
                      _.id != null
                    ) {
                      var f = t.children[0].storeNode.id,
                        g = n.get(f);
                      g != null &&
                        o("relay-runtime").Record.setValue(g, "id", _.id);
                    }
                  }
                  return;
                }
                var h = t.storeNode.id;
                a != null &&
                  o("relay-runtime").Record.setLinkedRecordID(
                    a,
                    t.storageKey,
                    h,
                  );
                var y = n.get(h);
                y == null &&
                  ((y = o("relay-runtime").Record.create(
                    h,
                    r("nullthrows")(t.storeNode.typeName),
                  )),
                  n.set(h, y));
                for (var C = 0; C < e.length; C++) this.readInto(e[C], n, y);
              }
            }
          }),
          (t.createChildrenFromSelections = function (t, n, r) {
            for (var e = 0; e < n.length; e++)
              this.createChildFromSelection(t, n[e], r);
          }),
          (t.createChildFromSelection = function (t, n, a) {
            var e;
            switch (n.kind) {
              case o("relay-runtime").RelayConcreteNode
                .CLIENT_EDGE_TO_CLIENT_OBJECT: {
                var i = r("nullthrows")(n.backingField.resolverInfo),
                  l = i.resolverFunction,
                  s = i.rootFragment,
                  u =
                    s != null && n.linkedField.args != null
                      ? o("ReactiveExecutorUtils").getStorageKey(
                          n.linkedField,
                          this.request.variables,
                        )
                      : o("ReactiveExecutorUtils").getStorageKey(
                          n.backingField,
                          this.request.variables,
                        );
                if (s != null) {
                  var c = this.createRootFragmentNode(t, u, s, l, n);
                  a.push(c);
                } else
                  this.createNonRootFragmentClientEdgeNode(
                    n,
                    t,
                    t.storeNode.value,
                    u,
                    l,
                    a,
                  );
                break;
              }
              case o("relay-runtime").RelayConcreteNode.RELAY_RESOLVER:
              case o("relay-runtime").RelayConcreteNode.RELAY_LIVE_RESOLVER: {
                var p = o("ReactiveExecutorUtils").getStorageKey(
                    n,
                    this.request.variables,
                  ),
                  _ = r("nullthrows")(n.resolverInfo),
                  f = _.resolverFunction,
                  g = _.rootFragment;
                if (g != null) {
                  var h = this.createRootFragmentNode(t, p, g, f, n);
                  a.push(h);
                } else
                  this.createNonRootFragmentLeafNode(
                    n,
                    t,
                    t.storeNode.value,
                    p,
                    f,
                    a,
                  );
                break;
              }
              case o("relay-runtime").RelayConcreteNode.CONDITION: {
                var y = !!this.request.variables[n.condition];
                y === n.passingValue &&
                  this.createChildrenFromSelections(t, n.selections, a);
                break;
              }
              case o("relay-runtime").RelayConcreteNode.CLIENT_EXTENSION: {
                this.createChildrenFromSelections(t, n.selections, a);
                break;
              }
              case o("relay-runtime").RelayConcreteNode.INLINE_FRAGMENT:
                (n.type == null || n.type === t.storeNode.typeName) &&
                  this.createChildrenFromSelections(t, n.selections, a);
                break;
              case o("relay-runtime").RelayConcreteNode.DEFER: {
                var C = n.if == null || this.request.variables[n.if];
                if (C) {
                  var b = this.createDeferredNode(t, n);
                  a.push(b);
                } else this.createChildrenFromSelections(t, n.selections, a);
                break;
              }
              case o("relay-runtime").RelayConcreteNode.SCALAR_FIELD:
                if (
                  n.name === "id" &&
                  ((e = t.parentNodeForRead) == null
                    ? void 0
                    : e.storeNode.nodeType) !== 1
                ) {
                  var v = this.store.getOrCreate(
                      t.storeNode.id,
                      t.storeNode.value,
                      "id",
                      function (e) {
                        return typeof e == "object" && e != null && "id" in e
                          ? e.id
                          : null;
                      },
                      null,
                      this.request.variables,
                      null,
                      0,
                    ),
                    S = {
                      children: null,
                      parentNodeForRead: t,
                      scope: this,
                      selection: null,
                      shouldRead: !0,
                      storageKey: "id",
                      storeNode: v,
                      value: v.value,
                    };
                  (v.executionNodes.push(S),
                    o("relay-runtime").isSuspenseSentinel(v.value) &&
                      this.addPendingExecNode(S),
                    a.push(S));
                }
                break;
              case o("relay-runtime").RelayConcreteNode.LINKED_FIELD:
                break;
              case o("relay-runtime").RelayConcreteNode.MODULE_IMPORT: {
                var R = o(
                    "relay-runtime/store/RelayStoreUtils",
                  ).getModuleComponentKey(n.documentName),
                  L = this.store.getOrCreate(
                    t.storeNode.id,
                    r("ReactiveQueryExecutionStore_EXPERIMENTAL")
                      .NO_MODEL_VALUE,
                    R,
                    function (e) {
                      return m(n);
                    },
                    null,
                    this.request.variables,
                    null,
                    0,
                  ),
                  E = {
                    children: null,
                    parentNodeForRead: t,
                    scope: this,
                    selection: null,
                    shouldRead: !0,
                    storageKey: R,
                    storeNode: L,
                    value: L.value,
                  };
                (a.push(E), L.executionNodes.push(E));
                var k = d(n);
                this.createChildrenFromSelections(t, k, a);
                break;
              }
            }
          }),
          (t.createDeferredNode = function (n, r) {
            var t = new e(
              this.store,
              this.request,
              r.selections,
              n.storeNode,
              this.onNext,
              function () {},
              this.publisher,
              this,
            );
            return t.rootNode;
          }),
          (t.createModelResolverNode = function (t) {
            var e = t.selection,
              n = e.modelResolvers;
            n != null || s(0, 99826);
            var r = this.store.getOrCreateModelResolver(
                t.storeNode,
                n,
                e.backingField.args,
                this.request.variables,
                e.linkedField.concreteType,
              ),
              a = [],
              i = {
                children: a,
                parentNodeForRead: t,
                scope: this,
                selection: e,
                shouldRead: !0,
                storageKey: t.storageKey,
                storeNode: r,
                value: r.value,
              };
            return (
              r.executionNodes.push(i),
              o("relay-runtime").isSuspenseSentinel(r.value)
                ? this.addPendingExecNode(i)
                : r.value != null &&
                  this.createChildrenFromSelections(
                    i,
                    e.linkedField.selections,
                    a,
                  ),
              i
            );
          }),
          (t.createPluralChildNode = function (t, n, r) {
            var e = [],
              a = n.storeNode,
              i = this.store.getOrCreate(
                a.id,
                a.value,
                String(t),
                function (e) {
                  return Array.isArray(e) ? e[t] : null;
                },
                null,
                this.request.variables,
                r.linkedField.concreteType,
                r.modelResolvers != null ? 1 : 0,
              ),
              l = {
                children: e,
                parentNodeForRead: n,
                scope: this,
                selection: r,
                shouldRead: !0,
                storageKey: String(t),
                storeNode: i,
                value: i.value,
              };
            if (
              (i.executionNodes.push(l),
              o("relay-runtime").isSuspenseSentinel(i.value))
            )
              this.addPendingExecNode(l);
            else if (i.value != null)
              if (r.modelResolvers != null) {
                var s = this.createModelResolverNode(l);
                e.push(s);
              } else
                this.createChildrenFromSelections(
                  l,
                  r.linkedField.selections,
                  e,
                );
            return l;
          }),
          (t.createNonRootFragmentClientEdgeNode = function (t, n, r, a, i, l) {
            var e = t.modelResolvers,
              u = t.linkedField.plural,
              c = this.store.getOrCreate(
                n.storeNode.id,
                r,
                a,
                i,
                t.backingField.args,
                this.request.variables,
                t.linkedField.concreteType,
                u ? 2 : e != null ? 1 : 0,
              ),
              d = [],
              m = {
                children: d,
                parentNodeForRead: n,
                scope: this,
                selection: t,
                shouldRead: !0,
                storageKey: a,
                storeNode: c,
                value: c.value,
              };
            if (
              (c.executionNodes.push(m),
              o("relay-runtime").isSuspenseSentinel(c.value))
            )
              this.addPendingExecNode(m);
            else if (c.value != null)
              if (u) {
                Array.isArray(c.value) || s(0, 102212);
                for (var p = c.value.length, _ = 0; _ < p; _++)
                  d.push(this.createPluralChildNode(_, m, t));
              } else if (e != null) {
                var f = this.createModelResolverNode(m);
                d.push(f);
              } else
                this.createChildrenFromSelections(
                  m,
                  t.linkedField.selections,
                  d,
                );
            l.push(m);
          }),
          (t.createNonRootFragmentLeafNode = function (t, n, r, a, i, l) {
            var e = this.store.getOrCreate(
                n.storeNode.id,
                r,
                a,
                i,
                t.args,
                this.request.variables,
                null,
                0,
              ),
              s = {
                children: null,
                parentNodeForRead: n,
                scope: this,
                selection: null,
                shouldRead: !0,
                storageKey: a,
                storeNode: e,
                value: e.value,
              };
            (e.executionNodes.push(s),
              o("relay-runtime").isSuspenseSentinel(e.value) &&
                this.addPendingExecNode(s),
              l.push(s));
          }),
          (t.scheduleRead = function (t) {
            t.shouldRead ||
              ((t.shouldRead = !0),
              t.parentNodeForRead == null ||
              t.parentNodeForRead.storeNode.nodeType === 1 ||
              t.parentNodeForRead.storeNode.nodeType === 2
                ? this.execNodesToRead.push(t)
                : t.parentNodeForRead.shouldRead ||
                  ((t.parentNodeForRead.shouldRead = !0),
                  this.execNodesToRead.push(t.parentNodeForRead)));
          }),
          (t.createRootFragmentNode = function (t, n, r, a, i) {
            var e,
              l =
                i.kind ===
                o("relay-runtime").RelayConcreteNode
                  .CLIENT_EDGE_TO_CLIENT_OBJECT
                  ? i.linkedField.args
                  : i.args;
            if (l == null)
              e = o(
                "ReactiveExecutorUtils",
              ).convertLocalArgumentsToNormalizationVariableArguments(
                r.argumentDefinitions,
                this.request.variables,
              );
            else {
              var s = r.argumentDefinitions;
              if (l == null || s == null) e = l;
              else {
                var u = new Set(
                    l.map(function (e) {
                      return e.name;
                    }),
                  ),
                  c = s.filter(function (e) {
                    return !u.has(e.name);
                  });
                e =
                  c.length > 0
                    ? l.concat(
                        o(
                          "ReactiveExecutorUtils",
                        ).convertLocalArgumentsToNormalizationVariableArguments(
                          c,
                          this.request.variables,
                        ),
                      )
                    : l;
              }
            }
            var d = this.store.getOrCreateRootFragmentWrapper(
                this.request,
                t.storeNode,
                r,
                e,
                this.request.variables,
              ),
              m = [],
              p = {
                children: m,
                parentNodeForRead: t,
                scope: this,
                selection: i,
                shouldRead: !0,
                storageKey: r.name,
                storeNode: d,
                value: d.value,
              };
            return (
              d.executionNodes.push(p),
              o("relay-runtime").isSuspenseSentinel(d.value)
                ? this.addPendingExecNode(p)
                : d.value != null &&
                  this.createRootFragmentInnerNode(p, t, n, a, i),
              p
            );
          }),
          (t.createRootFragmentInnerNode = function (t, n, r, a, i) {
            if (
              i.kind ===
              o("relay-runtime").RelayConcreteNode.CLIENT_EDGE_TO_CLIENT_OBJECT
            ) {
              this.createNonRootFragmentClientEdgeNode(
                i,
                n,
                t.storeNode.value,
                r,
                a,
                t.children,
              );
              return;
            }
            this.createNonRootFragmentLeafNode(
              i,
              n,
              t.storeNode.value,
              r,
              a,
              t.children,
            );
          }),
          (t.addPendingExecNode = function (t) {
            var e = this.pendingExecNodes.size;
            (this.pendingExecNodes.add(t),
              this.publisher &&
                e !== this.pendingExecNodes.size &&
                this.pendingExecNodes.size === 1 &&
                (this.publisher.pendingScopesCounter.count += 1));
          }),
          (t.deletePendingExecNode = function (t) {
            var e = this.pendingExecNodes.size;
            (this.pendingExecNodes.delete(t),
              this.publisher &&
                e !== this.pendingExecNodes.size &&
                this.pendingExecNodes.size === 0 &&
                (this.publisher.pendingScopesCounter.count -= 1));
          }),
          (t.dispose = function () {
            (this.store.updater.disposeExecutionNode(this.rootNode),
              (this.isReadScheduled = !1),
              (this.execNodesToRead = []));
          }),
          e
        );
      })();
    function d(e) {
      e.operationModuleProvider != null || s(0, 102041);
      var t = e.operationModuleProvider();
      if (t.kind === "Request") return t.operation.selections;
      if (t.kind === "SplitOperation") return t.selections;
      var n = new Error("Does not support other type of modules");
      throw (n.stack, n);
    }
    function m(e) {
      e.componentModuleProvider != null || s(0, 102040);
      var t = e.componentModuleProvider();
      return (
        t instanceof r("JSResourceReference") &&
          (t.getModuleIfRequired() ||
            (r("gkx")("14634")
              ? r("setTimeout")(function () {
                  t.preload();
                }, 0)
              : t.preload())),
        t
      );
    }
    ((l.Executor = u), (l.Scope = c));
  },
  98,
);

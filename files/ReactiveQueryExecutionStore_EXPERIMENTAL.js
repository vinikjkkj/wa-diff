__d(
  "ReactiveQueryExecutionStore_EXPERIMENTAL",
  [
    "invariant",
    "FBLogger",
    "ReactiveExecutorUtils",
    "ReactiveQueryExecutionNode_EXPERIMENTAL",
    "gkx",
    "nullthrows",
    "relay-runtime",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/store/live-resolvers/isLiveStateValue",
    "relay-runtime/util/RelayConcreteNode",
    "shallowEqual",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = 0,
      c = 1,
      d = 2,
      m = 3,
      p = (function () {
        function e(e, t, n) {
          (n === void 0 && (n = !1),
            (this.$1 = new Map()),
            (this.updater = new _(this, t)),
            (this.enableFieldTimeLogging = n));
        }
        var t = e.prototype;
        return (
          (t.getRootStoreNode = function () {
            var t = this.$1.get("client:root");
            if (t) return t;
            var n = {
              args: {},
              cleanup: null,
              error: null,
              executionNodes: [],
              id: "client:root",
              nodeType: u,
              parentValue: null,
              read: null,
              resolverFn: function () {},
              typeName: "__Root",
              value: e.NO_MODEL_VALUE,
            };
            return (this.$1.set("client:root", n), n);
          }),
          (t.getOrCreate = function (t, n, r, a, i, l, s, u) {
            var e = t + ":" + r,
              c = this.$1.get(e);
            if (c != null) return c;
            var d = o("relay-runtime").getArgumentValues(i, l),
              m = this.createStoreNode(e, s, d, n, a, u);
            return (this.$1.set(e, m), m);
          }),
          (t.getOrCreateModelResolver = function (t, n, a, i, l) {
            var e = r("nullthrows")(t.value);
            if (typeof e != "object" || typeof e.id != "string")
              throw r("FBLogger")("relay").mustfixThrow(
                "Expected client edge resolver for %s to return a value of shape `{id: string, __typename?: string}`",
                t.id,
              );
            var s = e.id,
              u = l;
            if (u == null) {
              var c = e.__typename;
              if (typeof c != "string")
                throw r("FBLogger")("relay").mustfixThrow(
                  "Expected the `__typename` field to be present on an abstract type for model at %s",
                  t.id,
                );
              u = c;
            }
            var d = "client:" + u + ":" + s,
              m = this.$1.get(d);
            if (m != null) return m;
            var p = o("relay-runtime").getArgumentValues(a, i),
              _ = r("nullthrows")(n[u]),
              f =
                typeof _.resolverModule == "function"
                  ? _.resolverModule
                  : _.resolverModule.default,
              g = this.createStoreNode(d, u, p, s, f, 0);
            return (this.$1.set(d, g), g);
          }),
          (t.getOrCreateRootFragmentWrapper = function (t, n, r, a, i) {
            var e = this,
              l,
              s = o("relay-runtime").getArgumentValues(a, i),
              u = n.id,
              c =
                a && a.length !== 0
                  ? o("relay-runtime/store/RelayStoreUtils").formatStorageKey(
                      r.name,
                      s,
                    )
                  : r.name,
              d = u + ":" + c,
              p = this.$1.get(d);
            if (p != null) return p;
            var _ = t;
            if (s != null) {
              var h = null;
              for (var y in s)
                y in i ||
                  (h == null && (h = babelHelpers.extends({}, i)),
                  (h[y] = s[y]));
              h != null && (_ = babelHelpers.extends({}, t, { variables: h }));
            }
            var C = new (o("relay-runtime").RecordSource)(),
              b = !0,
              v = !1,
              S = new (o("ReactiveQueryExecutionNode_EXPERIMENTAL").Scope)(
                this,
                _,
                r.selections,
                n,
                function (t) {
                  var n = f(C, t);
                  (!b &&
                    (n || v) &&
                    e.updater.updateRootFragmentWrapperStoreNode(E, [L, C]),
                    (v = !1));
                },
                function () {
                  ((v = !0),
                    b ||
                      e.updater.updateRootFragmentWrapperStoreNode(
                        E,
                        o("relay-runtime").suspenseSentinel(),
                      ));
                },
              ),
              R = r.name.replace("$normalization", ""),
              L = {
                __fragmentOwner: _,
                __fragments: ((l = {}), (l[R] = s), l),
                __id: u,
              },
              E = {
                args: s,
                cleanup: function () {
                  S.dispose();
                },
                error: null,
                executionNodes: [],
                id: d,
                nodeType: m,
                parentValue: null,
                read: null,
                resolverFn: g,
                typeName: null,
                value:
                  S.pendingExecNodes.size > 0
                    ? o("relay-runtime").suspenseSentinel()
                    : [L, C],
              };
            return (this.$1.set(d, E), (b = !1), E);
          }),
          (t.createStoreNode = function (n, o, a, i, l, s) {
            var t = this;
            try {
              if (this.enableFieldTimeLogging) {
                var u;
                (u = this.logFn) == null ||
                  u.call(this, {
                    resolverFn: l,
                    storeNodeId: n,
                    type: "resolver.start",
                  });
              }
              var c = i === e.NO_MODEL_VALUE ? l(a, !0) : l(i, a, !0);
              if (this.enableFieldTimeLogging) {
                var d;
                (d = this.logFn) == null ||
                  d.call(this, {
                    resolverFn: l,
                    storeNodeId: n,
                    type: "resolver.end",
                  });
              }
              if (r("relay-runtime/store/live-resolvers/isLiveStateValue")(c)) {
                var m = c.subscribe(function () {
                  t.updater.storeLiveValueUpdated(g);
                });
                if (this.enableFieldTimeLogging) {
                  var p;
                  (p = this.logFn) == null ||
                    p.call(this, {
                      resolverFn: l,
                      storeNodeId: n,
                      type: "read.start",
                    });
                }
                var _ = c.read();
                if (this.enableFieldTimeLogging) {
                  var f;
                  (f = this.logFn) == null ||
                    f.call(this, {
                      resolverFn: l,
                      storeNodeId: n,
                      type: "read.end",
                    });
                }
                var g = {
                  args: a,
                  cleanup: m,
                  error: null,
                  executionNodes: [],
                  id: n,
                  nodeType: s,
                  parentValue: i,
                  read: c.read,
                  resolverFn: l,
                  typeName: o,
                  value: _,
                };
                return g;
              }
              var h = {
                args: a,
                cleanup: null,
                error: null,
                executionNodes: [],
                id: n,
                nodeType: s,
                parentValue: i,
                read: null,
                resolverFn: l,
                typeName: o,
                value: c,
              };
              return h;
            } catch (e) {
              var y = {
                args: a,
                cleanup: null,
                error: e instanceof Error ? e : new Error(String(e)),
                executionNodes: [],
                id: n,
                nodeType: s,
                parentValue: i,
                read: null,
                resolverFn: l,
                typeName: o,
                value: null,
              };
              return y;
            }
          }),
          (t.removeStoreNodeReference = function (t, n) {
            var e = t.executionNodes,
              r = e.indexOf(n);
            if (r !== -1) {
              var o = e.length - 1;
              (r !== o && (e[r] = e[o]), (e.length = o));
            }
            e.length === 0 && this.dispose(t);
          }),
          (t.dispose = function (t) {
            (t.cleanup && t.cleanup(), this.$1.delete(t.id));
          }),
          e
        );
      })();
    p.NO_MODEL_VALUE = Object.freeze({});
    var _ = (function () {
      function e(e, t) {
        var n = this,
          a;
        ((this.$1 = []),
          (this.$2 = []),
          (this.$3 = []),
          (this.updateAll = function () {
            if (!(n.$1.length === 0 && n.$2.length === 0)) {
              var e = new (o("relay-runtime").RecordSource)(),
                t = [];
              if (r("gkx")("8048")) {
                n.$3 = [];
                for (var a = 0; a < n.$1.length; a++) {
                  var i = n.$1[a];
                  if (i != null)
                    try {
                      n.$4.enableFieldTimeLogging &&
                        (n.$4.logFn == null ||
                          n.$4.logFn({
                            resolverFn: i.resolverFn,
                            storeNodeId: i.id,
                            type: "read.start",
                          }));
                      var l = i.read();
                      if (
                        (n.$4.enableFieldTimeLogging &&
                          (n.$4.logFn == null ||
                            n.$4.logFn({
                              resolverFn: i.resolverFn,
                              storeNodeId: i.id,
                              type: "read.end",
                            })),
                        l === i.value)
                      )
                        continue;
                      (n.updateExecNodesBackedByStoreNode(i), (i.value = l));
                    } catch (e) {
                      var s = e instanceof Error ? e : new Error(String(e));
                      n.updateBackingStoreNodeWithError(i, s);
                    }
                }
                ((n.$1 = []), n.processAllPendingExecNodes(t, e));
              } else if (n.$1.length === 0) {
                for (var u = 0; u < n.$2.length; u++) {
                  var c = n.$2[u];
                  if (c.isReadScheduled) {
                    var d = c.publisher;
                    (d != null &&
                      !d.isPublishScheduled &&
                      ((d.isPublishScheduled = !0),
                      (d.recordSource = e),
                      t.push(d)),
                      (c.isReadScheduled = !1),
                      c.readAndMaybeFlush());
                  }
                }
                n.$2 = [];
              } else {
                for (var m = 0; m < n.$1.length; m++) {
                  var p = n.$1[m];
                  if (p != null) {
                    n.$3 = [];
                    try {
                      n.$4.enableFieldTimeLogging &&
                        (n.$4.logFn == null ||
                          n.$4.logFn({
                            resolverFn: p.resolverFn,
                            storeNodeId: p.id,
                            type: "read.start",
                          }));
                      var _ = p.read();
                      if (
                        (n.$4.enableFieldTimeLogging &&
                          (n.$4.logFn == null ||
                            n.$4.logFn({
                              resolverFn: p.resolverFn,
                              storeNodeId: p.id,
                              type: "read.end",
                            })),
                        _ === p.value)
                      )
                        continue;
                      (n.updateExecNodesBackedByStoreNode(p), (p.value = _));
                    } catch (e) {
                      var f = e instanceof Error ? e : new Error(String(e));
                      n.updateBackingStoreNodeWithError(p, f);
                    }
                    n.processAllPendingExecNodes(t, e);
                  }
                }
                n.$1 = [];
              }
              for (var g = 0; g < t.length; g++) {
                var h = t[g];
                h.isPublishScheduled = !1;
                var y = h.pendingScopesCounter.count === 0;
                ((h.recordSource.size() > 0 || (y && !h.hasBeenFinal)) &&
                  (h.sink.next({
                    kind: "PAYLOAD",
                    payload: {
                      data:
                        h.recordSource.size() > 0
                          ? h.recordSource.toJSON()
                          : null,
                      extensions: { is_final: y, is_normalized: !0 },
                    },
                  }),
                  h.hasBeenFinal || (h.hasBeenFinal = y)),
                  h.recordSource.clear());
              }
            }
          }),
          (this.$4 = e),
          (this.$5 = t),
          (a = this.$5) == null || a.addPersistedCallback(this.updateAll));
      }
      var t = e.prototype;
      return (
        (t.storeLiveValueUpdated = function (t) {
          (this.$1.push(t), this.scheduleUpdate());
        }),
        (t.scheduleUpdate = function () {
          var e;
          ((e = this.$5) != null && e.isBatching) || this.updateAll();
        }),
        (t.processAllPendingExecNodes = function (t, n) {
          if (!(this.$3.length === 0 && this.$2.length === 0))
            do {
              for (var e = 0; e < this.$3.length; e++)
                for (var r = this.$3[e], o = 0; o < r.length; o++) {
                  var a = r[o];
                  this.updateExecutionNode(a);
                }
              this.$3 = [];
              var i = this.$2.pop();
              if (i != null && i.isReadScheduled) {
                var l = i.publisher;
                (l != null &&
                  !l.isPublishScheduled &&
                  ((l.isPublishScheduled = !0),
                  (l.recordSource = n),
                  t.push(l)),
                  i.readAndMaybeFlush(),
                  (i.isReadScheduled = !1));
              }
            } while (this.$2.length || this.$3.length);
        }),
        (t.updateExecutionNode = function (t) {
          var e = t.storeNode.value;
          if (t.value !== e) {
            if (o("relay-runtime").isSuspenseSentinel(e)) {
              if (t.children != null) {
                for (var n = 0; n < t.children.length; n++)
                  this.disposeExecutionNode(t.children[n]);
                t.children = [];
              }
              ((t.shouldRead = !1), t.scope.addPendingExecNode(t));
            } else if (o("relay-runtime").isSuspenseSentinel(t.value))
              (t.scope.deletePendingExecNode(t),
                t.selection != null &&
                  e != null &&
                  this.rebuildExecNodeChildren(t),
                this.scheduleReadForPotentialRefChange(t));
            else if (e == null) {
              if (t.children != null) {
                for (var a = 0; a < t.children.length; a++)
                  this.disposeExecutionNode(t.children[a]);
                t.children = [];
              }
              this.scheduleReadForPotentialRefChange(t);
            } else if (t.value == null)
              (t.selection !== null && this.rebuildExecNodeChildren(t),
                this.scheduleReadForPotentialRefChange(t));
            else if (t.storeNode.nodeType === c) {
              (t.selection != null &&
                t.selection.kind === "ClientEdgeToClientObject" &&
                t.selection.modelResolvers != null) ||
                s(0, 99935);
              var i = r("nullthrows")(t.children[0]);
              this.disposeExecutionNode(i);
              var l = t.scope.createModelResolverNode(t);
              ((t.children[0] = l), t.scope.scheduleRead(t));
            } else if (t.storeNode.nodeType === d) {
              t.children != null || s(0, 100397);
              var u = t.children.length,
                m = Array.isArray(e) ? e.length : 0;
              if (m > u)
                for (var p = u; p < m; p++)
                  t.children.push(
                    t.scope.createPluralChildNode(p, t, t.selection),
                  );
              else {
                for (var _ = m; _ < u; _++)
                  this.disposeExecutionNode(t.children[_]);
                t.children.length = m;
              }
              t.scope.scheduleRead(t);
            } else t.scope.scheduleRead(t);
            if (((t.value = t.storeNode.value), t.children != null))
              for (var f = 0; f < t.children.length; f++)
                this.updateBackingStoreNode(t.children[f], t.storeNode);
            this.scheduleScopeToRead(t.scope);
          }
        }),
        (t.scheduleScopeToRead = function (t) {
          t.isReadScheduled || ((t.isReadScheduled = !0), this.$2.push(t));
        }),
        (t.updateBackingStoreNode = function (t, n) {
          if (t.storageKey !== "") {
            var e = t.storeNode,
              o = n.value;
            if (n.nodeType === c)
              ((o != null && typeof o.id == "string") || s(0, 99827),
                (o = o.id));
            else if (e.nodeType === m) return;
            if (e.parentValue !== o) {
              e.parentValue = o;
              try {
                if (this.$4.enableFieldTimeLogging) {
                  var a, i;
                  (a = (i = this.$4).logFn) == null ||
                    a.call(i, {
                      resolverFn: e.resolverFn,
                      storeNodeId: e.id,
                      type: "resolver.start",
                    });
                }
                var l =
                  o === p.NO_MODEL_VALUE
                    ? e.resolverFn(e.args)
                    : e.resolverFn(o, e.args);
                if (this.$4.enableFieldTimeLogging) {
                  var u, d;
                  (u = (d = this.$4).logFn) == null ||
                    u.call(d, {
                      resolverFn: e.resolverFn,
                      storeNodeId: e.id,
                      type: "resolver.end",
                    });
                }
                r("shallowEqual")(l, e.value) ||
                  this.updateBackingStoreNodeImpl(e, l);
              } catch (t) {
                var _ = t instanceof Error ? t : new Error(String(t));
                this.updateBackingStoreNodeWithError(e, _);
              }
            }
          }
        }),
        (t.updateBackingStoreNodeImpl = function (t, n) {
          var e = this;
          if (r("relay-runtime/store/live-resolvers/isLiveStateValue")(n)) {
            var o = t;
            try {
              if (this.$4.enableFieldTimeLogging) {
                var a, i;
                (a = (i = this.$4).logFn) == null ||
                  a.call(i, {
                    resolverFn: o.resolverFn,
                    storeNodeId: o.id,
                    type: "read.start",
                  });
              }
              var l = n.read();
              if (this.$4.enableFieldTimeLogging) {
                var s, u;
                (s = (u = this.$4).logFn) == null ||
                  s.call(u, {
                    resolverFn: o.resolverFn,
                    storeNodeId: o.id,
                    type: "read.end",
                  });
              }
              (t.cleanup != null && t.cleanup(),
                (o.cleanup = n.subscribe(function () {
                  e.storeLiveValueUpdated(o);
                })),
                this.updateExecNodesBackedByStoreNode(o),
                (o.error = null),
                (o.read = n.read),
                (o.value = l));
            } catch (e) {
              var c = e instanceof Error ? e : new Error(String(e));
              this.updateBackingStoreNodeWithError(t, c);
            }
          } else
            (this.updateExecNodesBackedByStoreNode(t),
              (t.error = null),
              (t.value = n));
        }),
        (t.updateBackingStoreNodeWithError = function (t, n) {
          n !== t.error &&
            (this.updateExecNodesBackedByStoreNode(t),
            t.cleanup != null && (t.cleanup(), (t.cleanup = null)),
            (t.value = null),
            (t.read = null),
            (t.error = n));
        }),
        (t.updateExecNodesBackedByStoreNode = function (t) {
          this.$3.push(t.executionNodes);
        }),
        (t.updateRootFragmentWrapperStoreNode = function (t, n) {
          n !== t.value && this.updateBackingStoreNodeImpl(t, n);
        }),
        (t.disposeExecutionNode = function (t) {
          if (
            ((t.value = t.storeNode.value),
            o("relay-runtime").isSuspenseSentinel(t.storeNode.value) &&
              t.scope.deletePendingExecNode(t),
            this.$4.removeStoreNodeReference(t.storeNode, t),
            t.children)
          ) {
            for (var e = 0; e < t.children.length; e++)
              this.disposeExecutionNode(t.children[e]);
            t.children = [];
          }
          ((t.shouldRead = !1),
            t.storageKey === "" && (t.scope.isReadScheduled = !1));
        }),
        (t.rebuildExecNodeChildren = function (t) {
          if (t.storeNode.nodeType === u) {
            var e = t.selection;
            switch (e.kind) {
              case r("relay-runtime/util/RelayConcreteNode")
                .CLIENT_EDGE_TO_CLIENT_OBJECT: {
                var n = e.linkedField.selections;
                t.scope.createChildrenFromSelections(t, n, t.children);
                break;
              }
              default:
                throw new Error("Update for " + e.kind + " not supported");
            }
          } else if (t.storeNode.nodeType === c) {
            if (
              ((t.selection.kind === "ClientEdgeToClientObject" &&
                t.selection.modelResolvers != null) ||
                s(0, 99935),
              t.children.length === 1)
            ) {
              var a = r("nullthrows")(t.children[0]);
              this.disposeExecutionNode(a);
            }
            var i = t.scope.createModelResolverNode(t);
            t.children[0] = i;
          } else if (t.storeNode.nodeType === d) {
            Array.isArray(t.storeNode.value) || s(0, 100397);
            var l = t.children.length,
              p = t.storeNode.value.length;
            if (p > l)
              for (var _ = l; _ < p; _++)
                t.children.push(
                  t.scope.createPluralChildNode(_, t, t.selection),
                );
            else {
              for (var f = p; f < l; f++)
                this.disposeExecutionNode(t.children[f]);
              t.children.length = p;
            }
          } else if (t.storeNode.nodeType === m)
            if (t.children.length === 0) {
              var g = t.selection,
                h,
                y;
              (g.backingField == null
                ? ((h = o("ReactiveExecutorUtils").getStorageKey(
                    g,
                    t.scope.request.variables,
                  )),
                  (y = r("nullthrows")(g.resolverInfo).resolverFunction))
                : ((h = o("ReactiveExecutorUtils").getStorageKey(
                    g.backingField,
                    t.scope.request.variables,
                  )),
                  (y = r("nullthrows")(
                    g.backingField.resolverInfo,
                  ).resolverFunction)),
                t.scope.createRootFragmentInnerNode(
                  t,
                  r("nullthrows")(t.parentNodeForRead),
                  h,
                  y,
                  g,
                ));
            } else
              throw new Error(
                "Unexpected rootFragment wrapper with existing children",
              );
          else throw new Error("Unsupported node type", t.storeNode.nodeType);
        }),
        (t.scheduleReadForPotentialRefChange = function (t) {
          var e;
          if (
            ((e = t.parentNodeForRead) == null
              ? void 0
              : e.storeNode.nodeType) === 1
          ) {
            var n;
            ((n = t.parentNodeForRead.parentNodeForRead) == null
              ? void 0
              : n.storeNode.nodeType) === 2
              ? t.scope.scheduleRead(t.parentNodeForRead.parentNodeForRead)
              : ((t.shouldRead = !0),
                t.scope.scheduleRead(t.parentNodeForRead));
          } else t.scope.scheduleRead(t);
        }),
        e
      );
    })();
    function f(t, n) {
      for (var o = !1, a = n.getRecordIDs(), i = 0; i < a.length; i++) {
        var l = a[i],
          s = n.get(l),
          u = t.get(l);
        if (s != null && u != null) {
          var c = (
            e || (e = r("relay-runtime/store/RelayModernRecord"))
          ).update(u, s);
          c !== u && (t.set(l, c), (o = !0));
        } else
          s === null
            ? (t.delete(l), u !== null && (o = !0))
            : s && ((o = !0), t.set(l, s));
      }
      return o;
    }
    function g() {
      throw new Error("Unreachable");
    }
    l.default = p;
  },
  98,
);

__d(
  "WebBloksInterpreterEnvironment",
  [
    "FallbackTreeResourcesDelegate",
    "Promise",
    "WebBloksConstants",
    "WebBloksErrors",
    "WebBloksExternalVariables",
    "WebBloksPayloadParser",
    "WebBloksScopedIds",
    "WebBloksScriptDebuggingUtils",
    "WebBloksScriptExecutor",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t(t, r, a, i) {
          var l = this;
          (i === void 0 && (i = null),
            (this.callArgsStack = []),
            (this.splicesStack = []),
            (this.scope = o("WebBloksUtils").EMPTY_KEY_PATH),
            (this.execute = function (e, t) {
              try {
                return (
                  l.bloksContext.treeManager.beginUpdates(),
                  o("WebBloksScriptExecutor").execute(l, e, t)
                );
              } finally {
                l.bloksContext.treeManager.endUpdates();
              }
            }),
            (this.executeCatch = function (e, t) {
              try {
                return l.execute(e, t);
              } catch (t) {
                o("WebBloksScriptDebuggingUtils").logScriptError(
                  l.objectSet,
                  t,
                  e,
                  l,
                );
              }
            }),
            (this.executeOnNextTick = function (t, r) {
              (e || (e = n("Promise")))
                .resolve()
                .then(function () {
                  l.execute(t, r);
                })
                .catch(function (e) {
                  return o("WebBloksScriptDebuggingUtils").logScriptError(
                    l.objectSet,
                    e,
                    t,
                    l,
                  );
                });
            }),
            (this.bloksContext = t),
            (this.$2 = r),
            (this.$4 = a),
            (this.$1 = i));
        }
        ((t.forBind = function (n, r, a, i) {
          var e = new (o(
              "FallbackTreeResourcesDelegate",
            ).FallbackTreeResourcesDelegate)(n.treeManager, a, i),
            l = new t(n, r, "BIND", e);
          return ((l.resources = a), (l.expandedVariablesOverride = i), l);
        }),
          (t.forAction = function (n, r) {
            var e = new (o(
              "FallbackTreeResourcesDelegate",
            ).FallbackTreeResourcesDelegate)(n.treeManager);
            return new t(n, r, null, e);
          }),
          (t.fromBloksContext = function (n) {
            var e = new (o(
              "FallbackTreeResourcesDelegate",
            ).FallbackTreeResourcesDelegate)(n.treeManager);
            return new t(n, null, null, e);
          }));
        var r = t.prototype;
        return (
          (r.getResources = function () {
            var e;
            return this.$1
              ? this.$1.getTreeResourcesState()
              : (e = this.resources) != null
                ? e
                : this.bloksContext.treeManager.getCommittedTreeResources();
          }),
          (r.getScriptMode = function () {
            return this.$4;
          }),
          (r.requireResources = function () {
            return o("WebBloksUtils").nullthrows(this.getResources());
          }),
          (r.readVariable = function (t) {
            var e,
              n = this.requireResources().variables.get(t);
            return ((e = this.variableAccessLog) == null || e.add(t), n);
          }),
          (r.readExpandedVariable = function (t) {
            var e,
              n = this.getExpandedVariablesFromEnvOrTree(),
              r = n.get(t);
            return ((e = this.variableAccessLog) == null || e.add(t), r);
          }),
          (r.readParameter = function (t) {
            return this.requireResources().parameters[t];
          }),
          (r.readValue = function (t) {
            var e = this.requireResources().values.get(t);
            if (!e)
              throw new (o("WebBloksErrors").WebBloksError)(
                "Value for referenced id " + t + " not found!",
              );
            return this.execute(e.expression, o("WebBloksUtils").EMPTY_ARRAY);
          }),
          (r.getExpandedVariablesFromEnvOrTree = function () {
            var e;
            return this.$1
              ? this.$1.getExpandedVariablesUnsafe()
              : (e = this.expandedVariablesOverride) != null
                ? e
                : this.bloksContext.treeManager.getExpandedVariables();
          }),
          (r.readManifestEntry = function (t) {
            var e = this.requireResources().variableDefinitions.get(t);
            if (e == null)
              throw new (o("WebBloksErrors").WebBloksError)(
                "Data manifest for referenced internal variable id " +
                  t +
                  " not found!",
              );
            return e;
          }),
          (r.readPayload = function (t) {
            var e = this.requireResources().payloads.get(t);
            if (e == null)
              throw new (o("WebBloksErrors").WebBloksError)(
                "Payload for referenced embedded payload id " +
                  t +
                  " not found!",
              );
            return e;
          }),
          (r.executeActionPayload = function (t, n) {
            var e = this.bloksContext,
              r = e.objectSet,
              a = e.treeManager,
              i = t.action,
              l = t.tree,
              s = { layout: { bloks_payload: t } };
            a.beginUpdates();
            try {
              var u, c;
              if (i != null) {
                u = i;
                var d = null;
                c = o("WebBloksPayloadParser").parseAction(
                  s,
                  r.environment.traversalKeys,
                  d,
                );
              } else if (l != null) {
                var m = l[o("WebBloksConstants").BK_INTERNAL_ACTION];
                ((u = m.handler),
                  (c = o("WebBloksPayloadParser").parseTree(
                    s,
                    r.environment.traversalKeys,
                  )));
              } else
                throw new (o("WebBloksErrors").WebBloksError)(
                  "No bloks action found in response",
                );
              var p = o(
                  "WebBloksExternalVariables",
                ).getProcessedDataPropEntries(c.resources),
                _ = o(
                  "WebBloksExternalVariables",
                ).getProcessedExternalVariables(n, p);
              a.synchronouslyAddTreeResources(c, _);
              var f = this.createBloksModelScopedContext(
                o("WebBloksUtils").EMPTY_KEY_PATH,
              );
              return f.execute(u, [this.bloksContext]);
            } finally {
              a.endUpdates();
            }
          }),
          (r.$5 = function () {
            var e = null,
              n = new t(this.bloksContext, e, this.$4, this.$1);
            return (
              (n.callArgsStack = this.callArgsStack),
              (n.resources = this.resources),
              (n.expandedVariablesOverride = this.expandedVariablesOverride),
              (n.variableAccessLog = this.variableAccessLog),
              n
            );
          }),
          (r.createBloksModelScopedContext = function (t) {
            if (t === this.scope) return this;
            var e = this.$5();
            return (
              (e.scope = t != null ? t : o("WebBloksUtils").EMPTY_KEY_PATH),
              e
            );
          }),
          (r.createScopedContext = function () {
            var e = this.$5();
            return (
              (e.scope = o("WebBloksScopedIds").extendKeyPath(this.scope)),
              e
            );
          }),
          (r.getBaseSourceMapNode = function () {
            var e, t;
            return (e = this.$2) == null
              ? void 0
              : e.makeCopyWithNewParent(
                  (t = this.$2) == null ? void 0 : t.getParent(),
                );
          }),
          (r.setBaseSourceMapNode = function (t) {
            this.$2 = t;
          }),
          (r.getSourceMapNode = function () {
            return this.$3;
          }),
          (r.setSourceMapNode = function (t) {
            this.$3 = t;
          }),
          t
        );
      })();
    (Object.defineProperties(s.prototype, {
      actions: {
        get: function () {
          return this.bloksContext.objectSet.environment.actions;
        },
        enumerable: !1,
      },
      objectSet: {
        get: function () {
          return this.bloksContext.objectSet;
        },
        enumerable: !1,
      },
      treeManager: {
        get: function () {
          return this.bloksContext.treeManager;
        },
        enumerable: !1,
      },
    }),
      (l.default = s));
  },
  98,
);

__d(
  "WebBloksInterpreterEnvironment",
  [
    "BindTreeResources",
    "Promise",
    "TreeManagerResourcesDelegate",
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
        function t(t, r, a, i, l) {
          var s = this;
          (i === void 0 && (i = null),
            l === void 0 && (l = null),
            (this.callArgsStack = []),
            (this.splicesStack = []),
            (this.scope = o("WebBloksUtils").EMPTY_KEY_PATH),
            (this.execute = function (e, t) {
              try {
                return (
                  s.bloksContext.treeManager.beginUpdates(),
                  o("WebBloksScriptExecutor").execute(s, e, t)
                );
              } finally {
                s.bloksContext.treeManager.endUpdates();
              }
            }),
            (this.executeCatch = function (e, t) {
              try {
                return s.execute(e, t);
              } catch (t) {
                o("WebBloksScriptDebuggingUtils").logScriptError(
                  s.objectSet,
                  t,
                  e,
                  s,
                );
              }
            }),
            (this.executeOnNextTick = function (t, r) {
              (e || (e = n("Promise")))
                .resolve()
                .then(function () {
                  s.execute(t, r);
                })
                .catch(function (e) {
                  return o("WebBloksScriptDebuggingUtils").logScriptError(
                    s.objectSet,
                    e,
                    t,
                    s,
                  );
                });
            }),
            (this.bloksContext = t),
            (this.$2 = r),
            (this.$4 = a),
            (this.$1 = i),
            (this.$5 = l));
        }
        ((t.forBind = function (n, r, a, i, l) {
          l === void 0 && (l = null);
          var e = new (o("BindTreeResources").BindTreeResources)(a, i),
            s = new t(n, r, "BIND", e, l);
          return ((s.resources = a), (s.expandedVariablesOverride = i), s);
        }),
          (t.forAction = function (n, r) {
            var e = new (o(
              "TreeManagerResourcesDelegate",
            ).TreeManagerResourcesDelegate)(n.treeManager);
            return new t(n, r, null, e);
          }),
          (t.fromBloksContext = function (n) {
            var e = new (o(
              "TreeManagerResourcesDelegate",
            ).TreeManagerResourcesDelegate)(n.treeManager);
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
          (r.getBindTimeSnapshotMs = function () {
            return this.$5 != null ? this.$5() : Date.now();
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
              var u,
                c,
                d = r.environment,
                m = d.minificationMap,
                p = d.traversalKeys,
                _ = d.unminificationMap,
                f = d.useMinification,
                g = f || _ != null;
              if (i != null) {
                u = i;
                var h = null;
                c = o("WebBloksPayloadParser").parseAction(s, p, m, h, _, g);
              } else if (l != null) {
                var y = l[o("WebBloksConstants").BK_INTERNAL_ACTION];
                ((u = y.handler),
                  (c = o("WebBloksPayloadParser").parseTree(
                    s,
                    p,
                    m,
                    void 0,
                    _,
                    g,
                  )));
              } else
                throw new (o("WebBloksErrors").WebBloksError)(
                  "No bloks action found in response",
                );
              var C = o(
                  "WebBloksExternalVariables",
                ).getProcessedDataPropEntries(c.resources),
                b = o(
                  "WebBloksExternalVariables",
                ).getProcessedExternalVariables(n, C);
              a.synchronouslyAddTreeResources(c, b);
              var v = this.createBloksModelScopedContext(
                o("WebBloksUtils").EMPTY_KEY_PATH,
              );
              return v.execute(u, [this.bloksContext]);
            } finally {
              a.endUpdates();
            }
          }),
          (r.$6 = function () {
            var e = null,
              n = new t(this.bloksContext, e, this.$4, this.$1, this.$5);
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
            var e = this.$6();
            return (
              (e.scope = t != null ? t : o("WebBloksUtils").EMPTY_KEY_PATH),
              e
            );
          }),
          (r.createScopedContext = function () {
            var e = this.$6();
            return (
              (e.scope = o("WebBloksScopedIds").extendKeyPath(this.scope)),
              e
            );
          }),
          (r.createScopedContextWithDepth = function (t) {
            if (t == null) return this.createScopedContext();
            var e = this.$6();
            return (
              (e.scope = o("WebBloksScopedIds").truncateKeyPath(this.scope, t)),
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

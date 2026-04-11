__d(
  "WebBloksComponentQueryManager",
  [
    "WebBloksChildrenOperationsHelper",
    "WebBloksMutations",
    "WebBloksParseResult",
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
                var t = o("WebBloksUtils").cast(a(i.appIdExpression)),
                  l =
                    i.paramsExpression != null
                      ? o("WebBloksUtils").cast(a(i.paramsExpression))
                      : {},
                  s =
                    i.cacheTTLExpression != null
                      ? o("WebBloksUtils").cast(a(i.cacheTTLExpression))
                      : null;
                if (s == null) return 1;
                var u = e.$2.getCachedComponentsOrSubscribeToQuery(
                  t,
                  l,
                  s,
                  function (t, r) {
                    e.$6(i, r, n);
                  },
                );
                u.value == null || r.push([i, u.value]);
              };
            for (var s of t) l(s);
            for (var u of r) {
              var c = u[0],
                d = u[1],
                m = this.$7(c, d, n, "resolved_sync");
              for (var p of m) i.push(p);
            }
            return i;
          }),
          (n.$6 = function (t, n, r) {
            var e = this,
              o = this.$7(t, n, r, "resolved_async");
            o.forEach(function (t) {
              e.$1.enqueueTreeUpdateOperation(t);
            });
          }),
          (n.$7 = function (t, n, r, o) {
            var e = n.success ? o : "failed",
              a = !1;
            for (var i of (l = t.dependencies) != null ? l : new Set()) {
              var l;
              if (!this.$4.has(i)) {
                var s = this.$5.get(i);
                (s == null && ((s = new Set()), this.$5.set(i, s)),
                  s.add(t.id),
                  (a = !0));
              }
              if (a)
                return (
                  this.$3.set(t.id, { queryDefinition: t, response: n }),
                  []
                );
            }
            (this.$4.set(t.id, n), this.$3.delete(t.id));
            var u = this.$8(t, n, r, e);
            for (var c of (d = this.$5.get(t.id)) != null ? d : new Set()) {
              var d,
                m = this.$3.get(c);
              m != null &&
                ((u = u.concat(this.$7(m.queryDefinition, m.response, r, e))),
                this.$5.delete(t.id));
            }
            return u;
          }),
          (n.$8 = function (t, n, r, a) {
            var e,
              i = this,
              l = { resolution_type: a, response_summary: {} };
            if (!n.success)
              return [
                {
                  treeModification: null,
                  variableUpdate: {
                    variableIdentifier: this.$9(t.id),
                    value: l,
                  },
                },
              ];
            var s = this.$10(
                (e = t.targets) != null ? e : new Map(),
                n.result.components,
              ),
              u = t.isScoped ? o("WebBloksScopedIds").extendKeyPath() : null,
              c = [],
              d = function () {
                var e = m[0],
                  n = m[1],
                  a = i.$11(n, e.serverId, u),
                  s = function (n) {
                    var t = r.createBloksModelScopedContext(e.keyPath);
                    return o("WebBloksScriptExecutor").execute(t, n, []);
                  },
                  d =
                    t.clientParamsExpression != null
                      ? o("WebBloksUtils").cast(s(t.clientParamsExpression))
                      : {};
                for (var p of Object.entries(d)) {
                  var _ = p[0],
                    f = p[1];
                  c.push({
                    treeModification: null,
                    variableUpdate: {
                      variableIdentifier: i.$12(_, u),
                      value: f,
                    },
                  });
                }
                c.push({
                  treeModification: a,
                  variableUpdate: {
                    variableIdentifier: i.$12(i.$9(t.id), e.keyPath),
                    value: l,
                  },
                });
              };
            for (var m of s.entries()) d();
            return c;
          }),
          (n.$11 = function (t, n, a) {
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
          (n.$10 = function (t, n) {
            var e = new Map();
            for (var r of t.entries()) {
              var o = r[0],
                a = r[1],
                i = n.get(o);
              i != null && e.set(a, i);
            }
            return e;
          }),
          (n.$12 = function (t, n) {
            if (n == null || n.length === 0) return t;
            var e = o("WebBloksScopedIds").buildKeypathBase(n);
            return o("WebBloksScopedIds").buildScopedVariableIdentifier(t, e);
          }),
          (n.$9 = function (n) {
            return "" + e + n;
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);

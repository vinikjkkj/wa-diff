__d(
  "WebBloksScopedComponentQueryDefinition",
  [
    "WebBloksErrors",
    "WebBloksLegacyTraverser",
    "WebBloksMutations",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return t.map(function (t) {
        return s(e, t, n);
      });
    }
    function s(e, t, n) {
      var r = new Map();
      for (var a of Object.entries(t.targets)) {
        var i = a[0],
          l = a[1],
          s = o("WebBloksLegacyTraverser").findComponent(
            e,
            new (o("WebBloksMutations").ServerIdTarget)(l),
            n,
          );
        if (s != null) {
          var u,
            c = {
              serverId: o("WebBloksUtils").nullthrows(s.getId()),
              clientId: s.clientId,
              keyPath: (u = s.keyPath) != null ? u : [],
            };
          r.set(i, c);
        } else
          throw new (o("WebBloksErrors").WebBloksError)(
            "Failed to find async component container for " + t.id,
          );
      }
      return {
        id: t.id,
        appIdExpression: t.app_id_expr,
        paramsExpression: t.params,
        clientParamsExpression: t.client_params,
        dependencies: t.deps,
        targets: r,
        cacheTTLExpression: t.cache_ttl_expr,
        isScoped: t.is_scoped,
      };
    }
    function u(e, t, n) {
      var r = new Map();
      for (var a of (i = (l = t.targets) == null ? void 0 : l.entries()) != null
        ? i
        : []) {
        var i,
          l,
          s = a[0],
          u = a[1],
          c = o("WebBloksLegacyTraverser").findComponent(
            e,
            new (o("WebBloksMutations").ServerIdTarget)(u.serverId),
            n,
          );
        if (c != null) {
          var d = {
            serverId: o("WebBloksUtils").nullthrows(c.getId()),
            clientId: c.clientId,
            keyPath: c.keyPath,
          };
          r.set(s, d);
        } else
          throw new (o("WebBloksErrors").WebBloksError)(
            "Failed to find async component container for " + t.id,
          );
      }
      return babelHelpers.extends({}, t, { targets: r });
    }
    ((l.generateTreeScopedComponentQueryDefs = e),
      (l.generateTreeScopedComponentQueryDefFromScopedDef = u));
  },
  98,
);

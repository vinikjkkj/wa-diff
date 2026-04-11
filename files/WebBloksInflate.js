__d(
  "WebBloksInflate",
  [
    "WebBloksDataModule",
    "WebBloksModelParser",
    "WebBloksParseResult",
    "WebBloksScopedIds",
    "WebBloksSourceMapNode",
    "WebBloksSourceMapPayloadMetadata",
    "WebBloksSourceMapRootNode",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a, i, l) {
      var s,
        u,
        c = e.referenced,
        d = e.referenced_embedded_payloads,
        m = e.referenced_external,
        p = [],
        _ = [];
      if (c) for (var f of c) p.push(t.readManifestEntry(f));
      if (m)
        for (var g of m)
          p.push(
            o(
              "WebBloksDataModule",
            ).dangerouslyCreateLocalStateDataManifestEntry_DO_NOT_USE(
              g,
              t.readVariable(g),
            ),
          );
      if (l != null)
        for (var h of Object.entries(l)) {
          var y = h[0],
            C = h[1],
            b = o("WebBloksScopedIds").getScopedVariableIdAtDepth(
              t.scope,
              y,
              t.scope.length,
            ),
            v = o(
              "WebBloksDataModule",
            ).dangerouslyCreateLocalStateDataManifestEntry_DO_NOT_USE(b, C);
          p.push(v);
        }
      if (d) for (var S of d) _.push(t.readPayload(S));
      var R = t.objectSet.environment.traversalKeys,
        L = t.getBaseSourceMapNode(),
        E = L == null ? void 0 : L.getSourceMapID(),
        k = L == null ? void 0 : L.getLoggingID(),
        I = null,
        T = o("WebBloksModelParser").parseBloksModelFromJSON(
          o("WebBloksUtils").cast(e.tree),
          R,
          I,
        );
      a && (T = T.makeDeepCopyWithNewClientIds(i ? t.scope.slice() : null, R));
      var D = o("WebBloksModelParser").parseBloksTreeResources(
        babelHelpers.extends({}, e, {
          data: [].concat((s = e.data) != null ? s : [], p),
          embedded_payloads: [].concat(
            (u = e.embedded_payloads) != null ? u : [],
            _,
          ),
        }),
        T,
        R,
      );
      return new (r("WebBloksParseResult"))(T, D, k);
    }
    l.inflateBloksDataFromBloksPayloadToBloksParseResult = e;
  },
  98,
);

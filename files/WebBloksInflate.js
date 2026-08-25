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
        c,
        d = e.referenced,
        m = e.referenced_embedded_payloads,
        p = e.referenced_external,
        _ = e.referenced_ft_entries,
        f = [],
        g = [],
        h = null;
      if (d) for (var y of d) f.push(t.readManifestEntry(y));
      if (p)
        for (var C of p)
          f.push(
            o(
              "WebBloksDataModule",
            ).dangerouslyCreateLocalStateDataManifestEntry_DO_NOT_USE(
              C,
              t.readVariable(C),
            ),
          );
      if (l != null)
        for (var b of Object.entries(l)) {
          var v = b[0],
            S = b[1],
            R = o("WebBloksScopedIds").getScopedVariableIdAtDepth(
              t.scope,
              v,
              t.scope.length,
            ),
            L = o(
              "WebBloksDataModule",
            ).dangerouslyCreateLocalStateDataManifestEntry_DO_NOT_USE(R, S);
          f.push(L);
        }
      if (m) for (var E of m) g.push(t.readPayload(E));
      if (_) {
        var k = {};
        for (var I of _) {
          var T = t.requireResources().functionTable.get(I);
          T != null
            ? (k[I] = T)
            : t.objectSet.environment.logger.warn(
                "Referenced FT entry not found in parent context during inflate: %s",
                I,
              );
        }
        h = k;
      }
      var D = t.objectSet.environment,
        x = D.minificationMap,
        $ = D.traversalKeys,
        P = D.unminificationMap,
        N = D.useMinification,
        M = N || P != null,
        w = t.getBaseSourceMapNode(),
        A = w == null ? void 0 : w.getSourceMapID(),
        F = w == null ? void 0 : w.getLoggingID(),
        O = null,
        B = o("WebBloksModelParser").parseBloksModelFromJSON(
          o("WebBloksUtils").cast(e.tree),
          $,
          x,
          O,
          P,
          M,
        );
      a && (B = B.makeDeepCopyWithNewClientIds(i ? t.scope.slice() : null, $));
      var W = o("WebBloksModelParser").parseBloksTreeResources(
        babelHelpers.extends({}, e, {
          data: [].concat((s = e.data) != null ? s : [], f),
          embedded_payloads: [].concat(
            (u = e.embedded_payloads) != null ? u : [],
            g,
          ),
          ft:
            h != null
              ? babelHelpers.extends({}, h, (c = e.ft) != null ? c : {})
              : e.ft,
        }),
        B,
        $,
        x,
        P,
        M,
      );
      return new (r("WebBloksParseResult"))(B, W, F);
    }
    l.inflateBloksDataFromBloksPayloadToBloksParseResult = e;
  },
  98,
);

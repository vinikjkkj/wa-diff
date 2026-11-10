__d(
  "WebBloksAsyncComponentCacheWrite",
  ["WebBloksModel", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    var e = o("WebBloksModel").defineWebBloksAttributeKey("*");
    function s(t, n, r, a, i) {
      var l = t.bloksContext.objectSet,
        s =
          t.bloksContext.treeManager.initialTreeResources.getHoistedComponentQueryPayload(
            n,
          );
      if (s == null) {
        l.environment.logger.mustfix(
          "AsyncComponentCacheWrite: no hoisted payload with id " + n,
        );
        return;
      }
      var u = i == null ? void 0 : i.get(e),
        c = {};
      try {
        u != null && (c = o("WebBloksUtils").cast(t.execute(u, [])));
      } catch (e) {
        l.environment.logger.mustfix(
          "AsyncComponentCacheWrite: failed to evaluate params for id " +
            n +
            ": " +
            String(e),
        );
        return;
      }
      var d;
      try {
        d = JSON.parse(s.payload);
      } catch (e) {
        l.environment.logger.mustfix(
          "AsyncComponentCacheWrite: corrupt hoisted payload with id " +
            n +
            ": " +
            String(e),
        );
        return;
      }
      if (typeof d != "object" || d == null || !Array.isArray(d.components)) {
        l.environment.logger.mustfix(
          "AsyncComponentCacheWrite: corrupt hoisted payload with id " + n,
        );
        return;
      }
      l.componentQueryStore.writeToCache(r, c, d);
    }
    l.default = s;
  },
  98,
);

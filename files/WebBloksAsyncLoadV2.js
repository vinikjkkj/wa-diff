__d(
  "WebBloksAsyncLoadV2",
  ["WebBloksPayloadParser", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, a) {
      var i = e.objectSet.environment,
        l = o("WebBloksUtils").nullthrows(i.appLoader);
      l.fetchApp(t, n)
        .then(function (t) {
          var n = o("WebBloksPayloadParser").parseTree(
            { layout: { bloks_payload: t } },
            i.traversalKeys,
            i.minificationMap,
            void 0,
            i.unminificationMap,
            i.useMinification || i.unminificationMap != null,
          );
          (e.treeManager.synchronouslyAddTreeResources(n),
            e.execute(r, [n.unboundModel]));
        })
        .catch(function (t) {
          a(e, t);
        });
    }
    l.default = e;
  },
  98,
);

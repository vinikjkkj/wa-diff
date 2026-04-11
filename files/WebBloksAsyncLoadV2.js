__d(
  "WebBloksAsyncLoadV2",
  ["WebBloksPayloadParser", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, a) {
      var i = o("WebBloksUtils").nullthrows(e.objectSet.environment.appLoader);
      i.fetchApp(t, n)
        .then(function (t) {
          var n = o("WebBloksPayloadParser").parseTree(
            { layout: { bloks_payload: t } },
            e.objectSet.environment.traversalKeys,
          );
          (e.treeManager.processResources([n]), e.execute(r, [n.unboundModel]));
        })
        .catch(function (t) {
          a(e, t);
        });
    }
    l.default = e;
  },
  98,
);

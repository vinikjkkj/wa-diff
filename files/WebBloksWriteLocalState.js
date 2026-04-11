__d(
  "WebBloksWriteLocalState",
  ["WebBloksErrors", "WebBloksScopedIds"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      var a = e.scope,
        i = e.bloksContext.treeManager;
      if (r === 0) {
        i.enqueueVariableUpdateOperation(t, n);
        return;
      }
      if (a == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Keypath must be set on environment if trying to WriteLocalState on a depth larger than 0.",
        );
      if (r > a.length)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Depth supplied should never exceed the size of the key path.",
        );
      var l = o("WebBloksScopedIds").getScopedVariableIdAtDepth(a, t, r);
      i.enqueueVariableUpdateOperation(l, n);
    }
    l.default = e;
  },
  98,
);

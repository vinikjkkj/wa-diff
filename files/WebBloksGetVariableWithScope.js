__d(
  "WebBloksGetVariableWithScope",
  ["WebBloksErrors", "WebBloksScopedIds"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = e.scope;
      if (n === 0) return e.readVariable(t);
      if (r == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Keypath must be set on environment if trying to WriteLocalState on a depth larger than 0.",
        );
      if (n > r.length)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Depth supplied should never exceed the size of the key path.",
        );
      var a = o("WebBloksScopedIds").getScopedVariableIdAtDepth(r, t, n),
        i = e.readVariable(a);
      return (i == null && (i = e.readVariable(t)), i);
    }
    l.default = e;
  },
  98,
);

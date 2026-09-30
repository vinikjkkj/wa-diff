__d(
  "WebBloksMinsVectorAppend",
  ["WebBloksErrors", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      if (!Array.isArray(t))
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "vector_append 1st argument must be a vector",
          e,
        );
      try {
        o("WebBloksUtils").cast(t).push(n);
      } catch (t) {
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "modifying immutable container",
          e,
        );
      }
    }
    l.default = e;
  },
  98,
);

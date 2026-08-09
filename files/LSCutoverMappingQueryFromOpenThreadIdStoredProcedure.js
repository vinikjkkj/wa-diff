__d(
  "LSCutoverMappingQueryFromOpenThreadIdStoredProcedure",
  [
    "LSCutoverMappingQueryFromOpenThreadId",
    "LSSynchronousPromise",
    "Promise",
    "cr:8709",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, a) {
      var i = t.storedProcedure(
        r("LSCutoverMappingQueryFromOpenThreadId"),
        a.openThreadId,
      );
      return (e || (e = n("Promise"))).resolve(
        o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(i),
      );
    }
    l.default = s;
  },
  98,
);

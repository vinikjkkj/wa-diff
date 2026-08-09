__d(
  "LSMarkOptimisticMessageFailedStoredProcedure",
  [
    "LSMarkOptimisticMessageFailed",
    "LSSynchronousPromise",
    "Promise",
    "cr:8709",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, a) {
      var i = t.storedProcedure(
        r("LSMarkOptimisticMessageFailed"),
        a.optimisticMid,
        a.errorMessage,
        a.isRetryable,
      );
      return (e || (e = n("Promise"))).resolve(
        o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(i),
      );
    }
    l.default = s;
  },
  98,
);

__d(
  "LSCreateOfflineThreadingIDStoredProcedure",
  ["LSCreateOfflineThreadingID", "LSSynchronousPromise", "Promise", "cr:8709"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, a) {
      var i = t.storedProcedure(r("LSCreateOfflineThreadingID"), a.timestampMs);
      return (e || (e = n("Promise"))).resolve(
        o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(i),
      );
    }
    l.default = s;
  },
  98,
);

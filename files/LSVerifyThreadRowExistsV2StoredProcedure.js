__d(
  "LSVerifyThreadRowExistsV2StoredProcedure",
  ["LSSynchronousPromise", "LSVerifyThreadRowExistsV2", "Promise", "cr:8709"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, a) {
      var i = t.storedProcedure(
        r("LSVerifyThreadRowExistsV2"),
        a.threadKey,
        a.threadType,
        a.syncGroup,
        a.authorityLevel,
      );
      return (e || (e = n("Promise"))).resolve(
        o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(i),
      );
    }
    l.default = s;
  },
  98,
);

__d(
  "LSVerifyThreadRowExistsStoredProcedure",
  ["LSSynchronousPromise", "LSVerifyThreadRowExists", "Promise", "cr:8709"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, a) {
      var i = t.storedProcedure(
        r("LSVerifyThreadRowExists"),
        a.threadKey,
        a.threadType,
        a.syncGroup,
      );
      return (e || (e = n("Promise"))).resolve(
        o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(i),
      );
    }
    l.default = s;
  },
  98,
);

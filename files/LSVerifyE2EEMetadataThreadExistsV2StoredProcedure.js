__d(
  "LSVerifyE2EEMetadataThreadExistsV2StoredProcedure",
  [
    "LSSynchronousPromise",
    "LSVerifyE2EEMetadataThreadExistsV2",
    "Promise",
    "cr:8709",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, a) {
      var i = t.storedProcedure(
        r("LSVerifyE2EEMetadataThreadExistsV2"),
        a.threadType,
        a.threadKey,
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

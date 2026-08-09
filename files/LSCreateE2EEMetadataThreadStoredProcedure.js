__d(
  "LSCreateE2EEMetadataThreadStoredProcedure",
  ["LSCreateE2EEMetadataThread", "LSSynchronousPromise", "Promise", "cr:8709"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, a) {
      var i = t.storedProcedure(
        r("LSCreateE2EEMetadataThread"),
        a.waJid,
        a.offlineThreadKey,
        a.threadType,
        a.folderType,
        a.bumpTimestampMs,
        a.createdByLocalDevice,
      );
      return (e || (e = n("Promise"))).resolve(
        o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(i),
      );
    }
    l.default = s;
  },
  98,
);

__d(
  "WAWebWorkerStorageVersions",
  ["WAWebWorkerStorageUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebWorkerStorageUtils").getStorage().versions.version(0);
    }
    function s() {
      return o("WAWebWorkerStorageUtils").getStorage().versions.version(1);
    }
    ((l.localStorageCreateTable = e),
      (l.deferredMessagesStorageCreateTable = s));
  },
  98,
);

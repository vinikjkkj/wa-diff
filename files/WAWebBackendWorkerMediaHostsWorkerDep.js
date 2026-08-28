__d(
  "WAWebBackendWorkerMediaHostsWorkerDep",
  ["WAWebMediaHostsWorker"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s(t) {
      return (
        e != null ||
          (e = o("WAWebMediaHostsWorker").createAndSetMediaHostsWorker(t)),
        e
      );
    }
    l.getMediaHostsWorker = s;
  },
  98,
);

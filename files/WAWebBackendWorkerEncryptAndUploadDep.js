__d(
  "WAWebBackendWorkerEncryptAndUploadDep",
  [
    "WAWebBackendWorkerMediaHostsWorkerDep",
    "WAWebNetworkStatusWorker",
    "WAWebUploadManagerWorkerBridgeHandler",
  ],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s(t) {
      return (
        e != null ||
          (e = o(
            "WAWebUploadManagerWorkerBridgeHandler",
          ).createEncryptAndUploadHandler(
            t,
            o("WAWebBackendWorkerMediaHostsWorkerDep").getMediaHostsWorker(t),
            o("WAWebNetworkStatusWorker").networkStatusWorker,
          )),
        e
      );
    }
    l.getEncryptAndUpload = s;
  },
  98,
);

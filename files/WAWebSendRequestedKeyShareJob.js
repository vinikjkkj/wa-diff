__d(
  "WAWebSendRequestedKeyShareJob",
  [
    "WAWebDefinePersistedJob",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebDefinePersistedJob")
      .defineWebPersistedJob()
      .finalStep(
        "sendRequestedKeyShare",
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.keys,
              n = e.orphanKeys,
              r = e.peerDeviceId,
              a = {
                type: "missing_key",
                keys: t,
                orphanKeys: n,
                peerDeviceId: o("WAWebWidFactory").createWid(r),
              };
            yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "sendAppStateSyncKeyShare",
              { keyShare: a },
            );
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      )
      .end();
    l.sendRequestedKeyShare = e;
  },
  98,
);

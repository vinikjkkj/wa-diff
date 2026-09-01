__d(
  "WAWebSendRequestedKeyShareJob",
  [
    "WAWebDefinePersistedJob",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.keys,
            n = e.orphanKeys,
            r = e.peerDeviceId,
            a = {
              type: "missing_key",
              keys: t,
              orphanKeys: n,
              peerDeviceWid: o("WAWebWidFactory").createDeviceWidOrThrow(r),
            };
          yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
            "sendAppStateSyncKeyShare",
            { keyShare: a },
          );
        })),
        s.apply(this, arguments)
      );
    }
    var u = o("WAWebDefinePersistedJob")
      .defineWebPersistedJob()
      .finalStep(
        "sendRequestedKeyShare",
        (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            yield e(t);
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
      )
      .end();
    ((l.sendKeyShare = e), (l.sendRequestedKeyShare = u));
  },
  98,
);

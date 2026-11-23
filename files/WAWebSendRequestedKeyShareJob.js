__d(
  "WAWebSendRequestedKeyShareJob",
  ["WAWebDefinePersistedJob", "WAWebWidFactory", "WAWebWorkerSafeBackendApi"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.keys,
        n = e.orphanKeys,
        r = e.peerDeviceId,
        a = {
          type: "missing_key",
          keys: t,
          orphanKeys: n,
          peerDeviceWid: o("WAWebWidFactory").createDeviceWidOrThrow(r),
        };
      await o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
        "sendAppStateSyncKeyShare",
        { keyShare: a },
      );
    }
    var s = o("WAWebDefinePersistedJob")
      .defineWebPersistedJob()
      .finalStep("sendRequestedKeyShare", async function (t) {
        await e(t);
      })
      .end();
    ((l.sendKeyShare = e), (l.sendRequestedKeyShare = s));
  },
  98,
);

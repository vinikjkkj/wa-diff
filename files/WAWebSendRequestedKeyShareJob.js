__d(
  "WAWebSendRequestedKeyShareJob",
  ["WAWebDefinePersistedJob", "WAWebWidFactory", "WAWebWorkerSafeBackendApi"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebDefinePersistedJob")
      .defineWebPersistedJob()
      .finalStep("sendRequestedKeyShare", async function (e) {
        var t = e.keys,
          n = e.orphanKeys,
          r = e.peerDeviceId,
          a = {
            type: "missing_key",
            keys: t,
            orphanKeys: n,
            peerDeviceId: o("WAWebWidFactory").createWid(r),
          };
        await o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
          "sendAppStateSyncKeyShare",
          { keyShare: a },
        );
      })
      .end();
    l.sendRequestedKeyShare = e;
  },
  98,
);

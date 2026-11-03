__d(
  "WAWebCommsConfigWorker",
  [
    "WAWebBackendWorkerRegistrationState",
    "WAWebCommsConfigBase",
    "WAWebCommsSendPing",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebCommsConfigBase").createGetCommsConfig({
        isRegistered: o("WAWebBackendWorkerRegistrationState").isRegistered,
        onClockSkewUpdate: function (n) {
          (o("WAWebCommsSendPing").updateClockSkew(n),
            e.fireAndForget("mainthread_clockSkew", "setClockSkew", {
              newClockSkew: n,
            }));
        },
      });
    }
    l.createGetCommsConfigWorker = e;
  },
  98,
);

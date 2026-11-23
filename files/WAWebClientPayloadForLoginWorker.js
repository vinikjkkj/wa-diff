__d(
  "WAWebClientPayloadForLoginWorker",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return {
        buildClientPayloadForLogin: function (n) {
          return e.sendAndReceive(
            "mainthread_clientPayload",
            "buildClientPayloadForLogin",
            n,
          );
        },
      };
    }
    i.createClientPayloadForLoginWorker = e;
  },
  66,
);

__d(
  "WAWebLaunchSocketUtils",
  ["WAComms", "WAGzip", "WAWebCommsConfig", "WAWebCommsHandleStanza"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      (o("WAComms").stopComms(), s());
    }
    async function s() {
      var e = o("WAWebCommsConfig").getCommsConfig(void 0);
      return (
        o("WAComms").startComms(r("WAWebCommsHandleStanza"), e, function (e) {
          return Promise.resolve(o("WAGzip").inflate(e));
        }),
        await o("WAComms").waitForConnection(),
        o("WAComms").startHandlingRequests()
      );
    }
    ((l.refreshQR = e), (l.startCommsAndHandleRequests = s));
  },
  98,
);

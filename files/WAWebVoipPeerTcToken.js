__d(
  "WAWebVoipPeerTcToken",
  ["WAWebBackendApi", "WAWebVoipGatingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      if (o("WAWebVoipGatingUtils").isGuestViewer()) return null;
      var t = await o("WAWebBackendApi").frontendSendAndReceive("getTcToken", {
          wid: e,
        }),
        n = t.tcToken;
      return n;
    }
    l.fetchPeerTcToken = e;
  },
  98,
);

__d(
  "WAWebVoipPeerTcToken",
  ["WAWebBackendApi", "WAWebVoipGatingUtils", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebVoipGatingUtils").isGuestViewer()) return null;
          var t = yield o("WAWebBackendApi").frontendSendAndReceive(
              "getTcToken",
              { wid: e },
            ),
            n = t.tcToken;
          return n;
        })),
        s.apply(this, arguments)
      );
    }
    l.fetchPeerTcToken = e;
  },
  98,
);

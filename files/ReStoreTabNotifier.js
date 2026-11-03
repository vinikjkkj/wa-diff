__d(
  "ReStoreTabNotifier",
  [
    "CurrentMessengerUser",
    "FBLogger",
    "MWBroadcastChannel",
    "MWLSIndexedDBName",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("CurrentMessengerUser").getIDorEIMU();
    function s(t) {
      var n = o("MWBroadcastChannel").MWBroadcastChannel(
        t === "restore-table-" + e + "-" + o("MWLSIndexedDBName").dbName()
          ? "mwChat-" + e
          : t,
      );
      function a(e, t) {
        try {
          n.postMessage([e, t]);
        } catch (e) {
          r("FBLogger")("messenger_web")
            .catching(r("getErrorSafe")(e))
            .warn("Failed to broadcast changes");
        }
      }
      function i(e, t) {
        n.addEventListener("message", function (n) {
          var r = n.data,
            o = r[0];
          o === e && t(r[1]);
        });
      }
      return { onEventReceive: i, postMessage: a };
    }
    l.default = s;
  },
  98,
);

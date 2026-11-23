__d(
  "WALoadSenderKeySessionApi",
  ["WACryptoManager", "WADbSignal", "WAJids", "WAResultOrError", "WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
      var e = o("WAJids").extractUserJid(n),
        r = o("WAJids").extractDeviceId(n),
        a = o("WADbSignal").buildSenderKeySessionId(t, e, r);
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["senderKeySessions"],
          "readonly",
          async function (e) {
            var t = await e.stores.senderKeySessions.get(a);
            if (t == null)
              return o("WAResultOrError").makeError("errLoadSenderKeySession");
            var n = o("WACryptoManager").decodeSenderKeySession(t.record);
            return o("WAResultOrError").makeResult(n);
          },
          o("WASignalDB").signalOp("loadSenderKeySession"),
        );
    };
    l.loadSenderKeySession = e;
  },
  98,
);

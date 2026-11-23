__d(
  "WAClearSignalStoresV2",
  ["WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          [
            "identity",
            "contacts",
            "meta",
            "prekey",
            "prekeyGeneration",
            "senderKeySessions",
            "sentBytesCache",
            "session",
            "signedPrekey",
            "personalSenderKeyStatuses",
          ],
          "readwrite",
          async function (e) {
            await Promise.all([
              e.stores.identity.clear(),
              e.stores.contacts.clear(),
              e.stores.meta.clear(),
              e.stores.prekey.clear(),
              e.stores.prekeyGeneration.clear(),
              e.stores.senderKeySessions.clear(),
              e.stores.sentBytesCache.clear(),
              e.stores.session.clear(),
              e.stores.signedPrekey.clear(),
              e.stores.personalSenderKeyStatuses.clear(),
            ]);
          },
          o("WASignalDB").signalOp("clearSignalStores"),
        );
    };
    l.clearSignalStores = e;
  },
  98,
);

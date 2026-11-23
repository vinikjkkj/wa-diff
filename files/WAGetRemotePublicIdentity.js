__d(
  "WAGetRemotePublicIdentity",
  ["WAJids", "WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["identity"],
          "readonly",
          async function (e) {
            var r = o("WAJids").toMsgrUserJid(n),
              a = o("WAJids").toDeviceJid(r, t),
              i = await e.stores.identity.get(a);
            return i == null ? void 0 : i.identity;
          },
          o("WASignalDB").signalOp("getRemotePublicIdentityKey"),
        );
    };
    l.getRemotePublicIdentity = e;
  },
  98,
);

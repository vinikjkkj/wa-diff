__d(
  "WAMarkSenderKeyAsSentApi",
  ["WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, r) {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["personalSenderKeyStatuses"],
          "readwrite",
          async function (e) {
            var o = await e.stores.personalSenderKeyStatuses.get(t);
            o != null &&
              o.senderKeyId === n &&
              (r.forEach(function (e) {
                o.hasSenderKey.add(e);
              }),
              await e.stores.personalSenderKeyStatuses.bulkPut([o]));
          },
          o("WASignalDB").signalOp("markSenderKeyAsSent"),
        );
    };
    l.markSenderKeyAsSent = e;
  },
  98,
);

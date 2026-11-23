__d(
  "WAMarkParticipantNeedsKeyApi",
  ["WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["personalSenderKeyStatuses"],
          "readwrite",
          async function (e) {
            var r = await e.stores.personalSenderKeyStatuses.get(t);
            r == null ||
              r.rotateSenderKey ||
              (r.hasSenderKey.delete(n),
              await e.stores.personalSenderKeyStatuses.bulkPut([r]));
          },
          o("WASignalDB").signalOp("markParticipantNeedsKey"),
        );
    };
    l.markParticipantNeedsKey = e;
  },
  98,
);

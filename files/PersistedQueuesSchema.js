__d(
  "PersistedQueuesSchema",
  [
    "MAWWormOdsLogger",
    "WAHex",
    "Worm",
    "WormEarAsync",
    "WormIDbDriverEarAsync",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        autoIncrement: !0,
        indexes: {
          "[jid+priority+stanzaId]": {
            fields: ["jid", "priority", "stanzaId"],
            unique: !1,
          },
          priority: { fields: ["priority"], unique: !1 },
        },
        nonEncryptedFields: ["priority", "stanzaId"],
        primaryKey: "stanzaQueueId",
        secure: !0,
      },
      s = { autoIncrement: !0, indexes: {}, primaryKey: "queueId", secure: !0 },
      u = { autoIncrement: !0, indexes: {}, primaryKey: "queueId", secure: !0 },
      c = { danglingQueue: s, ebSenderUploadQueueV3: u, stanzaQueue: e };
    function d(e, t, n, r, a, i) {
      var l = o("WAHex").parseHex(t),
        s = "pqdb",
        u = new (o("WormEarAsync").WormEarAsync)(c, s, l);
      return new (o("Worm").WormDatabase)(
        new (o("WormIDbDriverEarAsync").WormIDbDriverEarAsync)(
          e,
          s,
          c,
          u,
          o("MAWWormOdsLogger").wormOdsWorkerLogger,
          {
            blockingErrorThreshold: n,
            onBlockingError: r,
            onTransactionError: a,
          },
        ),
        i,
      );
    }
    l.makePersistedQueueSchema = d;
  },
  98,
);

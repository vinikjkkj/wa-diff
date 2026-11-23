__d(
  "WmiMediaServiceSchema",
  [
    "$InternalEnum",
    "MAWWormOdsLogger",
    "MpsErrors",
    "WAHex",
    "WmiErrorReport",
    "Worm",
    "WormEarAsync",
    "WormIDbDriverEarAsync",
    "WormMemoryDriver",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored(["XMA", "Sticker"]),
      s = {
        autoIncrement: !0,
        indexes: {
          "[mediaId+updatedAtMs]": {
            fields: ["mediaId", "updatedAtMs"],
            unique: !1,
          },
          "[threadId+messageId+mediaId]": {
            fields: ["threadId", "messageId", "mediaId"],
            unique: !0,
          },
        },
        nonEncryptedFields: ["updatedAtMs"],
        primaryKey: "pk",
        secure: !0,
      },
      u = {
        autoIncrement: !1,
        indexes: {},
        primaryKey: "plaintextHash",
        secure: !0,
      },
      c = {
        autoIncrement: !1,
        indexes: {
          receiverFetchType: { fields: ["receiverFetchType"], unique: !1 },
        },
        nonEncryptedFields: ["receiverFetchType"],
        primaryKey: "receiverFetchId",
        secure: !0,
      },
      d = { mediaReferences: s, mediaStorageKeys: u, receiverFetchInfo: c };
    function m(e) {
      var t = e.blockingErrorThreshold,
        n = e.dbName,
        r = e.onBlockingError,
        a = e.qplEvent,
        i = e.strEncKey,
        l = o("WAHex").parseHex(i),
        s = "wmi_media_service",
        u = new (o("WormEarAsync").WormEarAsync)(d, s, l),
        c = new (o("Worm").WormDatabase)(
          new (o("WormIDbDriverEarAsync").WormIDbDriverEarAsync)(
            n,
            s,
            d,
            u,
            o("MAWWormOdsLogger").wormOdsWorkerLogger,
            {
              blockingErrorThreshold: t,
              onBlockingError: r,
              onTransactionError: function (t) {
                if (t instanceof o("WormEarAsync").DecryptionError) {
                  if (
                    (o("WmiErrorReport").reportWmiError(
                      o("MpsErrors").MpsErrors.error(
                        "entity_decryption_failed",
                        "EAR decryption error in store: %s. Dropping corrupted entity %s (%s)",
                        t.store,
                        t.maybeHashedPk,
                        t.message,
                      ),
                      { loggerProject: "wmi_media_service" },
                    ),
                    t.store === "receiverFetchInfo")
                  ) {
                    var e = t.maybeHashedPk;
                    c.runInTransaction(
                      ["receiverFetchInfo"],
                      "readwrite",
                      function (t) {
                        return e != null
                          ? t.stores.receiverFetchInfo.delete(e)
                          : t.stores.receiverFetchInfo.clear();
                      },
                      "delete-corrupted-entity",
                    );
                  } else if (t.store === "mediaStorageKeys") {
                    var n = t.maybeHashedPk;
                    c.runInTransaction(
                      ["mediaStorageKeys"],
                      "readwrite",
                      function (e) {
                        return n != null
                          ? e.stores.mediaStorageKeys.delete(n)
                          : e.stores.mediaStorageKeys.clear();
                      },
                      "delete-corrupted-entity",
                    );
                  } else if (t.store === "mediaReferences") {
                    var r = t.maybeHashedPk;
                    c.runInTransaction(
                      ["mediaReferences"],
                      "readwrite",
                      function (e) {
                        return r != null
                          ? e.stores.mediaReferences.delete(r)
                          : e.stores.mediaReferences.clear();
                      },
                      "delete-corrupted-entity",
                    );
                  }
                }
              },
            },
          ),
          a,
        );
      return c;
    }
    function p(e) {
      return new (o("Worm").WormDatabase)(
        new (o("WormMemoryDriver").WormMemoryDriver)(
          "wmi_media_service_test",
          d,
          o("MAWWormOdsLogger").wormOdsWorkerLogger,
        ),
        e,
      );
    }
    ((l.ReceiverFetchType = e),
      (l.makeSchema = m),
      (l.makeInMemorySchema_TEST_ONLY = p));
  },
  98,
);

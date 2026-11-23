__d(
  "WASignalDB",
  [
    "BrowserLockManager",
    "QPLFlow",
    "WAHandleFailureUtils",
    "WAHex",
    "WAIDBTypes",
    "WALogger",
    "WAResolvable",
    "Worm",
    "WormEarAsync",
    "WormIDbDriverEarAsync",
    "WormIDbUtils",
    "err",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        identity: {
          primaryKey: "deviceJid",
          indexes: { userJid: { fields: ["userJid"], unique: !1 } },
        },
        contacts: { primaryKey: "contactJid", indexes: {} },
        session: { indexes: {}, primaryKey: "id" },
        senderKeySessions: {
          primaryKey: "id",
          indexes: {
            groupJid: { fields: ["groupJid"], unique: !1 },
            userJid: { fields: ["userJid"], unique: !1 },
          },
        },
        prekey: { indexes: {}, primaryKey: "keyId" },
        prekeyGeneration: { indexes: {}, primaryKey: "generationId" },
        signedPrekey: { indexes: {}, primaryKey: "keyId" },
        meta: { indexes: {}, primaryKey: "key" },
        plaintextMeta: { indexes: {}, primaryKey: "key", secure: !1 },
        personalSenderKeyStatuses: { indexes: {}, primaryKey: "groupJid" },
        sentBytesCache: {
          primaryKey: "waMsgId",
          indexes: { ts: { fields: ["ts"], unique: !1 } },
          nonEncryptedFields: ["ts"],
        },
        receipts: {
          autoIncrement: !0,
          primaryKey: "pk",
          indexes: {
            "waMsgId+deviceJid": {
              fields: ["waMsgId", "deviceJid"],
              unique: !0,
            },
          },
        },
      },
      u,
      c = new (o("WAResolvable").Resolvable)();
    async function d(t, n, a, i, l, d) {
      var m =
        d != null
          ? o("QPLFlow").startQPLFlow(d, {
              timeoutInMs: r("justknobx")._("3415"),
              annotations: { string: { operationType: "initDb" } },
            })
          : null;
      try {
        await f(async function () {
          var e = o("WAHex").parseHex(n),
            r = "signalDb",
            p = new (o("WormEarAsync").WormEarAsync)(s, r, e),
            _ = new (o("Worm").WormDatabase)(
              new (o("WormIDbDriverEarAsync").WormIDbDriverEarAsync)(
                t,
                r,
                s,
                p,
                l,
                {
                  blockingErrorThreshold: a,
                  onBlockingError: i,
                  safeToDeleteStores: new Set([
                    "stanzaQueue",
                    "danglingQueue",
                    "migration",
                  ]),
                  onTransactionError: function (n) {
                    n instanceof o("WormEarAsync").DecryptionError &&
                      o("WormIDbUtils")
                        .promisifyIDbRequest(
                          o("WAIDBTypes").idb().deleteDatabase(t),
                        )
                        .then(function () {
                          return o("WAHandleFailureUtils").reregisterPhone();
                        });
                  },
                },
              ),
              d,
            );
          ((u = _),
            await _.init({ eventFlow: m }),
            c.resolve(_),
            m == null || m.endSuccess());
        });
      } catch (t) {
        throw (
          m == null || m.endFail("error"),
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WORM] Error performing initDb: ",
                "",
              ])),
            t,
          ),
          t
        );
      }
    }
    function m() {
      if (u == null) throw r("err")("Signal Db v3 is not initialized");
      return u;
    }
    function p() {
      return c.promise;
    }
    function _(e) {
      return "Signal - " + e;
    }
    function f(e) {
      return r("BrowserLockManager") != null
        ? r("BrowserLockManager").request("wajs_make_signal_v3_db", e)
        : e();
    }
    ((l.makeSignalDb = d),
      (l.getDb = m),
      (l.getDbPromise = p),
      (l.signalOp = _));
  },
  98,
);

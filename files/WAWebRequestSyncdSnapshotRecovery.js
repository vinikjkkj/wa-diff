__d(
  "WAWebRequestSyncdSnapshotRecovery",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WAResolvable",
    "WATextEncoding",
    "WATimeUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSendNonMessageDataRequest",
    "WAWebSyncdConst",
    "WAWebSyncdCrypto",
    "WAWebSyncdKeyCache",
    "WAWebSyncdKeyTypes",
    "encodeProtobuf",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = o("WATextEncoding").newTextDecoder(),
      m = 6e4,
      p = (function () {
        function t() {
          ((this.recoveryPromise = new Map()), (this.recoveryInflight = null));
        }
        var n = t.prototype;
        return (
          (n.requestRecoveryWithTimeout = async function (n) {
            try {
              var t = await o("WAPromiseTimeout").promiseTimeout(
                this.requestRecoveryFromPrimary(n),
                m,
              );
              return t;
            } catch (t) {
              return (
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd recovery] error occurred during recovery request ",
                      "",
                    ])),
                  t,
                ),
                null
              );
            }
          }),
          (n.requestRecoveryFromPrimary = async function (t) {
            var e = null;
            try {
              (this.recoveryInflight != null &&
                (await this.recoveryInflight.promise),
                (this.recoveryInflight = new (o("WAResolvable").Resolvable)()),
                this.recoveryPromise.has(t) ||
                  this.recoveryPromise.set(
                    t,
                    new (o("WAResolvable").Resolvable)(),
                  ),
                await o(
                  "WAWebSendNonMessageDataRequest",
                ).sendPeerDataOperationRequest(
                  o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
                    .COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY,
                  { collectionName: t, timestamp: o("WATimeUtils").unixTime() },
                ));
              var n = await r("nullthrows")(this.recoveryPromise.get(t))
                .promise;
              if (
                n == null ||
                String(n == null ? void 0 : n.collectionName) !== String(t)
              )
                throw (
                  o("WALogger").ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd recovery] collection mismatch got=",
                        " want=",
                        "",
                      ])),
                    n == null ? void 0 : n.collectionName,
                    t,
                  ),
                  r("err")("syncd recovery: null or collection name mismatch")
                );
              e = await this.convertSyncdSnapshotRecoveryResponseToSnapshot(n);
            } catch (e) {
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd recovery] error occurred during response processing ",
                    "",
                  ])),
                e,
              );
            }
            return (
              this.recoveryInflight != null && this.recoveryInflight.resolve(),
              this.recoveryPromise.set(t, new (o("WAResolvable").Resolvable)()),
              e
            );
          }),
          (n.convertSyncdSnapshotRecoveryResponseToSnapshot = async function (
            t,
          ) {
            var e = t.collectionLthash,
              n = t.collectionName,
              a = t.mutationRecords,
              i = t.version;
            if (i == null)
              throw r("err")("syncd recovery: syncdVersion is null");
            var l = await Promise.all(
              a.map(async function (e) {
                var t = e.keyId,
                  a = e.mac,
                  i = e.value;
                if (i == null || t == null)
                  throw r("err")(
                    "syncd recovery: unexpected null value in mutation record",
                  );
                var l = i.index,
                  s = i.version;
                if (l == null || s == null || a == null)
                  throw r("err")(
                    "syncd recovery: unexpected null value in mutation value",
                  );
                var u = null;
                try {
                  u = await o("WAWebSyncdKeyCache").getKeyData(
                    o("WAWebSyncdKeyTypes").toSyncKeyId(t),
                  );
                } catch (e) {
                  var m = e instanceof Error && e.name;
                  o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd recovery] key retrieval err: ",
                          "",
                        ])),
                      m,
                    )
                    .sendLogs("syncd-recovery-key-data-error");
                }
                var p = await o("WAWebSyncdCrypto").generateEncryptionKeys(
                    r("nullthrows")(u),
                  ),
                  _ = p.indexKey,
                  f = await o("WAWebSyncdCrypto").generateIndexMac(
                    r("nullthrows")(_),
                    r("nullthrows")(l),
                  ),
                  g = o("encodeProtobuf")
                    .encodeProtobuf(
                      o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                      i,
                    )
                    .readBuffer(),
                  h = o("WAWebSyncdConst").CollectionName.cast(n);
                if (h == null)
                  throw r("err")("syncd recovery: invalid collection name");
                var y = {
                  index: d.decode(l),
                  binarySyncData: g,
                  operation: o("WAWebProtobufsServerSync.pb")
                    .SyncdMutation$SyncdOperation.SET,
                  version: s,
                  keyId: o("WAWebSyncdKeyTypes").toSyncKeyId(t),
                  indexMac: f,
                  valueMac: a,
                  collection: h,
                };
                return y;
              }),
            );
            return {
              collectionLthash: r("nullthrows")(e),
              version: Number(i.version),
              decryptedMutations: l,
            };
          }),
          (n.resolveRecoveryPromise = function (t, n) {
            var e = this.recoveryPromise.get(t);
            e != null && e.resolve(n);
          }),
          t
        );
      })(),
      _ = new p();
    l.SyncdSnapshotRecoveryModule = _;
  },
  98,
);

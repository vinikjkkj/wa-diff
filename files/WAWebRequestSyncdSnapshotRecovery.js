__d(
  "WAWebRequestSyncdSnapshotRecovery",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WAPromiseTimeout",
    "WAResolvable",
    "WASyncdConst",
    "WASyncdKeyTypes",
    "WATextEncoding",
    "WATimeUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSendNonMessageDataRequest",
    "WAWebSyncdCrypto",
    "WAWebSyncdKeyCache",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = o("WATextEncoding").newTextDecoder(),
      p = 6e4,
      _ = (function () {
        function t() {
          ((this.recoveryPromise = new Map()), (this.recoveryInflight = null));
        }
        var a = t.prototype;
        return (
          (a.requestRecoveryWithTimeout = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                try {
                  var n = yield o("WAPromiseTimeout").promiseTimeout(
                    this.requestRecoveryFromPrimary(t),
                    p,
                  );
                  return n;
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
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.requestRecoveryFromPrimary = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = null;
                try {
                  (this.recoveryInflight != null &&
                    (yield this.recoveryInflight.promise),
                    (this.recoveryInflight = new (o(
                      "WAResolvable",
                    ).Resolvable)()),
                    this.recoveryPromise.has(e) ||
                      this.recoveryPromise.set(
                        e,
                        new (o("WAResolvable").Resolvable)(),
                      ),
                    yield o(
                      "WAWebSendNonMessageDataRequest",
                    ).sendPeerDataOperationRequest(
                      o("WAWebProtobufsE2E.pb")
                        .Message$PeerDataOperationRequestType
                        .COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY,
                      {
                        collectionName: e,
                        timestamp: o("WATimeUtils").unixTime(),
                      },
                    ));
                  var n = yield r("WANullthrows")(this.recoveryPromise.get(e))
                    .promise;
                  if (
                    n == null ||
                    String(n == null ? void 0 : n.collectionName) !== String(e)
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
                        e,
                      ),
                      r("err")(
                        "syncd recovery: null or collection name mismatch",
                      )
                    );
                  t =
                    yield this.convertSyncdSnapshotRecoveryResponseToSnapshot(
                      n,
                    );
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
                  this.recoveryInflight != null &&
                    this.recoveryInflight.resolve(),
                  this.recoveryPromise.set(
                    e,
                    new (o("WAResolvable").Resolvable)(),
                  ),
                  t
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.convertSyncdSnapshotRecoveryResponseToSnapshot = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.collectionLthash,
                  a = e.collectionName,
                  i = e.mutationRecords,
                  l = e.version;
                if (l == null)
                  throw r("err")("syncd recovery: syncdVersion is null");
                var s = yield (d || (d = n("Promise"))).all(
                  i.map(
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          var t = e.keyId,
                            n = e.mac,
                            i = e.value;
                          if (i == null || t == null)
                            throw r("err")(
                              "syncd recovery: unexpected null value in mutation record",
                            );
                          var l = i.index,
                            s = i.version;
                          if (l == null || s == null || n == null)
                            throw r("err")(
                              "syncd recovery: unexpected null value in mutation value",
                            );
                          var u = null;
                          try {
                            u = yield o("WAWebSyncdKeyCache").getKeyData(
                              o("WASyncdKeyTypes").toSyncKeyId(t),
                            );
                          } catch (e) {
                            var d = e instanceof Error && e.name;
                            o("WALogger")
                              .ERROR(
                                c ||
                                  (c = babelHelpers.taggedTemplateLiteralLoose([
                                    "[syncd recovery] key retrieval err: ",
                                    "",
                                  ])),
                                d,
                              )
                              .sendLogs("syncd-recovery-key-data-error");
                          }
                          var p = yield o(
                              "WAWebSyncdCrypto",
                            ).generateEncryptionKeys(r("WANullthrows")(u)),
                            _ = p.indexKey,
                            f = yield o("WAWebSyncdCrypto").generateIndexMac(
                              r("WANullthrows")(_),
                              r("WANullthrows")(l),
                            ),
                            g = o("encodeProtobuf")
                              .encodeProtobuf(
                                o("WAWebProtobufSyncAction.pb")
                                  .SyncActionDataSpec,
                                i,
                              )
                              .readBuffer(),
                            h = o("WASyncdConst").CollectionName.cast(a);
                          if (h == null)
                            throw r("err")(
                              "syncd recovery: invalid collection name",
                            );
                          var y = {
                            index: m.decode(l),
                            binarySyncData: g,
                            operation: o("WAWebProtobufsServerSync.pb")
                              .SyncdMutation$SyncdOperation.SET,
                            version: s,
                            keyId: o("WASyncdKeyTypes").toSyncKeyId(t),
                            indexMac: f,
                            valueMac: n,
                            collection: h,
                          };
                          return y;
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  ),
                );
                return {
                  collectionLthash: r("WANullthrows")(t),
                  version: Number(l.version),
                  decryptedMutations: s,
                };
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.resolveRecoveryPromise = function (t, n) {
            var e = this.recoveryPromise.get(t);
            e != null && e.resolve(n);
          }),
          t
        );
      })(),
      f = new _();
    l.SyncdSnapshotRecoveryModule = f;
  },
  98,
);

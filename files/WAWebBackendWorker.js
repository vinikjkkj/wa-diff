__d(
  "WAWebBackendWorker",
  [
    "WACryptoAesCbc",
    "WACryptoHmac",
    "WACryptoSha256",
    "WAJids",
    "WALogger",
    "WAResolvable",
    "WATransferableResult",
    "WAWebBackendApi",
    "WAWebBackendEventBusWorker",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebBackendWorkerABPropsCache",
    "WAWebBackendWorkerBridge",
    "WAWebCheckOrphanMutationsWorker",
    "WAWebCryptoDecryptMediaWorker",
    "WAWebDbEncryptionKey",
    "WAWebDeviceSyncBackendWorker",
    "WAWebGetMessageCache",
    "WAWebGlobals",
    "WAWebHandleSingleMsgWorker",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebHistorySyncBackendWorker",
    "WAWebHistorySyncBackendWorkerV2",
    "WAWebHistorySyncProgress",
    "WAWebIdentityChangeApiWorker",
    "WAWebIdentityChangeApiWorkerCompatible",
    "WAWebLogger",
    "WAWebMaybeInsertDebugPlaceholderWorker",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMessageProcessorCacheWorker",
    "WAWebMobilePlatforms",
    "WAWebModelStorageInitialize",
    "WAWebMsgProcessReporterWorker",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebPersistedJobManagerWorkerBridge",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPrekeyProcessingBackendWorker",
    "WAWebRunInTransaction",
    "WAWebSchemaVersions",
    "WAWebSyncdOrphanWorkerCompatible",
    "WAWebUpdateMmSignalSharingExpirationWindowWorker",
    "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebWorkerQplProxy",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c() {
      var e = null,
        t = {
          onmessage: e,
          postMessage: function (t, n) {
            globalThis.postMessage(t, n);
          },
          close: function () {
            self.close();
          },
        };
      return (
        self.addEventListener("message", function (e) {
          t.onmessage != null && t.onmessage(e);
        }),
        t
      );
    }
    var d = new (o("WAResolvable").Resolvable)(),
      m = new (o("WAResolvable").Resolvable)(),
      p = new (o("WAResolvable").Resolvable)();
    function _() {
      try {
        (o("WAWebLogger").initializeWAWebLogger(),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebBackendWorker(inside) starts",
              ])),
          ));
        var t = null,
          a = o("WAWebBackendWorkerBridge").createBridge(
            c(),
            [
              "abPropsExposure",
              "qpl",
              "event",
              "workerSafeEvent",
              "backendEventBus",
              "mainthread_callbacks",
              "mainthread_jobmanager",
              "mainthread_messagecache",
              "mainthread_msgreporter",
              "mainthread_identitychange",
              "userPrefsFromWorker",
            ],
            [
              {
                namespace: "historySync",
                handlers: {
                  process: function (t) {
                    var e = t.data;
                    return o(
                      "WAWebHistorySyncBackendWorker",
                    ).processHistorySync(e);
                  },
                  processV2: function (t) {
                    var e = t.chunkInfo,
                      n = t.data;
                    return o(
                      "WAWebHistorySyncBackendWorkerV2",
                    ).processHistorySync(e, n, {
                      dbReady: d.promise,
                      abPropsReady: m.promise,
                      isGlobalsReady: p.promise,
                    });
                  },
                },
              },
              {
                namespace: "deviceSync",
                handlers: {
                  decodeSignedKeyIndexBytesBatch: function (t) {
                    var e = t.items;
                    return o(
                      "WAWebDeviceSyncBackendWorker",
                    ).decodeSignedKeyIndexBytesBatch(e);
                  },
                },
              },
              {
                namespace: "crypto",
                handlers: {
                  aesCbcDecrypt: (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = e.ciphertext,
                          n = e.encKey,
                          r = e.iv,
                          a = yield o("WACryptoAesCbc").aesCbcDecrypt(n, r, t);
                        return o("WATransferableResult").withTransferables(a, [
                          a,
                        ]);
                      },
                    );
                    function t(t) {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                  hmacSha256: function (t) {
                    var e = t.data,
                      n = t.macKey,
                      r = t.truncateLength;
                    return o("WACryptoHmac").hmacSha256(n, e, r);
                  },
                  sha256Base64: function (t) {
                    var e = t.data;
                    return o("WACryptoSha256").sha256Base64(e);
                  },
                },
              },
              {
                namespace: "media",
                handlers: {
                  decryptMedia: (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = e.ciphertextHmac,
                          n = e.encKey,
                          a = e.expectedPlaintextHash,
                          i = e.iv,
                          l = e.macKey,
                          s = yield r("WAWebCryptoDecryptMediaWorker")({
                            ciphertextHmac: t,
                            encKey: n,
                            expectedPlaintextHash: a,
                            iv: i,
                            macKey: l,
                          });
                        return o("WATransferableResult").withTransferables(s, [
                          s,
                        ]);
                      },
                    );
                    function t(t) {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                },
              },
              {
                namespace: "prekeyProcessing",
                handlers: {
                  createOutgoingSessionBatch: function (t) {
                    var e = t.regInfo,
                      n = t.sessions,
                      r = t.shouldYield,
                      a = t.useScheduler;
                    return o(
                      "WAWebPrekeyProcessingBackendWorker",
                    ).createOutgoingSessionBatch(e, n, r, a);
                  },
                },
              },
              {
                namespace: "abProps",
                handlers: {
                  update: function (t) {
                    var e = t.configs,
                      n = t.urlSearch;
                    (o("WAWebBackendWorkerABPropsCache").updateWorkerABProps(
                      e,
                      n,
                    ),
                      m.resolveWasCalled() || m.resolve());
                  },
                },
              },
              {
                namespace: "database",
                handlers: {
                  initDb: (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = e.salt,
                          n = e.versionsToSet;
                        try {
                          (o("WAWebSchemaVersions").setSchemaVersions(n),
                            yield o(
                              "WAWebModelStorageInitialize",
                            ).initializeWithoutGKs(),
                            yield o(
                              "WAWebUserPrefsIndexedDBStorage",
                            ).userPrefsIdb.init());
                          var r = yield o(
                            "WAWebUserPrefsGeneral",
                          ).getLastMobilePlatform();
                          (r != null &&
                            (yield o("WAWebMobilePlatforms").setMobilePlatform(
                              r,
                              !1,
                            )),
                            yield o("WAWebDbEncryptionKey").DbEncKeyStore.init(
                              t,
                            ));
                        } catch (e) {
                          d.reject(e);
                        }
                      },
                    );
                    function t(t) {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                  generateFinalDbMsgEncryptionKey: (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = e.salt;
                        try {
                          (yield o(
                            "WAWebDbEncryptionKey",
                          ).DbEncKeyStore.waitForInit(),
                            yield o(
                              "WAWebDbEncryptionKey",
                            ).DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(
                              t,
                            ),
                            d.resolve());
                        } catch (e) {
                          d.reject(e);
                        }
                      },
                    );
                    function t(t) {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                },
              },
              {
                namespace: "globals",
                handlers: {
                  set: function (t) {
                    var e = t.deviceJid,
                      n = t.displayName,
                      a = t.lidDeviceJid;
                    try {
                      var i = o("WAJids").interpretAndValidateJid(e);
                      if (i.jidType !== "phoneDevice")
                        throw r("err")(
                          "globals: deviceJid is not a phoneDevice jid",
                        );
                      var l = i.deviceJid,
                        s = o("WAJids").extractUserJid(l);
                      (o("WAWebGlobals").setGlobals({
                        jidUtils: o("WAJids").createJidUtils({
                          platform: "whatsapp",
                        }),
                        myJids: { deviceJid: l, userJid: s },
                        lidDeviceJid: a != null ? a : "",
                        displayName: n != null ? n : "",
                        runInTransaction: o("WAWebRunInTransaction")
                          .runInTransaction,
                        newClockSkewCalculation: function () {
                          return !1;
                        },
                      }),
                        p.resolve());
                    } catch (e) {
                      p.reject(e);
                    }
                  },
                },
              },
              {
                namespace: "userPrefs",
                handlers: {
                  syncSet: function (t) {
                    var e = t.key,
                      n = t.value;
                    o(
                      "WAWebUserPrefsIndexedDBStorage",
                    ).userPrefsIdb.applySyncSet(e, n);
                  },
                  syncRemove: function (t) {
                    var e = t.key;
                    o(
                      "WAWebUserPrefsIndexedDBStorage",
                    ).userPrefsIdb.applySyncRemove(e);
                  },
                  syncClear: function () {
                    o(
                      "WAWebUserPrefsIndexedDBStorage",
                    ).userPrefsIdb.applySyncClear();
                  },
                  syncBulkSet: function (t) {
                    var e = t.entries;
                    for (var n of e) {
                      var r = n.key,
                        a = n.value;
                      o(
                        "WAWebUserPrefsIndexedDBStorage",
                      ).userPrefsIdb.applySyncSet(r, a);
                    }
                  },
                },
              },
            ],
          );
        (o("WAWebBackendApi").setApi(a),
          o("WAWebHandleSingleMsgWorkerCompatible").setInstance(
            o("WAWebHandleSingleMsgWorker").createHandleSingleMsgWorker(a),
          ),
          o("WAWebSyncdOrphanWorkerCompatible").setInstance(
            o(
              "WAWebCheckOrphanMutationsWorker",
            ).createCheckOrphanMutationsWorker(a),
          ),
          o("WAWebMessageInsertDebugPlaceholderWorkerCompatible").setInstance(
            o(
              "WAWebMaybeInsertDebugPlaceholderWorker",
            ).createMaybeInsertDebugPlaceholderWorker(a),
          ),
          o(
            "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
          ).setInstance(
            o(
              "WAWebUpdateMmSignalSharingExpirationWindowWorker",
            ).createUpdateMmSignalSharingExpirationWindowWorker(a),
          ),
          o("WAWebPersistedJobManagerWorkerCompatible").setInstance(
            o(
              "WAWebPersistedJobManagerWorkerBridge",
            ).createPersistedJobManagerWorkerBridge(a),
          ),
          o("WAWebGetMessageCache").setMessageCache(
            o(
              "WAWebMessageProcessorCacheWorker",
            ).createMessageCacheWorkerBridge(a),
          ),
          o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").setInstance(
            o(
              "WAWebMsgProcessReporterWorker",
            ).createMsgProcessReporterWorkerBridge(a),
          ),
          o("WAWebIdentityChangeApiWorkerCompatible").setInstance(
            o(
              "WAWebIdentityChangeApiWorker",
            ).createIdentityChangeApiWorkerBridge(a),
          ),
          (t = new (r("WAWebBackendEventBusWorker"))(a)),
          a.setNamespaceHandler(
            "backendEventBusSync",
            t.getBackendEventBusSyncHandler(),
          ),
          o("WAWebBackendEventBusWorkerCompatible").setBackendEventBus(t),
          o("WAWebHistorySyncProgress").initHistorySyncProgressListeners(),
          o("WAWebWorkerQplProxy").initWorkerQplProxy(a),
          o("WAWebBackendWorkerABPropsCache").initializeWorkerABProps(a),
          o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.setSyncCallback(
            function (e) {
              switch (e.action) {
                case "set":
                  a.fireAndForget("userPrefsFromWorker", "syncSet", {
                    key: e.key,
                    value: e.value,
                  });
                  break;
                case "remove":
                  a.fireAndForget("userPrefsFromWorker", "syncRemove", {
                    key: e.key,
                  });
                  break;
                case "clear":
                  a.fireAndForget("userPrefsFromWorker", "syncClear", void 0);
                  break;
                case "bulkSet":
                  a.fireAndForget("userPrefsFromWorker", "syncBulkSet", {
                    entries: e.entries,
                  });
                  break;
              }
            },
          ),
          globalThis.postMessage({
            type: "worker_setup",
            message: "worker_started",
          }),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebBackendWorker(inside) ends",
              ])),
          ));
      } catch (e) {
        (o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "WAWebBackendWorker(inside) fails: ",
              "",
            ])),
          r("getErrorSafe")(e),
        ),
          globalThis.postMessage({
            type: "worker_setup",
            message: "worker_failed",
          }));
      }
    }
    l.default = _;
  },
  98,
);

__d(
  "WAWebBackendWorker",
  [
    "Promise",
    "WACryptoAesCbc",
    "WACryptoHmac",
    "WACryptoSha256",
    "WAJids",
    "WALogger",
    "WAResolvable",
    "WATransferableResult",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebBackendEventBusWorker",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebBackendWorkerABPropsCache",
    "WAWebBackendWorkerBridge",
    "WAWebBackendWorkerLocks",
    "WAWebCheckOrphanMutationsWorker",
    "WAWebCryptoDecryptMediaWorker",
    "WAWebDbEncryptionKey",
    "WAWebDeviceSyncBackendWorker",
    "WAWebGetMessageCache",
    "WAWebGlobals",
    "WAWebHandleSingleMsgWorker",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebHistorySyncBackendWorkerV2",
    "WAWebHistorySyncProgress",
    "WAWebIdbAsyncAwaitConfig",
    "WAWebIdentityChangeApiWorker",
    "WAWebIdentityChangeApiWorkerCompatible",
    "WAWebLogger",
    "WAWebMaybeInsertDebugPlaceholderWorker",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMessageProcessorCacheWorker",
    "WAWebMobilePlatforms",
    "WAWebModelStorageInitialize",
    "WAWebMsgProcessReporterWorker",
    "WAWebNoop",
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
    var e, s, u, c;
    function d() {
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
    var m = new (o("WAResolvable").Resolvable)();
    function p() {
      try {
        (o("WAWebLogger").initializeWAWebLogger(),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebBackendWorker(inside) starts",
              ])),
          ));
        var t = o("WAWebBackendWorkerBridge").createBridge([
          {
            namespace: "historySync",
            handlers: {
              processV2: function (t) {
                var e = t.chunkInfo,
                  n = t.data;
                return o("WAWebHistorySyncBackendWorkerV2").processHistorySync(
                  e,
                  n,
                  { isReady: m.promise },
                );
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
                    return o("WATransferableResult").withTransferables(a, [a]);
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
                    return o("WATransferableResult").withTransferables(s, [s]);
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
                o("WAWebBackendWorkerABPropsCache").updateWorkerABProps(e, n);
              },
            },
          },
          {
            namespace: "userPrefs",
            handlers: {
              syncSet: function (t) {
                var e = t.key,
                  n = t.value;
                o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.applySyncSet(
                  e,
                  n,
                );
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
                  o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.applySyncSet(
                    r,
                    a,
                  );
                }
              },
            },
          },
        ]);
        (o("WAWebBackendWorkerBridge").attachBridgeToPortal(t, d(), [
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
        ]),
          o("WAWebBackendApi").setApi(t),
          o("WAWebHandleSingleMsgWorkerCompatible").setInstance(
            o("WAWebHandleSingleMsgWorker").createHandleSingleMsgWorker(t),
          ),
          o("WAWebSyncdOrphanWorkerCompatible").setInstance(
            o(
              "WAWebCheckOrphanMutationsWorker",
            ).createCheckOrphanMutationsWorker(t),
          ),
          o("WAWebMessageInsertDebugPlaceholderWorkerCompatible").setInstance(
            o(
              "WAWebMaybeInsertDebugPlaceholderWorker",
            ).createMaybeInsertDebugPlaceholderWorker(t),
          ),
          o(
            "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
          ).setInstance(
            o(
              "WAWebUpdateMmSignalSharingExpirationWindowWorker",
            ).createUpdateMmSignalSharingExpirationWindowWorker(t),
          ),
          o("WAWebPersistedJobManagerWorkerCompatible").setInstance(
            o(
              "WAWebPersistedJobManagerWorkerBridge",
            ).createPersistedJobManagerWorkerBridge(t),
          ),
          o("WAWebGetMessageCache").setMessageCache(
            o(
              "WAWebMessageProcessorCacheWorker",
            ).createMessageCacheWorkerBridge(t),
          ),
          o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").setInstance(
            o(
              "WAWebMsgProcessReporterWorker",
            ).createMsgProcessReporterWorkerBridge(t),
          ),
          o("WAWebIdentityChangeApiWorkerCompatible").setInstance(
            o(
              "WAWebIdentityChangeApiWorker",
            ).createIdentityChangeApiWorkerBridge(t),
          ));
        var a = new (r("WAWebBackendEventBusWorker"))(t);
        (t.setNamespaceHandler(
          "backendEventBusSync",
          a.getBackendEventBusSyncHandler(),
        ),
          o("WAWebBackendEventBusWorkerCompatible").setBackendEventBus(a),
          t.setHandlers("workerInit", {
            setup: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.abProps,
                    n = e.dbFinalKey,
                    i = e.dbInit,
                    l = e.eventBusSyncState,
                    s = e.globals;
                  try {
                    var u, c;
                    a.setState(l);
                    var d = o("WAJids").interpretAndValidateJid(s.deviceJid);
                    if (d.jidType !== "phoneDevice")
                      throw r("err")(
                        "globals: deviceJid is not a phoneDevice jid",
                      );
                    var p = d.deviceJid,
                      _ = o("WAJids").extractUserJid(p);
                    (o("WAWebGlobals").setGlobals({
                      jidUtils: o("WAJids").createJidUtils({
                        platform: "whatsapp",
                      }),
                      myJids: { deviceJid: p, userJid: _ },
                      lidDeviceJid: (u = s.lidDeviceJid) != null ? u : "",
                      displayName: (c = s.displayName) != null ? c : "",
                      runInTransaction: o("WAWebRunInTransaction")
                        .runInTransaction,
                      newClockSkewCalculation: function () {
                        return !1;
                      },
                    }),
                      o("WAWebBackendWorkerABPropsCache").updateWorkerABProps(
                        t.configs,
                        t.urlSearch,
                      ),
                      o("WAWebSchemaVersions").setSchemaVersions(
                        i.versionsToSet,
                      ),
                      yield o(
                        "WAWebModelStorageInitialize",
                      ).initializeWithoutGKs(),
                      yield o(
                        "WAWebUserPrefsIndexedDBStorage",
                      ).userPrefsIdb.init());
                    var f = yield o(
                      "WAWebUserPrefsGeneral",
                    ).getLastMobilePlatform();
                    (f != null &&
                      (yield o("WAWebMobilePlatforms").setMobilePlatform(
                        f,
                        !1,
                      )),
                      yield o("WAWebDbEncryptionKey").DbEncKeyStore.init(
                        i.salt,
                      ),
                      yield o(
                        "WAWebDbEncryptionKey",
                      ).DbEncKeyStore.waitForInit(),
                      yield o(
                        "WAWebDbEncryptionKey",
                      ).DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(
                        n.salt,
                      ),
                      m.resolve());
                  } catch (e) {
                    m.reject(e);
                  }
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          o("WAWebHistorySyncProgress").initHistorySyncProgressListeners(),
          o("WAWebWorkerQplProxy").initWorkerQplProxy(t),
          o("WAWebBackendWorkerABPropsCache").initializeWorkerABProps(t),
          o("WAWebIdbAsyncAwaitConfig").setIsAsyncAwaitPrepEnabledImpl(
            function () {
              return o("WAWebABProps").getABPropConfigValue(
                "wmi_async_await_prep",
              );
            },
          ),
          o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.setSyncCallback(
            function (e) {
              switch (e.action) {
                case "set":
                  t.fireAndForget("userPrefsFromWorker", "syncSet", {
                    key: e.key,
                    value: e.value,
                  });
                  break;
                case "remove":
                  t.fireAndForget("userPrefsFromWorker", "syncRemove", {
                    key: e.key,
                  });
                  break;
                case "clear":
                  t.fireAndForget("userPrefsFromWorker", "syncClear", void 0);
                  break;
                case "bulkSet":
                  t.fireAndForget("userPrefsFromWorker", "syncBulkSet", {
                    entries: e.entries,
                  });
                  break;
              }
            },
          ),
          globalThis.navigator.locks != null &&
            globalThis.navigator.locks.request(
              o("WAWebBackendWorkerLocks").WORKER_LIVENESS_LOCK,
              function () {
                return new (c || (c = n("Promise")))(r("WAWebNoop"));
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
    l.default = p;
  },
  98,
);

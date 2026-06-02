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
    "WAWebBackendWorkerLocks",
    "WAWebCheckOrphanMutationsWorker",
    "WAWebCrashlogWorker",
    "WAWebCryptoDecryptMediaWorker",
    "WAWebDbEncryptionKey",
    "WAWebDeviceSyncBackendWorker",
    "WAWebFBLoggerWorker",
    "WAWebGetMessageCache",
    "WAWebGlobals",
    "WAWebHandleSingleMsgWorker",
    "WAWebHandleSingleMsgWorkerCompatible",
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
        var t = function () {
            return Promise.resolve();
          },
          n = r("WAWebNoop");
        (o("WAWebLogger").initializeWAWebLogger(
          function (e, n) {
            return t(e, n);
          },
          function (e) {
            return n(e);
          },
        ),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebBackendWorker(inside) starts",
              ])),
          ));
        var a = o("WAWebBackendWorkerBridge").createBridge([
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
              aesCbcDecrypt: async function (t) {
                var e = t.ciphertext,
                  n = t.encKey,
                  r = t.iv,
                  a = await o("WACryptoAesCbc").aesCbcDecrypt(n, r, e);
                return o("WATransferableResult").withTransferables(a, [a]);
              },
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
              decryptMedia: async function (t) {
                var e = t.ciphertextHmac,
                  n = t.encKey,
                  a = t.expectedPlaintextHash,
                  i = t.iv,
                  l = t.macKey,
                  s = await r("WAWebCryptoDecryptMediaWorker")({
                    ciphertextHmac: e,
                    encKey: n,
                    expectedPlaintextHash: a,
                    iv: i,
                    macKey: l,
                  });
                return o("WATransferableResult").withTransferables(s, [s]);
              },
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
        (o("WAWebBackendWorkerBridge").attachBridgeToPortal(a, d(), [
          "abPropsExposure",
          "qpl",
          "event",
          "workerSafeEvent",
          "backendEventBus",
          "mainthread_callbacks",
          "mainthread_crashlog",
          "mainthread_fblogger",
          "mainthread_jobmanager",
          "mainthread_messagecache",
          "mainthread_msgreporter",
          "mainthread_identitychange",
          "userPrefsFromWorker",
        ]),
          o("WAWebBackendApi").setApi(a),
          (t = o("WAWebCrashlogWorker").createSendLogsWorker(a)),
          (n = o("WAWebFBLoggerWorker").createLogToFBLoggerWorker(a)),
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
          ));
        var i = new (r("WAWebBackendEventBusWorker"))(a);
        (a.setNamespaceHandler(
          "backendEventBusSync",
          i.getBackendEventBusSyncHandler(),
        ),
          o("WAWebBackendEventBusWorkerCompatible").setBackendEventBus(i),
          a.setHandlers("workerInit", {
            setup: async function (t) {
              var e = t.abProps,
                n = t.dbFinalKey,
                a = t.dbInit,
                l = t.eventBusSyncState,
                u = t.globals;
              try {
                var c, d;
                i.setState(l);
                var p = o("WAJids").interpretAndValidateJid(u.deviceJid);
                if (p.jidType !== "phoneDevice")
                  throw r("err")("globals: deviceJid is not a phoneDevice jid");
                var _ = p.deviceJid,
                  f = o("WAJids").extractUserJid(_);
                (o("WAWebGlobals").setGlobals({
                  jidUtils: o("WAJids").createJidUtils({
                    platform: "whatsapp",
                  }),
                  myJids: { deviceJid: _, userJid: f },
                  lidDeviceJid: (c = u.lidDeviceJid) != null ? c : "",
                  displayName: (d = u.displayName) != null ? d : "",
                  runInTransaction: o("WAWebRunInTransaction").runInTransaction,
                  newClockSkewCalculation: function () {
                    return !1;
                  },
                }),
                  o("WAWebGlobals").setAllowHistorySyncPutAllowDuplicate(
                    u.allowHistorySyncPutAllowDuplicate,
                  ),
                  o("WAWebGlobals").setEnableImprovedBulkMerge(
                    u.enableImprovedBulkMerge,
                  ),
                  o("WAWebBackendWorkerABPropsCache").updateWorkerABProps(
                    e.configs,
                    e.urlSearch,
                  ),
                  o("WAWebSchemaVersions").setSchemaVersions(a.versionsToSet),
                  await o("WAWebModelStorageInitialize").initializeWithoutGKs(),
                  await o(
                    "WAWebUserPrefsIndexedDBStorage",
                  ).userPrefsIdb.init());
                var g = await o(
                  "WAWebUserPrefsGeneral",
                ).getLastMobilePlatform();
                (g != null &&
                  (await o("WAWebMobilePlatforms").setMobilePlatform(g, !1)),
                  await o("WAWebDbEncryptionKey").DbEncKeyStore.init(a.salt),
                  await o("WAWebDbEncryptionKey").DbEncKeyStore.waitForInit(),
                  await o(
                    "WAWebDbEncryptionKey",
                  ).DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(n.salt),
                  m.resolve());
              } catch (e) {
                (o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebBackendWorker init fails",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("backend-worker-init-fails"),
                  m.reject(e));
              }
            },
          }),
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
          globalThis.navigator.locks != null &&
            globalThis.navigator.locks.request(
              o("WAWebBackendWorkerLocks").WORKER_LIVENESS_LOCK,
              function () {
                return new Promise(r("WAWebNoop"));
              },
            ),
          globalThis.postMessage({
            type: "worker_setup",
            message: "worker_started",
          }),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebBackendWorker(inside) ends",
              ])),
          ));
      } catch (e) {
        (o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebBackendWorker start fails",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("backend-worker-start-fails"),
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

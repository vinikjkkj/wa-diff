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
    "WAWebBackendApi",
    "WAWebBackendEventBusWorker",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebBackendWorkerABPropsCache",
    "WAWebBackendWorkerBridge",
    "WAWebBackendWorkerLocks",
    "WAWebCallsOnlyGating",
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
    "WAWebMediaHostsWorker",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMessageProcessorCacheWorker",
    "WAWebMobilePlatforms",
    "WAWebModelStorageInitialize",
    "WAWebMsgProcessReporterWorker",
    "WAWebNetworkStatusWorker",
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
    var e, s, u, c, d;
    function m() {
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
    var p = new (o("WAResolvable").Resolvable)();
    function _() {
      try {
        var t = function () {
            return (d || (d = n("Promise"))).resolve();
          },
          a = r("WAWebNoop");
        (o("WAWebLogger").initializeWAWebLogger(
          function (e, n) {
            return t(e, n);
          },
          function (e) {
            return a(e);
          },
        ),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebBackendWorker(inside) starts",
              ])),
          ));
        var i = o("WAWebBackendWorkerBridge").createBridge([
          {
            namespace: "historySync",
            handlers: {
              processV2: function (t) {
                var e = t.chunkInfo,
                  n = t.data;
                return o("WAWebHistorySyncBackendWorkerV2").processHistorySync(
                  e,
                  n,
                  { isReady: p.promise },
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
              encryptAndUpload: function () {
                throw r("err")(
                  "V3-5e TODO: worker-side encryptAndUpload handler not yet implemented",
                );
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
          {
            namespace: "mediaHostsSync",
            handlers: {
              snapshot: function (t) {
                var e = t.data;
                o("WAWebMediaHostsWorker")
                  .getMediaHostsWorker()
                  .acceptSnapshot(e);
              },
            },
          },
          {
            namespace: "networkStatusSync",
            handlers: {
              updateNetworkStatus: function (t) {
                var e = t.online;
                o("WAWebNetworkStatusWorker").networkStatusWorker.acceptUpdate(
                  e,
                );
              },
            },
          },
        ]);
        (o("WAWebBackendWorkerBridge").attachBridgeToPortal(i, m(), [
          "abPropsExposure",
          "qpl",
          "event",
          "workerSafeEvent",
          "backendEventBus",
          "mainthread_callbacks",
          "mainthread_crashlog",
          "mainthread_fblogger",
          "mainthread_jobmanager",
          "mainthread_mediaHostsSync",
          "mainthread_messagecache",
          "mainthread_msgreporter",
          "mainthread_identitychange",
          "userPrefsFromWorker",
        ]),
          o("WAWebBackendApi").setApi(i),
          (t = o("WAWebCrashlogWorker").createSendLogsWorker(i)),
          (a = o("WAWebFBLoggerWorker").createLogToFBLoggerWorker(i)),
          o("WAWebMediaHostsWorker").createAndSetMediaHostsWorker(i),
          o("WAWebHandleSingleMsgWorkerCompatible").setInstance(
            o("WAWebHandleSingleMsgWorker").createHandleSingleMsgWorker(i),
          ),
          o("WAWebSyncdOrphanWorkerCompatible").setInstance(
            o(
              "WAWebCheckOrphanMutationsWorker",
            ).createCheckOrphanMutationsWorker(i),
          ),
          o("WAWebMessageInsertDebugPlaceholderWorkerCompatible").setInstance(
            o(
              "WAWebMaybeInsertDebugPlaceholderWorker",
            ).createMaybeInsertDebugPlaceholderWorker(i),
          ),
          o(
            "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
          ).setInstance(
            o(
              "WAWebUpdateMmSignalSharingExpirationWindowWorker",
            ).createUpdateMmSignalSharingExpirationWindowWorker(i),
          ),
          o("WAWebPersistedJobManagerWorkerCompatible").setInstance(
            o(
              "WAWebPersistedJobManagerWorkerBridge",
            ).createPersistedJobManagerWorkerBridge(i),
          ),
          o("WAWebGetMessageCache").setMessageCache(
            o(
              "WAWebMessageProcessorCacheWorker",
            ).createMessageCacheWorkerBridge(i),
          ),
          o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").setInstance(
            o(
              "WAWebMsgProcessReporterWorker",
            ).createMsgProcessReporterWorkerBridge(i),
          ),
          o("WAWebIdentityChangeApiWorkerCompatible").setInstance(
            o(
              "WAWebIdentityChangeApiWorker",
            ).createIdentityChangeApiWorkerBridge(i),
          ));
        var l = new (r("WAWebBackendEventBusWorker"))(i);
        (i.setNamespaceHandler(
          "backendEventBusSync",
          l.getBackendEventBusSyncHandler(),
        ),
          o("WAWebBackendEventBusWorkerCompatible").setBackendEventBus(l),
          i.setHandlers("workerInit", {
            setup: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.abProps,
                    n = e.dbFinalKey,
                    a = e.dbInit,
                    i = e.eventBusSyncState,
                    u = e.globals;
                  try {
                    var c, d;
                    l.setState(i);
                    var m = o("WAJids").interpretAndValidateJid(u.deviceJid);
                    if (m.jidType !== "phoneDevice")
                      throw r("err")(
                        "globals: deviceJid is not a phoneDevice jid",
                      );
                    var _ = m.deviceJid,
                      f = o("WAJids").extractUserJid(_);
                    (o("WAWebGlobals").setGlobals({
                      jidUtils: o("WAJids").createJidUtils({
                        platform: "whatsapp",
                      }),
                      myJids: { deviceJid: _, userJid: f },
                      lidDeviceJid: (c = u.lidDeviceJid) != null ? c : "",
                      displayName: (d = u.displayName) != null ? d : "",
                      runInTransaction: o("WAWebRunInTransaction")
                        .runInTransaction,
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
                      o("WAWebCallsOnlyGating").initCallsOnlyModeFromWorkerInit(
                        u.callsOnly,
                      ),
                      o("WAWebBackendWorkerABPropsCache").updateWorkerABProps(
                        t.configs,
                        t.urlSearch,
                      ),
                      o("WAWebSchemaVersions").setSchemaVersions(
                        a.versionsToSet,
                      ),
                      yield o(
                        "WAWebModelStorageInitialize",
                      ).initializeWithoutGKs(),
                      yield o(
                        "WAWebUserPrefsIndexedDBStorage",
                      ).userPrefsIdb.init());
                    var g = yield o(
                      "WAWebUserPrefsGeneral",
                    ).getLastMobilePlatform();
                    (g != null &&
                      (yield o("WAWebMobilePlatforms").setMobilePlatform(
                        g,
                        !1,
                      )),
                      yield o("WAWebDbEncryptionKey").DbEncKeyStore.init(
                        a.salt,
                      ),
                      yield o(
                        "WAWebDbEncryptionKey",
                      ).DbEncKeyStore.waitForInit(),
                      yield o(
                        "WAWebDbEncryptionKey",
                      ).DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(
                        n.salt,
                      ),
                      p.resolve());
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
                      p.reject(e));
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
          o("WAWebWorkerQplProxy").initWorkerQplProxy(i),
          o("WAWebBackendWorkerABPropsCache").initializeWorkerABProps(i),
          o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.setSyncCallback(
            function (e) {
              switch (e.action) {
                case "set":
                  i.fireAndForget("userPrefsFromWorker", "syncSet", {
                    key: e.key,
                    value: e.value,
                  });
                  break;
                case "remove":
                  i.fireAndForget("userPrefsFromWorker", "syncRemove", {
                    key: e.key,
                  });
                  break;
                case "clear":
                  i.fireAndForget("userPrefsFromWorker", "syncClear", void 0);
                  break;
                case "bulkSet":
                  i.fireAndForget("userPrefsFromWorker", "syncBulkSet", {
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
                return new (d || (d = n("Promise")))(r("WAWebNoop"));
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
    l.default = _;
  },
  98,
);

__d(
  "WAWebBackendWorkerV2",
  [
    "Promise",
    "WAComms",
    "WAJids",
    "WALogger",
    "WAResolvable",
    "WAResultOrError",
    "WATransferableResult",
    "WAWebBackendApi",
    "WAWebBackendEventBusWorker",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebBackendWorkerABPropsCache",
    "WAWebBackendWorkerBridge",
    "WAWebBackendWorkerRegistrationState",
    "WAWebCallsOnlyGating",
    "WAWebCheckOrphanMutationsWorker",
    "WAWebCommsBackendWorkerHandlers",
    "WAWebCrashlogWorker",
    "WAWebDbEncryptionKey",
    "WAWebDeprecatedSendIqWorker",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebDeserializeBridgedError",
    "WAWebFBLoggerWorker",
    "WAWebGetMessageCache",
    "WAWebGlobals",
    "WAWebHandleSingleMsgWorker",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebIdentityChangeApiWorker",
    "WAWebIdentityChangeApiWorkerCompatible",
    "WAWebJobsMigrationGating",
    "WAWebLogger",
    "WAWebMaybeInsertDebugPlaceholderWorker",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMessageProcessorCacheWorker",
    "WAWebMobilePlatforms",
    "WAWebModelStorageInitialize",
    "WAWebMsgProcessReporterWorker",
    "WAWebNoiseInfoWorker",
    "WAWebNoiseInfoWorkerCompatible",
    "WAWebNoop",
    "WAWebOffdStorage",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebPageLoadLogging",
    "WAWebPageLoadLoggingWorker",
    "WAWebPersistedJobManagerWorkerBridge",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebRegisterPassiveTasksForConnectWorker",
    "WAWebRegisterPassiveTasksForConnectWorkerCompatible",
    "WAWebRunInTransaction",
    "WAWebSchemaVersions",
    "WAWebSyncdOrphanWorkerCompatible",
    "WAWebUpdateMmSignalSharingExpirationWindowWorker",
    "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsScreenLockWorker",
    "WAWebUserPrefsScreenLockWorkerCompatible",
    "WAWebWorkerQplProxy",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (m = r("requireDeferred"))("WACryptoAesCbc").__setRef(
        "WAWebBackendWorkerV2",
      ),
      _ = m("WACryptoHmac").__setRef("WAWebBackendWorkerV2"),
      f = m("WACryptoSha256").__setRef("WAWebBackendWorkerV2"),
      g = m("WAWebBackendWorkerEncryptAndUploadDep").__setRef(
        "WAWebBackendWorkerV2",
      ),
      h = m("WAWebBackendWorkerMediaHostsWorkerDep").__setRef(
        "WAWebBackendWorkerV2",
      ),
      y = m("WAWebCryptoDecryptMediaWorker").__setRef("WAWebBackendWorkerV2"),
      C = m("WAWebDeviceSyncBackendWorker").__setRef("WAWebBackendWorkerV2"),
      b = m("WAWebHistorySyncBackendWorkerV2").__setRef("WAWebBackendWorkerV2"),
      v = m("WAWebHistorySyncProgress").__setRef("WAWebBackendWorkerV2"),
      S = m("WAWebNetworkStatusWorker").__setRef("WAWebBackendWorkerV2"),
      R = new (o("WAResolvable").Resolvable)(),
      L = new (o("WAResolvable").Resolvable)(),
      E = new (o("WAResolvable").Resolvable)(),
      k = (d || (d = n("Promise")))
        .all([R.promise, L.promise, E.promise])
        .then(function () {}),
      I = !1;
    function T() {
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
              processV2: (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e.chunkInfo,
                      n = e.data;
                    if (!I) {
                      I = !0;
                      var r = yield v.load();
                      r.initHistorySyncProgressListeners();
                    }
                    var o = yield b.load();
                    return o.processHistorySync(t, n, { isReady: k });
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
            namespace: "deviceSync",
            handlers: {
              decodeSignedKeyIndexBytesBatch: function (t) {
                var e = t.items;
                return C.load().then(function (t) {
                  return t.decodeSignedKeyIndexBytesBatch(e);
                });
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
                      a = yield p.load(),
                      i = yield a.aesCbcDecrypt(n, r, t);
                    return o("WATransferableResult").withTransferables(i, [i]);
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
                return _.load().then(function (t) {
                  return t.hmacSha256(n, e, r);
                });
              },
              sha256Base64: function (t) {
                var e = t.data;
                return f.load().then(function (t) {
                  return t.sha256Base64(e);
                });
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
            namespace: "networkStatusSync",
            handlers: {
              updateNetworkStatus: function (t) {
                var e = t.online;
                S.load().then(function (t) {
                  return t.networkStatusWorker.acceptUpdate(e);
                });
              },
            },
          },
          {
            namespace: "registrationState",
            handlers: {
              markUnregistered: o("WAWebBackendWorkerRegistrationState")
                .markUnregistered,
            },
          },
        ]);
        (o("WAComms").setCommsFactory(function (e, t, n) {
          return new (o("WAComms").Comms)(e, t, n, function (e, t) {
            i.fireAndForget("mainthread_comms", "onSocketStateChange", {
              isConnected: e,
              socketId: t,
            });
          });
        }),
          i.setHandlers(
            "comms",
            o("WAWebCommsBackendWorkerHandlers").createCommsWorkerHandlers(
              i,
              E.promise,
            ),
          ),
          o("WAWebBackendWorkerBridge").attachBridgeToPortal(i, D(), [
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
            "mainthread_appTracker",
            "mainthread_uploadmanager",
            "mainthread_clockSkew",
            "mainthread_noiseInfo",
            "mainthread_userPrefsScreenLock",
            "mainthread_comms",
            "mainthread_passiveMode",
            "mainthread_pageloadqpl",
          ]),
          o("WAWebBackendApi").setApi(i),
          (t = o("WAWebCrashlogWorker").createSendLogsWorker(i)),
          (a = o("WAWebFBLoggerWorker").createLogToFBLoggerWorker(i)),
          i.setHandlers("media", {
            decryptMedia: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.ciphertextHmac,
                    n = e.encKey,
                    r = e.expectedPlaintextHash,
                    a = e.iv,
                    i = e.macKey,
                    l = e.serializedDownloadQpl,
                    s = self.performance.now(),
                    u =
                      l == null
                        ? null
                        : o("WAWebWorkerQplProxy").createWorkerQplProxy(l);
                  u == null || u.addPoint("compound_worker_module_load_start");
                  var c = yield y.load();
                  u == null || u.addPoint("compound_worker_module_load_end");
                  var d = yield c({
                      ciphertextHmac: t,
                      encKey: n,
                      expectedPlaintextHash: r,
                      iv: a,
                      macKey: i,
                    }),
                    m = self.performance.now() - s;
                  return o("WATransferableResult").withTransferables(
                    { plaintext: d, workerDurationMs: m },
                    [d],
                  );
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            encryptAndUpload: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield g.load(),
                    n = t.getEncryptAndUpload(i),
                    a = n.encryptAndUpload;
                  try {
                    return o("WAResultOrError").makeResult(yield a(e));
                  } catch (e) {
                    return o("WAResultOrError").makeError(
                      o("WAWebDeserializeBridgedError").serializeBridgedError(
                        e instanceof Error ? e : r("err")(String(e)),
                      ),
                    );
                  }
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            abortUpload: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.uploadId,
                    n = yield g.load(),
                    r = n.getEncryptAndUpload(i),
                    o = r.abortUpload;
                  o(t);
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          i.setHandlers("mediaHostsSync", {
            snapshot: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.data,
                    n = yield h.load();
                  return n.getMediaHostsWorker(i).acceptSnapshot(t);
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
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
          ),
          o("WAWebNoiseInfoWorkerCompatible").setInstance(
            o("WAWebNoiseInfoWorker").createNoiseInfoWorkerBridge(i),
          ),
          o("WAWebUserPrefsScreenLockWorkerCompatible").setInstance(
            o(
              "WAWebUserPrefsScreenLockWorker",
            ).createUserPrefsScreenLockWorkerBridge(i),
          ),
          o("WAWebPageLoadLogging").setImpl(
            o("WAWebPageLoadLoggingWorker").createPageLoadLoggingWorker(i),
          ),
          o("WAWebDeprecatedSendIqWorkerCompatible").setInstance(
            o("WAWebDeprecatedSendIqWorker").deprecatedSendIqWorker,
          ),
          o("WAWebRegisterPassiveTasksForConnectWorkerCompatible").setInstance(
            o(
              "WAWebRegisterPassiveTasksForConnectWorker",
            ).createRegisterPassiveTasksForConnectWorker(i),
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
                  var t = e.dbInit,
                    a = e.eventBusSyncState,
                    i = e.globals;
                  try {
                    var u, c;
                    l.setState(a);
                    var m = o("WAJids").interpretAndValidateJid(i.deviceJid);
                    if (m.jidType !== "phoneDevice")
                      throw r("err")(
                        "globals: deviceJid is not a phoneDevice jid",
                      );
                    var p = m.deviceJid,
                      _ = o("WAJids").extractUserJid(p);
                    (o("WAWebGlobals").setGlobals({
                      jidUtils: o("WAJids").createJidUtils({
                        platform: "whatsapp",
                      }),
                      myJids: { deviceJid: p, userJid: _ },
                      lidDeviceJid: (u = i.lidDeviceJid) != null ? u : "",
                      displayName: (c = i.displayName) != null ? c : "",
                      runInTransaction: o("WAWebRunInTransaction")
                        .runInTransaction,
                    }),
                      o("WAWebGlobals").setAllowHistorySyncPutAllowDuplicate(
                        i.allowHistorySyncPutAllowDuplicate,
                      ),
                      o("WAWebCallsOnlyGating").initCallsOnlyModeFromWorkerInit(
                        i.callsOnly,
                      ),
                      o(
                        "WAWebJobsMigrationGating",
                      ).initJobsMigrationGatesFromWorkerInit(
                        i.jobsMigrationGates,
                      ),
                      o("WAWebSchemaVersions").setSchemaVersions(
                        t.versionsToSet,
                      ),
                      yield (d || (d = n("Promise"))).all([
                        o("WAWebDbEncryptionKey").DbEncKeyStore.init(t.salt),
                        n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* () {
                            (yield o(
                              "WAWebModelStorageInitialize",
                            ).initializeWithoutGKs(),
                              yield o(
                                "WAWebUserPrefsIndexedDBStorage",
                              ).userPrefsIdb.init());
                            var e = yield o(
                              "WAWebUserPrefsGeneral",
                            ).getLastMobilePlatform();
                            e != null &&
                              (yield o(
                                "WAWebMobilePlatforms",
                              ).setMobilePlatform(e, !1));
                          },
                        )(),
                        o("WAWebOffdStorage").initialize(),
                      ]),
                      E.resolve());
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
                      E.reject(e));
                  }
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            setAbProps: function (t) {
              var e = t.abProps;
              try {
                (o("WAWebBackendWorkerABPropsCache").updateWorkerABProps(
                  e.configs,
                  e.urlSearch,
                ),
                  R.resolve());
              } catch (e) {
                R.reject(e);
              }
            },
            setDbFinalKey: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = e.dbFinalKey;
                  try {
                    (yield o(
                      "WAWebDbEncryptionKey",
                    ).DbEncKeyStore.waitForInit(),
                      yield o(
                        "WAWebDbEncryptionKey",
                      ).DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(
                        t.salt,
                      ),
                      L.resolve());
                  } catch (e) {
                    L.reject(e);
                  }
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
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
    function D() {
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
    l.default = T;
  },
  98,
);

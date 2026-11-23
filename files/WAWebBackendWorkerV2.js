__d(
  "WAWebBackendWorkerV2",
  [
    "WAComms",
    "WACrossPortalStateBridge",
    "WAJids",
    "WALogger",
    "WAResolvable",
    "WAResultOrError",
    "WATransferableResult",
    "WAUrlSpoofChecksWasmInstance",
    "WAWebBackendApi",
    "WAWebBackendEventBusWorker",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebBackendWorkerABPropsCache",
    "WAWebBackendWorkerBridge",
    "WAWebBackendWorkerRegistrationState",
    "WAWebBackgroundPauseState",
    "WAWebBizBroadcastProAudienceWorkerBridge",
    "WAWebCallsOnlyGating",
    "WAWebCheckOrphanMutationsWorker",
    "WAWebClientPayloadForLoginWorker",
    "WAWebClientPayloadForLoginWorkerCompatible",
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
    "WAWebSuspiciousLinkMetrics",
    "WAWebSyncdOrphanWorkerCompatible",
    "WAWebUpdateMmSignalSharingExpirationWindowWorker",
    "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsScreenLockWorker",
    "WAWebUserPrefsScreenLockWorkerCompatible",
    "WAWebWorkerQplProxy",
    "err",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var _ = (m = r("requireDeferred"))("WACryptoAesCbc").__setRef(
        "WAWebBackendWorkerV2",
      ),
      f = m("WACryptoHmac").__setRef("WAWebBackendWorkerV2"),
      g = m("WACryptoSha256").__setRef("WAWebBackendWorkerV2"),
      h = m("WAWebBackendWorkerEncryptAndUploadDep").__setRef(
        "WAWebBackendWorkerV2",
      ),
      y = m("WAWebBackendWorkerMediaHostsWorkerDep").__setRef(
        "WAWebBackendWorkerV2",
      ),
      C = m("WAWebCryptoDecryptMediaWorker").__setRef("WAWebBackendWorkerV2"),
      b = m("WAWebDeviceSyncBackendWorker").__setRef("WAWebBackendWorkerV2"),
      v = m("WAWebHistorySyncBackendWorkerV2").__setRef("WAWebBackendWorkerV2"),
      S = m("WAWebLabyrinthShadowBackendWorker").__setRef(
        "WAWebBackendWorkerV2",
      ),
      R = new (o("WAResolvable").Resolvable)(),
      L = new (o("WAResolvable").Resolvable)(),
      E = new (o("WAResolvable").Resolvable)(),
      k = Promise.all([R.promise, L.promise, E.promise]).then(function () {});
    function I() {
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
            namespace: "businessBroadcastProAudience",
            handlers: o(
              "WAWebBizBroadcastProAudienceWorkerBridge",
            ).createProAudienceWorkerHandlers(k),
          },
          {
            namespace: "historySync",
            handlers: {
              processV2: async function (t) {
                var e = t.chunkInfo,
                  n = t.data,
                  r = t.omittedMetadataEnabled,
                  o = await v.load();
                return o.processHistorySync(e, n, {
                  isReady: k,
                  omittedMetadataEnabled: r,
                });
              },
            },
          },
          {
            namespace: "labyrinthShadow",
            handlers: {
              run: async function (t) {
                var e = await S.load();
                return e.runLabyrinthShadowInWorker(t, { isReady: k });
              },
            },
          },
          {
            namespace: "deviceSync",
            handlers: {
              decodeSignedKeyIndexBytesBatch: function (t) {
                var e = t.items;
                return b.load().then(function (t) {
                  return t.decodeSignedKeyIndexBytesBatch(e);
                });
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
                  a = await _.load(),
                  i = await a.aesCbcDecrypt(n, r, e);
                return o("WATransferableResult").withTransferables(i, [i]);
              },
              hmacSha256: function (t) {
                var e = t.data,
                  n = t.macKey,
                  r = t.truncateLength;
                return f.load().then(function (t) {
                  return t.hmacSha256(n, e, r);
                });
              },
              sha256Base64: function (t) {
                var e = t.data;
                return g.load().then(function (t) {
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
            namespace: "registrationState",
            handlers: {
              markUnregistered: o("WAWebBackendWorkerRegistrationState")
                .markUnregistered,
            },
          },
          {
            namespace: "backgroundPauseSync",
            handlers: {
              updateBackgroundPause: function (t) {
                var e = t.paused;
                o("WAWebBackgroundPauseState").backgroundPauseState.set(e);
              },
            },
          },
        ]);
        (o("WAComms").setCommsFactory(function (e, t, n) {
          return new (o("WAComms").Comms)(e, t, n, function (e, t) {
            a.fireAndForget("mainthread_comms", "onSocketStateChange", {
              isConnected: e,
              socketId: t,
            });
          });
        }),
          a.setHandlers(
            "comms",
            o("WAWebCommsBackendWorkerHandlers").createCommsWorkerHandlers(
              a,
              E.promise,
            ),
          ),
          o("WAWebBackendWorkerBridge").attachBridgeToPortal(a, T(), [
            "abPropsExposure",
            "qpl",
            "event",
            "workerSafeEvent",
            "backendEventBus",
            "mainthread_callbacks",
            "mainthread_crashlog",
            "mainthread_suspiciousLinkMetrics",
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
            "mainthread_crossPortalState",
            "mainthread_passiveMode",
            "mainthread_clientPayload",
            "mainthread_pageloadqpl",
          ]),
          o("WAWebSuspiciousLinkMetrics").configureSuspiciousLinkMetrics(
            "dedicated",
            function (e) {
              var t = e.count,
                n = e.metric;
              return a.sendAndReceive(
                "mainthread_suspiciousLinkMetrics",
                "commit",
                { count: t, metric: n },
              );
            },
          ),
          o("WAWebBackendApi").setApi(a),
          (t = o("WAWebCrashlogWorker").createSendLogsWorker(a)),
          (n = o("WAWebFBLoggerWorker").createLogToFBLoggerWorker(a)),
          a.setHandlers("media", {
            decryptMedia: async function (t) {
              var e = t.ciphertextHmac,
                n = t.encKey,
                r = t.expectedPlaintextHash,
                a = t.iv,
                i = t.macKey,
                l = t.serializedDownloadQpl,
                s = self.performance.now(),
                u =
                  l == null
                    ? null
                    : o("WAWebWorkerQplProxy").createWorkerQplProxy(l);
              u == null || u.addPoint("compound_worker_module_load_start");
              var c = await C.load();
              u == null || u.addPoint("compound_worker_module_load_end");
              var d = await c({
                  ciphertextHmac: e,
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
            encryptAndUpload: async function (t) {
              var e = await h.load(),
                n = e.getEncryptAndUpload(a),
                i = n.encryptAndUpload;
              try {
                return o("WAResultOrError").makeResult(await i(t));
              } catch (e) {
                return o("WAResultOrError").makeError(
                  o("WAWebDeserializeBridgedError").serializeBridgedError(
                    e instanceof Error ? e : r("err")(String(e)),
                  ),
                );
              }
            },
            abortUpload: async function (t) {
              var e = t.uploadId,
                n = await h.load(),
                r = n.getEncryptAndUpload(a),
                o = r.abortUpload;
              o(e);
            },
          }),
          a.setHandlers("mediaHostsSync", {
            snapshot: async function (t) {
              var e = t.data,
                n = await y.load();
              return n.getMediaHostsWorker(a).acceptSnapshot(e);
            },
          }),
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
          o("WAWebNoiseInfoWorkerCompatible").setInstance(
            o("WAWebNoiseInfoWorker").createNoiseInfoWorkerBridge(a),
          ),
          o("WAWebUserPrefsScreenLockWorkerCompatible").setInstance(
            o(
              "WAWebUserPrefsScreenLockWorker",
            ).createUserPrefsScreenLockWorkerBridge(a),
          ),
          o("WAWebPageLoadLogging").setImpl(
            o("WAWebPageLoadLoggingWorker").createPageLoadLoggingWorker(a),
          ),
          o("WAWebDeprecatedSendIqWorkerCompatible").setInstance(
            o("WAWebDeprecatedSendIqWorker").deprecatedSendIqWorker,
          ),
          o("WAWebRegisterPassiveTasksForConnectWorkerCompatible").setInstance(
            o(
              "WAWebRegisterPassiveTasksForConnectWorker",
            ).createRegisterPassiveTasksForConnectWorker(a),
          ),
          o("WAWebClientPayloadForLoginWorkerCompatible").setInstance(
            o(
              "WAWebClientPayloadForLoginWorker",
            ).createClientPayloadForLoginWorker(a),
          ));
        var i = new (r("WAWebBackendEventBusWorker"))(a);
        (a.setNamespaceHandler(
          "backendEventBusSync",
          i.getBackendEventBusSyncHandler(),
        ),
          o("WAWebBackendEventBusWorkerCompatible").setBackendEventBus(i),
          a.setHandlers("workerInit", {
            setup: async function (t) {
              var e = t.dbInit,
                n = t.eventBusSyncState,
                a = t.globals;
              try {
                var l, u;
                i.setState(n);
                var c =
                  a.deviceJid == null
                    ? null
                    : o("WAJids").interpretAndValidateJid(a.deviceJid);
                if (c != null && c.jidType !== "phoneDevice")
                  throw r("err")("globals: deviceJid is not a phoneDevice jid");
                if (c == null) {
                  var d,
                    m = o("WAJids").interpretAndValidateJid(
                      (d = a.lidDeviceJid) != null ? d : "",
                    );
                  if (m.jidType !== "lidDevice")
                    throw r("err")(
                      "globals: PN-less setup requires a LID device jid",
                    );
                }
                (o("WAWebGlobals").setGlobals({
                  jidUtils: o("WAJids").createJidUtils({
                    platform: "whatsapp",
                  }),
                  myJids:
                    c == null
                      ? void 0
                      : {
                          deviceJid: c.deviceJid,
                          userJid: o("WAJids").extractUserJid(c.deviceJid),
                        },
                  lidDeviceJid: (l = a.lidDeviceJid) != null ? l : "",
                  displayName: (u = a.displayName) != null ? u : "",
                  runInTransaction: o("WAWebRunInTransaction").runInTransaction,
                }),
                  o("WAWebGlobals").setAllowHistorySyncPutAllowDuplicate(
                    a.allowHistorySyncPutAllowDuplicate,
                  ),
                  o("WAWebCallsOnlyGating").initCallsOnlyModeFromWorkerInit(
                    a.callsOnly,
                  ),
                  o(
                    "WAWebJobsMigrationGating",
                  ).initJobsMigrationGatesFromWorkerInit(a.jobsMigrationGates),
                  o("WAWebSchemaVersions").setSchemaVersions(e.versionsToSet),
                  await Promise.all([
                    o("WAWebDbEncryptionKey").DbEncKeyStore.init(e.salt),
                    (async function () {
                      (await o(
                        "WAWebModelStorageInitialize",
                      ).initializeWithoutGKs(),
                        await o(
                          "WAWebUserPrefsIndexedDBStorage",
                        ).userPrefsIdb.init());
                      var e = await o(
                        "WAWebUserPrefsGeneral",
                      ).getLastMobilePlatform();
                      e != null &&
                        (await o("WAWebMobilePlatforms").setMobilePlatform(
                          e,
                          !1,
                        ));
                    })(),
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
            setSuspiciousHostChecksModule: function (t) {
              var e = t.wasmModule;
              try {
                o(
                  "WAUrlSpoofChecksWasmInstance",
                ).initializeSuspiciousHostChecks(e);
              } catch (e) {
                (o("WAWebSuspiciousLinkMetrics").recordSuspiciousLinkMetric(
                  "init-exception",
                ),
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "Host-check init failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("suspicious-host-checks-init-failed"));
              }
            },
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
            setDbFinalKey: async function (t) {
              var e = t.dbFinalKey;
              try {
                (await o("WAWebDbEncryptionKey").DbEncKeyStore.waitForInit(),
                  await o(
                    "WAWebDbEncryptionKey",
                  ).DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(e.salt),
                  L.resolve());
              } catch (e) {
                L.reject(e);
              }
            },
          }),
          o("WAWebWorkerQplProxy").initWorkerQplProxy(a),
          o("WACrossPortalStateBridge").startCrossPortalStateBridgeSync(
            a,
            "crossPortalState",
            "mainthread_crossPortalState",
          ),
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
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebBackendWorker(inside) ends",
              ])),
          ));
      } catch (e) {
        (o("WALogger")
          .ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
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
    function T() {
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
    l.default = I;
  },
  98,
);

__d(
  "WAWebStartBackendWorker",
  [
    "Promise",
    "QPLFlow",
    "WACrossPortalStateBridge",
    "WACrossWorkerPortal",
    "WAErrors",
    "WALogger",
    "WATimeUtils",
    "WATransferableResult",
    "WAWap",
    "WAWebABPropsCache",
    "WAWebABPropsJestE2EReadLog",
    "WAWebApiHydrateWidsUtil",
    "WAWebAppTracker",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackendWorkerBackgroundPauseSync",
    "WAWebBackendWorkerBridge",
    "WAWebBackendWorkerClient",
    "WAWebBackendWorkerInitErrorWatcher",
    "WAWebBackendWorkerInitLivenessProbe",
    "WAWebBackendWorkerInitState",
    "WAWebBackendWorkerV2Resource",
    "WAWebClientPayload",
    "WAWebCommsHandleStanza",
    "WAWebCommsWorkerProxy",
    "WAWebCommsWorkerReady",
    "WAWebCrashlog",
    "WAWebFBLoggerWorker",
    "WAWebGetMessageCache",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebIdentityChangeApiWorkerCompatible",
    "WAWebMainThreadQplHandler",
    "WAWebMainThreadUploadManagerHandler",
    "WAWebMediaHosts",
    "WAWebMediaHostsRawStateManager",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMsgKey",
    "WAWebNoiseInfoMainThread",
    "WAWebNoop",
    "WAWebODS",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebPageLoadLogging",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebRegisterPassiveTasksForConnect",
    "WAWebSuspiciousLinkWam",
    "WAWebSyncdOrphanWorkerCompatible",
    "WAWebUA",
    "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsScreenLockMainThread",
    "WAWebUserPrefsTabMutex",
    "WAWebWorkerSafeBackendApi",
    "WAXMultiSiteWebWorkerV4HasteResponseControllerRouteBuilder",
    "WAXMultiSiteWebWorkerV4InitScriptControllerRouteBuilder",
    "WebWorkerV4Resource",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "getSafeQplErrorMessage",
    "gkx",
    "justknobx",
    "qpl",
    "supportsModuleWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g, h;
    function y(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var C = "WAWebBackendWorker-" + o("WAWebUserPrefsTabMutex").THIS_TAB,
      b = "worker-killswitch-stolen",
      v = r("qpl")._(891427260, "2714"),
      S = new Map(),
      R = {
        initScriptRouteBuilder: r(
          "WAXMultiSiteWebWorkerV4InitScriptControllerRouteBuilder",
        ),
        hasteResponseRouteBuilder: r(
          "WAXMultiSiteWebWorkerV4HasteResponseControllerRouteBuilder",
        ),
      };
    function L(e) {
      var t = null,
        n = {
          onmessage: t,
          postMessage: function (n, r) {
            e.postMessage(n, r);
          },
          close: function () {
            e.terminate();
          },
        };
      return (
        e.addEventListener("message", function (e) {
          n.onmessage != null && n.onmessage(e);
        }),
        n
      );
    }
    function E() {
      var t,
        a = o("WAWebBackendWorkerBridge").createBridge([
          {
            namespace: "abPropsExposure",
            handlers: {
              recordExposure: function (t) {
                var e = t.configCode;
                o("WAWebABPropsCache").saveExposure(e);
              },
              recordJestE2ERead: function (t) {
                var e = t.line;
                o("WAWebABPropsJestE2EReadLog").recordABPropReadLineForJestE2E(
                  e,
                );
              },
            },
          },
          {
            namespace: "qpl",
            handlers: {
              dispatch: function (t) {
                return o("WAWebMainThreadQplHandler").handleQplBridgeMessage(t);
              },
            },
          },
          {
            namespace: "backendEventBus",
            handlers: {
              triggerAppStateSyncCompleted: function (t) {
                var e = t.collectionDetails;
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerAppStateSyncCompleted(e);
              },
              triggerLogout: function () {
                o("WAWebBackendEventBus").BackendEventBus.triggerLogout();
              },
              triggerRefreshQR: function () {
                o("WAWebBackendEventBus").BackendEventBus.triggerRefreshQR();
              },
              triggerInitialChatHistorySynced: function () {
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerInitialChatHistorySynced();
              },
              triggerRecentChatHistorySynced: function () {
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerRecentChatHistorySynced();
              },
              triggerFullChatHistorySynced: function () {
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerFullChatHistorySynced();
              },
              triggerCriticalSyncDone: function () {
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerCriticalSyncDone();
              },
              triggerStorageInitializationError: function () {
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerStorageInitializationError();
              },
              triggerSocketStreamDisconnected: function (t) {
                var e = t.reason;
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerSocketStreamDisconnected(e);
              },
              triggerOpenSocketStream: function () {
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerOpenSocketStream();
              },
              triggerReconnectSocket: function () {
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerReconnectSocket();
              },
              triggerSetSocketState: function (t) {
                var e = t.state;
                o("WAWebBackendEventBus").BackendEventBus.triggerSetSocketState(
                  e,
                );
              },
              triggerMainStreamModeReady: function () {
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerMainStreamModeReady();
              },
              triggerOfflineProcessReady: function () {
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerOfflineProcessReady();
              },
              triggerOfflineDeliveryEnd: function () {
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerOfflineDeliveryEnd();
              },
              triggerOfflineDeliveryStateReset: function () {
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerOfflineDeliveryStateReset();
              },
              triggerAbPropsUpdate: function (t) {
                o("WAWebBackendEventBus").BackendEventBus.triggerAbPropsUpdate(
                  t,
                );
              },
              triggerAbPropsLoaded: function () {
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerAbPropsLoaded();
              },
              triggerPrimaryFeaturesSynced: function (t) {
                var e = t.changedFeatures;
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerPrimaryFeaturesSynced(new Set(e));
              },
            },
          },
          {
            namespace: "mainthread_callbacks",
            handlers: {
              handleSingleMsg: function (t) {
                return (
                  o("WAWebApiHydrateWidsUtil").hydrateWids(t),
                  o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg(
                    babelHelpers.extends({}, t, {
                      newMsg: babelHelpers.extends({}, t.newMsg, {
                        id: r("WAWebMsgKey").from(t.newMsg.id),
                      }),
                    }),
                  )
                );
              },
              checkOrphanMutations: function (t) {
                var e = t.chatIds,
                  n = t.msgIds,
                  r = t.threadIds;
                return o(
                  "WAWebSyncdOrphanWorkerCompatible",
                ).checkOrphanMutations(n, e, r);
              },
              maybeInsertDebugPlaceholder: function (t) {
                return (
                  o("WAWebApiHydrateWidsUtil").hydrateWids(t),
                  o(
                    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
                  ).maybeInsertDebugPlaceholder(t)
                );
              },
              updateMmSignalSharingExpirationWindow: function (t) {
                var e = t.contextInfo,
                  n = t.msg;
                return (
                  o("WAWebApiHydrateWidsUtil").hydrateWids(n),
                  o(
                    "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
                  ).updateMmSignalSharingExpirationWindow(n, e)
                );
              },
            },
          },
          {
            namespace: "mainthread_jobmanager",
            handlers: {
              fireAndForget: function (t) {
                o("WAWebPersistedJobManagerWorkerCompatible")
                  .getJobManager()
                  .fireAndForget(t);
              },
              waitUntilPersisted: function (t) {
                return o("WAWebPersistedJobManagerWorkerCompatible")
                  .getJobManager()
                  .waitUntilPersisted(t);
              },
              waitUntilCompleted: function (t) {
                return o("WAWebPersistedJobManagerWorkerCompatible")
                  .getJobManager()
                  .waitUntilCompleted(t);
              },
              loadAndRunJobFromId: function (t) {
                var e = t.jobId;
                return o("WAWebPersistedJobManagerWorkerCompatible")
                  .getJobManager()
                  .loadAndRunJobFromId(e);
              },
              deletePersistedJob: (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e.jobId;
                    yield o("WAWebPersistedJobManagerWorkerCompatible")
                      .getJobManager()
                      .accessors.deletePersistedJob(t);
                  },
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
              maybeCreateJob: function (t) {
                return o("WAWebPersistedJobManagerWorkerCompatible")
                  .getJobManager()
                  .accessors.maybeCreateJob(t);
              },
            },
          },
          {
            namespace: "mainthread_suspiciousLinkMetrics",
            handlers: {
              commit: o("WAWebSuspiciousLinkWam")
                .commitDedicatedSuspiciousLinkMetric,
            },
          },
          {
            namespace: "mainthread_crashlog",
            handlers: {
              sendLogs: function (t) {
                var e = t.options,
                  n = t.reason;
                return o("WAWebCrashlog").sendLogs(n, e);
              },
            },
          },
          {
            namespace: "mainthread_fblogger",
            handlers: {
              logFBError: o("WAWebFBLoggerWorker").logFBErrorFromWorker,
            },
          },
          {
            namespace: "mainthread_messagecache",
            handlers: {
              addMessages: function (t) {
                var e = t.flushImmediately,
                  n = t.messages;
                return (
                  o("WAWebApiHydrateWidsUtil").hydrateWids(n),
                  o("WAWebGetMessageCache").getMessageCache().addMessages(n, e)
                );
              },
              addAdditionalInfo: function (t) {
                var e = t.dangerouslyFlushImmediately,
                  n = t.info;
                o("WAWebGetMessageCache")
                  .getMessageCache()
                  .addAdditionalInfo(n, e);
              },
              createSnapshot: function () {
                o("WAWebGetMessageCache").getMessageCache().createSnapshot();
              },
              writeSignalState: function (t) {
                var e = t.snapshotInMemoryMode;
                return o("WAWebGetMessageCache")
                  .getMessageCache()
                  .writeSignalState(e);
              },
              checkpointQueueWait: function () {
                return o("WAWebGetMessageCache")
                  .getMessageCache()
                  .checkpointQueueWait();
              },
              checkpointQueueSize: function () {
                return o("WAWebGetMessageCache")
                  .getMessageCache()
                  .checkpointQueueSize();
              },
              size: function () {
                return o("WAWebGetMessageCache").getMessageCache().size();
              },
            },
          },
          {
            namespace: "mainthread_msgreporter",
            handlers: {
              startMarker: function (t) {
                var e = t.markerId,
                  n = t.stage,
                  r = o(
                    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                  ).msgProcessReporter.startMarker(n);
                r && S.set(e, r);
              },
              endMarker: function (t) {
                var e = t.markerId,
                  n = S.get(e);
                n && (n(), S.delete(e));
              },
              activate: function (t) {
                var e = t.count;
                o(
                  "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                ).msgProcessReporter.activate(e);
              },
            },
          },
          {
            namespace: "mainthread_identitychange",
            handlers: {
              handleNewIdentity: function (t) {
                var e = t.deviceWid,
                  n = t.offline;
                return (
                  o("WAWebApiHydrateWidsUtil").hydrateWids({ deviceWid: e }),
                  o("WAWebIdentityChangeApiWorkerCompatible").handleNewIdentity(
                    e,
                    n,
                  )
                );
              },
              clearDeviceRecordForIdentityChange: function (t) {
                return (
                  o("WAWebApiHydrateWidsUtil").hydrateWids(t),
                  o(
                    "WAWebIdentityChangeApiWorkerCompatible",
                  ).clearDeviceRecordForIdentityChange(t)
                );
              },
            },
          },
          {
            namespace: "mainthread_clockSkew",
            handlers: {
              setClockSkew: function (t) {
                var e = t.newClockSkew;
                o("WATimeUtils").setClockSkew(e);
              },
            },
          },
          {
            namespace: "mainthread_noiseInfo",
            handlers: {
              getNoiseInfo: function () {
                return o(
                  "WAWebNoiseInfoMainThread",
                ).noiseInfoMainThread.getNoiseInfo();
              },
              setCertificateChain: function (t) {
                var e = t.cert;
                return o(
                  "WAWebNoiseInfoMainThread",
                ).noiseInfoMainThread.setCertificateChain(e);
              },
            },
          },
          {
            namespace: "mainthread_userPrefsScreenLock",
            handlers: {
              getScreenLockEnabled: function () {
                return o(
                  "WAWebUserPrefsScreenLockMainThread",
                ).userPrefsScreenLockMainThread.getScreenLockEnabled();
              },
            },
          },
          {
            namespace: "mainthread_mediaHostsSync",
            handlers: {
              refresh: function () {
                o("WAWebMediaHosts")
                  .mediaHosts.forceRefresh(new AbortController().signal)
                  .catch(function (t) {
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to refresh media hosts: ",
                            "",
                          ])),
                        r("getErrorSafe")(t),
                      )
                      .sendLogs("media-hosts-refresh-failed");
                  });
              },
            },
          },
          {
            namespace: "mainthread_appTracker",
            handlers: {
              start: function (t) {
                var e = t.type,
                  n = o("WAWebAppTracker").AppTrackerType.cast(e);
                if (n == null) {
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "Invalid app tracker type: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("invalid-app-tracker-type");
                  return;
                }
                o("WAWebAppTracker").AppTracker.start(n);
              },
              stop: function (t) {
                var e = t.type,
                  n = o("WAWebAppTracker").AppTrackerType.cast(e);
                if (n == null) {
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "Invalid app tracker type: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("invalid-app-tracker-type");
                  return;
                }
                o("WAWebAppTracker").AppTracker.stop(n);
              },
            },
          },
          {
            namespace: "mainthread_uploadmanager",
            handlers: {
              handleEncryptionStart: (t = o(
                "WAWebMainThreadUploadManagerHandler",
              )).handleEncryptionStart,
              handleEncryptionSuccess: t.handleEncryptionSuccess,
              handleStreamUploadStart: t.handleStreamUploadStart,
              handleArrayBufferCreated: t.handleArrayBufferCreated,
              handleCheckExistingSuccess: t.handleCheckExistingSuccess,
              handleCheckExistingError: t.handleCheckExistingError,
              handleUploadHostFound: t.handleUploadHostFound,
              handleUploadAttemptSuccess: t.handleUploadAttemptSuccess,
              handleUploadAttemptError: t.handleUploadAttemptError,
              handleUploadProgress: t.handleUploadProgress,
              handleUploadSuccess: t.handleUploadSuccess,
              handleUploadError: t.handleUploadError,
            },
          },
          {
            namespace: "userPrefsFromWorker",
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
            namespace: "mainthread_comms",
            handlers: {
              onSocketStateChange: function (t) {
                var e = t.isConnected,
                  n = t.socketId;
                o("WAWebCommsWorkerProxy").updateCommsProxySocketState(e, n);
              },
              handleStanza: (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e.size,
                      a = e.socketId,
                      i = e.stanza,
                      l = yield o("WAWap").decodeStanza(i, function (e) {
                        return (h || (h = n("Promise"))).resolve(e);
                      }),
                      s = yield r("WAWebCommsHandleStanza")(l, a, t);
                    if (s instanceof o("WAWap").WapNode) {
                      var u = o("WAWap").encodeStanza(s);
                      return o("WATransferableResult").withTransferables(u, [
                        u.buffer,
                      ]);
                    }
                    return s;
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
            namespace: "mainthread_passiveMode",
            handlers: {
              registerPassiveTasksForConnect: function () {
                return o(
                  "WAWebRegisterPassiveTasksForConnect",
                ).registerPassiveTasksForConnectMainThread.registerPassiveTasksForConnect();
              },
              shouldConnectAsPassiveMode: function () {
                return o(
                  "WAWebRegisterPassiveTasksForConnect",
                ).registerPassiveTasksForConnectMainThread.shouldConnectAsPassiveMode();
              },
            },
          },
          {
            namespace: "mainthread_clientPayload",
            handlers: {
              buildClientPayloadForLogin: function (t) {
                var e = t.passive,
                  n = t.pull;
                return o("WAWebClientPayload").getClientPayloadForLogin({
                  passive: e,
                  pull: n,
                });
              },
            },
          },
          {
            namespace: "mainthread_pageloadqpl",
            handlers: {
              endPageLoadQpl: function (t) {
                var e = t.locale,
                  n = t.qrScreen,
                  r = t.qrScreenExperience;
                o("WAWebPageLoadLogging").endPageLoadQpl(n, r, e);
              },
              startPageLoadQplMeasure: function (t) {
                var e = t.measure;
                o("WAWebPageLoadLogging").startPageLoadQplMeasure(e);
              },
              endPageLoadQplMeasure: function (t) {
                var e = t.measure;
                o("WAWebPageLoadLogging").endPageLoadQplMeasure(e);
              },
              addPageLoadQplPoint: function (t) {
                var e = t.point;
                o("WAWebPageLoadLogging").addPageLoadQplPoint(e);
              },
              addPageLoadQplAnnotation: function (t) {
                var e = t.annotations;
                o("WAWebPageLoadLogging").addPageLoadQplAnnotation(e);
              },
              addPageLoadQplAnnotationNow: function (t) {
                var e = t.annotations;
                o("WAWebPageLoadLogging").addPageLoadQplAnnotationNow(e);
              },
              incrementPageLoadQplSocketError: function () {
                o("WAWebPageLoadLogging").incrementPageLoadQplSocketError();
              },
              addPageLoadValidationData: function (t) {
                var e = t.data,
                  n = t.point;
                o("WAWebPageLoadLogging").addPageLoadValidationData(n, e);
              },
              setWamCompleteForValidation: function () {
                o("WAWebPageLoadLogging").setWamCompleteForValidation();
              },
            },
          },
        ]);
      return (
        a.setNamespaceHandler("event", function (e, t, n) {
          (new Set([
            "updateChatLimitSharing",
            "updateChatAcp2Setting",
            "chatCollectionAdd",
          ]).has(e) && o("WAWebApiHydrateWidsUtil").hydrateWids(t),
            n
              ? n(o("WAWebBackendApi").frontendSendAndReceive(e, t))
              : o("WAWebBackendApi").frontendFireAndForget(e, t));
        }),
        a.setNamespaceHandler("workerSafeEvent", function (e, t, n) {
          (e === "syncContactListJob" &&
            o("WAWebApiHydrateWidsUtil").hydrateWids(t),
            n
              ? n(o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(e, t))
              : o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(e, t));
        }),
        a
      );
    }
    var k = null,
      I = null,
      T = ["comms", "media"];
    function D(e, t) {
      e != null &&
        T.forEach(function (n) {
          var r = o("WACrossWorkerPortal").rejectPendingRequests(
            e,
            n,
            new (o("WAErrors").Disconnected)(t),
          );
          r > 0 &&
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[",
                  "] failed ",
                  " in-flight request(s): ",
                  "",
                ])),
              n,
              r,
              t,
            ),
            x(n, r));
        });
    }
    function x(e, t) {
      e: {
        if (e === "comms") {
          r("WAWebODS").incr(
            "web.backend_worker.failed_pending_requests.comms",
            t,
          );
          break e;
        }
        if (e === "media") {
          r("WAWebODS").incr(
            "web.backend_worker.failed_pending_requests.media",
            t,
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    var $ = 3,
      P = 10,
      N = (h || (h = n("Promise"))).resolve();
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (
            (N = N.catch(r("WAWebNoop")).then(function () {
              return U(e);
            })),
            N
          );
        })),
        w.apply(this, arguments)
      );
    }
    var A,
      F,
      O = null,
      B = !1;
    function W() {
      (q(),
        A != null && A.abort(),
        o("WAWebCommsWorkerReady").setCommsWorkerReady(!1),
        D(I, "tab taken over"),
        F != null && F.terminate(),
        globalThis.navigator.locks != null &&
          globalThis.navigator.locks.request(
            C + "-kill-switch-lock",
            { steal: !0 },
            function () {
              return (h || (h = n("Promise"))).resolve();
            },
          ));
    }
    function q() {
      var e = O;
      e == null ||
        !e.isActive() ||
        (e.addPoint("worker_terminated_tab_takeover", {
          string: { worker_terminated_reason: "tab_takeover" },
        }),
        e.endCancel());
    }
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, a;
          (o("WAWebPageLoadLogging").startPageLoadQplMeasure("backendWorker"),
            A != null && A.abort(),
            (A = new AbortController()));
          var i = (t = e == null ? void 0 : e.retryStart) != null ? t : 0,
            l =
              (a = e == null ? void 0 : e.qpl) != null
                ? a
                : o("QPLFlow").startQPLFlow(v, {
                    annotations: {
                      bool: {
                        wa_web_media_wasm_worker_split: r("gkx")("24042"),
                        supportModule: r("supportsModuleWorker")(!1),
                        is_foreground: !document.hidden,
                      },
                      int: { retryStart: i },
                    },
                    timeoutInMs: 9e4,
                  });
          O = l;
          try {
            l.addPoint("create_worker_start");
            var s = H(),
              u = o("WebWorkerV4Resource").createDedicatedV4WebWorker(
                r("WAWebBackendWorkerV2Resource"),
                R,
                C,
                s,
                l,
              ),
              c = u.initReady,
              d = u.worker;
            (l.addAnnotations({ bool: { classic_worker: s } }),
              (F = d),
              l.addPoint("worker_connect_start"),
              l.addPoint("worker_init_start"),
              l.addPoint("worker_ready_start"),
              yield K(d, c, l),
              l.addPoint("worker_connect_end"));
            var m;
            o("WAWebBackendWorkerClient").isBackendWorkerBridgeReady()
              ? (m = yield o(
                  "WAWebBackendWorkerClient",
                ).getBackendWorkerBridge())
              : (m = E());
            var y = L(d),
              S = I;
            ((I = o("WAWebBackendWorkerBridge").attachBridgeToPortal(m, y, [
              "businessBroadcastProAudience",
              "historySync",
              "labyrinthShadow",
              "deviceSync",
              "crypto",
              "media",
              "abProps",
              "backendEventBusSync",
              "userPrefs",
              "workerInit",
              "mediaHostsSync",
              "registrationState",
              "backgroundPauseSync",
              "crossPortalState",
              "comms",
            ])),
              D(S, "backend worker restarted"),
              z(),
              j(),
              o("WAWebBackendWorkerClient")
                .getBackendWorkerBridge()
                .then(
                  o("WAWebBackendWorkerBackgroundPauseSync")
                    .setupBackendWorkerBackgroundPauseSync,
                )
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to set up background pause sync: ",
                          "",
                        ])),
                      r("getErrorSafe")(e),
                    )
                    .sendLogs("background-pause-sync-failed");
                }),
              o("WAWebBackendWorkerClient").setBackendWorkerBridge(m),
              l.addPoint("init_data"),
              o("WAWebBackendWorkerInitState")
                .sendInitState(m)
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to set worker init state: ",
                          "",
                        ])),
                      r("getErrorSafe")(e),
                    )
                    .sendLogs("backend-worker-init-state-failed");
                }),
              o("WAWebCommsWorkerProxy").rebuildCommsInRestartedWorker(),
              l.addPoint("create_worker_end"),
              l.endSuccess(),
              o("WAWebPageLoadLogging").endPageLoadQplMeasure("backendWorker"),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebBackendWorker is initialised",
                  ])),
              ),
              globalThis.navigator.locks != null &&
                globalThis.navigator.locks
                  .request(
                    C + "-kill-switch-lock",
                    { signal: A.signal },
                    function () {
                      (o("WAWebCommsWorkerReady").setCommsWorkerReady(!1),
                        D(I, "backend worker stopped"),
                        i < P && M({ retryStart: i + 1 }));
                    },
                  )
                  .catch(r("WAWebNoop")));
          } catch (t) {
            var k,
              T = r("getErrorSafe")(t);
            if (
              (G(T),
              globalThis.navigator.locks != null &&
                (yield globalThis.navigator.locks.request(
                  C + "-kill-switch-lock",
                  { steal: !0 },
                  function () {
                    return (h || (h = n("Promise"))).resolve();
                  },
                )),
              o("WALogger")
                .ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "WAWebBackendWorkerClient init fails",
                    ])),
                )
                .catching(T)
                .sendLogs("main-thread-backend-worker-init-fails"),
              T.message.includes(b))
            ) {
              l.endFail("error", {
                string: {
                  error: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(t),
                },
              });
              return;
            }
            var x = (k = e == null ? void 0 : e.retryInit) != null ? k : 0;
            x < $ && globalThis.navigator.locks != null
              ? (l.addPoint("retry_" + x), M({ qpl: l, retryInit: x + 1 }))
              : l.endFail("error", {
                  string: {
                    error: o("getSafeQplErrorMessage").getSafeQPLErrorMessage(
                      t,
                    ),
                  },
                });
          }
        })),
        V.apply(this, arguments)
      );
    }
    function H() {
      return (
        B ||
        !r("supportsModuleWorker")(!1) ||
        (o("WAWebUA").UA.isFirefox &&
          parseInt(o("WAWebUA").UA.browserVersion.split(".")[0], 10) <= 115)
      );
    }
    function G(e) {
      (F != null && F.terminate(),
        e.message.startsWith(
          o("WAWebBackendWorkerInitErrorWatcher").BACKEND_WORKER_INIT_FAILED,
        ) && (B = !0));
    }
    function z() {
      o("WAWebBackendWorkerClient")
        .getBackendWorkerBridge()
        .then(function (e) {
          (k == null || k(),
            e.fireAndForget("mediaHostsSync", "snapshot", {
              data: o(
                "WAWebMediaHostsRawStateManager",
              ).mediaHostsRawStateManager.get(),
            }),
            (k = o(
              "WAWebMediaHostsRawStateManager",
            ).mediaHostsRawStateManager.onSet(function (t) {
              e.fireAndForget("mediaHostsSync", "snapshot", { data: t });
            })));
        })
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to set up media hosts sync: ",
                  "",
                ])),
              r("getErrorSafe")(e),
            )
            .sendLogs("media-hosts-sync-failed");
        });
    }
    function j() {
      o("WAWebBackendWorkerClient")
        .getBackendWorkerBridge()
        .then(function (e) {
          o("WACrossPortalStateBridge").startCrossPortalStateBridgeSync(
            e,
            "mainthread_crossPortalState",
            "crossPortalState",
          );
        })
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to set up cross-portal state sync: ",
                  "",
                ])),
              r("getErrorSafe")(e),
            )
            .sendLogs("cross-portal-state-sync-failed");
        });
    }
    function K(e, t, n) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = o(
              "WAWebBackendWorkerInitErrorWatcher",
            ).watchBackendWorkerInitErrors(e, a),
            l = i.dispose,
            s = i.initFailed,
            u = o(
              "WAWebBackendWorkerInitLivenessProbe",
            ).scheduleBackendWorkerInitLivenessProbe(
              a,
              C + "-kill-switch-lock",
            );
          try {
            var c = (h || (h = n("Promise"))).all([
              t.then(function () {
                a.addPoint("worker_init_end");
              }),
              X(e).then(function () {
                a.addPoint("worker_ready_end");
              }),
            ]);
            r("justknobx")._("8591")
              ? yield (h || (h = n("Promise"))).race([c, s])
              : (s.catch(r("WAWebNoop")), yield c);
          } finally {
            (l(), u());
          }
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e) {
      return new (h || (h = n("Promise")))(function (t, n) {
        var r = function (a) {
          var o = a.data,
            i = o.message,
            l = o.type;
          l === "worker_setup" &&
            (e.removeEventListener("message", r),
            i === "worker_started" ? t() : i === "worker_failed" && n());
        };
        e.addEventListener("message", r);
      });
    }
    ((l.startBackendWorker = M), (l.terminateBackendWorker = W));
  },
  98,
);

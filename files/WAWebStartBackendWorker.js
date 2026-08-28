__d(
  "WAWebStartBackendWorker",
  [
    "Promise",
    "QPLFlow",
    "WACrossWorkerPortal",
    "WAErrors",
    "WALogger",
    "WATransferableResult",
    "WAWap",
    "WAWebABPropsCache",
    "WAWebApiHydrateWidsUtil",
    "WAWebAppTracker",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackendWorkerBridge",
    "WAWebBackendWorkerClient",
    "WAWebBackendWorkerInitState",
    "WAWebBackendWorkerV2Resource",
    "WAWebCommsHandleStanza",
    "WAWebCommsWorkerProxy",
    "WAWebCommsWorkerReady",
    "WAWebCrashlog",
    "WAWebGetMessageCache",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebIdentityChangeApiWorkerCompatible",
    "WAWebLogger",
    "WAWebMainThreadQplHandler",
    "WAWebMainThreadUploadManagerHandler",
    "WAWebMediaHosts",
    "WAWebMediaHostsRawStateManager",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMmsDownloadUploadCrashLogger",
    "WAWebMsgKey",
    "WAWebNetworkStatusStateManager",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebRegisterPassiveTasksForConnect",
    "WAWebSyncdOrphanWorkerCompatible",
    "WAWebUA",
    "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMultiDeviceMainThread",
    "WAWebUserPrefsScreenLockMainThread",
    "WAWebUserPrefsTabMutex",
    "WAWebWorkerSafeBackendApi",
    "WAXMultiSiteWebWorkerV4HasteResponseControllerRouteBuilder",
    "WAXMultiSiteWebWorkerV4InitScriptControllerRouteBuilder",
    "WebWorkerV4Resource",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "getSafeQplErrorMessage",
    "gkx",
    "qpl",
    "supportsModuleWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = ["serializedError"],
      y;
    function C(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var b = "WAWebBackendWorker-" + o("WAWebUserPrefsTabMutex").THIS_TAB,
      v = "worker-killswitch-stolen",
      S = r("qpl")._(891427260, "2714"),
      R = new Map(),
      L = {
        initScriptRouteBuilder: r(
          "WAXMultiSiteWebWorkerV4InitScriptControllerRouteBuilder",
        ),
        hasteResponseRouteBuilder: r(
          "WAXMultiSiteWebWorkerV4HasteResponseControllerRouteBuilder",
        ),
      };
    function E(e) {
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
    function k() {
      var t,
        a = o("WAWebBackendWorkerBridge").createBridge([
          {
            namespace: "abPropsExposure",
            handlers: {
              recordExposure: function (t) {
                var e = t.configCode;
                o("WAWebABPropsCache").saveExposure(e);
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
              triggerSocketStreamDisconnected: function () {
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerSocketStreamDisconnected();
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
              logFBError: function (t) {
                var e = t.serializedError,
                  n = babelHelpers.objectWithoutPropertiesLoose(t, h),
                  a = r("err")(e.message);
                ((a.stack = e.stack),
                  (a.name = e.name),
                  o("WAWebLogger").logToFBLoggerLocal(
                    babelHelpers.extends({}, n, { error: a }),
                  ));
              },
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
                r && R.set(e, r);
              },
              endMarker: function (t) {
                var e = t.markerId,
                  n = R.get(e);
                n && (n(), R.delete(e));
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
            namespace: "mainthread_userPrefsMultiDevice",
            handlers: {
              getNoiseInfo: function () {
                return o(
                  "WAWebUserPrefsMultiDeviceMainThread",
                ).userPrefsMultiDeviceMainThread.getNoiseInfo();
              },
              getNoiseInfoIv: function () {
                return o(
                  "WAWebUserPrefsMultiDeviceMainThread",
                ).userPrefsMultiDeviceMainThread.getNoiseInfoIv();
              },
              setNoiseInfo: function (t) {
                var e = t.info;
                return o(
                  "WAWebUserPrefsMultiDeviceMainThread",
                ).userPrefsMultiDeviceMainThread.setNoiseInfo(e);
              },
              setNoiseInfoIv: function (t) {
                var e = t.iv;
                return o(
                  "WAWebUserPrefsMultiDeviceMainThread",
                ).userPrefsMultiDeviceMainThread.setNoiseInfoIv(e);
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
              getScreenLockIterations: function () {
                return o(
                  "WAWebUserPrefsScreenLockMainThread",
                ).userPrefsScreenLockMainThread.getScreenLockIterations();
              },
              getScreenLockIvString: function () {
                return o(
                  "WAWebUserPrefsScreenLockMainThread",
                ).userPrefsScreenLockMainThread.getScreenLockIvString();
              },
              getScreenLockSalt: function () {
                return o(
                  "WAWebUserPrefsScreenLockMainThread",
                ).userPrefsScreenLockMainThread.getScreenLockSalt();
              },
              setScreenLockIterations: function (t) {
                var e = t.iterations;
                return o(
                  "WAWebUserPrefsScreenLockMainThread",
                ).userPrefsScreenLockMainThread.setScreenLockIterations(e);
              },
              setScreenLockIvString: function (t) {
                var e = t.iv;
                return o(
                  "WAWebUserPrefsScreenLockMainThread",
                ).userPrefsScreenLockMainThread.setScreenLockIvString(e);
              },
              setScreenLockSalt: function (t) {
                var e = t.salt;
                return o(
                  "WAWebUserPrefsScreenLockMainThread",
                ).userPrefsScreenLockMainThread.setScreenLockSalt(e);
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
            namespace: "mainthread_crashLogger",
            handlers: {
              mark: function (t) {
                var e = t.mediaId,
                  n = t.metadata,
                  r = t.progressType,
                  a = o("WAWebMmsDownloadUploadCrashLogger").ProgressType.cast(
                    r,
                  );
                if (a == null) {
                  o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "Invalid progress type: ",
                          "",
                        ])),
                      r,
                    )
                    .sendLogs("invalid-progress-type");
                  return;
                }
                o(
                  "WAWebMmsDownloadUploadCrashLogger",
                ).downloadUploadCrashLogger.mark(e, a, n);
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
                        return (y || (y = n("Promise"))).resolve(e);
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
        ]);
      return (
        a.setNamespaceHandler("event", function (e, t, n) {
          if (new Set(["updateChatLimitSharing", "chatCollectionAdd"]).has(e))
            o("WAWebApiHydrateWidsUtil").hydrateWids(t);
          else if (e === "processAndGetUnreadMentionsInfo")
            for (var a of t.filteredMsgs)
              (o("WAWebApiHydrateWidsUtil").hydrateWids(a),
                (a.id = r("WAWebMsgKey").from(a.id)));
          n
            ? n(o("WAWebBackendApi").frontendSendAndReceive(e, t))
            : o("WAWebBackendApi").frontendFireAndForget(e, t);
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
    var I = null,
      T = null,
      D = null;
    function x(e, t) {
      if (e != null) {
        var n = o("WACrossWorkerPortal").rejectPendingRequests(
          e,
          "comms",
          new (o("WAErrors").Disconnected)(t),
        );
        n > 0 &&
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[comms] failed ",
                " in-flight request(s): ",
                "",
              ])),
            n,
            t,
          );
      }
    }
    var $ = 3,
      P = 10;
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a,
            i = (t = e == null ? void 0 : e.retryStart) != null ? t : 0,
            l =
              (a = e == null ? void 0 : e.qpl) != null
                ? a
                : o("QPLFlow").startQPLFlow(S, {
                    annotations: {
                      bool: {
                        wa_web_media_wasm_worker_split: r("gkx")("24042"),
                        supportModule: r("supportsModuleWorker")(!1),
                      },
                      int: { retryStart: i },
                    },
                    timeoutInMs: 6e4,
                  });
          try {
            l.addPoint("create_worker_start");
            var s =
                o("WAWebUA").UA.isFirefox &&
                parseInt(o("WAWebUA").UA.browserVersion.split(".")[0], 10) <=
                  115,
              u = o("WebWorkerV4Resource").createDedicatedV4WebWorker(
                r("WAWebBackendWorkerV2Resource"),
                L,
                b,
                s,
              ),
              c = u.initReady,
              d = u.worker;
            (l.addPoint("worker_connect_start"),
              yield (y || (y = n("Promise"))).all([c, w(d)]),
              l.addPoint("worker_connect_end"));
            var h;
            o("WAWebBackendWorkerClient").isBackendWorkerBridgeReady()
              ? (h = yield o(
                  "WAWebBackendWorkerClient",
                ).getBackendWorkerBridge())
              : (h = k());
            var C = E(d),
              R = D;
            ((D = o("WAWebBackendWorkerBridge").attachBridgeToPortal(h, C, [
              "historySync",
              "deviceSync",
              "crypto",
              "media",
              "abProps",
              "backendEventBusSync",
              "userPrefs",
              "workerInit",
              "mediaHostsSync",
              "networkStatusSync",
              "comms",
            ])),
              x(R, "backend worker restarted"),
              o("WAWebBackendWorkerClient")
                .getBackendWorkerBridge()
                .then(function (e) {
                  (I == null || I(),
                    e.fireAndForget("mediaHostsSync", "snapshot", {
                      data: o(
                        "WAWebMediaHostsRawStateManager",
                      ).mediaHostsRawStateManager.get(),
                    }),
                    (I = o(
                      "WAWebMediaHostsRawStateManager",
                    ).mediaHostsRawStateManager.onSet(function (t) {
                      e.fireAndForget("mediaHostsSync", "snapshot", {
                        data: t,
                      });
                    })));
                })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to set up media hosts sync: ",
                          "",
                        ])),
                      r("getErrorSafe")(e),
                    )
                    .sendLogs("media-hosts-sync-failed");
                }),
              o("WAWebBackendWorkerClient")
                .getBackendWorkerBridge()
                .then(function (e) {
                  (T == null || T(),
                    e.fireAndForget(
                      "networkStatusSync",
                      "updateNetworkStatus",
                      {
                        online: o(
                          "WAWebNetworkStatusStateManager",
                        ).networkStatusStateManager.get(),
                      },
                    ),
                    (T = o(
                      "WAWebNetworkStatusStateManager",
                    ).networkStatusStateManager.onSet(function (t) {
                      e.fireAndForget(
                        "networkStatusSync",
                        "updateNetworkStatus",
                        { online: t },
                      );
                    })));
                })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to set up network status sync: ",
                          "",
                        ])),
                      r("getErrorSafe")(e),
                    )
                    .sendLogs("network-status-sync-failed");
                }),
              o("WAWebBackendWorkerClient").setBackendWorkerBridge(h),
              l.addPoint("init_data"),
              o("WAWebBackendWorkerInitState")
                .sendInitState(h)
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
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebBackendWorker is initialised",
                  ])),
              ),
              globalThis.navigator.locks != null &&
                globalThis.navigator.locks.request(
                  b + "-kill-switch-lock",
                  function () {
                    (o("WAWebCommsWorkerReady").setCommsWorkerReady(!1),
                      x(D, "backend worker stopped"),
                      i < P && N({ retryStart: i + 1 }));
                  },
                ));
          } catch (t) {
            var M;
            globalThis.navigator.locks != null &&
              (yield globalThis.navigator.locks.request(
                b + "-kill-switch-lock",
                { steal: !0 },
                function () {
                  return (y || (y = n("Promise"))).resolve();
                },
              ));
            var A = r("getErrorSafe")(t);
            if (
              (o("WALogger")
                .ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "WAWebBackendWorkerClient init fails",
                    ])),
                )
                .catching(A)
                .sendLogs("main-thread-backend-worker-init-fails"),
              A.message.includes(v))
            ) {
              l.endFail(o("getSafeQplErrorMessage").getSafeQPLErrorMessage(t));
              return;
            }
            var F = (M = e == null ? void 0 : e.retryInit) != null ? M : 0;
            F < $ && globalThis.navigator.locks != null
              ? (l.addPoint("retry_" + F), N({ qpl: l, retryInit: F + 1 }))
              : l.endFail(
                  o("getSafeQplErrorMessage").getSafeQPLErrorMessage(t),
                );
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return new (y || (y = n("Promise")))(function (t, n) {
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
    l.startBackendWorker = N;
  },
  98,
);

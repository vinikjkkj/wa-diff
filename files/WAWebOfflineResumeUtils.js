__d(
  "WAWebOfflineResumeUtils",
  [
    "WABackoffUtils",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseLoop",
    "WAWebAppTracker",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBlocklistMigration",
    "WAWebClearDanglingReceipts",
    "WAWebCoexV2MessageAckProjection",
    "WAWebDbEncryptionKey",
    "WAWebGetMessageCache",
    "WAWebLogoutReasonConstants",
    "WAWebMessageReceiptBatcher",
    "WAWebNetworkStatus",
    "WAWebOffdStorageUpdateOfflinePeerReceipts",
    "WAWebOfflineDeviceCache",
    "WAWebOfflineSyncQplSession",
    "WAWebPageLoadLogging",
    "WAWebPruneExpiredMessagesWithAddOns",
    "WAWebPushNotificationsOfflineBbApi",
    "WAWebReloadCrashAnnotations",
    "WAWebReloadReason",
    "WAWebSocketLogoutJob",
    "WAWebWamOfflineResumeReporter",
    "WAWebWorkerSafeBackendApi",
    "cr:11133",
    "cr:18497",
    "cr:37442",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
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
      h,
      y,
      C = (e = n("cr:37442")) != null ? e : {},
      b = C.reconcileMetaAiUnreadCounts,
      v = { MIN_MESSAGE: 20, LIMIT_WITH_MESSAGE: 50, MAX_STANZA: 200 };
    async function S() {
      (o("WAWebGetMessageCache").getMessageCache().createSnapshot(),
        o(
          "WAWebOfflineDeviceCache",
        ).OfflinePendingDeviceCache.createSnapshot());
      var e = [
        o("WAWebGetMessageCache").getMessageCache().checkpointQueueWait(),
        o(
          "WAWebOfflineDeviceCache",
        ).OfflinePendingDeviceCache.checkpointQueue.wait(),
      ];
      (e.push(
        o("WAWebMessageReceiptBatcher").receiptBatcher.runActiveBatches(),
        o("WAWebCoexV2MessageAckProjection").flushCoexV2OfflineMessageAckWork(),
      ),
        await Promise.all(e));
    }
    function R() {
      return r("WAWebNetworkStatus").online
        ? o("WAPromiseLoop").promiseLoop(
            async function (e, t, n) {
              var r = o("WAPromiseDelays").delayMs(
                o("WABackoffUtils").expBackoff(n, 12e4, 1e3, 0.1),
              );
              try {
                return (
                  await o("WAWebClearDanglingReceipts").clearDanglingReceipts(),
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][utils] runReceiptCleanUpLoop: done.",
                      ])),
                  ),
                  e()
                );
              } catch (t) {
                return (
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][utils] runReceiptCleanUpLoop failed ",
                        "",
                      ])),
                    t,
                  ),
                  n > 3
                    ? (o("WALogger").WARN(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume] runReceiptCleanUpLoop: gave up ",
                            " tries",
                          ])),
                        n,
                      ),
                      e())
                    : r
                );
              }
            },
            void 0,
          )
        : (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[offline-resume][utils] runReceiptCleanUpLoop: offline skip",
              ])),
          ),
          Promise.resolve());
    }
    function L(e, t) {
      var n;
      (o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "[reload] refreshWindow: ",
            "",
          ])),
        e,
      ),
        o("WAWebOfflineSyncQplSession").OfflineSyncQpl.addAnnotations({
          string: { unload_reason: e },
        }),
        o("WAWebReloadReason").recordReloadReason(e, t),
        o("WAWebReloadCrashAnnotations").annotateCrashWithReloadReason(
          "refreshWindow: " + e,
        ),
        (n = window.location) == null || n.reload());
    }
    function E(e, t) {
      return (
        o("WALogger")
          .ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[offline-resume] restoreDataFromStorage failed for ",
                "",
              ])),
            e,
          )
          .catching(r("getErrorSafe")(t))
          .verbose()
          .sendLogs("offline-resume-fatal-error-" + e, {
            sendLogsType:
              o("WALogger").SendLogsType.USER_FORCEFULLY_LOGGED_OUT_SAD,
          }),
        o("WAWebSocketLogoutJob").socketLogout(
          o("WAWebLogoutReasonConstants").LogoutReason.WebFailOfflineResume,
        ),
        !0
      );
    }
    async function k() {
      try {
        await I();
      } catch (e) {
        E("chats", e);
      }
    }
    async function I() {
      await o("WAWebOffdStorageUpdateOfflinePeerReceipts").updatePeerReceipts();
      try {
        await (b == null ? void 0 : b());
      } catch (e) {
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[offline-resume][blocking] reconcileMetaAiUnreadCounts - ",
              "",
            ])),
          String(e),
        );
      }
    }
    async function T(e) {
      try {
        (e.shouldUpdateReceipts === !0 && (await I()),
          await o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
            "restoreChatsAndMessages",
          ),
          o("WAWebBlocklistMigration").applyBlocklistV2Rules() &&
            (await o("WAWebBackendApi").frontendSendAndReceive(
              "restoreBlocklist",
            )));
      } catch (e) {
        E("chats", e);
      }
    }
    async function D(e) {
      (o("WAWebPageLoadLogging").startPageLoadQplMeasure(
        "restoreDataFromStorage",
      ),
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "[offline-resume] restoreDataFromStorage.",
            ])),
        ));
      var t = o("WAWebWorkerSafeBackendApi")
          .workerSafeSendAndReceive("restoreProfilePictures")
          .catch(function (e) {
            E("profile-pictures", e);
          }),
        n = o("WAWebWorkerSafeBackendApi")
          .workerSafeSendAndReceive("restoreGroupsAndContacts")
          .catch(function (e) {
            E("groups-and-contacts", e);
          });
      (await Promise.all([T(e), n, t]),
        o("WAWebPageLoadLogging").endPageLoadQplMeasure(
          "restoreDataFromStorage",
        ));
    }
    async function x(e) {
      o("WAWebAppTracker").AppTracker.start(
        o("WAWebAppTracker").AppTrackerType.LoadMainScreen,
      );
      try {
        (await o("WAWebPruneExpiredMessagesWithAddOns")
          .pruneExpiredMessagesWithAddOns()
          .catch(function (e) {
            throw (
              o("WALogger")
                .ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[offline-resume] pruneExpiredMessagesWithAddOns failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          }),
          n("cr:11133") != null && n("cr:11133")()
            ? (await o(
                "WAWebDbEncryptionKey",
              ).DbEncKeyStore.waitForFinalDbMsgEncKey(),
              $(),
              await D(e).catch(function (e) {
                throw (
                  o("WALogger")
                    .ERROR(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "[offline-resume] restoreDataFromStorage failed after entering MAIN",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("startup-restore-after-main-failed"),
                  e
                );
              }),
              n("cr:18497") != null &&
                (await n("cr:18497").waitForResumeRelease()))
            : (await D(e), $()),
          o(
            "WAWebBackendEventBus",
          ).BackendEventBus.triggerOfflineProcessReady(),
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[offline-resume] loadMainScreen complete",
              ])),
          ));
      } finally {
        o("WAWebAppTracker").AppTracker.stop(
          o("WAWebAppTracker").AppTrackerType.LoadMainScreen,
        );
      }
    }
    function $() {
      (o("WAWebBackendEventBus").BackendEventBus.triggerMainStreamModeReady(),
        o(
          "WAWebWamOfflineResumeReporter",
        ).OfflineResumeReporter.logMainScreenLoadT(),
        o("WAWebPushNotificationsOfflineBbApi").setMainStreamModeReadyT());
    }
    function P(e, t) {
      return (
        e + t > v.MAX_STANZA ||
        (e > v.MIN_MESSAGE && e + t > v.LIMIT_WITH_MESSAGE)
      );
    }
    ((l.clearOfflineSnapShot = S),
      (l.runReceiptCleanUpLoop = R),
      (l.refreshWindow = L),
      (l.updatePeerReceiptsAfterMainScreen = k),
      (l.loadMainScreen = x),
      (l.exceedResumeWithOpenTabLimit = P));
  },
  98,
);

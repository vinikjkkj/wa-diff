__d(
  "WAWebOfflineResumeUtils",
  [
    "WABackoffUtils",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseLoop",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBlocklistMigration",
    "WAWebClearDanglingReceipts",
    "WAWebGetMessageCache",
    "WAWebLogoutReasonConstants",
    "WAWebMessageReceiptBatcher",
    "WAWebNetworkStatus",
    "WAWebOffdStorageUpdateOfflinePeerReceipts",
    "WAWebOfflineDeviceCache",
    "WAWebPageLoadLogging",
    "WAWebPruneExpiredMessagesWithAddOns",
    "WAWebPushNotificationsOfflineBbApi",
    "WAWebSocketLogoutJob",
    "WAWebWamOfflineResumeReporter",
    "WAWebWorkerSafeBackendApi",
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
      y = (e = n("cr:37442")) != null ? e : {},
      C = y.reconcileMetaAiUnreadCounts,
      b = { MIN_MESSAGE: 20, LIMIT_WITH_MESSAGE: 50, MAX_STANZA: 200 };
    async function v() {
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
      ),
        await Promise.all(e));
    }
    function S() {
      return r("WAWebNetworkStatus").online
        ? o("WAPromiseLoop").promiseLoop(async function (e, t, n) {
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
                      "[offline-resume][utils] runReceiptCleanUpLoop: failed with error ",
                      ".",
                    ])),
                  t,
                ),
                n > 3
                  ? (o("WALogger").WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[offline-resume][utils] runReceiptCleanUpLoop: Gave up clean up receipts ",
                          " tries",
                        ])),
                      n,
                    ),
                    e())
                  : r
              );
            }
          })
        : (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[offline-resume][utils] runReceiptCleanUpLoop: skip due to offline.",
              ])),
          ),
          Promise.resolve());
    }
    function R() {
      var e;
      (o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "[reload] refreshWindow",
          ])),
      ),
        (e = window.location) == null || e.reload());
    }
    function L(e, t) {
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
    async function E(e) {
      try {
        if (e.shouldUpdateReceipts === !0) {
          await o(
            "WAWebOffdStorageUpdateOfflinePeerReceipts",
          ).updatePeerReceipts();
          try {
            await (C == null ? void 0 : C());
          } catch (e) {
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume][blocking] reconcileMetaAiUnreadCounts failed: ",
                  "",
                ])),
              String(e),
            );
          }
        }
        (await o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
          "restoreChatsAndMessages",
        ),
          o("WAWebBlocklistMigration").applyBlocklistV2Rules() &&
            (await o("WAWebBackendApi").frontendSendAndReceive(
              "restoreBlocklist",
            )));
      } catch (e) {
        L("chats", e);
      }
    }
    async function k(e) {
      (o("WAWebPageLoadLogging").startPageLoadQplMeasure(
        "restoreDataFromStorage",
      ),
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "[offline-resume] restoreDataFromStorage.",
            ])),
        ));
      var t = o("WAWebABProps").getABPropConfigValue(
          "web_anr_async_contacts_restore_from_db_enabled",
        ),
        n = o("WAWebWorkerSafeBackendApi")
          .workerSafeSendAndReceive("restoreProfilePictures")
          .catch(function (e) {
            L("profile-pictures", e);
          });
      if (t)
        (await Promise.all([E(e), n]),
          await o("WAWebWorkerSafeBackendApi")
            .workerSafeSendAndReceive("restoreGroupsAndContacts")
            .catch(function (e) {
              L("groups-and-contacts", e);
            }));
      else {
        var r = o("WAWebWorkerSafeBackendApi")
          .workerSafeSendAndReceive("restoreGroupsAndContacts")
          .catch(function (e) {
            L("groups-and-contacts", e);
          });
        await Promise.all([E(e), r, n]);
      }
      o("WAWebPageLoadLogging").endPageLoadQplMeasure("restoreDataFromStorage");
    }
    async function I(e) {
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
                      "[offline-resume] loadMainScreen: pruneExpiredMessages message failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          }),
          await k(e),
          T(),
          o(
            "WAWebBackendEventBus",
          ).BackendEventBus.triggerOfflineProcessReady(),
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[offline-resume] loadMainScreen complete",
              ])),
          ));
      } finally {
        o("WAWebAppTracker").AppTracker.stop(
          o("WAWebAppTracker").AppTrackerType.LoadMainScreen,
        );
      }
    }
    function T() {
      (o("WAWebBackendEventBus").BackendEventBus.triggerMainStreamModeReady(),
        o(
          "WAWebWamOfflineResumeReporter",
        ).OfflineResumeReporter.logMainScreenLoadT(),
        o("WAWebPushNotificationsOfflineBbApi").setMainStreamModeReadyT());
    }
    function D(e, t) {
      return (
        e + t > b.MAX_STANZA ||
        (e > b.MIN_MESSAGE && e + t > b.LIMIT_WITH_MESSAGE)
      );
    }
    ((l.clearOfflineSnapShot = v),
      (l.runReceiptCleanUpLoop = S),
      (l.refreshWindow = R),
      (l.loadMainScreen = I),
      (l.exceedResumeWithOpenTabLimit = D));
  },
  98,
);

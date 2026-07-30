__d(
  "WAWebOfflineResumeUtils",
  [
    "Promise",
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
    "WAWebDbEncryptionKey",
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
    "asyncToGeneratorRuntime",
    "cr:11133",
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
      C,
      b = (e = n("cr:37442")) != null ? e : {},
      v = b.reconcileMetaAiUnreadCounts,
      S = { MIN_MESSAGE: 20, LIMIT_WITH_MESSAGE: 50, MAX_STANZA: 200 };
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            yield (C || (C = n("Promise"))).all(e));
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return r("WAWebNetworkStatus").online
        ? o("WAPromiseLoop").promiseLoop(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, t, n) {
                  var r = o("WAPromiseDelays").delayMs(
                    o("WABackoffUtils").expBackoff(n, 12e4, 1e3, 0.1),
                  );
                  try {
                    return (
                      yield o(
                        "WAWebClearDanglingReceipts",
                      ).clearDanglingReceipts(),
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
              );
              return function (t, n, r) {
                return e.apply(this, arguments);
              };
            })(),
          )
        : (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[offline-resume][utils] runReceiptCleanUpLoop: offline skip",
              ])),
          ),
          (C || (C = n("Promise"))).resolve());
    }
    function k() {
      var e;
      (o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "[reload] refreshWindow",
          ])),
      ),
        (e = window.location) == null || e.reload());
    }
    function I(e, t) {
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
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            if (e.shouldUpdateReceipts === !0) {
              yield o(
                "WAWebOffdStorageUpdateOfflinePeerReceipts",
              ).updatePeerReceipts();
              try {
                yield v == null ? void 0 : v();
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
            (yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "restoreChatsAndMessages",
            ),
              o("WAWebBlocklistMigration").applyBlocklistV2Rules() &&
                (yield o("WAWebBackendApi").frontendSendAndReceive(
                  "restoreBlocklist",
                )));
          } catch (e) {
            I("chats", e);
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            r = o("WAWebWorkerSafeBackendApi")
              .workerSafeSendAndReceive("restoreProfilePictures")
              .catch(function (e) {
                I("profile-pictures", e);
              });
          if (t)
            (yield (C || (C = n("Promise"))).all([T(e), r]),
              yield o("WAWebWorkerSafeBackendApi")
                .workerSafeSendAndReceive("restoreGroupsAndContacts")
                .catch(function (e) {
                  I("groups-and-contacts", e);
                }));
          else {
            var a = o("WAWebWorkerSafeBackendApi")
              .workerSafeSendAndReceive("restoreGroupsAndContacts")
              .catch(function (e) {
                I("groups-and-contacts", e);
              });
            yield (C || (C = n("Promise"))).all([T(e), a, r]);
          }
          o("WAWebPageLoadLogging").endPageLoadQplMeasure(
            "restoreDataFromStorage",
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebAppTracker").AppTracker.start(
            o("WAWebAppTracker").AppTrackerType.LoadMainScreen,
          );
          try {
            (yield o("WAWebPruneExpiredMessagesWithAddOns")
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
                ? (yield o(
                    "WAWebDbEncryptionKey",
                  ).DbEncKeyStore.waitForFinalDbMsgEncKey(),
                  M(),
                  yield x(e).catch(function (e) {
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
                  }))
                : (yield x(e), M()),
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
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      (o("WAWebBackendEventBus").BackendEventBus.triggerMainStreamModeReady(),
        o(
          "WAWebWamOfflineResumeReporter",
        ).OfflineResumeReporter.logMainScreenLoadT(),
        o("WAWebPushNotificationsOfflineBbApi").setMainStreamModeReadyT());
    }
    function w(e, t) {
      return (
        e + t > S.MAX_STANZA ||
        (e > S.MIN_MESSAGE && e + t > S.LIMIT_WITH_MESSAGE)
      );
    }
    ((l.clearOfflineSnapShot = R),
      (l.runReceiptCleanUpLoop = E),
      (l.refreshWindow = k),
      (l.loadMainScreen = P),
      (l.exceedResumeWithOpenTabLimit = w));
  },
  98,
);

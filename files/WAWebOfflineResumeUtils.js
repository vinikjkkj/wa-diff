__d(
  "WAWebOfflineResumeUtils",
  [
    "Promise",
    "WABackoffUtils",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseLoop",
    "WAWebABProps",
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
    "asyncToGeneratorRuntime",
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
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            yield (y || (y = n("Promise"))).all(e));
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
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
                "[offline-resume][utils] runReceiptCleanUpLoop: skip due to offline.",
              ])),
          ),
          (y || (y = n("Promise"))).resolve());
    }
    function E() {
      var e;
      (o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "[reload] refreshWindow",
          ])),
      ),
        (e = window.location) == null || e.reload());
    }
    function k(e, t) {
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
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            if (e.shouldUpdateReceipts === !0) {
              yield o(
                "WAWebOffdStorageUpdateOfflinePeerReceipts",
              ).updatePeerReceipts();
              try {
                yield b == null ? void 0 : b();
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
            (yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
              "restoreChatsAndMessages",
            ),
              o("WAWebBlocklistMigration").applyBlocklistV2Rules() &&
                (yield o("WAWebBackendApi").frontendSendAndReceive(
                  "restoreBlocklist",
                )));
          } catch (e) {
            k("chats", e);
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                k("profile-pictures", e);
              });
          if (t)
            (yield (y || (y = n("Promise"))).all([I(e), r]),
              yield o("WAWebWorkerSafeBackendApi")
                .workerSafeSendAndReceive("restoreGroupsAndContacts")
                .catch(function (e) {
                  k("groups-and-contacts", e);
                }));
          else {
            var a = o("WAWebWorkerSafeBackendApi")
              .workerSafeSendAndReceive("restoreGroupsAndContacts")
              .catch(function (e) {
                k("groups-and-contacts", e);
              });
            yield (y || (y = n("Promise"))).all([I(e), a, r]);
          }
          o("WAWebPageLoadLogging").endPageLoadQplMeasure(
            "restoreDataFromStorage",
          );
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o(
              "WAWebPruneExpiredMessagesWithAddOns",
            ).pruneExpiredMessagesWithAddOns();
          } catch (e) {
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
          }
          (yield D(e),
            N(),
            o(
              "WAWebBackendEventBus",
            ).BackendEventBus.triggerOfflineProcessReady(),
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume] loadMainScreen complete",
                ])),
            ));
        })),
        P.apply(this, arguments)
      );
    }
    function N() {
      (o("WAWebBackendEventBus").BackendEventBus.triggerMainStreamModeReady(),
        o(
          "WAWebWamOfflineResumeReporter",
        ).OfflineResumeReporter.logMainScreenLoadT(),
        o("WAWebPushNotificationsOfflineBbApi").setMainStreamModeReadyT());
    }
    function M(e, t) {
      return (
        e + t > v.MAX_STANZA ||
        (e > v.MIN_MESSAGE && e + t > v.LIMIT_WITH_MESSAGE)
      );
    }
    ((l.clearOfflineSnapShot = S),
      (l.runReceiptCleanUpLoop = L),
      (l.refreshWindow = E),
      (l.loadMainScreen = $),
      (l.exceedResumeWithOpenTabLimit = M));
  },
  98,
);

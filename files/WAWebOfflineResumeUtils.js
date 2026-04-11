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
      h = { MIN_MESSAGE: 20, LIMIT_WITH_MESSAGE: 50, MAX_STANZA: 200 };
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            yield (g || (g = n("Promise"))).all(e));
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
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
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][utils] runReceiptCleanUpLoop: done.",
                          ])),
                      ),
                      e()
                    );
                  } catch (t) {
                    return (
                      o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][utils] runReceiptCleanUpLoop: failed with error ",
                            ".",
                          ])),
                        t,
                      ),
                      n > 3
                        ? (o("WALogger").WARN(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
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
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[offline-resume][utils] runReceiptCleanUpLoop: skip due to offline.",
              ])),
          ),
          (g || (g = n("Promise"))).resolve());
    }
    function v() {
      var e;
      (o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "[reload] refreshWindow",
          ])),
      ),
        (e = window.location) == null || e.reload());
    }
    function S(e, t) {
      return (
        o("WALogger")
          .ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
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
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            (e.shouldUpdateReceipts === !0 &&
              (yield o(
                "WAWebOffdStorageUpdateOfflinePeerReceipts",
              ).updatePeerReceipts()),
              yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
                "restoreChatsAndMessages",
              ),
              o("WAWebBlocklistMigration").applyBlocklistV2Rules() &&
                (yield o("WAWebBackendApi").frontendSendAndReceive(
                  "restoreBlocklist",
                )));
          } catch (e) {
            S("chats", e);
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WAWebPageLoadLogging").startPageLoadQplMeasure(
            "restoreDataFromStorage",
          ),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume] restoreDataFromStorage.",
                ])),
            ));
          var t = o("WAWebABProps").getABPropConfigValue(
              "web_anr_async_contacts_restore_from_db_enabled",
            ),
            r = o("WAWebWorkerSafeBackendApi")
              .workerSafeSendAndReceive("restoreProfilePictures")
              .catch(function (e) {
                S("profile-pictures", e);
              });
          if (t)
            (yield (g || (g = n("Promise"))).all([R(e), r]),
              yield o("WAWebWorkerSafeBackendApi")
                .workerSafeSendAndReceive("restoreGroupsAndContacts")
                .catch(function (e) {
                  S("groups-and-contacts", e);
                }));
          else {
            var a = o("WAWebWorkerSafeBackendApi")
              .workerSafeSendAndReceive("restoreGroupsAndContacts")
              .catch(function (e) {
                S("groups-and-contacts", e);
              });
            yield (g || (g = n("Promise"))).all([R(e), a, r]);
          }
          o("WAWebPageLoadLogging").endPageLoadQplMeasure(
            "restoreDataFromStorage",
          );
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o(
              "WAWebPruneExpiredMessagesWithAddOns",
            ).pruneExpiredMessagesWithAddOns();
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[offline-resume] loadMainScreen: pruneExpiredMessages message failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          }
          (yield E(e),
            D(),
            o(
              "WAWebBackendEventBus",
            ).BackendEventBus.triggerOfflineProcessReady(),
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume] loadMainScreen complete",
                ])),
            ));
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      (o("WAWebBackendEventBus").BackendEventBus.triggerMainStreamModeReady(),
        o(
          "WAWebWamOfflineResumeReporter",
        ).OfflineResumeReporter.logMainScreenLoadT(),
        o("WAWebPushNotificationsOfflineBbApi").setMainStreamModeReadyT());
    }
    function x(e, t) {
      return (
        e + t > h.MAX_STANZA ||
        (e > h.MIN_MESSAGE && e + t > h.LIMIT_WITH_MESSAGE)
      );
    }
    ((l.clearOfflineSnapShot = y),
      (l.runReceiptCleanUpLoop = b),
      (l.refreshWindow = v),
      (l.loadMainScreen = I),
      (l.exceedResumeWithOpenTabLimit = x));
  },
  98,
);

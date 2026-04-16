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
    "WAWebReconcileMetaAiUnreadCountHelper",
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
      h,
      y = { MIN_MESSAGE: 20, LIMIT_WITH_MESSAGE: 50, MAX_STANZA: 200 };
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            yield (h || (h = n("Promise"))).all(e));
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
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
          (h || (h = n("Promise"))).resolve());
    }
    function S() {
      var e;
      (o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "[reload] refreshWindow",
          ])),
      ),
        (e = window.location) == null || e.reload());
    }
    function R(e, t) {
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
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            if (e.shouldUpdateReceipts === !0) {
              yield o(
                "WAWebOffdStorageUpdateOfflinePeerReceipts",
              ).updatePeerReceipts();
              try {
                yield o(
                  "WAWebReconcileMetaAiUnreadCountHelper",
                ).reconcileMetaAiUnreadCounts();
              } catch (e) {
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
            R("chats", e);
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WAWebPageLoadLogging").startPageLoadQplMeasure(
            "restoreDataFromStorage",
          ),
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume] restoreDataFromStorage.",
                ])),
            ));
          var t = o("WAWebABProps").getABPropConfigValue(
              "web_anr_async_contacts_restore_from_db_enabled",
            ),
            r = o("WAWebWorkerSafeBackendApi")
              .workerSafeSendAndReceive("restoreProfilePictures")
              .catch(function (e) {
                R("profile-pictures", e);
              });
          if (t)
            (yield (h || (h = n("Promise"))).all([L(e), r]),
              yield o("WAWebWorkerSafeBackendApi")
                .workerSafeSendAndReceive("restoreGroupsAndContacts")
                .catch(function (e) {
                  R("groups-and-contacts", e);
                }));
          else {
            var a = o("WAWebWorkerSafeBackendApi")
              .workerSafeSendAndReceive("restoreGroupsAndContacts")
              .catch(function (e) {
                R("groups-and-contacts", e);
              });
            yield (h || (h = n("Promise"))).all([L(e), a, r]);
          }
          o("WAWebPageLoadLogging").endPageLoadQplMeasure(
            "restoreDataFromStorage",
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o(
              "WAWebPruneExpiredMessagesWithAddOns",
            ).pruneExpiredMessagesWithAddOns();
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[offline-resume] loadMainScreen: pruneExpiredMessages message failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          }
          (yield k(e),
            x(),
            o(
              "WAWebBackendEventBus",
            ).BackendEventBus.triggerOfflineProcessReady(),
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume] loadMainScreen complete",
                ])),
            ));
        })),
        D.apply(this, arguments)
      );
    }
    function x() {
      (o("WAWebBackendEventBus").BackendEventBus.triggerMainStreamModeReady(),
        o(
          "WAWebWamOfflineResumeReporter",
        ).OfflineResumeReporter.logMainScreenLoadT(),
        o("WAWebPushNotificationsOfflineBbApi").setMainStreamModeReadyT());
    }
    function $(e, t) {
      return (
        e + t > y.MAX_STANZA ||
        (e > y.MIN_MESSAGE && e + t > y.LIMIT_WITH_MESSAGE)
      );
    }
    ((l.clearOfflineSnapShot = C),
      (l.runReceiptCleanUpLoop = v),
      (l.refreshWindow = S),
      (l.loadMainScreen = T),
      (l.exceedResumeWithOpenTabLimit = $));
  },
  98,
);

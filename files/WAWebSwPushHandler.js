__d(
  "WAWebSwPushHandler",
  [
    "WAComms",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBoolFunc",
    "WAWebInitializeWorkerBackendSw",
    "WAWebMessageProcessorCache",
    "WAWebMessageQueue",
    "WAWebNoop",
    "WAWebNotificationWorkerBackend",
    "WAWebPushNotificationsGatingUtils",
    "WAWebSwCallPushNotification",
    "WAWebSwCompanionLogoutReminderNotification",
    "WAWebSwFeature",
    "WAWebSwInterruptOfflineResume",
    "WAWebSwOfflineResumeState",
    "WAWebSwStartupResourcesPrefetch",
    "WAWebWamEnumOfflineProcessInterruptReasons",
    "WAWebWamEnumOfflineProcessRunReasons",
    "WAWebWamWorkerOfflineProcessReporter",
    "WAWebWorkerResumeManager",
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
      y = 75e3,
      C = 85 * 1e3,
      b = (function (t) {
        function n() {
          for (var n, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
            a[i] = arguments[i];
          return (
            (n = t.call.apply(t, [this].concat(a)) || this),
            (n.matchInstall = o("WAWebBoolFunc").returnTrue),
            (n.onInstall = function (e) {}),
            (n.matchActivate = o("WAWebBoolFunc").returnTrue),
            (n.onActivate = function (e) {}),
            (n.matchPush = o("WAWebBoolFunc").returnTrue),
            (n.onPush = function (e) {
              var t = self.performance.now(),
                r = o(
                  "WAWebPushNotificationsGatingUtils",
                ).canSupportOfflineNotifications()
                  ? v(e)
                  : null,
                a = S(r);
              if (a != null) {
                e.waitUntil(R(a));
                return;
              }
              var i = async function () {
                if (
                  !o(
                    "WAWebPushNotificationsGatingUtils",
                  ).canSupportOfflineNotifications()
                )
                  return Promise.resolve();
                var e = o("WAWebSwCallPushNotification").parseCallPushPayload(
                  r,
                );
                if (e != null)
                  return o(
                    "WAWebSwCallPushNotification",
                  ).handleParsedCallPushPayload(e);
                (await E(n.$PushHandler$p_1, t),
                  await o(
                    "WAWebSwStartupResourcesPrefetch",
                  ).maybePrefetchStartupResources());
              };
              e.waitUntil(
                i().finally(o("WAWebSwCallPushNotification").closeExpiredRings),
              );
            }),
            (n.matchAction = o("WAWebSwCallPushNotification").isCallAction),
            (n.onAction = o("WAWebSwCallPushNotification").handleCallAction),
            (n.$PushHandler$p_2 = !1),
            (n.$PushHandler$p_1 = function (t) {
              if (n.$PushHandler$p_2) {
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[push-notification] offline resume eligibility check failed again: ",
                      "",
                    ])),
                  t.name,
                );
                return;
              }
              ((n.$PushHandler$p_2 = !0),
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[push-notification] offline resume eligibility check failed",
                      ])),
                  )
                  .catching(t)
                  .sendLogs(
                    "push-notification-offline-resume-eligibility-check-failed",
                  ));
            }),
            babelHelpers.assertThisInitialized(n) ||
              babelHelpers.assertThisInitialized(n)
          );
        }
        return (babelHelpers.inheritsLoose(n, t), n);
      })(o("WAWebSwFeature").SWFeature);
    function v(e) {
      try {
        var t;
        return (t = e.data) == null ? void 0 : t.json();
      } catch (e) {
        return null;
      }
    }
    function S(e) {
      var t = o(
        "WAWebSwCompanionLogoutReminderNotification",
      ).parseCompanionLogoutReminderPushPayload(e);
      return t == null
        ? null
        : o(
              "WAWebSwCompanionLogoutReminderNotification",
            ).isCompanionLogoutReminderDisabled()
          ? (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[PushNotif] companion logout reminder disabled, taking the offline resume path",
                ])),
            ),
            null)
          : t;
    }
    async function R(e) {
      (await o("WAWebSwCallPushNotification")
        .closeExpiredRings()
        .catch(r("WAWebNoop")),
        await o(
          "WAWebSwCompanionLogoutReminderNotification",
        ).showCompanionLogoutReminderNotification(e));
    }
    async function L(e) {
      try {
        var t;
        if (
          !(await o(
            "WAWebInitializeWorkerBackendSw",
          ).hasPushOfflineResumeTreatment())
        )
          return !1;
        var n =
            (t = self.registration) == null ||
            (t = t.pushManager) == null ||
            t.getSubscription == null
              ? void 0
              : t.getSubscription(),
          a = n != null && (await n) != null;
        return !o(
          "WAWebPushNotificationsGatingUtils",
        ).isNotificationPermissionGranted() || !a
          ? (await o(
              "WAWebInitializeWorkerBackendSw",
            ).clearWorkerPushOfflineResumeTreatment(),
            !1)
          : !0;
      } catch (t) {
        return (e(r("getErrorSafe")(t)), !1);
      }
    }
    async function E(e, t) {
      var n = o("WAWebSwOfflineResumeState").tryStartOfflineResume();
      if (n != null) {
        var a = null,
          i = null,
          l = r("WAWebNoop"),
          s = !1,
          u = !1,
          _ = function () {
            return o(
              "WAWebMessageProcessorCache",
            ).messageProcessorCache.expireCheckpointHolds();
          };
        n.addEventListener("abort", _);
        try {
          if (!(await L(e))) return;
          var f = t + y - self.performance.now();
          if (f <= 0) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[push-notification] push event deadline reached before offline resume",
                ])),
            );
            return;
          }
          var g = self.setTimeout(function () {
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[push-notification] push event deadline reached, stop offline resume",
                ])),
            ),
              a != null &&
              o("WAWebWorkerResumeManager").isActiveOfflineWorkerResumeManager(
                a,
              )
                ? (i = I())
                : u &&
                  a == null &&
                  o(
                    "WAWebWamWorkerOfflineProcessReporter",
                  ).WorkerOfflineResumeReporter.logProcessInterrupted(
                    o("WAWebWamEnumOfflineProcessInterruptReasons")
                      .OFFLINE_PROCESS_INTERRUPT_REASONS.PUSH_DEADLINE,
                  ),
              o("WAWebSwOfflineResumeState").cancelOfflineResume());
          }, f);
          l = function () {
            return self.clearTimeout(g);
          };
          var h = await self.clients.matchAll({
            type: "window",
            includeUncontrolled: !0,
          });
          if (n.aborted || (h == null ? void 0 : h.length) > 0) return;
          if (o("WAComms").getComms() != null) {
            o("WALogger")
              .LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] skip offline resume while worker comms is active",
                  ])),
              )
              .sendLogs(
                "push-notification-offline-resume-skipped-active-comms",
                { sampling: 0.01 },
              );
            return;
          }
          if (
            (o("WAWebMessageQueue").configureWorkerOnlineMessageQueueTracking(
              !0,
            ),
            (s = !0),
            !(await T(n)))
          )
            return;
          u = !0;
          var C = x();
          try {
            await o("WAWebInitializeWorkerBackendSw")
              .handlePushNotification(n, {
                passiveMode: !0,
                onBackendOwned: function (t) {
                  a = t;
                },
              })
              .catch(function (e) {
                throw (
                  o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[push-notification] offline processing failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("push-notification-offline-processing-failed"),
                  e
                );
              });
          } finally {
            (D(), await C);
          }
        } finally {
          (l(),
            await i,
            n.removeEventListener("abort", _),
            s &&
              (o("WAWebMessageQueue").configureWorkerOnlineMessageQueueTracking(
                !1,
              ),
              o(
                "WAWebMessageProcessorCache",
              ).messageProcessorCache.expireCheckpointHolds()),
            u
              ? (o("WAWebMessageProcessorCache").messageProcessorCache.close(),
                await k(t))
              : o(
                    "WAWebMessageProcessorCache",
                  ).messageProcessorCache.isFailClosed()
                ? o("WAWebSwOfflineResumeState").blockOfflineResume()
                : o("WAWebSwOfflineResumeState").resetOfflineResumeState());
        }
      }
    }
    async function k(e) {
      try {
        await o("WAPromiseTimeout").promiseTimeout(
          o(
            "WAWebMessageProcessorCache",
          ).messageProcessorCache.checkpointQueueWait(),
          Math.max(e + C - self.performance.now(), 0),
        );
      } catch (e) {
        o("WALogger")
          .WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[push-notification] push event settles before the cut checkpoints finished",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    function I() {
      return o("WAWebSwInterruptOfflineResume")
        .interruptOfflineResume(
          o("WAWebWamEnumOfflineProcessInterruptReasons")
            .OFFLINE_PROCESS_INTERRUPT_REASONS.PUSH_DEADLINE,
          "Offline resume reached the push event deadline",
        )
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[push-notification] failed to interrupt offline resume",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("offline-resume-interrupt-failed");
        });
    }
    async function T(e) {
      o("WALogger").LOG(
        g ||
          (g = babelHelpers.taggedTemplateLiteralLoose([
            "[PushNotif] Starting backend for push notification",
          ])),
      );
      var t = await o("WAWebInitializeWorkerBackendSw").initializeDb();
      return e.aborted
        ? !1
        : t
          ? (o(
              "WAWebWamWorkerOfflineProcessReporter",
            ).WorkerOfflineResumeReporter.logWorkerInitialized(
              o("WAWebWamEnumOfflineProcessRunReasons")
                .OFFLINE_PROCESS_RUN_REASONS.PUSH_NOTIFICATION,
            ),
            !0)
          : (await o(
              "WAWebNotificationWorkerBackend",
            ).showPushNotificationSyncCompleteMessage(!1),
            !1);
    }
    function D() {
      o(
        "WAWebWamWorkerOfflineProcessReporter",
      ).WorkerOfflineResumeReporter.logProcessInterrupted(
        o("WAWebWamEnumOfflineProcessInterruptReasons")
          .OFFLINE_PROCESS_INTERRUPT_REASONS.ENDED_WITHOUT_COMPLETION,
      );
    }
    function x() {
      return o("WAWebNotificationWorkerBackend")
        .showPushNotificationSyncStartMessage()
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[push-notification] failed to show sync-start notification",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("push-notification-sync-start-failed");
        });
    }
    l.default = b;
  },
  98,
);

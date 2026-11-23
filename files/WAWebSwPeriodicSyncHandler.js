__d(
  "WAWebSwPeriodicSyncHandler",
  [
    "WAComms",
    "WALogger",
    "WAWebBoolFunc",
    "WAWebInitializeWorkerBackendSw",
    "WAWebNotificationWorkerBackend",
    "WAWebPushNotificationsGatingUtils",
    "WAWebSwFeature",
    "WAWebSwStartupResourcesPrefetch",
    "WAWebWamEnumOfflineProcessRunReasons",
    "WAWebWamWorkerOfflineProcessReporter",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = !1,
      m = (function (t) {
        function n() {
          for (var n, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          return (
            (n = t.call.apply(t, [this].concat(i)) || this),
            (n.matchPeriodicSync = o("WAWebBoolFunc").returnTrue),
            (n.onPeriodicSync = async function (t) {
              if (
                !o(
                  "WAWebPushNotificationsGatingUtils",
                ).canSupportPeriodicBackgroundSync() ||
                r("justknobx")._("2337") !== !1
              )
                return (
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[background-sync] Invalid access",
                        ])),
                    )
                    .sendLogs("background-sync-invalid-access"),
                  Promise.resolve()
                );
              if (t.tag !== "background-sync")
                return (
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[background-sync] Received an unknown tag: ",
                          "",
                        ])),
                      t.tag,
                    )
                    .sendLogs("background-sync-received-unknown-tag"),
                  Promise.resolve()
                );
              if (
                (t.waitUntil(
                  o(
                    "WAWebSwStartupResourcesPrefetch",
                  ).maybePrefetchStartupResources(),
                ),
                d || o("WAComms").getComms())
              )
                return Promise.resolve();
              d = !0;
              var n = await self.clients.matchAll({ type: "window" });
              if ((n == null ? void 0 : n.length) > 0) {
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[background-sync] skip: active pages exist",
                      ])),
                  )
                  .sendLogs("background-sync-called-while-active-pages-exist");
                return;
              }
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[background-sync] Starting backend for background sync",
                  ])),
              ),
                o(
                  "WAWebWamWorkerOfflineProcessReporter",
                ).WorkerOfflineResumeReporter.logWorkerInitialized(
                  o("WAWebWamEnumOfflineProcessRunReasons")
                    .OFFLINE_PROCESS_RUN_REASONS.PERIODIC_BACKGROUND_SYNC,
                ));
              var a = await o("WAWebInitializeWorkerBackendSw").initializeDb();
              a &&
                (o("WAWebNotificationWorkerBackend").setHideNotifications(),
                o("WAWebInitializeWorkerBackendSw").handlePushNotification());
            }),
            babelHelpers.assertThisInitialized(n) ||
              babelHelpers.assertThisInitialized(n)
          );
        }
        return (babelHelpers.inheritsLoose(n, t), n);
      })(o("WAWebSwFeature").SWFeature);
    l.default = m;
  },
  98,
);

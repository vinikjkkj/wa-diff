__d(
  "WAWebInitializeWorkerBackendSw",
  [
    "WALogger",
    "WAWebABPropsCache",
    "WAWebABPropsUpdateFromStorage",
    "WAWebBuildConstants",
    "WAWebDbRolloutUtil",
    "WAWebFtsStorage",
    "WAWebInitializeWorkerBackend",
    "WAWebModelStorage",
    "WAWebNotificationWorkerBackend",
    "WAWebOffdStorage",
    "WAWebPushSubscriptionLifecycleLogger",
    "WAWebSignalStorage",
    "WAWebUpdaterVersion",
    "WAWebUserPrefsGeneral",
    "WAWebWorkerEncKeyHelper",
    "WAWebWorkerResumeManager",
    "WAWebWorkerStorage",
    "getErrorSafe",
    "justknobx",
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
      C = 9;
    async function b() {
      await o("WAWebWorkerStorage").initialize({
        clearPushOfflineResumeTreatment: !0,
      });
    }
    async function v() {
      try {
        return (
          await o("WAWebDbRolloutUtil").loadSchemaVersions(),
          await Promise.all([
            o("WAWebSignalStorage").initialize(),
            o("WAWebModelStorage").initialize(),
            o("WAWebWorkerStorage").initialize(),
            o("WAWebOffdStorage").initialize(),
            o("WAWebFtsStorage").initialize(),
          ]),
          !0
        );
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[push-notification] db init failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("push-notification-db-init-error"),
          await S(),
          !1
        );
      }
    }
    async function S() {
      try {
        var e = r("justknobx")._("1050");
        if (e === !1) {
          var t, n;
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[push-notification] unsubscribe push mgr (db fail)",
              ])),
          );
          var a = await ((t = await ((n = self.registration) == null ||
          (n = n.pushManager) == null ||
          n.getSubscription == null
            ? void 0
            : n.getSubscription())) == null || t.unsubscribe == null
            ? void 0
            : t.unsubscribe());
          a === !0
            ? (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] unsubscribed from push mgr +",
                  ])),
              ),
              o("WAWebPushSubscriptionLifecycleLogger").logSwPushUnsubscribe(
                "db_init_failed",
              ))
            : o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] Failed to unsubscribe from push manager",
                  ])),
              );
        }
      } catch (e) {
        o("WALogger")
          .ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[push-notification] Failed to unsubscribe from push manager",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    async function R(e, t) {
      try {
        var n = await Promise.all([
            k(),
            E(),
            o("WAWebUserPrefsGeneral").getOfflinePushDisabled(),
          ]),
          a = n[0],
          i = n[1],
          l = n[2];
        if ((e == null ? void 0 : e.aborted) === !0) return;
        var s = L(a, i, l);
        if (s != null) {
          var u = I(s);
          try {
            await o(
              "WAWebNotificationWorkerBackend",
            ).showPushNotificationSyncCompleteMessage();
          } finally {
            await u;
          }
          return;
        }
        if (
          (await o("WAWebWorkerEncKeyHelper").initEncSalt(),
          (e == null ? void 0 : e.aborted) === !0)
        )
          return;
        await o("WAWebInitializeWorkerBackend").startBackendWorker(
          babelHelpers.extends({}, t, { signal: e }),
        );
      } catch (e) {
        if (
          e instanceof
          o("WAWebWorkerResumeManager").OfflineWorkerResumeInterruptedError
        ) {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[push-notification] backend interrupted",
              ])),
          );
          return;
        }
        o("WALogger")
          .ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[push-notification] backend start failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("push-notification-init-error");
      }
    }
    function L(e, t, n) {
      return e != null
        ? e
        : n === !0
          ? "offline_push_disabled"
          : t
            ? "offline_push_limit"
            : null;
    }
    async function E() {
      var e,
        t =
          (e = await o("WAWebUserPrefsGeneral").getOfflinePushCount()) != null
            ? e
            : 0;
      return (
        o("WAWebUserPrefsGeneral")
          .setOfflinePushCount(t + 1)
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] failed to update offline push count",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }),
        t > C
          ? (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[push-notification] offline push limit exceeded",
                ])),
            ),
            !0)
          : !1
      );
    }
    async function k() {
      var e = await o("WAWebUserPrefsGeneral").getAppVersionBase();
      if (e == null) return "main_app_version_missing";
      var t = new (o("WAWebUpdaterVersion").Version)(e),
        n = new (o("WAWebUpdaterVersion").Version)(
          o("WAWebBuildConstants").VERSION_BASE,
        );
      return n.lt(t)
        ? (o("WALogger")
            .ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "Service worker (",
                  ") version is less than main app (",
                  ") version",
                ])),
              o("WAWebBuildConstants").VERSION_BASE,
              t,
            )
            .sendLogs("service-worker-lt-main-page-version"),
          "sw_version_behind")
        : null;
    }
    async function I(e) {
      try {
        var t;
        (o("WAWebABPropsCache").initializeABPropsCache(),
          await o("WAWebABPropsUpdateFromStorage").updateABPropsFromStorage());
        var n = await ((t = self.registration) == null ||
        (t = t.pushManager) == null ||
        t.getSubscription == null
          ? void 0
          : t.getSubscription());
        if (n) {
          var a = await (n.unsubscribe == null ? void 0 : n.unsubscribe());
          (o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "Push subscription unsubscribed ",
                ".",
              ])),
            a ? "successfully" : "unsuccessfully",
          ),
            a === !0 &&
              (await o(
                "WAWebPushSubscriptionLifecycleLogger",
              ).logSwPushUnsubscribe(e)));
        }
      } catch (e) {
        var i = r("getErrorSafe")(e);
        o("WALogger")
          .ERROR(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "unsubscribe-push-subscription-failure",
              ])),
          )
          .catching(i)
          .sendLogs("unsubscribe-push-subscription-failure");
      }
    }
    ((l.hasPushOfflineResumeTreatment =
      o("WAWebWorkerStorage").hasPushOfflineResumeTreatment),
      (l.clearWorkerPushOfflineResumeTreatment = b),
      (l.initializeDb = v),
      (l.handlePushNotification = R));
  },
  98,
);

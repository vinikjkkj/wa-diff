__d(
  "WAWebSubscribePushManagerAction",
  [
    "WABase64",
    "WALogger",
    "WAWebGetPushServerSettingsJob",
    "WAWebL10N",
    "WAWebMiscErrors",
    "WAWebPushNotificationsGatingUtils",
    "WAWebSetPushConfigJob",
    "WAWebSetWorkerLocalStorage",
    "asyncToGeneratorRuntime",
    "cr:27584",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o(
              "WAWebPushNotificationsGatingUtils",
            ).canSupportOfflineNotifications() &&
            "serviceWorker" in navigator
          ) {
            var t,
              a,
              i,
              l = n("cr:27584").isOfflineNotificationsEnabled(),
              u =
                (t = yield n("cr:27584").shouldSubscribePushManager(l)) != null
                  ? t
                  : !1,
              c = yield (a = window.navigator.serviceWorker) == null
                ? void 0
                : a.ready;
            if (c == null) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] update failed: no SW registration",
                  ])),
              );
              return;
            }
            var d =
              c == null ||
              (i = c.pushManager) == null ||
              i.getSubscription == null
                ? void 0
                : i.getSubscription();
            if (d == null) {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] failed to get push manager",
                  ])),
              );
              return;
            }
            if (c.scope !== window.location.origin + window.location.pathname)
              return;
            var m = (yield d) != null;
            u
              ? m
                ? (n("cr:27584").updateOfflineNotificationL10nStrings(),
                  r("WAWebL10N").on("locale_change", function () {
                    n("cr:27584").updateOfflineNotificationL10nStrings();
                  }))
                : g()
              : m && y();
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      e ? g() : y();
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o(
              "WAWebPushNotificationsGatingUtils",
            ).canEnableOfflineNotifications()
          )
            try {
              var e;
              if (!("serviceWorker" in navigator)) return;
              var t = yield (e = window.navigator.serviceWorker) == null
                ? void 0
                : e.ready;
              if (t == null) return;
              var r = yield t.pushManager.getSubscription();
              if (r != null) return;
              var a = yield o(
                "WAWebGetPushServerSettingsJob",
              ).getPushServerSettings();
              if (a.errorCode != null) {
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[push-notification] subscribe failed: settings err ",
                      "",
                    ])),
                  a.errorCode,
                );
                return;
              }
              var i = new Uint8Array(o("WABase64").decodeB64UrlSafe(String(a))),
                l = { userVisibleOnly: !0, applicationServerKey: i },
                s = yield t.pushManager.subscribe(l),
                m = yield o("WAWebSetPushConfigJob").setPushConfig(s);
              if ((m == null ? void 0 : m.errorCode) != null) {
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[push-notification] subscribe failed: server err ",
                      "",
                    ])),
                  m.errorText,
                );
                return;
              }
              (yield o("WAWebSetWorkerLocalStorage").setWorkerLocalStorage(),
                yield n("cr:27584").updateOfflineNotificationL10nStrings());
            } catch (e) {
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] subscribe failed: ",
                    "",
                  ])),
                e,
              );
            }
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !o(
              "WAWebPushNotificationsGatingUtils",
            ).canSupportOfflineNotifications()
          )
            return !1;
          try {
            var e;
            if (!("serviceWorker" in navigator)) return !1;
            var t = yield (e = window.navigator.serviceWorker) == null
              ? void 0
              : e.ready;
            if (t == null) return !1;
            var n = yield t.pushManager.getSubscription();
            if (n == null) return !1;
            var r = yield n.unsubscribe();
            return (
              yield o("WAWebSetWorkerLocalStorage")
                .clearWorkerLocalStorage()
                .catch(function (e) {
                  if (!(e instanceof o("WAWebMiscErrors").DbOnLogoutAbort))
                    throw e;
                }),
              r
            );
          } catch (e) {
            return (
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] unsubscribe failed: ",
                    "",
                  ])),
                e,
              ),
              !1
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    ((l.updatePushManager = p),
      (l.handleOfflineNotifications = f),
      (l.unsubscribePushManager = y));
  },
  98,
);

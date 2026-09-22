__d(
  "WAWebSubscribePushManagerAction",
  [
    "Promise",
    "WABase64",
    "WALogger",
    "WAWebDbErrors",
    "WAWebGetPushServerSettingsJob",
    "WAWebL10N",
    "WAWebNoop",
    "WAWebPushNotificationsGatingUtils",
    "WAWebSetPushConfigJob",
    "WAWebSetWorkerLocalStorage",
    "asyncToGeneratorRuntime",
    "cr:27584",
    "getErrorSafe",
    "gkx",
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
      C = (y || (y = n("Promise"))).resolve(),
      b = 0,
      v = y.resolve();
    function S() {
      if (
        o(
          "WAWebPushNotificationsGatingUtils",
        ).canSupportOfflineNotifications() &&
        "serviceWorker" in navigator
      ) {
        var e = ++b;
        return R(function () {
          return L(e);
        });
      }
    }
    function R(e) {
      var t = v.then(
        function () {
          return e();
        },
        function () {
          return e();
        },
      );
      return ((v = t.then(r("WAWebNoop"), r("WAWebNoop"))), t);
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r = n("cr:27584").isOfflineNotificationsEnabled(),
            o =
              (t = yield n("cr:27584").shouldSubscribePushManager(r)) != null
                ? t
                : !1,
            a = yield k();
          if (a != null) {
            var i = a.pushSubscription;
            yield T(r, o, i, e);
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t,
            n,
            a = yield (t = window.navigator.serviceWorker) == null
              ? void 0
              : t.ready;
          if (a == null)
            return (
              yield O(),
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] update failed: no SW registration",
                  ])),
              ),
              null
            );
          var i =
            (n = a.pushManager) == null || n.getSubscription == null
              ? void 0
              : n.getSubscription();
          if (i == null)
            return (
              yield O(),
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] failed to get push manager",
                  ])),
              ),
              null
            );
          var l = window.location.origin + window.location.pathname;
          if (a.scope !== l) return (yield O(), null);
          try {
            return { pushSubscription: yield i };
          } catch (e) {
            return (
              yield O(),
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[push-notification] failed to read push subscription",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("push-notification-get-subscription-failed"),
              null
            );
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t, n, r) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, o) {
            if (x(e, t, n)) return M(!1, o);
            (yield O(),
              r("WAWebL10N").off("locale_change", U),
              t ? yield P(e, o) : n != null && (yield G()));
          },
        )),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n) {
      var r;
      return (
        e &&
        t &&
        ((r = window.Notification) == null ? void 0 : r.permission) ===
          "granted" &&
        n != null
      );
    }
    function $(e) {
      var t = ++b;
      R(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          e ? yield P(!0, t) : yield G();
        }),
      );
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            (yield O(),
            r("WAWebL10N").off("locale_change", U),
            !!o(
              "WAWebPushNotificationsGatingUtils",
            ).canEnableOfflineNotifications())
          )
            try {
              var n, a;
              if (!("serviceWorker" in navigator)) return;
              var i = yield (n = window.navigator.serviceWorker) == null
                ? void 0
                : n.ready;
              if (i == null) return;
              var l = yield i.pushManager.getSubscription();
              if (l != null) return;
              var s = yield o(
                "WAWebGetPushServerSettingsJob",
              ).getPushServerSettings();
              if (s.errorCode != null) {
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[push-notification] subscribe failed: settings err ",
                      "",
                    ])),
                  s.errorCode,
                );
                return;
              }
              var u = new Uint8Array(o("WABase64").decodeB64UrlSafe(String(s))),
                p = { userVisibleOnly: !0, applicationServerKey: u },
                _ = yield i.pushManager.subscribe(p),
                f = yield o("WAWebSetPushConfigJob").setPushConfig(_);
              if ((f == null ? void 0 : f.errorCode) != null) {
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[push-notification] subscribe failed: server err ",
                      "",
                    ])),
                  f.errorText,
                );
                return;
              }
              e &&
              ((a = window.Notification) == null ? void 0 : a.permission) ===
                "granted"
                ? yield M(!0, t)
                : yield A(!0);
            } catch (e) {
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] subscribe failed: ",
                    "",
                  ])),
                e,
              );
            }
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if ((yield O(), !r("gkx")("15473"))) {
            yield A(e);
            return;
          }
          (r("WAWebL10N").off("locale_change", U),
            r("WAWebL10N").on("locale_change", U));
          var n = yield W(),
            a = yield U();
          if (!(!n || !a || t !== b))
            try {
              yield o(
                "WAWebSetWorkerLocalStorage",
              ).setWorkerLocalStorageForOfflineResume(!0);
            } catch (e) {
              e instanceof o("WAWebDbErrors").DbOnLogoutAbort ||
                o("WALogger")
                  .WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[push-notification] failed to store offline resume treatment",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs(
                    "push-notification-offline-resume-treatment-write-failed",
                  );
            }
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (e && (yield o("WAWebSetWorkerLocalStorage").setWorkerLocalStorage()),
            n("cr:27584").updateOfflineNotificationL10nStrings(),
            r("WAWebL10N").on("locale_change", function () {
              n("cr:27584").updateOfflineNotificationL10nStrings();
            }));
        })),
        F.apply(this, arguments)
      );
    }
    function O() {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("WAWebL10N").off("locale_change", U);
          try {
            yield o(
              "WAWebSetWorkerLocalStorage",
            ).clearWorkerPushOfflineResumeTreatment();
          } catch (e) {
            e instanceof o("WAWebDbErrors").DbOnLogoutAbort ||
              o("WALogger")
                .WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[push-notification] failed to clear offline resume treatment",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs(
                  "push-notification-offline-resume-treatment-clear-failed",
                );
          }
        })),
        B.apply(this, arguments)
      );
    }
    function W() {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            return (
              yield o(
                "WAWebSetWorkerLocalStorage",
              ).setWorkerLocalStorageForOfflineResume(),
              !0
            );
          } catch (e) {
            return (
              e instanceof o("WAWebDbErrors").DbOnLogoutAbort ||
                o("WALogger")
                  .WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[push-notification] failed to refresh worker storage",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("push-notification-worker-storage-refresh-failed"),
              !1
            );
          }
        })),
        q.apply(this, arguments)
      );
    }
    function U() {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = !1;
          return (
            (C = C.then(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  (yield n(
                    "cr:27584",
                  ).updateOfflineNotificationL10nStringsForOfflineResume(),
                    (e = !0));
                } catch (e) {
                  e instanceof o("WAWebDbErrors").DbOnLogoutAbort ||
                    o("WALogger")
                      .WARN(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "[push-notification] failed to refresh notification l10n",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("push-notification-l10n-refresh-failed");
                }
              }),
            )),
            yield C,
            e
          );
        })),
        V.apply(this, arguments)
      );
    }
    function H() {
      return (++b, R(G));
    }
    function G() {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            (yield O(),
            r("WAWebL10N").off("locale_change", U),
            !o(
              "WAWebPushNotificationsGatingUtils",
            ).canSupportOfflineNotifications())
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
            var a = yield n.unsubscribe();
            return (
              yield o("WAWebSetWorkerLocalStorage")
                .clearWorkerLocalStorage()
                .catch(function (e) {
                  if (!(e instanceof o("WAWebDbErrors").DbOnLogoutAbort))
                    throw e;
                }),
              a
            );
          } catch (e) {
            return (
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] unsubscribe failed: ",
                    "",
                  ])),
                e,
              ),
              !1
            );
          }
        })),
        z.apply(this, arguments)
      );
    }
    ((l.updatePushManager = S),
      (l.handleOfflineNotifications = $),
      (l.unsubscribePushManager = H));
  },
  98,
);

__d(
  "WAWebSubscribePushManagerAction",
  [
    "$InternalEnum",
    "Promise",
    "WABase64",
    "WALogger",
    "WAWebDbErrors",
    "WAWebGetPushServerSettingsJob",
    "WAWebL10N",
    "WAWebNoop",
    "WAWebPersistedPrefObject",
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
      C,
      b,
      v,
      S,
      R = n("$InternalEnum").Mirrored(["AcknowledgedPushPreferences"]),
      L = R.AcknowledgedPushPreferences,
      E = (S || (S = n("Promise"))).resolve(),
      k = !1,
      I = !1,
      T = 0,
      D = S.resolve();
    function x() {
      if (
        o(
          "WAWebPushNotificationsGatingUtils",
        ).canSupportOfflineNotifications() &&
        "serviceWorker" in navigator
      ) {
        U();
        var e = ++T;
        return $(function () {
          return P(e);
        });
      }
    }
    function $(e) {
      var t = D.then(
        function () {
          return e();
        },
        function () {
          return e();
        },
      );
      return ((D = t.then(r("WAWebNoop"), r("WAWebNoop"))), t);
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r = n("cr:27584").isOfflineNotificationsEnabled(),
            o =
              (t = yield n("cr:27584").shouldSubscribePushManager(r)) != null
                ? t
                : !1,
            a = yield M();
          if (a != null) {
            var i = a.pushSubscription;
            yield A(r, o, i, e);
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t,
            n = yield (e = window.navigator.serviceWorker) == null
              ? void 0
              : e.ready;
          if (n == null)
            return (
              yield Z(),
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] update failed: no SW registration",
                  ])),
              ),
              null
            );
          var a =
            (t = n.pushManager) == null || t.getSubscription == null
              ? void 0
              : t.getSubscription();
          if (a == null)
            return (
              yield Z(),
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] failed to get push manager",
                  ])),
              ),
              null
            );
          var i = window.location.origin + window.location.pathname;
          if (n.scope !== i) return (yield Z(), null);
          try {
            return { pushSubscription: yield a };
          } catch (e) {
            return (
              yield Z(),
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[push-notification] failed to read push subscription",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("push-notification-get-subscription-failed"),
              null
            );
          }
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t, n, r) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, o) {
            (O(e, t, n)
              ? yield Q(!1, o)
              : (yield Z(),
                r("WAWebL10N").off("locale_change", re),
                t ? yield W(e, o) : n != null && (yield ie())),
              n != null && t && (yield H(n)));
          },
        )),
        F.apply(this, arguments)
      );
    }
    function O(e, t, n) {
      var r;
      return (
        e &&
        t &&
        ((r = window.Notification) == null ? void 0 : r.permission) ===
          "granted" &&
        n != null
      );
    }
    function B(e) {
      var t = ++T;
      $(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          e ? yield W(!0, t) : yield ie();
        }),
      );
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            (yield Z(),
            r("WAWebL10N").off("locale_change", re),
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
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[push-notification] subscribe failed: settings err ",
                      "",
                    ])),
                  s.errorCode,
                );
                return;
              }
              var u = new Uint8Array(o("WABase64").decodeB64UrlSafe(String(s))),
                c = { userVisibleOnly: !0, applicationServerKey: u },
                f = yield i.pushManager.subscribe(c);
              K(f.endpoint, null, { acknowledged: !1 });
              try {
                var g = yield o("WAWebSetPushConfigJob").setPushConfig(f);
                (g == null ? void 0 : g.errorCode) != null
                  ? o("WALogger").WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[push-notification] subscribe failed: server err ",
                          "",
                        ])),
                      g.errorText,
                    )
                  : K(f.endpoint, null, { acknowledged: !0 });
              } catch (e) {
                o("WALogger").WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[push-notification] subscribe config failed: ",
                      "",
                    ])),
                  e,
                );
              }
              (e &&
              ((a = window.Notification) == null ? void 0 : a.permission) ===
                "granted"
                ? yield Q(!0, t)
                : yield Y(!0),
                yield H(f));
            } catch (e) {
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] subscribe failed: ",
                    "",
                  ])),
                e,
              );
            }
        })),
        q.apply(this, arguments)
      );
    }
    function U() {
      k || ((k = !0), n("cr:27584").onPushPreferencesInputsChange(V));
    }
    function V() {
      I ||
        ((I = !0),
        $(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            I = !1;
            try {
              var t,
                a,
                i,
                l =
                  (t = yield n("cr:27584").shouldSubscribePushManager(
                    n("cr:27584").getOfflineNotificationsSetting(),
                  )) != null
                    ? t
                    : !1;
              if (!l) return;
              var s = yield (a = window.navigator.serviceWorker) == null
                ? void 0
                : a.ready;
              if (
                (s == null ? void 0 : s.scope) !==
                window.location.origin + window.location.pathname
              )
                return;
              var u = yield s == null ||
              (i = s.pushManager) == null ||
              i.getSubscription == null
                ? void 0
                : i.getSubscription();
              u != null
                ? yield H(u)
                : n("cr:27584").getPushPreferences() != null && x();
            } catch (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[push-notification] push subscription read for preferences sync failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs(
                  "push-notification-preferences-sync-subscription-failed",
                );
            }
          }),
        ));
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = n("cr:27584").getPushPreferences();
          if (!z(e.endpoint, t)) {
            K(e.endpoint, t, { acknowledged: !1 });
            try {
              var a = yield o("WAWebSetPushConfigJob").setPushConfig(e, t);
              if ((a == null ? void 0 : a.errorCode) != null) {
                o("WALogger")
                  .WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[push-notification] push preferences sync failed: server err ",
                        "",
                      ])),
                    a.errorText,
                  )
                  .sendLogs("push-notification-preferences-sync-rejected");
                return;
              }
            } catch (e) {
              o("WALogger")
                .WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[push-notification] push preferences sync failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("push-notification-preferences-sync-failed");
              return;
            }
            K(e.endpoint, t, { acknowledged: !0 });
          }
        })),
        G.apply(this, arguments)
      );
    }
    function z(e, t) {
      var n = o("WAWebPersistedPrefObject").readPersistedPrefObject(
        L,
        j,
        "push-notification-acknowledged-preferences-malformed",
      );
      return n == null
        ? t == null
        : n.acknowledged &&
            n.endpoint === e &&
            n.pushPreferences === (t != null ? t : null);
    }
    function j(e) {
      var t = e.acknowledged,
        n = e.endpoint,
        r = e.pushPreferences;
      return typeof n != "string" || (r != null && typeof r != "number")
        ? null
        : {
            acknowledged: t === !0,
            endpoint: n,
            pushPreferences: r != null ? r : null,
          };
    }
    function K(e, t, n) {
      var r = n.acknowledged;
      o("WAWebPersistedPrefObject").writePersistedPrefObject(L, {
        acknowledged: r,
        endpoint: e,
        pushPreferences: t != null ? t : null,
      });
    }
    function Q(e, t) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if ((yield Z(), !r("gkx")("15473"))) {
            yield Y(e);
            return;
          }
          (r("WAWebL10N").off("locale_change", re),
            r("WAWebL10N").on("locale_change", re));
          var n = yield te(),
            a = yield re();
          if (!(!n || !a || t !== T))
            try {
              yield o(
                "WAWebSetWorkerLocalStorage",
              ).setWorkerLocalStorageForOfflineResume(!0);
            } catch (e) {
              e instanceof o("WAWebDbErrors").DbOnLogoutAbort ||
                o("WALogger")
                  .WARN(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[push-notification] failed to store offline resume treatment",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs(
                    "push-notification-offline-resume-treatment-write-failed",
                  );
            }
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (e && (yield o("WAWebSetWorkerLocalStorage").setWorkerLocalStorage()),
            n("cr:27584").updateOfflineNotificationL10nStrings(),
            r("WAWebL10N").on("locale_change", function () {
              n("cr:27584").updateOfflineNotificationL10nStrings();
            }));
        })),
        J.apply(this, arguments)
      );
    }
    function Z() {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("WAWebL10N").off("locale_change", re);
          try {
            yield o(
              "WAWebSetWorkerLocalStorage",
            ).clearWorkerPushOfflineResumeTreatment();
          } catch (e) {
            e instanceof o("WAWebDbErrors").DbOnLogoutAbort ||
              o("WALogger")
                .WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[push-notification] failed to clear offline resume treatment",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs(
                  "push-notification-offline-resume-treatment-clear-failed",
                );
          }
        })),
        ee.apply(this, arguments)
      );
    }
    function te() {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[push-notification] failed to refresh worker storage",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("push-notification-worker-storage-refresh-failed"),
              !1
            );
          }
        })),
        ne.apply(this, arguments)
      );
    }
    function re() {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = !1;
          return (
            (E = E.then(
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
                        b ||
                          (b = babelHelpers.taggedTemplateLiteralLoose([
                            "[push-notification] failed to refresh notification l10n",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("push-notification-l10n-refresh-failed");
                }
              }),
            )),
            yield E,
            e
          );
        })),
        oe.apply(this, arguments)
      );
    }
    function ae() {
      return (++T, $(ie));
    }
    function ie() {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            (yield Z(),
            r("WAWebL10N").off("locale_change", re),
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
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] unsubscribe failed: ",
                    "",
                  ])),
                e,
              ),
              !1
            );
          }
        })),
        le.apply(this, arguments)
      );
    }
    ((l.SubscribePushManagerUserPrefs = R),
      (l.updatePushManager = x),
      (l.handleOfflineNotifications = B),
      (l.syncCurrentPushPreferences = V),
      (l.unsubscribePushManager = ae));
  },
  98,
);

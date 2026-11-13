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
      R,
      L = n("$InternalEnum").Mirrored(["AcknowledgedPushPreferences"]),
      E = L.AcknowledgedPushPreferences,
      k = (R || (R = n("Promise"))).resolve(),
      I = !1,
      T = !1,
      D = 0,
      x = R.resolve();
    function $() {
      if (
        o(
          "WAWebPushNotificationsGatingUtils",
        ).canSupportOfflineNotifications() &&
        "serviceWorker" in navigator
      ) {
        Y();
        var e = ++D;
        return P(function () {
          return N(e);
        });
      }
    }
    function P(e) {
      var t = x.then(
        function () {
          return e();
        },
        function () {
          return e();
        },
      );
      return ((x = t.then(r("WAWebNoop"), r("WAWebNoop"))), t);
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r = n("cr:27584").isOfflineNotificationsEnabled(),
            o =
              (t = yield n("cr:27584").shouldSubscribePushManager(r)) != null
                ? t
                : !1,
            a = !o && n("cr:27584").shouldSubscribeForClosedTabCalls(),
            i = yield w();
          if (i != null) {
            var l = i.pushSubscription;
            yield F(r, o, a, l, e);
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w() {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t,
            n = yield (e = window.navigator.serviceWorker) == null
              ? void 0
              : e.ready;
          if (n == null)
            return (
              yield me(),
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
              yield me(),
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] failed to get push manager",
                  ])),
              ),
              null
            );
          var i = window.location.origin + window.location.pathname;
          if (n.scope !== i) return (yield me(), null);
          try {
            return { pushSubscription: yield a };
          } catch (e) {
            return (
              yield me(),
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
        A.apply(this, arguments)
      );
    }
    function F(e, t, n, r, o) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, o, a) {
            if (B(e, t, o)) yield se(!1, a);
            else if ((yield me(), r("WAWebL10N").off("locale_change", ge), t))
              yield q(e, a);
            else if (n) {
              yield G(o, a);
              return;
            } else o != null && (yield Ce());
            o != null && t && (yield te(o));
          },
        )),
        O.apply(this, arguments)
      );
    }
    function B(e, t, n) {
      var r;
      return (
        e &&
        t &&
        ((r = window.Notification) == null ? void 0 : r.permission) ===
          "granted" &&
        n != null
      );
    }
    function W(e) {
      if (n("cr:27584").shouldSubscribeForClosedTabCalls()) {
        (e || n("cr:27584").preventBackgroundSyncAutoEnable(), $());
        return;
      }
      var t = ++D;
      P(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          e ? yield q(!0, t) : yield Ce();
        }),
      );
    }
    function q(e, t, n) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = !1);
          var a = yield me();
          if (
            (r("WAWebL10N").off("locale_change", ge),
            !(n && !a) &&
              o(
                "WAWebPushNotificationsGatingUtils",
              ).canEnableOfflineNotifications())
          )
            try {
              var i, l;
              if (!("serviceWorker" in navigator)) return;
              var s = yield (i = window.navigator.serviceWorker) == null
                ? void 0
                : i.ready;
              if (s == null) return;
              var u = yield s.pushManager.getSubscription();
              if (u != null) return;
              var c = yield o(
                "WAWebGetPushServerSettingsJob",
              ).getPushServerSettings();
              if (c.errorCode != null) {
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[push-notification] subscribe failed: settings err ",
                      "",
                    ])),
                  c.errorCode,
                );
                return;
              }
              var p = new Uint8Array(o("WABase64").decodeB64UrlSafe(String(c))),
                _ = { userVisibleOnly: !0, applicationServerKey: p },
                f = yield s.pushManager.subscribe(_);
              if (n) {
                yield j(f);
                return;
              }
              (yield V(f),
                e &&
                ((l = window.Notification) == null ? void 0 : l.permission) ===
                  "granted"
                  ? yield se(!0, t)
                  : yield ce(!0),
                yield te(f));
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
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          le(e.endpoint, null, { acknowledged: !1 });
          try {
            var t = yield o("WAWebSetPushConfigJob").setPushConfig(e);
            (t == null ? void 0 : t.errorCode) != null
              ? o("WALogger").WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[push-notification] subscribe failed: server err ",
                      "",
                    ])),
                  t.errorText,
                )
              : le(e.endpoint, null, { acknowledged: !0 });
          } catch (e) {
            o("WALogger").WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[push-notification] subscribe config failed: ",
                  "",
                ])),
              e,
            );
          }
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!(yield me())) {
            e != null && (yield Ce());
            return;
          }
          if (e == null) {
            yield q(!1, t, !0);
            return;
          }
          yield j(e);
        })),
        z.apply(this, arguments)
      );
    }
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = n("cr:27584").getPushPreferences(!1);
          if (t == null) {
            yield Ce();
            return;
          }
          if (!(yield te(e, t)) && !re(e.endpoint, t)) {
            yield Ce();
            return;
          }
          (r("WAWebL10N").off("locale_change", ge),
            r("WAWebL10N").on("locale_change", ge),
            ge(),
            yield Q());
        })),
        K.apply(this, arguments)
      );
    }
    function Q() {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield o(
              "WAWebSetWorkerLocalStorage",
            ).setWorkerLocalStorageForOfflineResume();
          } catch (e) {
            e instanceof o("WAWebDbErrors").DbOnLogoutAbort ||
              o("WALogger")
                .WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[push-notification] failed to store worker identity for a calls-only subscription",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs(
                  "push-notification-calls-only-worker-identity-failed",
                );
          }
        })),
        X.apply(this, arguments)
      );
    }
    function Y() {
      I || ((I = !0), n("cr:27584").onPushPreferencesInputsChange(J));
    }
    function J() {
      T ||
        ((T = !0),
        P(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            T = !1;
            try {
              var t,
                a,
                i,
                l =
                  (t = yield n("cr:27584").shouldSubscribePushManager(
                    n("cr:27584").getOfflineNotificationsSetting(),
                  )) != null
                    ? t
                    : !1,
                s = yield (a = window.navigator.serviceWorker) == null
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
              if (l) {
                u != null
                  ? yield te(u)
                  : n("cr:27584").getPushPreferences() != null && $();
                return;
              }
              yield Z(u);
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
    function Z(e) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          n("cr:27584").shouldSubscribeForClosedTabCalls()
            ? yield G(e, D)
            : e != null && oe(e.endpoint) && (yield Ce());
        })),
        ee.apply(this, arguments)
      );
    }
    function te(e, t) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            (t === void 0 && (t = n("cr:27584").getPushPreferences()),
            re(e.endpoint, t))
          )
            return !0;
          le(e.endpoint, t, { acknowledged: !1 });
          try {
            var a = yield o("WAWebSetPushConfigJob").setPushConfig(e, t);
            if ((a == null ? void 0 : a.errorCode) != null)
              return (
                o("WALogger")
                  .WARN(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[push-notification] push preferences sync failed: server err ",
                        "",
                      ])),
                    a.errorText,
                  )
                  .sendLogs("push-notification-preferences-sync-rejected"),
                !1
              );
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[push-notification] push preferences sync failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("push-notification-preferences-sync-failed"),
              !1
            );
          }
          return (le(e.endpoint, t, { acknowledged: !0 }), !0);
        })),
        ne.apply(this, arguments)
      );
    }
    function re(e, t) {
      var n = ae();
      return n == null
        ? t == null
        : n.acknowledged &&
            n.endpoint === e &&
            n.pushPreferences === (t != null ? t : null);
    }
    function oe(e) {
      var t = ae();
      return t != null && t.endpoint === e && t.pushPreferences != null;
    }
    function ae() {
      var e;
      return (e = o("WAWebPersistedPrefObject").readPersistedPrefObject(
        E,
        ie,
        "push-notification-acknowledged-preferences-malformed",
        { ignoreCache: !0 },
      )) != null
        ? e
        : o("WAWebPersistedPrefObject").readPersistedPrefObject(
            E,
            ie,
            "push-notification-acknowledged-preferences-malformed",
          );
    }
    function ie(e) {
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
    function le(e, t, n) {
      var r = n.acknowledged;
      o("WAWebPersistedPrefObject").writePersistedPrefObject(E, {
        acknowledged: r,
        endpoint: e,
        pushPreferences: t != null ? t : null,
      });
    }
    function se(e, t) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if ((yield me(), !r("gkx")("15473"))) {
            yield ce(e);
            return;
          }
          (r("WAWebL10N").off("locale_change", ge),
            r("WAWebL10N").on("locale_change", ge));
          var n = yield _e(),
            a = yield ge();
          if (!(!n || !a || t !== D))
            try {
              yield o(
                "WAWebSetWorkerLocalStorage",
              ).setWorkerLocalStorageForOfflineResume(!0);
            } catch (e) {
              e instanceof o("WAWebDbErrors").DbOnLogoutAbort ||
                o("WALogger")
                  .WARN(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[push-notification] failed to store offline resume treatment",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs(
                    "push-notification-offline-resume-treatment-write-failed",
                  );
            }
        })),
        ue.apply(this, arguments)
      );
    }
    function ce(e) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (e && (yield o("WAWebSetWorkerLocalStorage").setWorkerLocalStorage()),
            n("cr:27584").updateOfflineNotificationL10nStrings(),
            r("WAWebL10N").on("locale_change", function () {
              n("cr:27584").updateOfflineNotificationL10nStrings();
            }));
        })),
        de.apply(this, arguments)
      );
    }
    function me() {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("WAWebL10N").off("locale_change", ge);
          try {
            return (
              yield o(
                "WAWebSetWorkerLocalStorage",
              ).clearWorkerPushOfflineResumeTreatment(),
              !0
            );
          } catch (e) {
            return (
              e instanceof o("WAWebDbErrors").DbOnLogoutAbort ||
                o("WALogger")
                  .WARN(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[push-notification] failed to clear offline resume treatment",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs(
                    "push-notification-offline-resume-treatment-clear-failed",
                  ),
              !1
            );
          }
        })),
        pe.apply(this, arguments)
      );
    }
    function _e() {
      return fe.apply(this, arguments);
    }
    function fe() {
      return (
        (fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "[push-notification] failed to refresh worker storage",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("push-notification-worker-storage-refresh-failed"),
              !1
            );
          }
        })),
        fe.apply(this, arguments)
      );
    }
    function ge() {
      return he.apply(this, arguments);
    }
    function he() {
      return (
        (he = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = !1;
          return (
            (k = k.then(
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
                        v ||
                          (v = babelHelpers.taggedTemplateLiteralLoose([
                            "[push-notification] failed to refresh notification l10n",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("push-notification-l10n-refresh-failed");
                }
              }),
            )),
            yield k,
            e
          );
        })),
        he.apply(this, arguments)
      );
    }
    function ye() {
      return (++D, P(Ce));
    }
    function Ce() {
      return be.apply(this, arguments);
    }
    function be() {
      return (
        (be = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            (yield me(),
            r("WAWebL10N").off("locale_change", ge),
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
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] unsubscribe failed: ",
                    "",
                  ])),
                e,
              ),
              !1
            );
          }
        })),
        be.apply(this, arguments)
      );
    }
    ((l.SubscribePushManagerUserPrefs = L),
      (l.updatePushManager = $),
      (l.handleOfflineNotifications = W),
      (l.syncCurrentPushPreferences = J),
      (l.unsubscribePushManager = ye));
  },
  98,
);

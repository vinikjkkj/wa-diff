__d(
  "WAWebSubscribePushManagerAction",
  [
    "$InternalEnum",
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
      E = Promise.resolve(),
      k = !1,
      I = !1,
      T = 0,
      D = Promise.resolve();
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
    async function P(e) {
      var t,
        r = n("cr:27584").isOfflineNotificationsEnabled(),
        o =
          (t = await n("cr:27584").shouldSubscribePushManager(r)) != null
            ? t
            : !1,
        a = !o && n("cr:27584").shouldSubscribeWithoutBackgroundSync(),
        i = await N();
      if (i != null) {
        var l = i.pushSubscription;
        await M(r, o, a, l, e);
      }
    }
    async function N() {
      var t,
        n,
        a = await ((t = window.navigator.serviceWorker) == null
          ? void 0
          : t.ready);
      if (a == null)
        return (
          await Z(),
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
          await Z(),
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[push-notification] failed to get push manager",
              ])),
          ),
          null
        );
      var l = window.location.origin + window.location.pathname;
      if (a.scope !== l) return (await Z(), null);
      try {
        return { pushSubscription: await i };
      } catch (e) {
        return (
          await Z(),
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
    }
    async function M(e, t, n, o, a) {
      if (w(e, t, o)) await Y(!1, a);
      else if ((await Z(), r("WAWebL10N").off("locale_change", te), t))
        await F(e, a);
      else if (n) {
        await B(o, a);
        return;
      } else o != null && (await re());
      o != null && t && (await G(o));
    }
    function w(e, t, n) {
      var r;
      return (
        e &&
        t &&
        ((r = window.Notification) == null ? void 0 : r.permission) ===
          "granted" &&
        n != null
      );
    }
    function A(e) {
      if (n("cr:27584").shouldSubscribeWithoutBackgroundSync()) {
        (e || n("cr:27584").preventBackgroundSyncAutoEnable(), x());
        return;
      }
      var t = ++T;
      $(async function () {
        e ? await F(!0, t) : await re();
      });
    }
    async function F(e, t, n) {
      n === void 0 && (n = !1);
      var a = await Z();
      if (
        (r("WAWebL10N").off("locale_change", te),
        !(n && !a) &&
          o(
            "WAWebPushNotificationsGatingUtils",
          ).canEnableOfflineNotifications())
      )
        try {
          var i, l;
          if (!("serviceWorker" in navigator)) return;
          var s = await ((i = window.navigator.serviceWorker) == null
            ? void 0
            : i.ready);
          if (s == null) return;
          var u = await s.pushManager.getSubscription();
          if (u != null) return;
          var m = await o(
            "WAWebGetPushServerSettingsJob",
          ).getPushServerSettings();
          if (m.errorCode != null) {
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[push-notification] subscribe failed: settings err ",
                  "",
                ])),
              m.errorCode,
            );
            return;
          }
          var p = new Uint8Array(o("WABase64").decodeB64UrlSafe(String(m))),
            _ = { userVisibleOnly: !0, applicationServerKey: p },
            f = await s.pushManager.subscribe(_);
          if (n) {
            await W(f);
            return;
          }
          (await O(f),
            e &&
            ((l = window.Notification) == null ? void 0 : l.permission) ===
              "granted"
              ? await Y(!0, t)
              : await J(!0),
            await G(f));
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
    }
    async function O(e) {
      X(e.endpoint, null, { acknowledged: !1 });
      try {
        var t = await o("WAWebSetPushConfigJob").setPushConfig(e);
        (t == null ? void 0 : t.errorCode) != null
          ? o("WALogger").WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[push-notification] subscribe failed: server err ",
                  "",
                ])),
              t.errorText,
            )
          : X(e.endpoint, null, { acknowledged: !0 });
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
    }
    async function B(e, t) {
      if (!(await Z())) {
        e != null && (await re());
        return;
      }
      if (e == null) {
        await F(!1, t, !0);
        return;
      }
      await W(e);
    }
    async function W(e) {
      var t = n("cr:27584").getPushPreferences(!1);
      if (t == null) {
        await re();
        return;
      }
      if (!(await G(e, t)) && !z(e.endpoint, t)) {
        await re();
        return;
      }
      (r("WAWebL10N").off("locale_change", te),
        r("WAWebL10N").on("locale_change", te),
        te(),
        await q());
    }
    async function q() {
      try {
        await o(
          "WAWebSetWorkerLocalStorage",
        ).setWorkerLocalStorageForOfflineResume();
      } catch (e) {
        e instanceof o("WAWebDbErrors").DbOnLogoutAbort ||
          o("WALogger")
            .WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[push-notification] failed to store worker identity for a subscription without Background Sync",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("push-notification-no-sync-worker-identity-failed");
      }
    }
    function U() {
      k || ((k = !0), n("cr:27584").onPushPreferencesInputsChange(V));
    }
    function V() {
      I ||
        ((I = !0),
        $(async function () {
          I = !1;
          try {
            var e,
              t,
              a,
              i =
                (e = await n("cr:27584").shouldSubscribePushManager(
                  n("cr:27584").getOfflineNotificationsSetting(),
                )) != null
                  ? e
                  : !1,
              l = await ((t = window.navigator.serviceWorker) == null
                ? void 0
                : t.ready);
            if (
              (l == null ? void 0 : l.scope) !==
              window.location.origin + window.location.pathname
            )
              return;
            var s = await (l == null ||
            (a = l.pushManager) == null ||
            a.getSubscription == null
              ? void 0
              : a.getSubscription());
            if (i) {
              s != null
                ? await G(s)
                : n("cr:27584").getPushPreferences() != null && x();
              return;
            }
            await H(s);
          } catch (e) {
            o("WALogger")
              .WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] push subscription read for preferences sync failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs(
                "push-notification-preferences-sync-subscription-failed",
              );
          }
        }));
    }
    async function H(e) {
      n("cr:27584").shouldSubscribeWithoutBackgroundSync()
        ? await B(e, T)
        : e != null && j(e.endpoint) && (await re());
    }
    async function G(e, t) {
      if (
        (t === void 0 && (t = n("cr:27584").getPushPreferences()),
        z(e.endpoint, t))
      )
        return !0;
      X(e.endpoint, t, { acknowledged: !1 });
      try {
        var a = await o("WAWebSetPushConfigJob").setPushConfig(e, t);
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
      return (X(e.endpoint, t, { acknowledged: !0 }), !0);
    }
    function z(e, t) {
      var n = K();
      return n == null
        ? t == null
        : n.acknowledged &&
            n.endpoint === e &&
            n.pushPreferences === (t != null ? t : null);
    }
    function j(e) {
      var t = K();
      return t != null && t.endpoint === e && t.pushPreferences != null;
    }
    function K() {
      var e;
      return (e = o("WAWebPersistedPrefObject").readPersistedPrefObject(
        L,
        Q,
        "push-notification-acknowledged-preferences-malformed",
        { ignoreCache: !0 },
      )) != null
        ? e
        : o("WAWebPersistedPrefObject").readPersistedPrefObject(
            L,
            Q,
            "push-notification-acknowledged-preferences-malformed",
          );
    }
    function Q(e) {
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
    function X(e, t, n) {
      var r = n.acknowledged;
      o("WAWebPersistedPrefObject").writePersistedPrefObject(L, {
        acknowledged: r,
        endpoint: e,
        pushPreferences: t != null ? t : null,
      });
    }
    async function Y(e, t) {
      if ((await Z(), !r("gkx")("15473"))) {
        await J(e);
        return;
      }
      (r("WAWebL10N").off("locale_change", te),
        r("WAWebL10N").on("locale_change", te));
      var n = await ee(),
        a = await te();
      if (!(!n || !a || t !== T))
        try {
          await o(
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
    }
    async function J(e) {
      (e && (await o("WAWebSetWorkerLocalStorage").setWorkerLocalStorage()),
        n("cr:27584").updateOfflineNotificationL10nStrings(),
        r("WAWebL10N").on("locale_change", function () {
          n("cr:27584").updateOfflineNotificationL10nStrings();
        }));
    }
    async function Z() {
      r("WAWebL10N").off("locale_change", te);
      try {
        return (
          await o(
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
    }
    async function ee() {
      try {
        return (
          await o(
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
    }
    async function te() {
      var e = !1;
      return (
        (E = E.then(async function () {
          try {
            (await n(
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
        })),
        await E,
        e
      );
    }
    function ne() {
      return (++T, $(re));
    }
    async function re() {
      if (
        (await Z(),
        r("WAWebL10N").off("locale_change", te),
        !o(
          "WAWebPushNotificationsGatingUtils",
        ).canSupportOfflineNotifications())
      )
        return !1;
      try {
        var e;
        if (!("serviceWorker" in navigator)) return !1;
        var t = await ((e = window.navigator.serviceWorker) == null
          ? void 0
          : e.ready);
        if (t == null) return !1;
        var n = await t.pushManager.getSubscription();
        if (n == null) return !1;
        var a = await n.unsubscribe();
        return (
          await o("WAWebSetWorkerLocalStorage")
            .clearWorkerLocalStorage()
            .catch(function (e) {
              if (!(e instanceof o("WAWebDbErrors").DbOnLogoutAbort)) throw e;
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
    }
    ((l.SubscribePushManagerUserPrefs = R),
      (l.updatePushManager = x),
      (l.handleOfflineNotifications = A),
      (l.syncCurrentPushPreferences = V),
      (l.unsubscribePushManager = ne));
  },
  98,
);

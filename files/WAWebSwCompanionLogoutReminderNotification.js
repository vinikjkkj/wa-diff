__d(
  "WAWebSwCompanionLogoutReminderNotification",
  [
    "WALogger",
    "WAWebNoop",
    "WAWebNotificationWorkerBackend",
    "WAWebPushNotificationsGatingUtils",
    "WAWebSwResources",
    "WAWebWamEnumLogType",
    "WAWebWamWorkerInterface",
    "WAWebWebcMinorEventLogWamEvent",
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
      g = "web_companion_logout_reminder",
      h = g + ":",
      y = 2e3,
      C = 0,
      b = Promise.resolve();
    function v(t) {
      if (t == null || typeof t != "object") return null;
      var n = t.body,
        r = t.category,
        a = t.title;
      return r !== g
        ? null
        : typeof a != "string" || a === "" || typeof n != "string" || n === ""
          ? (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[PushNotif] companion logout reminder push without title or body",
                ])),
            ),
            null)
          : { title: a, body: n };
    }
    function S() {
      try {
        return r("justknobx")._("7538") === !0;
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[PushNotif] companion logout reminder disable knob read failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("sw-companion-logout-reminder-disable-knob-read-failed"),
          !1
        );
      }
    }
    function R(e) {
      var t = b.then(function () {
        return L(e);
      });
      return ((b = t.then(r("WAWebNoop"), r("WAWebNoop"))), t);
    }
    async function L(e) {
      var t = e.body,
        n = e.title;
      if (
        !o(
          "WAWebPushNotificationsGatingUtils",
        ).isNotificationPermissionGranted()
      ) {
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[PushNotif] skipped companion logout reminder, notification permission not granted",
            ])),
        ),
          await T("permission_skipped"));
        return;
      }
      C++;
      var a = "" + h + Date.now().toString(36) + "." + C.toString(36),
        i = await k();
      try {
        await self.registration.showNotification(n, {
          body: t,
          icon: r("WAWebSwResources").wa_default_notification_icon,
          tag: a,
          data: { type: g },
        });
      } catch (e) {
        (o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[PushNotif] failed to show companion logout reminder",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("sw-companion-logout-reminder-show-failed"),
          await T("show_failed"));
        return;
      }
      (o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "[PushNotif] showed companion logout reminder ",
            "",
          ])),
        a,
      ),
        await I(i),
        await T("shown"));
    }
    async function E(e) {
      var t = e.data;
      t == null || typeof t != "object" || t.type !== g || (await T("clicked"));
    }
    async function k() {
      try {
        var e = await self.registration.getNotifications();
        return e.filter(function (e) {
          return e.tag.startsWith(h);
        });
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[PushNotif] failed to close older companion logout reminders",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("sw-companion-logout-reminder-close-failed"),
          []
        );
      }
    }
    async function I(e) {
      e.length !== 0 &&
        (o("WAWebNotificationWorkerBackend").closingCanHideNewNotification() &&
          (await new Promise(function (e) {
            return self.setTimeout(e, y);
          })),
        e.forEach(function (e) {
          return e.close();
        }),
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[PushNotif] closed ",
              " older companion logout reminders",
            ])),
          e.length,
        ));
    }
    async function T(e) {
      if (D())
        try {
          await o("WAWebWamWorkerInterface").commit(
            new (o("WAWebWebcMinorEventLogWamEvent").WebcMinorEventLogWamEvent)(
              {
                logType: o("WAWebWamEnumLogType").LOG_TYPE.COUNTING_STAT,
                logReason: "sw-companion-logout-reminder",
                logContext: e,
                logCount: 1,
              },
            ),
          );
        } catch (e) {
          o("WALogger")
            .WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[PushNotif] companion logout reminder outcome not logged",
                ])),
            )
            .catching(r("getErrorSafe")(e));
        }
    }
    function D() {
      try {
        return r("justknobx")._("7828") === !0;
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[PushNotif] companion logout reminder logging knob read failed",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          !1
        );
      }
    }
    ((l.COMPANION_LOGOUT_REMINDER_TYPE = g),
      (l.parseCompanionLogoutReminderPushPayload = v),
      (l.isCompanionLogoutReminderDisabled = S),
      (l.showCompanionLogoutReminderNotification = R),
      (l.logCompanionLogoutReminderClick = E));
  },
  98,
);

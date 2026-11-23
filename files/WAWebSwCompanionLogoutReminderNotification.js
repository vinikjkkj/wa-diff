__d(
  "WAWebSwCompanionLogoutReminderNotification",
  [
    "WAHashStringToNumber",
    "WALogger",
    "WATimeUtils",
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
      y = 2e3;
    function C(t) {
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
    function b() {
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
    async function v(e) {
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
          await E("permission_skipped"));
        return;
      }
      var a = Math.floor(Date.now() / o("WATimeUtils").DAY_MILLISECONDS),
        i =
          "" +
          h +
          o("WAHashStringToNumber")
            .hashStringToNumber(
              n +
                `
` +
                t +
                `
` +
                a,
            )
            .toString(36),
        l = await R(i);
      try {
        await self.registration.showNotification(n, {
          body: t,
          icon: r("WAWebSwResources").wa_default_notification_icon,
          tag: i,
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
          await E("show_failed"));
        return;
      }
      (o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "[PushNotif] showed companion logout reminder ",
            "",
          ])),
        i,
      ),
        await L(l),
        await E("shown"));
    }
    async function S(e) {
      var t = e.data;
      t == null || typeof t != "object" || t.type !== g || (await E("clicked"));
    }
    async function R(e) {
      try {
        var t = await self.registration.getNotifications();
        return t.filter(function (t) {
          return t.tag.startsWith(h) && t.tag !== e;
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
    async function L(e) {
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
    async function E(e) {
      if (k())
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
    function k() {
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
      (l.parseCompanionLogoutReminderPushPayload = C),
      (l.isCompanionLogoutReminderDisabled = b),
      (l.showCompanionLogoutReminderNotification = v),
      (l.logCompanionLogoutReminderClick = S));
  },
  98,
);

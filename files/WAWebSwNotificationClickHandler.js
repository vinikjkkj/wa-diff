__d(
  "WAWebSwNotificationClickHandler",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBoolFunc",
    "WAWebCallNotificationActions",
    "WAWebModelStorage",
    "WAWebNotificationWorkerBackend",
    "WAWebSWBusActions",
    "WAWebSwCallNotificationTag",
    "WAWebSwCompanionLogoutReminderNotification",
    "WAWebSwFeature",
    "WAWebSwNotificationClick",
    "WAWebSwWindowClients",
    "WAWebUA",
    "WAWebUserPrefsGeneral",
    "WAWebVoipClosedTabCallRings",
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
      g = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.matchNotificationClick = o("WAWebBoolFunc").returnTrue),
            (t.onNotificationClick = function (e) {
              var t = e.action,
                n = R(e.notification),
                r = C(e.notification),
                a = h(e.notification);
              e.notification.close();
              var i = I();
              if (
                (e.waitUntil(i),
                n != null &&
                  (t === o("WAWebCallNotificationActions").ACCEPT_CALL_ACTION ||
                    t ===
                      o("WAWebCallNotificationActions").DECLINE_CALL_ACTION))
              ) {
                e.waitUntil(b(t, n, r, i));
                return;
              }
              e.waitUntil(
                Promise.all([
                  S(t, r, i),
                  a != null ? y(a, "clicked") : null,
                  o(
                    "WAWebSwCompanionLogoutReminderNotification",
                  ).logCompanionLogoutReminderClick(e.notification),
                ]),
              );
            }),
            (t.matchNotificationClose = o("WAWebBoolFunc").returnTrue),
            (t.onNotificationClose = function (e) {
              e.waitUntil(I());
              var t = C(e.notification);
              t != null && e.waitUntil(v(t, !0));
              var n = h(e.notification);
              (n != null && e.waitUntil(y(n, "dismissed")),
                t == null && n == null && e.waitUntil(k()));
            }),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebSwFeature").SWFeature);
    function h(e) {
      var t = e.tag;
      return C(e) != null ||
        typeof t != "string" ||
        !t.startsWith(
          o("WAWebSwCallNotificationTag").CALL_NOTIFICATION_TAG_PREFIX,
        )
        ? null
        : t.slice(
            o("WAWebSwCallNotificationTag").CALL_NOTIFICATION_TAG_PREFIX.length,
          ) || null;
    }
    async function y(t, n) {
      var a = await o("WAWebSwWindowClients").broadcastToClaimant(
          r("WAWebSWBusActions").CALL_NOTIFICATION_INTERACTION,
          { callId: t, interaction: n },
        ),
        i = a.claimant;
      if (i == null)
        try {
          await o("WAWebVoipClosedTabCallRings").recordClosedTabCallRingOutcome(
            t,
            n,
          );
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[sw] failed to settle a closed tab call ring: ",
                  "",
                ])),
              t,
            )
            .sendLogs("sw-closed-tab-call-ring-settle-failed");
        }
    }
    function C(e) {
      var t,
        n = (t = e.data) == null ? void 0 : t.notificationBannerKey;
      return typeof n == "string" ? n : null;
    }
    async function b(e, t, n, r) {
      var o = await L(e, t, r);
      o || n == null || (await v(n));
    }
    async function v(e, t) {
      t === void 0 && (t = !1);
      var n = await o("WAWebSwWindowClients").broadcastToClaimant(
          r("WAWebSWBusActions").NOTIFICATION_BANNER_CLOSED,
          { bannerKey: e, isUserClose: t },
        ),
        a = n.claimant;
      a == null &&
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[sw] no client handled the close for banner ",
                "",
              ])),
            e,
          )
          .sendLogs("sw-notification-banner-close-unhandled");
    }
    async function S(e, t, n) {
      var a = await o("WAWebSwNotificationClick").getNotificationClickConfig(),
        i =
          t != null
            ? (
                await o("WAWebSwWindowClients").broadcastToClaimant(
                  r("WAWebSWBusActions").NOTIFICATION_BANNER_CLICKED,
                  { bannerKey: t },
                  a.raiseOpenTab,
                )
              ).claimant
            : null;
      if (i == null) {
        await E(e, a, n);
        return;
      }
      try {
        var l = await i.focus();
        await o("WAWebSwNotificationClick").logNotificationClickOutcome(
          a,
          D(l.focused, "claimed_tab_focused"),
        );
      } catch (e) {
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[sw] focus denied forwarding notification banner click: ",
              "",
            ])),
          e,
        ),
          await o("WAWebSwNotificationClick").logNotificationClickOutcome(
            a,
            "claimed_tab_focus_failed",
          ));
      }
    }
    function R(e) {
      var t,
        n = (t = e.data) == null ? void 0 : t.callId;
      return typeof n == "string" ? n : null;
    }
    async function L(e, t, n) {
      var a = e === o("WAWebCallNotificationActions").ACCEPT_CALL_ACTION,
        i = await o("WAWebSwWindowClients").broadcastToClaimant(
          a
            ? r("WAWebSWBusActions").ACCEPT_CALL_FROM_NOTIFICATION
            : r("WAWebSWBusActions").DECLINE_CALL_FROM_NOTIFICATION,
          { callId: t },
        ),
        l = i.claimant,
        s = i.clients;
      if (s.length === 0)
        return (
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[sw] ",
                " from notification with no open client, call ",
                "",
              ])),
            e,
            t,
          ),
          a && (await n, await self.clients.openWindow(self.location.origin)),
          !1
        );
      if (
        (l == null &&
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[sw] no client handled ",
                  " for call ",
                  "",
                ])),
              e,
              t,
            )
            .sendLogs("sw-call-notification-action-unhandled"),
        !a)
      )
        return l != null;
      try {
        await (l != null ? l : s[0]).focus();
      } catch (t) {
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[sw] focus denied handling call notification action ",
              ": ",
              "",
            ])),
          e,
          t,
        );
      }
      return l != null;
    }
    async function E(e, t, n) {
      var r = await o("WAWebSwWindowClients").findWindowClient(t.raiseOpenTab);
      if (r != null) {
        var a,
          i = k(t.raiseOpenTab);
        try {
          a = (await r.focus()).focused;
        } catch (e) {
          throw (
            await o("WAWebSwNotificationClick").logNotificationClickOutcome(
              t,
              "existing_tab_focus_failed",
            ),
            e
          );
        } finally {
          await i;
        }
        await o("WAWebSwNotificationClick").logNotificationClickOutcome(
          t,
          D(
            a,
            o("WAWebSwWindowClients").isMainAppWindow(r)
              ? "existing_tab_focused"
              : "other_window_focused",
          ),
        );
        return;
      }
      try {
        (await o("WAWebModelStorage").initialize(), await x());
      } catch (e) {
        o("WALogger")
          .ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to log offline notification click engagement, error: ",
                "",
              ])),
            e,
          )
          .sendLogs("log-offline-notifications-click-failed");
      }
      var l = self.location.origin;
      (e ===
        o("WAWebNotificationWorkerBackend").OPEN_NOTIFICATIONS_SETTING_ACTION &&
        o("WAWebUA").UA.os !== o("WAWebUA").OS_TYPE.WINDOWS &&
        (l += "/?ns=1"),
        await n,
        await T(l, t));
    }
    async function k(e) {
      try {
        await o("WAWebSwWindowClients").broadcastToClaimant(
          r("WAWebSWBusActions").NOTIFICATION_INTERACTION,
          null,
          e,
        );
      } catch (e) {
        o("WALogger")
          .ERROR(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[sw] could not report a notification interaction to open tabs",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("sw-report-notification-interaction-failed");
      }
    }
    async function I() {
      try {
        (await o("WAWebModelStorage").initialize(),
          await o("WAWebUserPrefsGeneral").setWorkerNotificationInteractionTime(
            o("WATimeUtils").unixTimeWithoutClockSkewCorrection(),
          ));
      } catch (e) {
        o("WALogger")
          .ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[sw] failed to save a notification interaction",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("sw-save-notification-interaction-failed");
      }
    }
    async function T(e, t) {
      var n = t.loggingEnabled
        ? await o("WAWebSwWindowClients").hasOpenAppWindow()
        : null;
      try {
        var r = await self.clients.openWindow(e);
        await o("WAWebSwNotificationClick").logNotificationClickOutcome(
          t,
          r == null
            ? "open_returned_no_window"
            : n === !0
              ? "opened_with_existing_app"
              : n === !1
                ? "opened_without_existing_app"
                : n === null
                  ? "opened_existing_app_unknown"
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          n,
                      );
                    })(),
        );
      } catch (e) {
        throw (
          await o("WAWebSwNotificationClick").logNotificationClickOutcome(
            t,
            "open_failed",
          ),
          e
        );
      }
    }
    function D(e, t) {
      return e ? t : "focus_resolved_unfocused";
    }
    async function x() {
      var e,
        t,
        n = await o("WAWebUserPrefsGeneral").getOfflineNotificationEngagement();
      o("WAWebUserPrefsGeneral").setOfflineNotificationContentEngagement({
        totalNotifShown:
          (e = n == null ? void 0 : n.totalNotifShown) != null ? e : 0,
        totalNotifTapToOpen:
          ((t = n == null ? void 0 : n.totalNotifTapToOpen) != null ? t : 0) +
          1,
      });
    }
    l.default = g;
  },
  98,
);

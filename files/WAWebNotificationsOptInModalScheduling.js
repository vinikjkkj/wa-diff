__d(
  "WAWebNotificationsOptInModalScheduling",
  [
    "WAWebABProps",
    "WAWebMessageQueue",
    "WAWebNotificationHelpers",
    "WAWebNotificationsModalVariant",
    "WAWebNotificationsOptInGating",
    "WAWebNux",
    "WAWebNuxAction",
    "WAWebODS",
    "WAWebOpenNotificationsOptInModal",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebUiIdleEventBus",
    "WAWebUserPrefsNotifications",
    "WAWebWhatsNewGatingUtils",
    "WAWebWhatsNewNux",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      if (
        !o("WAWebNotificationsOptInGating").isNotificationsOptInEligible(
          (t = window.Notification) == null ? void 0 : t.permission,
        ) ||
        !o("WAWebNotificationsOptInGating").shouldShowOptInModalNow()
      )
        return !1;
      var n =
        e ===
        o("WAWebNotificationsModalVariant").NotificationsOptInModalCopy.PostLoad
          ? o("WAWebNotificationsModalVariant").NotificationsModalVariant
              .TimeBased
          : o("WAWebNotificationsModalVariant").NotificationsModalVariant
              .EventBased;
      return (
        o("WAWebNotificationsModalVariant").getNotificationsModalVariant() ===
          n &&
        !(
          o("WAWebWhatsNewGatingUtils").isWhatsNewAutoModalEnabled() &&
          o("WAWebWhatsNewNux").shouldShowWhatsNewNux(
            o("WAWebWhatsNewGatingUtils").getWhatsNewAutoModalCooldownDays(),
          )
        )
      );
    }
    function s() {
      return document.visibilityState === "visible" && document.hasFocus();
    }
    function u(e) {
      return (
        Date.now() >= e &&
        o("WAWebUiIdleEventBus").UiIdleEventBus.uiBusy === 0 &&
        !o("WAWebNotificationHelpers").isOfflineResumeInProgress()
      );
    }
    function c() {
      var e = o("WAWebMessageQueue").getMessageQueueDepth(),
        t = e.offline,
        n = e.online;
      return d() && t === 0 && n === 0;
    }
    function d() {
      return (
        o("WAWebSocketModel").Socket.state ===
          o("WAWebSocketConstants").SOCKET_STATE.CONNECTED &&
        o("WAWebSocketModel").Socket.stream ===
          o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED
      );
    }
    function m(e) {
      var t = e.copy,
        n = e.missedCount;
      (o("WAWebOpenNotificationsOptInModal").openNotificationsOptInModal(
        o("WAWebABProps").getABPropConfigValue(
          "web_notifications_banner_new_logic_enabled",
        ),
        t,
        {
          missedCount: n,
          onModalResolved: function () {
            (o("WAWebNuxAction").viewNux(
              o("WAWebNux").NUX.NOTIFICATIONS_OPT_IN,
            ),
              o("WAWebUserPrefsNotifications").recordOptInModalShown());
          },
        },
      ),
        r("WAWebODS").incr("web.notifications.opt_in.shown"));
    }
    ((l.isNotificationsOptInPromptEligible = e),
      (l.isNotificationsOptInForeground = s),
      (l.isNotificationsOptInReady = u),
      (l.isNotificationsOptInMessagePipelineIdle = c),
      (l.isNotificationsOptInConnected = d),
      (l.showNotificationsOptInPrompt = m));
  },
  98,
);

__d(
  "WAWebWindowsNotificationHelpers",
  [
    "WAAbortError",
    "WALogger",
    "WAWebABProps",
    "WAWebBannerContextMenuActions",
    "WAWebChatGetters",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebMuteCollection",
    "WAWebNotificationHelpers",
    "WAWebWindowsHybridBridgeFactory",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2572",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2573",
    "WAWebWindowsNotificationSettingsHelpers",
    "WAWebWindowsNotificationStrings",
    "WAWebWindowsNotificationToneOption",
    "WAWebWindowsShowNotificationBannerOption",
    "WAWebWindowsUserPrefsNotifications",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k;
    function I(e) {
      return (
        r("WAWebEnvironment").isWindows &&
        o("WAWebMsgGetters").getIsGroupMsg(e) &&
        o("WAWebNotificationHelpers").isMeUserMentionedOrQuoted(e)
      );
    }
    function T(e, t) {
      var n;
      if (r("WAWebEnvironment").isWindows) {
        var a =
          (n = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge()) == null
            ? void 0
            : n.systemIntegrationsBridge;
        a != null && a.closeMessageNotification(e, t);
      }
    }
    function D(t) {
      var n;
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[showMessageNotification] start key=",
              "",
            ])),
          t.key,
        ),
        !r("WAWebEnvironment").isWindows)
      ) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[showMessageNotification] skip - not Windows",
            ])),
        );
        return;
      }
      var a = t.body,
        i = t.chat,
        l = t.contextMenuItems,
        b = t.footer,
        v = t.icon,
        S = t.isReplyable,
        R = t.key,
        L = t.suppressBanner,
        E = t.tag,
        k = t.title;
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[showMessageNotification] key=",
            " tag=",
            " reply=",
            " suppress=",
            "",
          ])),
        R,
        E != null ? E : "null",
        S,
        L,
      );
      var I = null,
        T = null;
      S &&
        (o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "showMessageNotification: Setting up reply functionality",
            ])),
        ),
        (I = o("WAWebWindowsNotificationStrings")
          .getNotificationReplyInputPlaceholder()
          .toString()),
        (T = o("WAWebWindowsNotificationStrings")
          .getNotificationReplyButtonContent()
          .toString()));
      var D = [];
      (l == null ||
        l.forEach(function (e) {
          D.push([e.content, e.action]);
        }),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "showMessageNotification: Context menu items count: ",
              "",
            ])),
          D.length,
        ));
      var x = o(
        "WAWebWindowsUserPrefsNotifications",
      ).getNotificationBannerSetting();
      if (
        (o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "showMessageNotification: Banner notification setting: ",
              "",
            ])),
          x,
        ),
        x ===
          o("WAWebWindowsShowNotificationBannerOption")
            .ShowNotificationBannerOption.Never)
      )
        throw (
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[showMessageNotification] abort - banner notif disabled",
              ])),
          ),
          new (o("WAAbortError").AbortError)(
            "Notification muted due to show banner notification config",
          )
        );
      var $ =
        x ===
        o("WAWebWindowsShowNotificationBannerOption")
          .ShowNotificationBannerOption.OnlyWhenAppIsOpen;
      o("WALogger").LOG(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "[showMessageNotification] suppressOnClose=",
            "",
          ])),
        $,
      );
      var P =
        (n = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge()) == null
          ? void 0
          : n.systemIntegrationsBridge;
      if (P != null) {
        if (
          (o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[showMessageNotification] using HybridBridge",
              ])),
          ),
          P instanceof
            o("WAWebWindowsHybridBridgeSystemIntegrations.v2572")
              .WindowsHybridBridgeSystemIntegrations_v2572)
        )
          try {
            (P.showMessageNotification(
              R,
              E,
              k,
              a,
              v,
              b,
              D.map(function (e) {
                return e[0];
              }),
              D.map(function (e) {
                return e[1];
              }),
              I,
              T,
              L,
            ),
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[showMessageNotification] hybrid bridge notif +",
                  ])),
              ));
          } catch (e) {
            throw (
              o("WALogger").ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "showMessageNotification: Hybrid bridge error: ",
                    "",
                  ])),
                e,
              ),
              e
            );
          }
        else
          try {
            var N = A(i, R);
            (P.showMessageNotification(
              R,
              E,
              k,
              a,
              v,
              b,
              D.map(function (e) {
                return e[0];
              }),
              D.map(function (e) {
                return e[1];
              }),
              I,
              T,
              L,
              Number(N),
            ),
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[showMessageNotification] hybrid bridge notif +",
                  ])),
              ));
          } catch (e) {
            throw (
              o("WALogger").ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "showMessageNotification: Hybrid bridge error: ",
                    "",
                  ])),
                e,
              ),
              e
            );
          }
        return;
      }
    }
    function x(e) {
      var t;
      if (!r("WAWebEnvironment").isWindows) {
        o("WALogger").LOG(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "playTone: Skipping playing tone - not Windows environment",
            ])),
        );
        return;
      }
      var n =
        (t = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge()) == null
          ? void 0
          : t.systemIntegrationsBridge;
      if (
        n == null ||
        n instanceof
          o("WAWebWindowsHybridBridgeSystemIntegrations.v2572")
            .WindowsHybridBridgeSystemIntegrations_v2572 ||
        n instanceof
          o("WAWebWindowsHybridBridgeSystemIntegrations.v2573")
            .WindowsHybridBridgeSystemIntegrations_v2573
      ) {
        o("WALogger").LOG(
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
              "playTone: unsupported bridge for playing tone",
            ])),
        );
        return;
      }
      (o("WALogger").LOG(
        S || (S = babelHelpers.taggedTemplateLiteralLoose(["playTone: ", ""])),
        e,
      ),
        n.playTone(Number(e)));
    }
    function $(e) {
      if (
        !r("WAWebEnvironment").isWindows ||
        !e.shouldShowNotificationPreview()
      )
        return !1;
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      return t.canSend;
    }
    function P(e) {
      if (!r("WAWebEnvironment").isWindows) return [];
      var t = o("WAWebFrontendMsgGetters").getChat(e),
        n = [];
      return (
        t.mute.canMute() &&
          n.push.apply(n, [
            {
              content: o("WAWebWindowsNotificationStrings")
                .getMute8HoursLabel()
                .toString(),
              action: r("WAWebBannerContextMenuActions").MuteChatForEightHours,
            },
            {
              content: o("WAWebWindowsNotificationStrings")
                .getMuteOneWeekLabel()
                .toString(),
              action: r("WAWebBannerContextMenuActions").MuteChatForOneWeek,
            },
            {
              content: o("WAWebWindowsNotificationStrings")
                .getMuteNotificationsLabel()
                .toString(),
              action: r("WAWebBannerContextMenuActions").MuteChat,
            },
          ]),
        n.push({
          content: o("WAWebWindowsNotificationStrings")
            .getDisableNotificationsLabel()
            .toString(),
          action: r("WAWebBannerContextMenuActions").DisableNotifications,
        }),
        n
      );
    }
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          o("WALogger").LOG(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "[IsNotificationsEnabledInSystem] checking status",
              ])),
          );
          var t =
            (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge()) ==
            null
              ? void 0
              : e.systemIntegrationsBridge;
          if (t != null) {
            o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "[IsNotificationsEnabledInSystem] using HybridBridge",
                ])),
            );
            var n = yield t.isNotificationEnabledInSystem();
            return (
              o("WALogger").LOG(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "IsNotificationsEnabledInSystem: Result from hybrid bridge: ",
                    "",
                  ])),
                n,
              ),
              n
            );
          }
          return !1;
        })),
        M.apply(this, arguments)
      );
    }
    function w() {
      window.open("ms-settings:notifications");
    }
    function A(e, t) {
      var n = o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_granular_notifications",
      );
      if (!n && !o("WAWebMuteCollection").MuteCollection.getGlobalSounds())
        return o("WAWebWindowsNotificationToneOption").NotificationToneOption
          .None;
      if (
        !o(
          "WAWebWindowsNotificationSettingsHelpers",
        ).isCustomNotificationTonesEnabled()
      )
        return o("WAWebWindowsNotificationToneOption").NotificationToneOption
          .Default;
      if (e != null && e.toneId != null) {
        var r = o(
          "WAWebWindowsNotificationToneOption",
        ).NotificationToneOption.cast(e.toneId);
        if (r != null) return r;
        o("WALogger").LOG(
          R ||
            (R = babelHelpers.taggedTemplateLiteralLoose([
              "selectNotificationTone: Invalid toneId: ",
              "",
            ])),
          e.toneId,
        );
      }
      return t.startsWith("status-msg:") || t.startsWith("status-reaction:")
        ? o(
            "WAWebWindowsUserPrefsNotifications",
          ).getNotificationToneStatusSetting()
        : e != null && o("WAWebChatGetters").getIsGroup(e)
          ? o(
              "WAWebWindowsUserPrefsNotifications",
            ).getNotificationToneGroupSetting()
          : o(
              "WAWebWindowsUserPrefsNotifications",
            ).getNotificationToneSetting();
    }
    ((l.shouldIgnoreSquelchForGroupMention = I),
      (l.closeMessageNotification = T),
      (l.showMessageNotification = D),
      (l.playTone = x),
      (l.isReplyable = $),
      (l.getContextMenuItems = P),
      (l.IsNotificationsEnabledInSystem = N),
      (l.OpenSystemNotificationsSettings = w));
  },
  98,
);

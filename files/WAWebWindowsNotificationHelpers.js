__d(
  "WAWebWindowsNotificationHelpers",
  [
    "fbt",
    "WAAbortError",
    "WALogger",
    "WAWebABProps",
    "WAWebBannerContextMenuActions",
    "WAWebChatGetters",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebMuteCollection",
    "WAWebNotificationHelpers",
    "WAWebWindowsHybridBridgeFactory",
    "WAWebWindowsNotificationSettingsHelpers",
    "WAWebWindowsNotificationToneOption",
    "WAWebWindowsShowNotificationBannerOption",
    "WAWebWindowsUserPrefsNotifications",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E;
    function k(e) {
      return (
        r("WAWebEnvironment").isWindows &&
        o("WAWebMsgGetters").getIsGroupMsg(e) &&
        o("WAWebNotificationHelpers").isMeUserMentionedOrQuoted(e)
      );
    }
    function I(e, t) {
      var n;
      if (r("WAWebEnvironment").isWindows) {
        var a =
          (n = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge()) == null
            ? void 0
            : n.systemIntegrationsBridge;
        a != null && a.closeMessageNotification(e, t);
      }
    }
    function T(t) {
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
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[showMessageNotification] skip - not Windows",
            ])),
        );
        return;
      }
      var a = t.body,
        i = t.chat,
        l = t.contextMenuItems,
        C = t.footer,
        b = t.icon,
        v = t.isReplyable,
        S = t.key,
        R = t.suppressBanner,
        L = t.tag,
        E = t.title;
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[showMessageNotification] key=",
            " tag=",
            " reply=",
            " suppress=",
            "",
          ])),
        S,
        L != null ? L : "null",
        v,
        R,
      );
      var k = null,
        I = null;
      v &&
        (o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "showMessageNotification: Setting up reply functionality",
            ])),
        ),
        (k = s._(/*BTDS*/ "Type a reply").toString()),
        (I = s._(/*BTDS*/ "Send").toString()));
      var T = [];
      (l == null ||
        l.forEach(function (e) {
          T.push([e.content, e.action]);
        }),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "showMessageNotification: Context menu items count: ",
              "",
            ])),
          T.length,
        ));
      var D = o(
        "WAWebWindowsUserPrefsNotifications",
      ).getNotificationBannerSetting();
      if (
        (o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "showMessageNotification: Banner notification setting: ",
              "",
            ])),
          D,
        ),
        D ===
          o("WAWebWindowsShowNotificationBannerOption")
            .ShowNotificationBannerOption.Never)
      )
        throw (
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[showMessageNotification] abort - banner notif disabled",
              ])),
          ),
          new (o("WAAbortError").AbortError)(
            "Notification muted due to show banner notification config",
          )
        );
      var x =
        D ===
        o("WAWebWindowsShowNotificationBannerOption")
          .ShowNotificationBannerOption.OnlyWhenAppIsOpen;
      o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "[showMessageNotification] suppressOnClose=",
            "",
          ])),
        x,
      );
      var $ =
        (n = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge()) == null
          ? void 0
          : n.systemIntegrationsBridge;
      if ($ != null) {
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "[showMessageNotification] using HybridBridge",
            ])),
        );
        try {
          var P = w(i, S);
          ($.showMessageNotification(
            S,
            L,
            E,
            a,
            b,
            C,
            T.map(function (e) {
              return e[0];
            }),
            T.map(function (e) {
              return e[1];
            }),
            k,
            I,
            R,
            Number(P),
          ),
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[showMessageNotification] hybrid bridge notif +",
                ])),
            ));
        } catch (e) {
          throw (
            o("WALogger").ERROR(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
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
    function D(e) {
      var t;
      if (!r("WAWebEnvironment").isWindows) {
        o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "playTone: Skipping playing tone - not Windows environment",
            ])),
        );
        return;
      }
      var n =
        (t = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge()) == null
          ? void 0
          : t.systemIntegrationsBridge;
      if (n == null) {
        o("WALogger").LOG(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "playTone: unsupported bridge for playing tone",
            ])),
        );
        return;
      }
      (o("WALogger").LOG(
        v || (v = babelHelpers.taggedTemplateLiteralLoose(["playTone: ", ""])),
        e,
      ),
        n.playTone(Number(e)));
    }
    function x(e) {
      if (
        !r("WAWebEnvironment").isWindows ||
        !o("WAWebMsgModelUtils").shouldShowMsgNotificationPreview(e)
      )
        return !1;
      var t = o("WAWebFrontendMsgGetters").getMaybeChat(e);
      return t != null && t.canSend;
    }
    function $(e) {
      if (!r("WAWebEnvironment").isWindows) return [];
      var t = o("WAWebFrontendMsgGetters").getMaybeChat(e);
      if (t == null) return [];
      var n = [];
      return (
        t.mute.canMute() &&
          n.push.apply(n, [
            {
              content: s._(/*BTDS*/ "Mute chat for 8 hours").toString(),
              action: r("WAWebBannerContextMenuActions").MuteChatForEightHours,
            },
            {
              content: s._(/*BTDS*/ "Mute chat for 1 week").toString(),
              action: r("WAWebBannerContextMenuActions").MuteChatForOneWeek,
            },
            {
              content: s._(/*BTDS*/ "Mute notifications").toString(),
              action: r("WAWebBannerContextMenuActions").MuteChat,
            },
          ]),
        n.push({
          content: s
            ._(/*BTDS*/ "Disable notifications for all messages")
            .toString(),
          action: r("WAWebBannerContextMenuActions").DisableNotifications,
        }),
        n
      );
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          o("WALogger").LOG(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
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
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "[IsNotificationsEnabledInSystem] using HybridBridge",
                ])),
            );
            var n = yield t.isNotificationEnabledInSystem();
            return (
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
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
        N.apply(this, arguments)
      );
    }
    function M() {
      window.open("ms-settings:notifications");
    }
    function w(e, t) {
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
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.shouldIgnoreSquelchForGroupMention = k),
      (l.closeMessageNotification = I),
      (l.showMessageNotification = T),
      (l.playTone = D),
      (l.isReplyable = x),
      (l.getContextMenuItems = $),
      (l.IsNotificationsEnabledInSystem = P),
      (l.OpenSystemNotificationsSettings = M));
  },
  226,
);

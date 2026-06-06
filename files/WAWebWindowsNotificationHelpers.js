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
    "WAWebMsgModelUtils",
    "WAWebMuteCollection",
    "WAWebNotificationHelpers",
    "WAWebWindowsHybridBridgeFactory",
    "WAWebWindowsNotificationSettingsHelpers",
    "WAWebWindowsNotificationStrings",
    "WAWebWindowsNotificationToneOption",
    "WAWebWindowsShowNotificationBannerOption",
    "WAWebWindowsUserPrefsNotifications",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L;
    function E(e) {
      return (
        r("WAWebEnvironment").isWindows &&
        o("WAWebMsgGetters").getIsGroupMsg(e) &&
        o("WAWebNotificationHelpers").isMeUserMentionedOrQuoted(e)
      );
    }
    function k(e, t) {
      var n;
      if (r("WAWebEnvironment").isWindows) {
        var a =
          (n = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge()) == null
            ? void 0
            : n.systemIntegrationsBridge;
        a != null && a.closeMessageNotification(e, t);
      }
    }
    function I(t) {
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
        y = t.footer,
        C = t.icon,
        b = t.isReplyable,
        v = t.key,
        S = t.suppressBanner,
        R = t.tag,
        L = t.title;
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[showMessageNotification] key=",
            " tag=",
            " reply=",
            " suppress=",
            "",
          ])),
        v,
        R != null ? R : "null",
        b,
        S,
      );
      var E = null,
        k = null;
      b &&
        (o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "showMessageNotification: Setting up reply functionality",
            ])),
        ),
        (E = o("WAWebWindowsNotificationStrings")
          .getNotificationReplyInputPlaceholder()
          .toString()),
        (k = o("WAWebWindowsNotificationStrings")
          .getNotificationReplyButtonContent()
          .toString()));
      var I = [];
      (l == null ||
        l.forEach(function (e) {
          I.push([e.content, e.action]);
        }),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "showMessageNotification: Context menu items count: ",
              "",
            ])),
          I.length,
        ));
      var T = o(
        "WAWebWindowsUserPrefsNotifications",
      ).getNotificationBannerSetting();
      if (
        (o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "showMessageNotification: Banner notification setting: ",
              "",
            ])),
          T,
        ),
        T ===
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
      var D =
        T ===
        o("WAWebWindowsShowNotificationBannerOption")
          .ShowNotificationBannerOption.OnlyWhenAppIsOpen;
      o("WALogger").LOG(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "[showMessageNotification] suppressOnClose=",
            "",
          ])),
        D,
      );
      var x =
        (n = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge()) == null
          ? void 0
          : n.systemIntegrationsBridge;
      if (x != null) {
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "[showMessageNotification] using HybridBridge",
            ])),
        );
        try {
          var $ = M(i, v);
          (x.showMessageNotification(
            v,
            R,
            L,
            a,
            C,
            y,
            I.map(function (e) {
              return e[0];
            }),
            I.map(function (e) {
              return e[1];
            }),
            E,
            k,
            S,
            Number($),
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
        return;
      }
    }
    function T(e) {
      var t;
      if (!r("WAWebEnvironment").isWindows) {
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
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
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "playTone: unsupported bridge for playing tone",
            ])),
        );
        return;
      }
      (o("WALogger").LOG(
        b || (b = babelHelpers.taggedTemplateLiteralLoose(["playTone: ", ""])),
        e,
      ),
        n.playTone(Number(e)));
    }
    function D(e) {
      if (
        !r("WAWebEnvironment").isWindows ||
        !o("WAWebMsgModelUtils").shouldShowMsgNotificationPreview(e)
      )
        return !1;
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      return t.canSend;
    }
    function x(e) {
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
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          o("WALogger").LOG(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
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
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "[IsNotificationsEnabledInSystem] using HybridBridge",
                ])),
            );
            var n = yield t.isNotificationEnabledInSystem();
            return (
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
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
        P.apply(this, arguments)
      );
    }
    function N() {
      window.open("ms-settings:notifications");
    }
    function M(e, t) {
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
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.shouldIgnoreSquelchForGroupMention = E),
      (l.closeMessageNotification = k),
      (l.showMessageNotification = I),
      (l.playTone = T),
      (l.isReplyable = D),
      (l.getContextMenuItems = x),
      (l.IsNotificationsEnabledInSystem = $),
      (l.OpenSystemNotificationsSettings = N));
  },
  98,
);

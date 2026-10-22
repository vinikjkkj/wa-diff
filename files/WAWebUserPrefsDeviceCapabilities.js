__d(
  "WAWebUserPrefsDeviceCapabilities",
  [
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      chatLockSupportLevel: o("WAWebProtobufsDeviceCapabilities.pb")
        .DeviceCapabilities$ChatLockSupportLevel.NONE,
      aiThread: {
        supportLevel: o("WAWebProtobufsDeviceCapabilities.pb")
          .DeviceCapabilities$AiThread$SupportLevel.NONE,
      },
    };
    function s(t) {
      var n,
        r,
        a,
        i,
        l,
        s = babelHelpers.extends(
          {
            chatLockSupportLevel:
              t.chatLockSupportLevel != null
                ? t.chatLockSupportLevel
                : e.chatLockSupportLevel,
            aiThread: {
              supportLevel:
                t.aiThread.supportLevel != null
                  ? t.aiThread.supportLevel
                  : o("WAWebProtobufsDeviceCapabilities.pb")
                      .DeviceCapabilities$AiThread$SupportLevel.NONE,
            },
          },
          ((n = t.bizAiSettingsSync) == null
            ? void 0
            : n.handoffRemovalTimingEnabled) === !0
            ? { bizAiSettingsSync: { handoffRemovalTimingEnabled: !0 } }
            : null,
          {
            bizAiWebOnboarding: c(
              (r = t.bizAiWebOnboarding) == null ? void 0 : r.version,
            ),
          },
        ),
        u = t.newsletterChatsMigration;
      return u == null
        ? s
        : babelHelpers.extends({}, s, {
            newsletterChatsMigration: {
              countdownEndsAt: (a = u.countdownEndsAt) != null ? a : null,
              effectiveMigrated: (i = u.effectiveMigrated) != null ? i : null,
              rolledBack: (l = u.rolledBack) != null ? l : null,
            },
          });
    }
    function u(t) {
      var n,
        r,
        a =
          (n =
            typeof t == "object" &&
            t != null &&
            typeof t.chatLockSupportLevel == "number"
              ? o(
                  "WAWebProtobufsDeviceCapabilities.pb",
                ).DeviceCapabilities$ChatLockSupportLevel.cast(
                  t.chatLockSupportLevel,
                )
              : null) != null
            ? n
            : e.chatLockSupportLevel,
        i =
          (r =
            typeof t == "object" &&
            t != null &&
            t.aiThread != null &&
            typeof t.aiThread.supportLevel == "number"
              ? o(
                  "WAWebProtobufsDeviceCapabilities.pb",
                ).DeviceCapabilities$AiThread$SupportLevel.cast(
                  t.aiThread.supportLevel,
                )
              : null) != null
            ? r
            : o("WAWebProtobufsDeviceCapabilities.pb")
                .DeviceCapabilities$AiThread$SupportLevel.NONE,
        l =
          typeof t == "object" &&
          t != null &&
          t.bizAiSettingsSync != null &&
          typeof t.bizAiSettingsSync.handoffRemovalTimingEnabled == "boolean" &&
          t.bizAiSettingsSync.handoffRemovalTimingEnabled,
        s = d(t),
        u = babelHelpers.extends(
          { chatLockSupportLevel: a, aiThread: { supportLevel: i } },
          l ? { bizAiSettingsSync: { handoffRemovalTimingEnabled: !0 } } : null,
          {
            bizAiWebOnboarding: c(
              typeof t == "object" &&
                t != null &&
                typeof t.bizAiWebOnboarding == "object" &&
                t.bizAiWebOnboarding != null
                ? t.bizAiWebOnboarding.version
                : null,
            ),
          },
        );
      return s != null
        ? babelHelpers.extends({}, u, { newsletterChatsMigration: s })
        : u;
    }
    function c(e) {
      return typeof e == "number" && e >= 1 ? { version: e } : void 0;
    }
    function d(e) {
      var t =
        typeof e == "object" && e != null ? e.newsletterChatsMigration : null;
      return typeof t != "object" || t == null
        ? null
        : {
            countdownEndsAt:
              typeof t.countdownEndsAt == "number" ? t.countdownEndsAt : null,
            effectiveMigrated:
              typeof t.effectiveMigrated == "boolean"
                ? t.effectiveMigrated
                : null,
            rolledBack: typeof t.rolledBack == "boolean" ? t.rolledBack : null,
          };
    }
    function m(e) {
      switch (e) {
        case "self":
          return o("WAWebUserPrefsKeys").UserPrefs.DeviceCapabilities;
        case "primary":
          return o("WAWebUserPrefsKeys").UserPrefs.PrimaryDeviceCapabilities;
      }
    }
    function p(e, t) {
      var n = s(e);
      r("WAWebUserPrefsStore").setUser(m(t), n, { shouldWriteToIdb: !1 });
    }
    function _(e) {
      var t = r("WAWebUserPrefsStore").getUser(m(e));
      return u(t);
    }
    function f(e) {
      var t, n, r, a;
      return {
        chatLockSupportLevel:
          (t = e.chatLockSupportLevel) != null
            ? t
            : o("WAWebProtobufsDeviceCapabilities.pb")
                .DeviceCapabilities$ChatLockSupportLevel.NONE,
        aiThread: {
          supportLevel:
            (n = (r = e.aiThread) == null ? void 0 : r.supportLevel) != null
              ? n
              : o("WAWebProtobufsDeviceCapabilities.pb")
                  .DeviceCapabilities$AiThread$SupportLevel.NONE,
        },
        bizAiSettingsSync: e.bizAiSettingsSync,
        bizAiWebOnboarding: c(
          (a = e.bizAiWebOnboarding) == null ? void 0 : a.version,
        ),
      };
    }
    function g(e, t) {
      var n = _(t),
        r = babelHelpers.extends({}, n, e);
      return (p(r, t), r);
    }
    function h() {
      return _("primary");
    }
    ((l.mapProtobufToAllDeviceCapabilities = f),
      (l.mergeDeviceCapabilitiesToStorage = g),
      (l.getPrimaryDeviceCapabilitiesFromLocalStorage = h));
  },
  98,
);

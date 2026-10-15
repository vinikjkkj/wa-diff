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
        l = babelHelpers.extends(
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
        ),
        s = t.newsletterChatsMigration;
      return s == null
        ? l
        : babelHelpers.extends({}, l, {
            newsletterChatsMigration: {
              countdownEndsAt: (r = s.countdownEndsAt) != null ? r : null,
              effectiveMigrated: (a = s.effectiveMigrated) != null ? a : null,
              rolledBack: (i = s.rolledBack) != null ? i : null,
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
        s = c(t),
        u = babelHelpers.extends(
          { chatLockSupportLevel: a, aiThread: { supportLevel: i } },
          l ? { bizAiSettingsSync: { handoffRemovalTimingEnabled: !0 } } : null,
        );
      return s != null
        ? babelHelpers.extends({}, u, { newsletterChatsMigration: s })
        : u;
    }
    function c(e) {
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
    function d(e) {
      switch (e) {
        case "self":
          return o("WAWebUserPrefsKeys").UserPrefs.DeviceCapabilities;
        case "primary":
          return o("WAWebUserPrefsKeys").UserPrefs.PrimaryDeviceCapabilities;
      }
    }
    function m(e, t) {
      var n = s(e);
      r("WAWebUserPrefsStore").setUser(d(t), n, { shouldWriteToIdb: !1 });
    }
    function p(e) {
      var t = r("WAWebUserPrefsStore").getUser(d(e));
      return u(t);
    }
    function _(e) {
      var t, n, r;
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
      };
    }
    function f(e, t) {
      var n = p(t),
        r = babelHelpers.extends({}, n, e);
      return (m(r, t), r);
    }
    function g() {
      return p("primary");
    }
    ((l.mapProtobufToAllDeviceCapabilities = _),
      (l.mergeDeviceCapabilitiesToStorage = f),
      (l.getPrimaryDeviceCapabilitiesFromLocalStorage = g));
  },
  98,
);

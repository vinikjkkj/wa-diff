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
        r = babelHelpers.extends(
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
        );
      return r;
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
          t.bizAiSettingsSync.handoffRemovalTimingEnabled;
      return babelHelpers.extends(
        { chatLockSupportLevel: a, aiThread: { supportLevel: i } },
        l ? { bizAiSettingsSync: { handoffRemovalTimingEnabled: !0 } } : null,
      );
    }
    function c(e) {
      switch (e) {
        case "self":
          return o("WAWebUserPrefsKeys").UserPrefs.DeviceCapabilities;
        case "primary":
          return o("WAWebUserPrefsKeys").UserPrefs.PrimaryDeviceCapabilities;
      }
    }
    function d(e, t) {
      var n = s(e);
      r("WAWebUserPrefsStore").setUser(c(t), n, { shouldWriteToIdb: !1 });
    }
    function m(e) {
      var t = r("WAWebUserPrefsStore").getUser(c(e));
      return u(t);
    }
    function p(e) {
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
    function _(e, t) {
      var n = m(t),
        r = babelHelpers.extends({}, n, e);
      return (d(r, t), r);
    }
    function f() {
      return m("primary");
    }
    ((l.mapProtobufToAllDeviceCapabilities = p),
      (l.mergeDeviceCapabilitiesToStorage = _),
      (l.getPrimaryDeviceCapabilitiesFromLocalStorage = f));
  },
  98,
);

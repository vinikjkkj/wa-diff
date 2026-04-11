__d(
  "WAWebWindowsNotificationTone.react",
  [
    "fbt",
    "WALogger",
    "WAWebBackendApi",
    "WAWebChatGetters",
    "WAWebDBUpdateChatTable",
    "WAWebWindowsNotificationToneDropdown.react",
    "WAWebWindowsNotificationToneOption",
    "WAWebWindowsUserPrefsNotifications",
    "react",
    "useWAWebSettingSync",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n,
        a = t.chat,
        i = o("useWAWebSettingSync").useSettingSync(
          "notificationToneId",
          function (t) {
            var n = Number(t);
            (t ===
              o("WAWebWindowsNotificationToneOption").NotificationToneOption
                .Default && (n = null),
              o("WAWebDBUpdateChatTable")
                .updateChatTable(a.id, { toneId: n })
                .then(function () {
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateChatToneId",
                    { id: a.id, toneId: n },
                  );
                })
                .catch(function (t) {
                  return o("WALogger").ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to update chat tone id: ",
                        "",
                      ])),
                    t,
                  );
                }));
          },
          a.id.toString(),
        ),
        l = i;
      return c.jsx(r("WAWebWindowsNotificationToneDropdown.react"), {
        initialTone:
          (n = o(
            "WAWebWindowsNotificationToneOption",
          ).NotificationToneOption.cast(a == null ? void 0 : a.toneId)) != null
            ? n
            : o("WAWebWindowsNotificationToneOption").NotificationToneOption
                .Default,
        overrideDefaultTone: o("WAWebChatGetters").getIsGroup(a)
          ? o(
              "WAWebWindowsUserPrefsNotifications",
            ).getNotificationToneGroupSetting()
          : o(
              "WAWebWindowsUserPrefsNotifications",
            ).getNotificationToneSetting(),
        onToneSelect: l,
        title: s._(/*BTDS*/ "Notification tone"),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);

__d(
  "WAWebGuestMessagingBackendUtils",
  ["WALogger", "WAWebApiLocalStorage", "WAWebUserPrefsKeys"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      try {
        var t,
          n,
          r,
          a,
          i,
          l = await Promise.all([
            (a = o("WAWebApiLocalStorage")).getLocalStorageValue(
              (i = o("WAWebUserPrefsKeys")).KEYS.GUEST_MSG_NOTIFICATION_TITLE,
            ),
            a.getLocalStorageValue(i.KEYS.GUEST_MSG_NOTIFICATION_TEXT),
            a.getLocalStorageValue(
              i.KEYS.GUEST_MSG_NOTIFICATION_TEXT_WITH_PUSHNAME,
            ),
            a.getLocalStorageValue(i.KEYS.GUEST_INVITER_PUSHNAME),
            a.getLocalStorageValue(i.KEYS.GUEST_INVITER_PROFILE_PIC_URL),
          ]);
        return {
          notificationTitle: (t = l[0]) != null ? t : "WhatsApp",
          notificationText: (n = l[1]) != null ? n : "You have unread message.",
          notificationTextWithPushname:
            (r = l[2]) != null ? r : "You have unread message.",
          inviterPushname: l[3],
          inviterProfilePicUrl: l[4],
        };
      } catch (t) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "failed reading notif content from worker store ",
              "",
            ])),
          t,
        );
      }
    }
    l.getOfflineNotificationContent = s;
  },
  98,
);

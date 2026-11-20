__d(
  "WAWebUsernameMexNotificationHandlers",
  [
    "WAWebMexUsernameAccountSyncNotificationHandler",
    "WAWebMexUsernameUpdateNotificationHandler",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      UsernameSetNotification: o("WAWebMexUsernameUpdateNotificationHandler")
        .mexHandleUsernameChange,
      UsernameDeleteNotification: o("WAWebMexUsernameUpdateNotificationHandler")
        .mexHandleUsernameDelete,
      UsernameUpdateNotification: o("WAWebMexUsernameUpdateNotificationHandler")
        .mexHandleUsernameChangeForSideSub,
      AccountSyncUsernameNotification: o(
        "WAWebMexUsernameAccountSyncNotificationHandler",
      ).mexHandleUsernameAccountSync,
    };
    l.default = e;
  },
  98,
);

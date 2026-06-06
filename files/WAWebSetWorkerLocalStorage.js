__d(
  "WAWebSetWorkerLocalStorage",
  [
    "WANullthrows",
    "WAWebApiLocalStorage",
    "WAWebEnvironment",
    "WAWebGuestCoreLocalStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e = r("WANullthrows")(
          o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(),
        ),
        t = o("WAWebUserPrefsMeUser").getMeDisplayNameOrThrow(),
        n = [
          {
            key: "deviceJid",
            value: o("WAWebWidToJid").widToDeviceJid(
              o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
            ),
          },
          { key: "lidDeviceJid", value: e.toString() },
          { key: o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME, value: t },
        ];
      (r("WAWebEnvironment").isGuest &&
        n.push({
          key: o("WAWebUserPrefsKeys").KEYS.GUEST_ACTIVE_INVITE_CODE,
          value: o("WAWebGuestCoreLocalStorage").getActiveGuestInviteCode(),
        }),
        await o("WAWebApiLocalStorage").updateLocalStorage(n));
    }
    function s() {
      return o("WAWebApiLocalStorage").clearLocalStorage();
    }
    ((l.setWorkerLocalStorage = e), (l.clearWorkerLocalStorage = s));
  },
  98,
);

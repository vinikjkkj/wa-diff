__d(
  "WAWebSetWorkerLocalStorage",
  [
    "WANullthrows",
    "WAWebApiLocalStorage",
    "WAWebEnvironment",
    "WAWebGuestLocalStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
              value: o("WAWebGuestLocalStorage").getActiveGuestInviteCode(),
            }),
            yield o("WAWebApiLocalStorage").updateLocalStorage(n));
        })),
        s.apply(this, arguments)
      );
    }
    function u() {
      return o("WAWebApiLocalStorage").clearLocalStorage();
    }
    ((l.setWorkerLocalStorage = e), (l.clearWorkerLocalStorage = u));
  },
  98,
);

__d(
  "WAWebSetWorkerLocalStorage",
  [
    "WALogger",
    "WAWebApiLocalStorage",
    "WAWebEnvironment",
    "WAWebGuestCoreLocalStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
            n = o("WAWebUserPrefsMeUser").getMeDisplayNameOrThrow(),
            a = [
              { key: "lidDeviceJid", value: t.toString() },
              { key: o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME, value: n },
            ],
            i = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
          (i != null
            ? a.push({
                key: "deviceJid",
                value: o("WAWebWidToJid").widToDeviceJid(i),
              })
            : o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[worker-local-storage] skipping deviceJid: no phone-number wid available",
                    ])),
                )
                .sendLogs("worker-local-storage-skip-device-jid"),
            r("WAWebEnvironment").isGuest &&
              a.push({
                key: o("WAWebUserPrefsKeys").KEYS.GUEST_ACTIVE_INVITE_CODE,
                value: o(
                  "WAWebGuestCoreLocalStorage",
                ).getActiveGuestInviteCode(),
              }),
            yield o("WAWebApiLocalStorage").updateLocalStorage(a));
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      return o("WAWebApiLocalStorage").clearLocalStorage();
    }
    ((l.setWorkerLocalStorage = s), (l.clearWorkerLocalStorage = c));
  },
  98,
);

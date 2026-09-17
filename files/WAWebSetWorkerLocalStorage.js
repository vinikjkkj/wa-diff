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
    var e, s;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = _(o("WAWebUserPrefsMeUser").getMeDisplayNameOrThrow),
            t = e.itemsToWrite;
          yield o("WAWebApiLocalStorage").updateLocalStorage(t);
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = _(o("WAWebUserPrefsMeUser").getMaybeMeDisplayName),
            t = e.itemsToWrite,
            n = e.keysToRemove;
          yield o("WAWebApiLocalStorage").applyLocalStorageChanges(t, n);
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return o("WAWebApiLocalStorage").clearLocalStorage();
    }
    function _(t) {
      var n = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
        a = [{ key: "lidDeviceJid", value: n.toString() }],
        i = [],
        l = t();
      l != null
        ? a.push({
            key: o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
            value: l,
          })
        : (i.push(o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME),
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[worker-local-storage] meDisplayName unavailable",
                ])),
            )
            .sendLogs("worker-local-storage-missing-display-name"));
      var u = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
      return (
        u != null
          ? a.push({
              key: "deviceJid",
              value: o("WAWebWidToJid").widToDeviceJid(u),
            })
          : (i.push("deviceJid"),
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[worker-local-storage] deviceJid unavailable: no phone-number wid",
                  ])),
              )
              .sendLogs("worker-local-storage-skip-device-jid")),
        r("WAWebEnvironment").isGuest
          ? a.push({
              key: o("WAWebUserPrefsKeys").KEYS.GUEST_ACTIVE_INVITE_CODE,
              value: o("WAWebGuestCoreLocalStorage").getActiveGuestInviteCode(),
            })
          : i.push(o("WAWebUserPrefsKeys").KEYS.GUEST_ACTIVE_INVITE_CODE),
        { itemsToWrite: a, keysToRemove: i }
      );
    }
    ((l.setWorkerLocalStorage = u),
      (l.setWorkerLocalStorageForOfflineResume = d),
      (l.clearWorkerLocalStorage = p));
  },
  98,
);

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
    var e,
      s = "push-offline-resume-treatment",
      u = "treatment-v1";
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = g(o("WAWebUserPrefsMeUser").getMeDisplayNameOrThrow),
            t = e.itemsToWrite;
          yield o("WAWebApiLocalStorage").updateLocalStorage(t, [s]);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e === void 0 && (e = !1);
          var t = g(o("WAWebUserPrefsMeUser").getMaybeMeDisplayName),
            n = t.itemsToWrite,
            r = t.keysToRemove;
          (e && n.push({ key: s, value: u }),
            yield o("WAWebApiLocalStorage").applyLocalStorageChanges(n, r));
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return o("WAWebApiLocalStorage").clearLocalStorage();
    }
    function f() {
      return o("WAWebApiLocalStorage").applyLocalStorageChanges([], [s]);
    }
    function g(t) {
      var n = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
        a = [{ key: "lidDeviceJid", value: n.toString() }],
        i = [],
        l = t();
      l != null
        ? a.push({
            key: o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
            value: l,
          })
        : i.push(o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME);
      var s = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
      return (
        s != null
          ? a.push({
              key: "deviceJid",
              value: o("WAWebWidToJid").widToDeviceJid(s),
            })
          : (i.push("deviceJid"),
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.setWorkerLocalStorage = c),
      (l.setWorkerLocalStorageForOfflineResume = m),
      (l.clearWorkerLocalStorage = _),
      (l.clearWorkerPushOfflineResumeTreatment = f));
  },
  98,
);

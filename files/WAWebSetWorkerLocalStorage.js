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
      s,
      u = "push-offline-resume-treatment",
      c = "treatment-v1";
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = h(o("WAWebUserPrefsMeUser").getMeDisplayNameOrThrow),
            t = e.itemsToWrite;
          yield o("WAWebApiLocalStorage").updateLocalStorage(t, [u]);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e === void 0 && (e = !1);
          var t = h(o("WAWebUserPrefsMeUser").getMaybeMeDisplayName),
            n = t.itemsToWrite,
            r = t.keysToRemove;
          (e && n.push({ key: u, value: c }),
            yield o("WAWebApiLocalStorage").applyLocalStorageChanges(n, r));
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return o("WAWebApiLocalStorage").clearLocalStorage();
    }
    function g() {
      return o("WAWebApiLocalStorage").applyLocalStorageChanges([], [u]);
    }
    function h(t) {
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
    ((l.setWorkerLocalStorage = d),
      (l.setWorkerLocalStorageForOfflineResume = p),
      (l.clearWorkerLocalStorage = f),
      (l.clearWorkerPushOfflineResumeTreatment = g));
  },
  98,
);

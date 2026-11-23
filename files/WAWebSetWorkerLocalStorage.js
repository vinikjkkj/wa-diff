__d(
  "WAWebSetWorkerLocalStorage",
  [
    "WALogger",
    "WAWebApiLocalStorage",
    "WAWebEnvironment",
    "WAWebGuestCoreLocalStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebUserUtils",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "push-offline-resume-treatment",
      u = "treatment-v1";
    async function c() {
      var e = _(o("WAWebUserUtils").getMeDisplayNameOrThrow),
        t = e.itemsToWrite;
      await o("WAWebApiLocalStorage").updateLocalStorage(t, [s]);
    }
    async function d(e) {
      e === void 0 && (e = !1);
      var t = _(o("WAWebUserPrefsMeUser").getMaybeMeDisplayName),
        n = t.itemsToWrite,
        r = t.keysToRemove;
      (e && n.push({ key: s, value: u }),
        await o("WAWebApiLocalStorage").applyLocalStorageChanges(n, r));
    }
    function m() {
      return o("WAWebApiLocalStorage").clearLocalStorage();
    }
    function p() {
      return o("WAWebApiLocalStorage").applyLocalStorageChanges([], [s]);
    }
    function _(t) {
      var n = o("WAWebUserUtils").getMeDeviceLidOrThrow(),
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
      (l.setWorkerLocalStorageForOfflineResume = d),
      (l.clearWorkerLocalStorage = m),
      (l.clearWorkerPushOfflineResumeTreatment = p));
  },
  98,
);

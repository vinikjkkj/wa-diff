__d(
  "WAWebDebugScreenLock",
  ["WAWebUserPrefsInfoStore", "WAWebUserPrefsScreenLock"],
  function (t, n, r, o, a, i, l) {
    function e() {}
    e.doc = "Outputs the noise info from local storage.";
    async function s() {
      var t = String(window.prompt("Create a password to lock WhatsApp.")),
        n = await o("WAWebUserPrefsInfoStore").waNoiseInfo.lockNoiseInfo(t);
      n && o("WAWebUserPrefsScreenLock").setScreenLockDurationInSeconds(900);
    }
    s.doc = "Test locking the noise info with a user set password.";
    async function u() {
      var t = String(
          window.prompt("Enter your current password to remove the app lock."),
        ),
        n = await o(
          "WAWebUserPrefsInfoStore",
        ).waNoiseInfo.removeLockOnNoiseInfo(t);
      n
        ? o("WAWebUserPrefsScreenLock").setScreenLockDurationInSeconds(0)
        : alert(
            "Incorrect password! Failed to remove the lock from the noise info.",
          );
    }
    u.doc =
      "Test removing the lock on the noise info with a user set password.";
    var c = {
      displayLocalStorageNoiseInfo: e,
      lockNoiseInfo: s,
      removeLockOnNoiseInfo: u,
    };
    l.default = c;
  },
  98,
);

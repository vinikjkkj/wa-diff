__d(
  "WAWebDebugScreenLock",
  [
    "WAWebUserPrefsInfoStore",
    "WAWebUserPrefsScreenLock",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {}
    e.doc = "Outputs the noise info from local storage.";
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = String(window.prompt("Create a password to lock WhatsApp.")),
            n = yield o("WAWebUserPrefsInfoStore").waNoiseInfo.lockNoiseInfo(t);
          n &&
            o("WAWebUserPrefsScreenLock").setScreenLockDurationInSeconds(900);
        })),
        u.apply(this, arguments)
      );
    }
    s.doc = "Test locking the noise info with a user set password.";
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = String(
              window.prompt(
                "Enter your current password to remove the app lock.",
              ),
            ),
            n = yield o(
              "WAWebUserPrefsInfoStore",
            ).waNoiseInfo.removeLockOnNoiseInfo(t);
          n
            ? o("WAWebUserPrefsScreenLock").setScreenLockDurationInSeconds(0)
            : alert(
                "Incorrect password! Failed to remove the lock from the noise info.",
              );
        })),
        d.apply(this, arguments)
      );
    }
    c.doc =
      "Test removing the lock on the noise info with a user set password.";
    var m = {
      displayLocalStorageNoiseInfo: e,
      lockNoiseInfo: s,
      removeLockOnNoiseInfo: c,
    };
    l.default = m;
  },
  98,
);

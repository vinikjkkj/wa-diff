__d(
  "WAWebLockScreenBridgeApi",
  ["WAWebLockScreenResolver"],
  function (t, n, r, o, a, i, l) {
    var e = {
      waitForPasscode: function () {
        return o(
          "WAWebLockScreenResolver",
        ).LockScreenResolvable.waitForPasscode();
      },
      waitForPasscodeAfterIncorrectAttempt: function () {
        return o(
          "WAWebLockScreenResolver",
        ).LockScreenResolvable.waitForPasscodeAfterIncorrectAttempt();
      },
      correctPasscodeEntered: function (t) {
        var e = t.key;
        o(
          "WAWebLockScreenResolver",
        ).LockScreenResolvable.correctPasscodeEntered(e);
      },
    };
    l.LockScreenBridgeApi = e;
  },
  98,
);

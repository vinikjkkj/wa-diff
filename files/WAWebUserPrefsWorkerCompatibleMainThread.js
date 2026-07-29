__d(
  "WAWebUserPrefsWorkerCompatibleMainThread",
  [
    "WAWebUserPrefsMultiDeviceMainThread",
    "WAWebUserPrefsMultiDeviceWorkerCompatible",
    "WAWebUserPrefsScreenLockMainThread",
    "WAWebUserPrefsScreenLockWorkerCompatible",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      (o("WAWebUserPrefsMultiDeviceWorkerCompatible").setInstance(
        o("WAWebUserPrefsMultiDeviceMainThread").userPrefsMultiDeviceMainThread,
      ),
        o("WAWebUserPrefsScreenLockWorkerCompatible").setInstance(
          o("WAWebUserPrefsScreenLockMainThread").userPrefsScreenLockMainThread,
        ));
    }
    l.initializeUserPrefsWorkerCompatibleMainThread = e;
  },
  98,
);

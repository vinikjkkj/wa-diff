__d(
  "WAWebUserPrefsWorkerCompatibleMainThread",
  [
    "WAWebNoiseInfoMainThread",
    "WAWebNoiseInfoWorkerCompatible",
    "WAWebUserPrefsScreenLockMainThread",
    "WAWebUserPrefsScreenLockWorkerCompatible",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      (o("WAWebNoiseInfoWorkerCompatible").setInstance(
        o("WAWebNoiseInfoMainThread").noiseInfoMainThread,
      ),
        o("WAWebUserPrefsScreenLockWorkerCompatible").setInstance(
          o("WAWebUserPrefsScreenLockMainThread").userPrefsScreenLockMainThread,
        ));
    }
    l.initializeUserPrefsWorkerCompatibleMainThread = e;
  },
  98,
);

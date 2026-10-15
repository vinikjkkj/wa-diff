__d(
  "WAWebUserPrefsScreenLockWorkerCompatible",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      e = t;
    }
    function u() {
      return r("nullthrows")(e, "UserPrefsScreenLock is not initialised");
    }
    function c() {
      return u().getScreenLockEnabled();
    }
    ((l.setInstance = s), (l.getScreenLockEnabled = c));
  },
  98,
);

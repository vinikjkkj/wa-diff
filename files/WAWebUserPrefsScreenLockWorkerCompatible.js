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
    function d() {
      return u().getScreenLockIterations();
    }
    function m() {
      return u().getScreenLockIvString();
    }
    function p() {
      return u().getScreenLockSalt();
    }
    function _(e) {
      return u().setScreenLockIterations(e);
    }
    function f(e) {
      return u().setScreenLockIvString(e);
    }
    function g(e) {
      return u().setScreenLockSalt(e);
    }
    ((l.setInstance = s),
      (l.getScreenLockEnabled = c),
      (l.getScreenLockIterations = d),
      (l.getScreenLockIvString = m),
      (l.getScreenLockSalt = p),
      (l.setScreenLockIterations = _),
      (l.setScreenLockIvString = f),
      (l.setScreenLockSalt = g));
  },
  98,
);

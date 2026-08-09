__d(
  "supportsNativeWebLock",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      return (
        self.LockManager != null &&
        self.navigator.locks instanceof self.LockManager
      );
    }
    i.default = e;
  },
  66,
);

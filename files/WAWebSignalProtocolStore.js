__d(
  "WAWebSignalProtocolStore",
  ["WAWebSignalProtocolStoreUnifiedApi"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return r("WAWebSignalProtocolStoreUnifiedApi");
    }
    function s() {
      return r("WAWebSignalProtocolStoreUnifiedApi");
    }
    function u() {
      r("WAWebSignalProtocolStoreUnifiedApi").switchToMemMode();
    }
    function c() {
      r("WAWebSignalProtocolStoreUnifiedApi").switchToPersistMode();
    }
    ((l.getSignalProtocolStore = e),
      (l.getPersistSignalProtocolStore = s),
      (l.enableMemSignalStore = u),
      (l.enablePersistSignalStore = c));
  },
  98,
);

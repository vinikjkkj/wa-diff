__d(
  "WAWebEncryptionManagerSelector",
  [
    "WASyncdKmpEncryptionManager",
    "WAWebABProps",
    "WAWebSyncdEncryptionManager",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "kmp_syncd_engine_crypto_enabled",
      )
        ? o("WASyncdKmpEncryptionManager").WASyncdKmpEncryptionManager
        : o("WAWebSyncdEncryptionManager").WASyncdEncryptionManager;
    }
    l.syncdEncryptionManager = e;
  },
  98,
);

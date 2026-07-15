__d(
  "WAWebEncryptionManagerSelector",
  [
    "WAWebABProps",
    "WAWebSyncdEncryptionManager",
    "WAWebSyncdKmpEncryptionManager",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "kmp_syncd_engine_crypto_enabled",
      )
        ? o("WAWebSyncdKmpEncryptionManager").WASyncdKmpEncryptionManager
        : o("WAWebSyncdEncryptionManager").WASyncdEncryptionManager;
    }
    l.syncdEncryptionManager = e;
  },
  98,
);

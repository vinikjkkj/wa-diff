__d(
  "LSJSInMemoryStorage",
  [
    "LSPlatformLsInitLog",
    "LSReStoreWrapper",
    "MAWLSVaultingHooks",
    "createLSReStoreEphemeralPersistence",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("LSReStoreWrapper").createLSReStore(
        o(
          "createLSReStoreEphemeralPersistence",
        ).createLSReStoreEphemeralPersistence(),
        e,
        [r("MAWLSVaultingHooks")],
        void 0,
        o("LSPlatformLsInitLog").lsInitLogger,
      );
    }
    l.default = e;
  },
  98,
);

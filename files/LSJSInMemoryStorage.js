__d(
  "LSJSInMemoryStorage",
  [
    "LSPlatformLsInitLog",
    "LSReStoreWrapper",
    "MAWLSVaultingHooks",
    "MWLSSacThreadRowHooks",
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
        [
          o("MWLSSacThreadRowHooks").MWLSSacThreadRowHooks,
          r("MAWLSVaultingHooks"),
        ],
        void 0,
        o("LSPlatformLsInitLog").lsInitLogger,
      );
    }
    l.default = e;
  },
  98,
);

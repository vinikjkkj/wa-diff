__d(
  "MWLSSchemaEphemeral",
  [
    "EBDB",
    "EBDBEbsmApi",
    "FBLogger",
    "LSJSInMemoryStorage",
    "LSMetadata",
    "LSPlatformLsInitLog",
    "LSReStoreWrapper",
    "MAWLSVaultingHooks",
    "MWConditionallySetupEBStateDB",
    "MessengerLogHistory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("MessengerLogHistory").getInstance("db_init");
    async function s(t) {
      o("LSPlatformLsInitLog").addPoint("init_start");
      var n,
        a = {
          clearEbStores: o("EBDB").clearEbStores,
          flushEBSMtoEBDB: o("EBDBEbsmApi").flushEBSMtoEBDB,
          rehydrateEBSMFromEBDB: o("EBDBEbsmApi").rehydrateEBSMFromEBDB,
        };
      try {
        var i = await o(
          "MWConditionallySetupEBStateDB",
        ).conditionallyMakeEBStateDB(a);
        i != null &&
          (e.debug("Creating EB State DB"),
          (n = o("LSReStoreWrapper").createLSReStore(
            i,
            o("LSMetadata").schema,
            [r("MAWLSVaultingHooks")],
            void 0,
            o("LSPlatformLsInitLog").lsInitLogger,
          )),
          (a.updateEBSM = o("EBDBEbsmApi").updateEBSM(n)),
          e.debug("EB State DB inited"));
      } catch (e) {
        r("FBLogger")("messenger_web_clients")
          .catching(r("getErrorSafe")(e))
          .mustfix("EBSM failed");
      }
      return (
        n == null &&
          (e.debug("Creating EDB"),
          (n = r("LSJSInMemoryStorage")(o("LSMetadata").schema)),
          e.debug("EDB inited")),
        o("LSPlatformLsInitLog").addPoint("init_end"),
        n
      );
    }
    l.createDB = s;
  },
  98,
);

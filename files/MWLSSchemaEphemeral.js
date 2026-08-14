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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("MessengerLogHistory").getInstance("db_init");
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          o("LSPlatformLsInitLog").addPoint("init_start");
          var n,
            a = {
              clearEbStores: o("EBDB").clearEbStores,
              flushEBSMtoEBDB: o("EBDBEbsmApi").flushEBSMtoEBDB,
              rehydrateEBSMFromEBDB: o("EBDBEbsmApi").rehydrateEBSMFromEBDB,
            };
          try {
            var i = yield o(
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
        })),
        u.apply(this, arguments)
      );
    }
    l.createDB = s;
  },
  98,
);

__d(
  "WAWebContactSyncBridge",
  [
    "WAWebLidAwareContactsDB",
    "WAWebSyncContactJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("WAWebLidAwareContactsDB").allPrimaryKeys();
          if (t.length > 0) {
            var n = t.map(o("WAWebWidFactory").createWid).filter(function (e) {
              return e.isEligibleForUSync();
            });
            return o("WAWebSyncContactJob").syncContactListInChunksJob(
              n,
              e,
              "full",
            );
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.doFullContactSync = e;
  },
  98,
);

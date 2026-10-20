__d(
  "WAWebCacheStoreGatingUtil",
  ["WAWebABProps", "WAWebABPropsCache", "WAWebGlobals"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      o("WAWebABPropsCache")
        .waitForABPropConfigsReady()
        .then(function () {
          o("WAWebGlobals").setAllowHistorySyncPutAllowDuplicate(
            o("WAWebABProps").getABPropConfigValue(
              "web_history_sync_allow_duplicate_in_bulk_error",
            ),
          );
        });
    }
    l.initStorageOptimizationFlags = e;
  },
  98,
);

__d(
  "WAWebCacheStoreGatingUtil",
  ["WAWebABProps", "WAWebABPropsCache", "WAWebGlobals", "WAWebLowEndDeviceApi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      o("WAWebABPropsCache")
        .waitForABPropConfigsReady()
        .then(function () {
          (o("WAWebGlobals").setAllowHistorySyncPutAllowDuplicate(
            o("WAWebABProps").getABPropConfigValue(
              "web_history_sync_allow_duplicate_in_bulk_error",
            ),
          ),
            o("WAWebGlobals").setEnableImprovedBulkMerge(
              o("WAWebLowEndDeviceApi").isLowEndDevice()
                ? !1
                : o("WAWebABProps").getABPropConfigValue(
                    "web_enable_improved_bulk_merge",
                  ),
            ));
        });
    }
    l.initStorageOptimizationFlags = e;
  },
  98,
);

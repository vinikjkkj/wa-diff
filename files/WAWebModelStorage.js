__d(
  "WAWebModelStorage",
  [
    "WAWebABPropsCache",
    "WAWebBackendWorkerClient",
    "WAWebModelStorageInitialize",
    "WAWebStorageInitializeHooks",
    "WAWebUserPrefsIndexedDBStorage",
    "once",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      (await o("WAWebModelStorageInitialize").initializeWithoutGKs(e),
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init(),
        c(),
        s());
    }
    var s = r("once")(function () {
        o("WAWebABPropsCache")
          .waitForABPropConfigsReady()
          .then(function () {
            o("WAWebStorageInitializeHooks").initializeHooks();
          });
      }),
      u = !1;
    function c() {
      u !== !0 &&
        ((u = !0),
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.setSyncCallback(
          function (e) {
            switch (e.action) {
              case "set":
                o("WAWebBackendWorkerClient")
                  .getBackendWorkerBridge()
                  .then(function (t) {
                    return t.fireAndForget("userPrefs", "syncSet", {
                      key: e.key,
                      value: e.value,
                    });
                  });
                break;
              case "remove":
                o("WAWebBackendWorkerClient")
                  .getBackendWorkerBridge()
                  .then(function (t) {
                    return t.fireAndForget("userPrefs", "syncRemove", {
                      key: e.key,
                    });
                  });
                break;
              case "clear":
                o("WAWebBackendWorkerClient")
                  .getBackendWorkerBridge()
                  .then(function (e) {
                    return e.fireAndForget("userPrefs", "syncClear");
                  });
                break;
              case "bulkSet":
                o("WAWebBackendWorkerClient")
                  .getBackendWorkerBridge()
                  .then(function (t) {
                    return t.fireAndForget("userPrefs", "syncBulkSet", {
                      entries: e.entries,
                    });
                  });
                break;
            }
          },
        ));
    }
    (Object.keys(o("WAWebModelStorageInitialize")).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        (l[e] = o("WAWebModelStorageInitialize")[e]);
    }),
      (l.initialize = e));
  },
  98,
);

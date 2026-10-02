__d(
  "MAWPreloadEBMetadataCache",
  [
    "EBMessageMetadataCache",
    "FBLogger",
    "MAWEBCombinedSwitch",
    "MAWGetLatestChatJids",
    "MpsWorkerCacheServices",
    "Promise",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("justknobx")._("4744");
    function u() {
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        try {
          yield o("MAWEBCombinedSwitch").MAWEBCombinedSwitch.waitForEBEnabled();
          var e = yield o("MAWGetLatestChatJids").getLatestChatJids(s);
          o("EBMessageMetadataCache").preloadEBMetadataCache(e);
        } catch (e) {
          r("FBLogger")("messenger_web")
            .catching(r("getErrorSafe")(e))
            .mustfix("Failed to preload EB metadata cache after EB enablement");
        }
      })();
    }
    function c() {
      if (r("gkx")("1747")) {
        var e = o("MAWEBCombinedSwitch").MAWEBCombinedSwitch.isEnabled();
        if (e !== !0) {
          var t = r("gkx")("10665") || r("gkx")("3057");
          t &&
            o("MAWGetLatestChatJids")
              .getLatestChatJids(s)
              .then(function (e) {
                d(e);
              })
              .catch(function (e) {
                r("FBLogger")("messenger_web")
                  .catching(r("getErrorSafe")(e))
                  .mustfix(
                    "Failed to preload EB metadata cache for total message visibility",
                  );
              });
        }
      }
    }
    function d(t) {
      if (!r("gkx")("1706")) {
        o("EBMessageMetadataCache").preloadEBMetadataCache(t);
        return;
      }
      (e || (e = n("Promise")))
        .all(
          t.map(function (e) {
            return o("EBMessageMetadataCache").refreshCacheForThread(e);
          }),
        )
        .then(function () {
          o("MpsWorkerCacheServices")
            .getMpsWorkerCacheServices()
            .computeVisibilitySnippets(t);
        });
    }
    ((l.preloadEBMetadataCacheAfterEbEnabled = u),
      (l.preloadEBMetadataCacheForVisibility = c));
  },
  98,
);

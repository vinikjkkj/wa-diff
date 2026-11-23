__d(
  "MAWPreloadEBMetadataCache",
  [
    "EBMessageMetadataCache",
    "FBLogger",
    "MAWEBCombinedSwitch",
    "MAWGetLatestChatJids",
    "MpsWorkerCacheServices",
    "getErrorSafe",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("justknobx")._("4744");
    function s() {
      (async function () {
        try {
          await o("MAWEBCombinedSwitch").MAWEBCombinedSwitch.waitForEBEnabled();
          var t = await o("MAWGetLatestChatJids").getLatestChatJids(e);
          o("EBMessageMetadataCache").preloadEBMetadataCache(t);
        } catch (e) {
          r("FBLogger")("messenger_web")
            .catching(r("getErrorSafe")(e))
            .mustfix("Failed to preload EB metadata cache after EB enablement");
        }
      })();
    }
    function u() {
      if (r("gkx")("1747")) {
        var t = o("MAWEBCombinedSwitch").MAWEBCombinedSwitch.isEnabled();
        if (t !== !0) {
          var n = r("gkx")("10665") || r("gkx")("3057");
          n &&
            o("MAWGetLatestChatJids")
              .getLatestChatJids(e)
              .then(function (e) {
                c(e);
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
    function c(e) {
      if (!r("gkx")("1706")) {
        o("EBMessageMetadataCache").preloadEBMetadataCache(e);
        return;
      }
      Promise.all(
        e.map(function (e) {
          return o("EBMessageMetadataCache").refreshCacheForThread(e);
        }),
      ).then(function () {
        o("MpsWorkerCacheServices")
          .getMpsWorkerCacheServices()
          .computeVisibilitySnippets(e);
      });
    }
    ((l.preloadEBMetadataCacheAfterEbEnabled = s),
      (l.preloadEBMetadataCacheForVisibility = u));
  },
  98,
);

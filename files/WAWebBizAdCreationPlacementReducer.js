__d(
  "WAWebBizAdCreationPlacementReducer",
  ["FBImmer", "WAWebBizAdCreationPlacementDependency"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("FBImmer").produce(e, function (e) {
        switch (t.type) {
          case "placement_reducer.toggle_publisher_platform": {
            var n = o("WAWebBizAdCreationPlacementDependency").togglePlatform(
              new Set(e.placementData.selectedPublisherPlatforms),
              t.publisherPlatform,
              e.placementData.isWhatsAppOffered,
            );
            e.placementData.selectedPublisherPlatforms = Array.from(n);
            break;
          }
          case "placement_reducer.update_publisher_platforms": {
            e.placementData.selectedPublisherPlatforms = Array.from(
              new Set(
                o(
                  "WAWebBizAdCreationPlacementDependency",
                ).applyDependencyToPlatformList(
                  t.publisherPlatforms,
                  e.placementData.isWhatsAppOffered,
                ),
              ),
            );
            break;
          }
        }
      });
      return [n];
    }
    l.default = e;
  },
  98,
);

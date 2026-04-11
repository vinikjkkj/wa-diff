__d(
  "waWebBizAdCreationPlacementReducer",
  ["FBImmer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("FBImmer").produce(e, function (e) {
        switch (t.type) {
          case "placement_reducer.toggle_publisher_platform": {
            var n = new Set(e.placementData.selectedPublisherPlatforms),
              r = t.publisherPlatform;
            (n.has(r) ? n.delete(r) : n.add(r),
              (e.placementData.selectedPublisherPlatforms = Array.from(n)));
            break;
          }
          case "placement_reducer.update_publisher_platforms": {
            var o = new Set(t.publisherPlatforms);
            e.placementData.selectedPublisherPlatforms = Array.from(o);
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

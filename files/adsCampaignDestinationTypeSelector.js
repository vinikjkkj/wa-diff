__d(
  "adsCampaignDestinationTypeSelector",
  ["AdsPECampaignSelectors", "adsCreateSelector", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsCreateStoreSelector")(
            [],
            function (t) {
              return t;
            },
            { name: i.id },
          ),
          o("AdsPECampaignSelectors").getCachedByFieldsSelector,
        ],
        function (t, n) {
          var e = n(t, { destination_type: null }).getValue();
          return e == null ? void 0 : e.destination_type;
        },
        { name: i.id + ".adsCampaignDestinationTypeSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);

__d(
  "instreamVideosDefaultOptedInCampaignGroupsSelector",
  [
    "AdsInstreamVideosDefaultOptInDuplicationProvider",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsInstreamVideosDefaultOptInDuplicationProvider").toFluxStore(),
      s = r("adsCreateStoreSelector")(
        [e],
        function () {
          return e.getState().get("defaultOptedInCampaignGroupIDs");
        },
        { name: i.id },
      ),
      u = s;
    l.default = u;
  },
  98,
);

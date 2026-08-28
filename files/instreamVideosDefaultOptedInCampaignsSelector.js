__d(
  "instreamVideosDefaultOptedInCampaignsSelector",
  [
    "AdsInstreamVideosDefaultOptInDuplicationProvider",
    "adsCreateStoreSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsInstreamVideosDefaultOptInDuplicationProvider").toFluxStore(),
      s = r("adsCreateStoreSelector")(
        [e],
        function () {
          var t = e.getState().get("defaultOptedInCampaignIDs").valueSeq();
          return t.reduce(function (e, t) {
            return e.concat(t);
          }, r("immutable").Set());
        },
        { name: i.id },
      ),
      u = s;
    l.default = u;
  },
  98,
);

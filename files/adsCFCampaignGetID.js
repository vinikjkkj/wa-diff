__d(
  "adsCFCampaignGetID",
  ["AdsAPICampaignRecord", "adsCampaignGetID"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e instanceof r("AdsAPICampaignRecord")
        ? r("adsCampaignGetID")(e)
        : e.id;
    }
    l.default = e;
  },
  98,
);

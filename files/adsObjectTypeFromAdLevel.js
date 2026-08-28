__d(
  "adsObjectTypeFromAdLevel",
  ["AdsObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      adgroup: r("AdsObjectTypes").ADGROUP,
      campaign: r("AdsObjectTypes").CAMPAIGN,
      campaignGroup: r("AdsObjectTypes").CAMPAIGN_GROUP,
    };
    function s(t) {
      var n;
      return t != null && (n = e[t]) != null ? n : null;
    }
    l.default = s;
  },
  98,
);

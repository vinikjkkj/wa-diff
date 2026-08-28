__d(
  "AdsICCampaignManagerMegaphonePlacement",
  [
    "AdsICFilterByMessageFormat",
    "AdsICFilterIfDoesNotPassValidateCondition",
    "AdsICPassIfAlreadyVisible",
    "AdsICPlacement",
    "AdsIntelligentComponentsMessageFormat",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [r("AdsIntelligentComponentsMessageFormat").CAMPAIGN_MEGAPHONE],
      s = [
        new (r("AdsICFilterByMessageFormat"))(e),
        new (r("AdsICFilterIfDoesNotPassValidateCondition"))(),
        new (r("AdsICPassIfAlreadyVisible"))("CAMPAIGN_MEGAPHONE"),
      ],
      u = new (r("AdsICPlacement"))("CAMPAIGN_MEGAPHONE", s, []);
    l.default = u;
  },
  98,
);

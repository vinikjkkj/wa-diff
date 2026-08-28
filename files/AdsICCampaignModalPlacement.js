__d(
  "AdsICCampaignModalPlacement",
  [
    "AdsICFilterByMessageFormat",
    "AdsICFilterIfDoesNotPassValidateCondition",
    "AdsICPassIfAlreadyVisible",
    "AdsICPlacement",
    "AdsIntelligentComponentsMessageFormat",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [r("AdsIntelligentComponentsMessageFormat").CAMPAINGN_MODAL],
      s = [
        new (r("AdsICFilterByMessageFormat"))(e),
        new (r("AdsICFilterIfDoesNotPassValidateCondition"))(),
        new (r("AdsICPassIfAlreadyVisible"))("CAMPAIGN_MODAL"),
      ],
      u = new (r("AdsICPlacement"))("CAMPAIGN_MODAL", s, []);
    l.default = u;
  },
  98,
);

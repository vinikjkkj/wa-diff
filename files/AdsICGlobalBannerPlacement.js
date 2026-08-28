__d(
  "AdsICGlobalBannerPlacement",
  [
    "AdsICFilterByMessageFormat",
    "AdsICFilterIfDoesNotPassValidateCondition",
    "AdsICPassIfAlreadyVisible",
    "AdsICPlacement",
    "AdsIntelligentComponentsMessageFormat",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [r("AdsIntelligentComponentsMessageFormat").GLOBAL_BANNER],
      s = [
        new (r("AdsICFilterByMessageFormat"))(e),
        new (r("AdsICFilterIfDoesNotPassValidateCondition"))(),
        new (r("AdsICPassIfAlreadyVisible"))("GLOBAL_BANNER"),
      ],
      u = new (r("AdsICPlacement"))("GLOBAL_BANNER", s, []);
    l.default = u;
  },
  98,
);

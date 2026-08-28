__d(
  "adsAdgroupMarketingMessageStructuredSpecOfferAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          expiration_time: n.basicFieldAccessorFactory(e, t, "expiration_time"),
          text: n.basicFieldAccessorFactory(e, t, "text"),
          is_offer_code_personalized: n.basicFieldAccessorFactory(
            e,
            t,
            "is_offer_code_personalized",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);

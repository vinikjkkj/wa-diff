__d(
  "WASmaxOutMessagePublishBizPricingDataMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.pricingConsumerCountryCode,
        n = e.pricingBusinessCountryCode,
        r = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax(
            "biz",
            null,
            o("WASmaxJsx").smax("pricing", {
              consumer_country_code: o("WASmaxAttrs").OPTIONAL(
                o("WAWap").CUSTOM_STRING,
                t,
              ),
              business_country_code: o("WASmaxAttrs").OPTIONAL(
                o("WAWap").CUSTOM_STRING,
                n,
              ),
            }),
          ),
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBizPricingDataMixin = s;
  },
  98,
);

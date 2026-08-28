__d(
  "adsCreativeDestinationOptimizationAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          status: n.basicFieldAccessorFactory(e, t, "status"),
          type: n.basicFieldAccessorFactory(e, t, "type"),
          alternative_urls: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.alternative_urls;
            },
            [].concat(t, ["alternative_urls"]),
            [
              "default_url",
              "default_value_weight",
              "default_value_weight_direction",
              "url",
              "value_weight",
              "value_weight_direction",
            ],
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);

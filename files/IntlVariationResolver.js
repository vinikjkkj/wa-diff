__d(
  "IntlVariationResolver",
  ["IntlVariationHoldout", "IntlVariationResolverImpl"],
  function (t, n, r, o, a, i, l) {
    var e = {
        getNumberVariations: function (t) {
          return o("IntlVariationResolverImpl").getNumberVariations(t);
        },
        getGenderVariations: function (t) {
          return o("IntlVariationHoldout").disable_variation
            ? ["*"]
            : o("IntlVariationResolverImpl").getGenderVariations(t);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);

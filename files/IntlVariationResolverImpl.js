__d(
  "IntlVariationResolverImpl",
  ["invariant", "FbtHooks", "IntlNumberType", "IntlVariations"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "_1",
      u = {
        EXACTLY_ONE: s,
        getNumberVariations: function (r) {
          var t = n("IntlNumberType")
            .get((e || (e = n("FbtHooks"))).getViewerContext().locale)
            .getVariation(r);
          return (
            t & n("IntlVariations").BITMASK_NUMBER || l(0, 11647, t, typeof t),
            r === 1 ? [s, t, "*"] : [t, "*"]
          );
        },
        getGenderVariations: function (t) {
          return (
            t & n("IntlVariations").BITMASK_GENDER || l(0, 11648, t, typeof t),
            [t, "*"]
          );
        },
      };
    a.exports = u;
  },
  null,
);

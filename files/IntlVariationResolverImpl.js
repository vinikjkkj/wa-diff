__d(
  "IntlVariationResolverImpl",
  ["invariant", "FbtHooks", "IntlNumberType", "IntlVariations"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "_1";
    function u(t) {
      var r = n("IntlNumberType")
        .get((e || (e = n("FbtHooks"))).getViewerContext().locale)
        .getVariation(t);
      return (
        r & n("IntlVariations").BITMASK_NUMBER || l(0, 11647, r, typeof r),
        t === 1 ? [s, r, "*"] : [r, "*"]
      );
    }
    function c(e) {
      return (
        e & n("IntlVariations").BITMASK_GENDER || l(0, 11648, e, typeof e),
        [e, "*"]
      );
    }
    ((i.getNumberVariations = u),
      (i.getGenderVariations = c),
      (i.EXACTLY_ONE = s));
  },
  66,
);

__d(
  "IntlVariationResolverImpl",
  ["invariant", "FbtHooks", "IntlNumberType", "IntlVariations"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = "_1";
    function c(t) {
      var n = o("IntlNumberType")
        .get((e || (e = r("FbtHooks"))).getViewerContext().locale)
        .getVariation(t);
      return (
        n & r("IntlVariations").BITMASK_NUMBER || s(0, 11647, n, typeof n),
        t === 1 ? [u, n, "*"] : [n, "*"]
      );
    }
    function d(e) {
      return (
        e & r("IntlVariations").BITMASK_GENDER || s(0, 11648, e, typeof e),
        [e, "*"]
      );
    }
    ((l.getNumberVariations = c),
      (l.getGenderVariations = d),
      (l.EXACTLY_ONE = u));
  },
  98,
);

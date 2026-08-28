__d(
  "adsTemplateURLSpecWebAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          should_fallback: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(e, t, "should_fallback"),
          url: o("AdsAdObjectsAccessorUtils").basicFieldAccessorFactory(
            e,
            t,
            "url",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);

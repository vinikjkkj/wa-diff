__d(
  "AdsAdditionalOptionsGetStickyFieldsReducerPlugin",
  [
    "AdsAdditionalOptionsConsts",
    "AdsApplicationUtils",
    "AdsFocusFrameworkStickinessDataManager",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          if (n.accountID != null && o("AdsApplicationUtils").isPowerEditor()) {
            var e;
            r("AdsFocusFrameworkStickinessDataManager").getStickyFields(
              (e = n.accountID) != null ? e : "",
            );
          }
          return o("AdsAdditionalOptionsConsts")
            .AdditionalOptionsDataProviderInitialState;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);

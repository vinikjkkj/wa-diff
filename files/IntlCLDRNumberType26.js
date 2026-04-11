__d(
  "IntlCLDRNumberType26",
  ["IntlVariations"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getVariation: function (t) {
          return t === 1
            ? r("IntlVariations").NUMBER_ONE
            : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 12 || t % 100 > 14)
              ? r("IntlVariations").NUMBER_FEW
              : r("IntlVariations").NUMBER_MANY;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);

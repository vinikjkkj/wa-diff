__d(
  "IntlCLDRNumberType30",
  ["IntlVariations"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getVariation: function (t) {
          return t % 10 === 1 && t % 100 !== 11
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

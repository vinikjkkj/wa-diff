__d(
  "IntlCLDRNumberType24",
  ["IntlVariations"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getVariation: function (t) {
          return t === 1
            ? r("IntlVariations").NUMBER_ONE
            : t === 2
              ? r("IntlVariations").NUMBER_TWO
              : (t < 0 || t > 10) && t % 10 === 0
                ? r("IntlVariations").NUMBER_MANY
                : r("IntlVariations").NUMBER_OTHER;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);

__d(
  "IntlCLDRNumberType04",
  ["IntlVariations"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getVariation: function (t) {
          return t >= 0 && t <= 1
            ? r("IntlVariations").NUMBER_ONE
            : r("IntlVariations").NUMBER_OTHER;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);

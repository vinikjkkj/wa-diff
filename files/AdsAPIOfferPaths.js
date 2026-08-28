__d(
  "AdsAPIOfferPaths",
  ["AdsAPIOfferFields", "ApiPageFields", "generatePaths"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        { pathKeys: [], expandsTo: r("AdsAPIOfferFields") },
        { pathKeys: ["PAGE"], expandsTo: r("ApiPageFields") },
      ],
      s = r("generatePaths")(e),
      u = s;
    l.default = u;
  },
  98,
);

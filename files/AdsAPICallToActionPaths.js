__d(
  "AdsAPICallToActionPaths",
  ["ApiCallToActionFields", "CallToActionValueFields", "generatePaths"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        { pathKeys: [], expandsTo: r("ApiCallToActionFields") },
        { pathKeys: ["VALUE"], expandsTo: r("CallToActionValueFields") },
      ],
      s = r("generatePaths")(e),
      u = s;
    l.default = u;
  },
  98,
);

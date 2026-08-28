__d(
  "AdsAPIAccountPaths",
  ["AdsAPIAdAccountFields", "generatePaths"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Object.freeze({ DATA: "data" }),
      s = [
        { pathKeys: [], expandsTo: r("AdsAPIAdAccountFields") },
        { pathKeys: ["BUSINESSLABELS"], expandsTo: e },
        { pathKeys: ["USERPERMISSIONS"], expandsTo: e },
        { pathKeys: ["BUSINESS"], expandsTo: { NAME: "name", ID: "id" } },
      ],
      u = r("generatePaths")(s),
      c = u;
    l.default = c;
  },
  98,
);

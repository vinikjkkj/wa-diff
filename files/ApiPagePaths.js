__d(
  "ApiPagePaths",
  ["ApiPageFields", "generatePaths"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Object.freeze({ DATA: "data" }),
      s = [
        { pathKeys: [], expandsTo: r("ApiPageFields") },
        { pathKeys: ["PICTURE"], expandsTo: e },
        { pathKeys: ["PICTURE", "DATA"], expandsTo: { URL: "url" } },
        { pathKeys: ["USERPERMISSIONS"], expandsTo: e },
        { pathKeys: ["BUSINESSPROJECTS"], expandsTo: e },
      ],
      u = r("generatePaths")(s),
      c = u;
    l.default = c;
  },
  98,
);

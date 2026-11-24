__d(
  "ApiPagePaths",
  ["$InternalEnum", "ApiPageFields", "generatePaths"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({ DATA: "data" }),
      s = Object.freeze(
        Object.fromEntries(
          e.members().map(function (t) {
            return [e.getName(t), t.valueOf()];
          }),
        ),
      ),
      u = [
        { pathKeys: [], expandsTo: r("ApiPageFields") },
        { pathKeys: ["PICTURE"], expandsTo: s },
        { pathKeys: ["PICTURE", "DATA"], expandsTo: { URL: "url" } },
        { pathKeys: ["USERPERMISSIONS"], expandsTo: s },
        { pathKeys: ["BUSINESSPROJECTS"], expandsTo: s },
      ],
      c = r("generatePaths")(u),
      d = c;
    l.default = d;
  },
  98,
);

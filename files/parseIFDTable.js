__d(
  "parseIFDTable",
  ["parseIFDEntry"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      for (var t = e.readU16(), n = [], o = 0; o < t; o++)
        n.push(r("parseIFDEntry")(e));
      var a = e.readU32();
      return { entries: n, nextTableOffset: a };
    }
    l.default = e;
  },
  98,
);

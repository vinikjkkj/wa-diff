__d(
  "MLCTextLengthBucket",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum").Mirrored(["S", "M", "L", "XL"]);
    function l(t) {
      return t <= 500 ? e.S : t <= 1e3 ? e.M : t <= 2500 ? e.L : e.XL;
    }
    i.getTextLengthBucket = l;
  },
  66,
);

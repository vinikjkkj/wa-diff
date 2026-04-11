__d(
  "VideoPlayerODS",
  ["ODS", "Random"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (n, r, a) {
        o("Random").coinflip(a) &&
          (e || (e = o("ODS"))).bumpEntityKey(2079, n, r, a);
      };
    l.bumpEntityKey = s;
  },
  98,
);

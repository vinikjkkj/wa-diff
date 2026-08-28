__d(
  "UnicodeBidiGlobalDirection",
  ["Locale", "UnicodeBidiDirection", "UnicodeBidiGlobalDirectionCore"],
  function (t, n, r, o, a, i) {
    "use strict";
    ((n("UnicodeBidiGlobalDirectionCore").initDir = function () {
      n("UnicodeBidiGlobalDirectionCore").setDir(
        n("Locale").isRTL()
          ? n("UnicodeBidiDirection").RTL
          : n("UnicodeBidiDirection").LTR,
      );
    }),
      (a.exports = n("UnicodeBidiGlobalDirectionCore")));
  },
  null,
);

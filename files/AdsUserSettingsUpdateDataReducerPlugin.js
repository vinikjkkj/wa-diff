__d(
  "AdsUserSettingsUpdateDataReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return t.setSingleValueOrError(n.userSettingsID, n.settings);
        },
      },
      l = e;
    i.default = l;
  },
  66,
);

__d(
  "CurrentAdAccount",
  ["CurrentAdAccountInitialData", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        LOGGED_OUT: "0",
        getID: function () {
          return r("CurrentAdAccountInitialData").AD_ACCOUNT_ID;
        },
        getIDX: function () {
          return r("nullthrows")(
            r("CurrentAdAccountInitialData").AD_ACCOUNT_ID,
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);

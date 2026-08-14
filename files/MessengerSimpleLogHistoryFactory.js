__d(
  "MessengerSimpleLogHistoryFactory",
  ["LSLogHistory"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getInstance: function (t) {
        return {
          debug: function (n, r) {
            o("LSLogHistory").log(n, "debug", t, r);
          },
          error: function (n, r) {
            o("LSLogHistory").log(n, "error", t, r);
          },
        };
      },
    };
    l.simpleFactory = e;
  },
  98,
);

__d(
  "AdsMessengerDestinationAdgroupUtils",
  ["AdsDestinationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("AdsDestinationUtils").getAppDestinationForAdgroupSpec(e);
      return t === "MESSENGER" || t === "MESSENGER_EXTENSIONS";
    }
    l.hasMessengerDestinationForAdgroupSpec = e;
  },
  98,
);

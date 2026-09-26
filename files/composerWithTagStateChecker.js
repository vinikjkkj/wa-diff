__d(
  "composerWithTagStateChecker",
  ["isTwoFriendListsDifferent", "withTagIDsTrackerConversionUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a,
        i =
          (n = o(
            "withTagIDsTrackerConversionUtils",
          ).convertWithTagIDsTrackerToArray(
            t == null ? void 0 : t.withTagIDsTracker,
          )) != null
            ? n
            : [],
        l =
          (a = o(
            "withTagIDsTrackerConversionUtils",
          ).convertWithTagIDsTrackerToArray(
            e == null ? void 0 : e.withTagIDsTracker,
          )) != null
            ? a
            : [];
      return r("isTwoFriendListsDifferent")(l, i);
    }
    l.default = e;
  },
  98,
);

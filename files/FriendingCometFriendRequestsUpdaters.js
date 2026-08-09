__d(
  "FriendingCometFriendRequestsUpdaters",
  ["ProfileCometBannerUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
      var e = t.get(n);
      e != null &&
        o("ProfileCometBannerUtils").removeProfilePendingFriendRequestBanner(e);
    };
    l.updateFriendRequesterFields = e;
  },
  98,
);

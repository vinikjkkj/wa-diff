__d(
  "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
  [
    "WAWebMmSignalSharingExpirationWindowUtils",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingTos",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o(
        "WAWebMmSignalSharingGatingUtils",
      ).isMmSignalSharingDisclosureEnabled()
        ? o(
            "WAWebMmSignalSharingTos",
          ).isMmSignalSharingDisclosureTosAccepted() &&
            o(
              "WAWebMmSignalSharingExpirationWindowUtils",
            ).isMmSignalSharingExpirationWindowActive(e)
        : !1;
    }
    l.isMmSignalSharingUserDisclosedInCollectionWindow = e;
  },
  98,
);

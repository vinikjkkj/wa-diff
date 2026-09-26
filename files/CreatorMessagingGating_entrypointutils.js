__d(
  "CreatorMessagingGating.entrypointutils",
  ["LSThreadBitOffset", "ProfilePlusMessaging", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("ProfilePlusMessaging").shouldEnableAPPlusWebInbox;
    }
    function s(e) {
      return o("LSThreadBitOffset").has(322, e);
    }
    function u() {
      var e;
      return (e = r("qex")._("157")) != null ? e : !1;
    }
    ((l.isAPPlusWebInboxEnabled = e),
      (l.isEligibleForCrmUpdates = s),
      (l.isIAFoldersEnabled = u));
  },
  98,
);

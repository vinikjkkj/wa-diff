__d(
  "WAWebStatusListOrder",
  [
    "WAWebContactGetters",
    "WAWebStatusCollection",
    "WAWebStatusVisibilityUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebStatusCollection")
        .StatusCollection.getUnexpired({ containsAnyUnreadStatus: !0 })
        .filter(
          o("WAWebStatusVisibilityUtils")
            .isUserOrTrustedGroupOrNewsletterStatus,
        );
    }
    function s() {
      return o("WAWebStatusCollection")
        .StatusCollection.getUnexpired({ containsAnyUnreadStatus: !1 })
        .filter(
          o("WAWebStatusVisibilityUtils")
            .isUserOrTrustedGroupOrNewsletterStatus,
        );
    }
    function u() {
      return [].concat(e(), s()).filter(function (e) {
        return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
      });
    }
    ((l.getUnreadStatusList = e),
      (l.getReadStatusList = s),
      (l.getStatusListOrder = u));
  },
  98,
);

__d(
  "WAWebStatusVisibilityUtils",
  ["WAWebGroupMetadataCollection"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("WAWebGroupMetadataCollection").get(e.contact.id);
      return t != null && t.isTrusted();
    }
    function s(t) {
      return t.id.isUser() || e(t) || t.id.isNewsletter();
    }
    l.isUserOrTrustedGroupOrNewsletterStatus = s;
  },
  98,
);

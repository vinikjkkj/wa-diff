__d(
  "WAWebShowForwardedNewsletterMessageIndicator",
  ["WAWebNewsletterGatingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(["sticker", "revoked"]),
      s = new Set(["revoked"]);
    function u(t, n, r) {
      var a =
        t != null &&
        o("WAWebNewsletterGatingUtils").isStickerForwardedAttributionEnabled()
          ? s
          : e;
      return t != null && t.newsletterId != null && !a.has(n) && r();
    }
    l.showForwardedNewsletterMessageIndicator = u;
  },
  98,
);

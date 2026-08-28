__d(
  "adsIGLoginPlacementUtils",
  ["AdsInstagramAccountLinkedPageProvider", "adsIsIGLoginUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      if (!o("adsIsIGLoginUtils").getIsIGLogin(e)) return !1;
      var n = r("AdsInstagramAccountLinkedPageProvider")();
      return (
        ((t = n.get().getValue()) == null
          ? void 0
          : t.is_instagram_account_backed_page) === !0
      );
    }
    l.getShouldDisableFBPlacementForIGLoginUsers = e;
  },
  98,
);

__d(
  "ACSCachedTokenModule",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return l(e) ? ((e.numberRedemptions += 1), !0) : !1;
    }
    function l(e) {
      return !(s(e) || e.numberRedemptions + 1 > e.maxRedemptions);
    }
    function s(e) {
      return Date.now() > e.expiresOnMillis;
    }
    ((i.redeemCachedToken = e), (i.isCachedTokenRedeemable = l));
  },
  66,
);

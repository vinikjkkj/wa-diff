__d(
  "ACSCachedTokenModule",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 6e4;
    function l(e) {
      return s(e) ? ((e.numberRedemptions += 1), !0) : !1;
    }
    function s(e) {
      return u(e) ? !1 : e.numberRedemptions < e.maxRedemptions;
    }
    function u(t) {
      return Date.now() + e > t.expiresOnMillis;
    }
    ((i.redeemCachedToken = l), (i.isCachedTokenRedeemable = s));
  },
  66,
);

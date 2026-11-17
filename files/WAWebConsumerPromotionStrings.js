__d(
  "WAWebConsumerPromotionStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "Promotions");
    }
    function u() {
      return s._(/*BTDS*/ "See all");
    }
    function c() {
      return s._(/*BTDS*/ "No saved promotions");
    }
    function d() {
      return s._(/*BTDS*/ "Couldn't load your promotions.");
    }
    function m(e) {
      return e === "coupon"
        ? s._(/*BTDS*/ "Coupon")
        : e === "limited_time_offer"
          ? s._(/*BTDS*/ "Limited-time offer")
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function p(e) {
      return s._(/*BTDS*/ "Ends {date}", [s._param("date", e)]);
    }
    function _() {
      return s._(/*BTDS*/ "View in chat");
    }
    function f(e) {
      return s._(/*BTDS*/ "View in chat with {business name}", [
        s._param("business name", e),
      ]);
    }
    function g(e) {
      return s._(/*BTDS*/ "Remove promotion from {business name}", [
        s._param("business name", e),
      ]);
    }
    function h() {
      return s._(/*BTDS*/ "Couldn't remove the promotion. Please try again.");
    }
    function y() {
      return s._(/*BTDS*/ "Couldn't open the chat. Please try again.");
    }
    ((l.getConsumerPromotionsHeader = e),
      (l.getConsumerPromotionsSeeAll = u),
      (l.getConsumerPromotionsEmpty = c),
      (l.getConsumerPromotionsLoadFailed = d),
      (l.getConsumerPromotionKindLabel = m),
      (l.getConsumerPromotionEnds = p),
      (l.getConsumerPromotionViewInChat = _),
      (l.getConsumerPromotionViewInChatLabel = f),
      (l.getConsumerPromotionRemove = g),
      (l.getConsumerPromotionRemoveFailed = h),
      (l.getConsumerPromotionOpenChatFailed = y));
  },
  226,
);

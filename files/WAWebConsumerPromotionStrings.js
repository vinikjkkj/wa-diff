__d(
  "WAWebConsumerPromotionStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "");
    }
    function u() {
      return s._(/*BTDS*/ "");
    }
    function c() {
      return s._(/*BTDS*/ "");
    }
    function d() {
      return s._(/*BTDS*/ "");
    }
    function m(e) {
      return e === "coupon"
        ? s._(/*BTDS*/ "")
        : e === "limited_time_offer"
          ? s._(/*BTDS*/ "")
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function p(e) {
      return s._(/*BTDS*/ "", [s._param("date", e)]);
    }
    function _() {
      return s._(/*BTDS*/ "");
    }
    function f(e) {
      return s._(/*BTDS*/ "", [s._param("business name", e)]);
    }
    function g(e) {
      return s._(/*BTDS*/ "", [s._param("business name", e)]);
    }
    function h() {
      return s._(/*BTDS*/ "");
    }
    function y() {
      return s._(/*BTDS*/ "");
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

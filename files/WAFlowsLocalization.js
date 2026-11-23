__d(
  "WAFlowsLocalization",
  ["fbt", "justknobx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e === "android" ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
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
    function m() {
      return s._(/*BTDS*/ "");
    }
    function p() {
      return s._(/*BTDS*/ "");
    }
    function _() {
      return s._(/*BTDS*/ "");
    }
    function f() {
      return s._(/*BTDS*/ "");
    }
    function g() {
      return s._(/*BTDS*/ "");
    }
    function h() {
      return s._(/*BTDS*/ "");
    }
    function y() {
      return s._(/*BTDS*/ "");
    }
    function C() {
      return s._(/*BTDS*/ "");
    }
    function b() {
      return s._(/*BTDS*/ "");
    }
    function v() {
      return s._(/*BTDS*/ "");
    }
    function S() {
      return s._(/*BTDS*/ "");
    }
    function R(e, t) {
      var n = new Intl.NumberFormat(t),
        r = n.format(e);
      return s._(/*BTDS*/ "", [s._param("numberOfItems", r)]);
    }
    function L() {
      return s._(/*BTDS*/ "");
    }
    function E() {
      return s._(/*BTDS*/ "");
    }
    function k() {
      return s._(/*BTDS*/ "");
    }
    function I() {
      return s._(/*BTDS*/ "");
    }
    function T(e, t) {
      var n = new Intl.NumberFormat(t),
        r = n.format(e);
      return s._(/*BTDS*/ "", [
        s._plural(e != null ? e : 0),
        s._param("items-count", r),
      ]);
    }
    function D() {
      return s._(/*BTDS*/ "");
    }
    function x() {
      return s._(/*BTDS*/ "");
    }
    function $() {
      return s._(/*BTDS*/ "");
    }
    function P() {
      return s._(/*BTDS*/ "");
    }
    function N() {
      return s._(/*BTDS*/ "");
    }
    function M() {
      return s._(/*BTDS*/ "");
    }
    function w() {
      return s._(/*BTDS*/ "");
    }
    function A() {
      return s._(/*BTDS*/ "");
    }
    function F() {
      return s._(/*BTDS*/ "");
    }
    function O(e) {
      return s._(/*BTDS*/ "", [s._param("couponCode", e)]);
    }
    function B() {
      return s._(/*BTDS*/ "");
    }
    function W() {
      return s._(/*BTDS*/ "");
    }
    function q() {
      return s._(/*BTDS*/ "");
    }
    function U() {
      return s._(/*BTDS*/ "");
    }
    function V() {
      return s._(/*BTDS*/ "");
    }
    function H() {
      return s._(/*BTDS*/ "");
    }
    function G() {
      return s._(/*BTDS*/ "");
    }
    function z() {
      return s._(/*BTDS*/ "");
    }
    function j() {
      return s._(/*BTDS*/ "");
    }
    function K() {
      return s._(/*BTDS*/ "");
    }
    function Q() {
      return s._(/*BTDS*/ "");
    }
    function X() {
      return s._(/*BTDS*/ "");
    }
    function Y(e, t) {
      return e !== void 0 && e > 0
        ? t !== void 0
          ? s._(/*BTDS*/ "", [
              s._param("min-selected-items", e),
              s._param("max-selected-items", t),
            ])
          : s._(/*BTDS*/ "", [
              s._plural(e != null ? e : 1),
              s._param("min-selected-items", e),
            ])
        : t !== void 0
          ? s._(/*BTDS*/ "", [s._param("max-selected-items", t)])
          : null;
    }
    function J(e, t) {
      if (e != null) {
        if (t != null)
          return e === t
            ? s._(/*BTDS*/ "", [
                s._plural(t),
                s._param("max-selected-items", t),
              ])
            : e === 0
              ? s._(/*BTDS*/ "", [
                  s._plural(t),
                  s._param("max-selected-items", t),
                ])
              : s._(/*BTDS*/ "", [
                  s._plural(t),
                  s._param("min-selected-items", e),
                  s._param("max-selected-items", t),
                ]);
        if (e >= 1)
          return s._(/*BTDS*/ "", [
            s._plural(e),
            s._param("min-selected-items", e),
          ]);
      } else if (t != null)
        return s._(/*BTDS*/ "", [
          s._plural(t),
          s._param("max-selected-items", t),
        ]);
      return null;
    }
    function Z(e, t) {
      if (e != null) {
        if (t != null)
          return e === t
            ? s._(/*BTDS*/ "", [
                s._plural(t),
                s._param("max-selected-items", t),
              ])
            : e === 0
              ? s._(/*BTDS*/ "", [
                  s._plural(t),
                  s._param("max-selected-items", t),
                ])
              : s._(/*BTDS*/ "", [
                  s._plural(t),
                  s._param("min-selected-items", e),
                  s._param("max-selected-items", t),
                ]);
        if (e >= 1)
          return s._(/*BTDS*/ "", [
            s._plural(e),
            s._param("min-selected-items", e),
          ]);
      } else if (t != null)
        return s._(/*BTDS*/ "", [
          s._plural(t),
          s._param("max-selected-items", t),
        ]);
      return null;
    }
    function ee() {
      return s._(/*BTDS*/ "");
    }
    function te() {
      return s._(/*BTDS*/ "");
    }
    function ne() {
      return s._(/*BTDS*/ "");
    }
    function re() {
      return r("justknobx")._("8178") ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    function oe() {
      return s._(/*BTDS*/ "");
    }
    function ae() {
      return s._(/*BTDS*/ "");
    }
    function ie() {
      return s._(/*BTDS*/ "");
    }
    function le(e) {
      return e === "ios" ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    function se(e) {
      return e === "ios" ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    function ue(e) {
      return e === "ios" ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    function ce(e) {
      return s._(/*BTDS*/ "", [s._param("max-media-size", e)]);
    }
    function de(e, t, n) {
      return e === 1 && t === 1
        ? ce(n)
        : e == null || e === 0
          ? s._(/*BTDS*/ "", [
              s._plural(t),
              s._param("max-media-file-count", t),
              s._param("max-media-size", n),
            ])
          : e !== t
            ? s._(/*BTDS*/ "", [
                s._plural(t),
                s._param("min-media-file-count", e),
                s._param("max-media-file-count", t),
                s._param("max-media-size", n),
              ])
            : s._(/*BTDS*/ "", [
                s._plural(t),
                s._param("min-media-file-count", e),
                s._param("max-media-size", n),
              ]);
    }
    function me(e, t, n) {
      return e === 1 && t === 1
        ? ce(n)
        : e == null || e === 0
          ? s._(/*BTDS*/ "", [
              s._plural(t),
              s._param("max-media-file-count", t),
              s._param("max-media-size", n),
            ])
          : e !== t
            ? s._(/*BTDS*/ "", [
                s._plural(t),
                s._param("min-media-file-count", e),
                s._param("max-media-file-count", t),
                s._param("max-media-size", n),
              ])
            : s._(/*BTDS*/ "", [
                s._plural(t),
                s._param("min-media-file-count", e),
                s._param("max-media-size", n),
              ]);
    }
    function pe() {
      return s._(/*BTDS*/ "");
    }
    function _e() {
      return s._(/*BTDS*/ "");
    }
    function fe(e, t) {
      return t === "xls" || t === "xlsx"
        ? s._(/*BTDS*/ "", [s._plural(e), s._param("page-count", e)])
        : t === "ppt" || t === "pptx"
          ? s._(/*BTDS*/ "", [s._plural(e), s._param("page-count", e)])
          : s._(/*BTDS*/ "", [s._plural(e), s._param("page-count", e)]);
    }
    function ge(e, t) {
      return s._(/*BTDS*/ "", [
        s._param("max-file-size", e),
        s._param("unit", t),
      ]);
    }
    function he(e) {
      return s._(/*BTDS*/ "", [s._param("progress", e)]);
    }
    function ye(e) {
      return s._(/*BTDS*/ "", [s._param("color", e)]);
    }
    function Ce(e) {
      return s._(/*BTDS*/ "", [s._param("altText", e)]);
    }
    function be(e) {
      return s._(/*BTDS*/ "", [s._param("label", e)]);
    }
    function ve(e) {
      return s._(/*BTDS*/ "", [s._param("altText", e)]);
    }
    function Se() {
      return s._(/*BTDS*/ "");
    }
    function Re() {
      return s._(/*BTDS*/ "");
    }
    function Le(e) {
      return s._(/*BTDS*/ "", [s._param("label", e)]);
    }
    function Ee() {
      return s._(/*BTDS*/ "");
    }
    function ke() {
      return s._(/*BTDS*/ "");
    }
    ((l.getOptionalFbt = e),
      (l.getSeeMoreFbt = u),
      (l.getYourCartFbt = c),
      (l.getCartItemRemovedFbt = d),
      (l.getCartCouponRemovedFbt = m),
      (l.getCartItemOrOfferCodeRemoveUndoFbt = p),
      (l.getItemListImageAltFbt = _),
      (l.getShoppingCouponPickerLabelFbt = f),
      (l.getShoppingRemoveCouponFbt = g),
      (l.getShoppingCouponListTitleFbt = h),
      (l.getShoppingCouponLabelFbt = y),
      (l.getCartImageAltFbt = C),
      (l.getItemDetailImageAltFbt = b),
      (l.getAddToCartFbt = v),
      (l.getViewCartFbt = S),
      (l.getViewCartWithNumberOfItemsFbt = R),
      (l.getCheckoutFbt = L),
      (l.getContinueToCheckoutFbt = E),
      (l.getShippingAndTaxesFbt = k),
      (l.getDiscountSavingsFbt = I),
      (l.getCartItemsCountFbt = T),
      (l.getAddMoreFbt = D),
      (l.getCartEmptyFbt = x),
      (l.getOutOfStockFbt = $),
      (l.getItemOutOfStockFbt = P),
      (l.getContinueFbt = N),
      (l.getGobackFbt = M),
      (l.getTotalFbt = w),
      (l.getEstimatedTotalFbt = A),
      (l.getApplyFbt = F),
      (l.getCouponAppliedFbt = O),
      (l.getCartChangedSinceLastVisitFbt = B),
      (l.getItemListDefaultScreenNameFbt = W),
      (l.getItemListDetailScreenNameFbt = q),
      (l.getExternalLinkIconAltFbt = U),
      (l.getNavBarLeadingButtonAriaLabel = V),
      (l.getNavBarCloseButtonAriaLabel = H),
      (l.getNavBarCloseResponseButtonAriaLabel = G),
      (l.getNavBarTrailingButtonAriaLabel = z),
      (l.getNavBarContextualMenuHelp = j),
      (l.getNavBarContextualMenuLearnMore = K),
      (l.getNavBarContextualMenuReport = Q),
      (l.getNavBarContextualMenuReportItem = X),
      (l.getMinMaxSelectionLabel = Y),
      (l.getMinMaxSelectionLabelV400 = J),
      (l.getSeatSelectionLabel = Z),
      (l.getFallbackErrorMessage = ee),
      (l.getTimeoutErrorMessage = te),
      (l.getNoInternetErrorMessage = ne),
      (l.getFallbackDataChannelErrorMessage = re),
      (l.getAltTextForQuantityInputMinusBtn = oe),
      (l.getAltTextForQuantityInputPlusBtn = ae),
      (l.getDefaultErrorConfirmationBtnMessage = ie),
      (l.getTakePhotoFbt = le),
      (l.getUploadPhotoFbt = se),
      (l.getUploadDocumentFbt = ue),
      (l.getMinMaxDocumentSelectionLabel = de),
      (l.getMinMaxPhotoSelectionLabel = me),
      (l.getNonRetryableFailureMsg = pe),
      (l.getUploadingLabel = _e),
      (l.getDocPageCountString = fe),
      (l.getFileSizeExceededErrorMsg = ge),
      (l.getProgressIndicatorVoiceOver = he),
      (l.getHexColourAltTextFbt = ye),
      (l.getListImageAltTextFbt = Ce),
      (l.getButtonAriaLabel = be),
      (l.getListOptionAltTextFbt = ve),
      (l.getCopyAllButtonLabelFbt = Se),
      (l.getCopyAllNotficationTitleFbt = Re),
      (l.getItemCopyNotficationTitleFbt = Le),
      (l.getSelectDate = Ee),
      (l.getDownloadButtonLabelFbt = ke));
  },
  226,
);

__d(
  "WAWebBizAdCreationCatalogMediaStrings",
  ["fbt", "WAWebBizNativeAdsGatingUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return o(
        "WAWebBizNativeAdsGatingUtils",
      ).catalogSharingDisclosureCopyEnabled()
        ? s._(
            /*BTDS*/ "Your business name and photo will be shared with Meta to create your ad. {learnMoreLink}",
            [s._param("learnMoreLink", e)],
          )
        : s._(
            /*BTDS*/ "Your business name and photo will be shared with Meta in order to create your ad. {learnMoreLink}",
            [s._param("learnMoreLink", e)],
          );
    }
    function u() {
      return s._(/*BTDS*/ "Choose catalog media");
    }
    function c() {
      return s._(/*BTDS*/ "No catalog items");
    }
    function d() {
      return s._(/*BTDS*/ "Choose up to 10 images");
    }
    function m(e, t) {
      return s._(
        /*BTDS*/ '_j{"*":{"*":"{selected count} of {number} images selected","_1":"{selected count} of 1 image selected"}}',
        [s._param("selected count", e, [0]), s._plural(t, "number", t)],
      );
    }
    function p() {
      return s._(/*BTDS*/ "Catalog image");
    }
    function _() {
      return s._(/*BTDS*/ "Couldn't load your catalog. Please try again.");
    }
    function f() {
      return s._(/*BTDS*/ "You don't have a catalog yet");
    }
    function g() {
      return s._(/*BTDS*/ "Couldn't add your catalog image. Please try again.");
    }
    function h() {
      return s._(/*BTDS*/ "We couldn't add some images.");
    }
    function y() {
      return s._(/*BTDS*/ "These images can't be added to your ad.");
    }
    function C() {
      return s._(/*BTDS*/ "Something went wrong. Please try again.");
    }
    ((l.getSharingDisclosure = e),
      (l.getChooseCatalogMediaTitle = u),
      (l.getNoCatalogItemsText = c),
      (l.getCatalogFooterHint = d),
      (l.getCatalogSelectionCountText = m),
      (l.getCatalogImageTileLabel = p),
      (l.getCatalogLoadErrorText = _),
      (l.getNoCatalogText = f),
      (l.getCatalogMediaResolveErrorText = g),
      (l.getCatalogMediaPartialSkipText = h),
      (l.getCatalogMediaNoneAddableText = y),
      (l.getCatalogMediaGenericErrorText = C));
  },
  226,
);

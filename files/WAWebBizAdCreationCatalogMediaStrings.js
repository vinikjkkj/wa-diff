__d(
  "WAWebBizAdCreationCatalogMediaStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return s._(
        /*BTDS*/ "Your business name and photo will be shared with Meta to create your ad. {learnMoreLink}",
        [s._param("learnMoreLink", e)],
      );
    }
    function u() {
      return s._(/*BTDS*/ "No catalog items");
    }
    function c() {
      return s._(/*BTDS*/ "Choose up to 10 images");
    }
    function d(e, t) {
      return s._(
        /*BTDS*/ '_j{"*":{"*":"{selected count} of {number} images selected","_1":"{selected count} of 1 image selected"}}',
        [s._param("selected count", e, [0]), s._plural(t, "number", t)],
      );
    }
    function m() {
      return s._(/*BTDS*/ "Couldn't load your catalog. Please try again.");
    }
    function p() {
      return s._(/*BTDS*/ "You don't have a catalog yet");
    }
    function _() {
      return s._(/*BTDS*/ "Couldn't add your catalog image. Please try again.");
    }
    function f() {
      return s._(/*BTDS*/ "We couldn't add some images.");
    }
    function g() {
      return s._(/*BTDS*/ "These images can't be added to your ad.");
    }
    function h() {
      return s._(/*BTDS*/ "Something went wrong. Please try again.");
    }
    ((l.getSharingDisclosure = e),
      (l.getNoCatalogItemsText = u),
      (l.getCatalogFooterHint = c),
      (l.getCatalogSelectionCountText = d),
      (l.getCatalogLoadErrorText = m),
      (l.getNoCatalogText = p),
      (l.getCatalogMediaResolveErrorText = _),
      (l.getCatalogMediaPartialSkipText = f),
      (l.getCatalogMediaNoneAddableText = g),
      (l.getCatalogMediaGenericErrorText = h));
  },
  226,
);

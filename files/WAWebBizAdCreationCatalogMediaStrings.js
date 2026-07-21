__d(
  "WAWebBizAdCreationCatalogMediaStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return s._(
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
    function m() {
      return s._(/*BTDS*/ "Catalog image");
    }
    function p() {
      return s._(/*BTDS*/ "Couldn't load your catalog. Please try again.");
    }
    function _() {
      return s._(/*BTDS*/ "You don't have a catalog yet");
    }
    ((l.getSharingDisclosure = e),
      (l.getChooseCatalogMediaTitle = u),
      (l.getNoCatalogItemsText = c),
      (l.getCatalogFooterHint = d),
      (l.getCatalogImageTileLabel = m),
      (l.getCatalogLoadErrorText = p),
      (l.getNoCatalogText = _));
  },
  226,
);

__d(
  "WAWebBizAdCreationCatalogMediaStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "Add media");
    }
    function u() {
      return s._(/*BTDS*/ "Upload photos or video");
    }
    function c() {
      return s._(/*BTDS*/ "Choose up to 10 photos or 1 video");
    }
    function d() {
      return s._(/*BTDS*/ "Your catalog");
    }
    function m() {
      return s._(/*BTDS*/ "Choose up to 10 images");
    }
    function p(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} items","_1":"1 item"}', [
        s._plural(e, "number"),
      ]);
    }
    function _(e) {
      return s._(
        /*BTDS*/ "Your business name and photo will be shared with Meta in order to create your ad. {learnMoreLink}",
        [s._param("learnMoreLink", e)],
      );
    }
    function f() {
      return s._(/*BTDS*/ "Choose catalog media");
    }
    function g() {
      return s._(/*BTDS*/ "No catalog items");
    }
    function h() {
      return s._(/*BTDS*/ "Choose up to 10 images");
    }
    function y() {
      return s._(/*BTDS*/ "Catalog image");
    }
    ((l.getAddMediaModalTitle = e),
      (l.getUploadSourceLabel = u),
      (l.getUploadSourceDescription = c),
      (l.getCatalogSourceLabel = d),
      (l.getCatalogSourceDescription = m),
      (l.getCatalogItemCountText = p),
      (l.getSharingDisclosure = _),
      (l.getChooseCatalogMediaTitle = f),
      (l.getNoCatalogItemsText = g),
      (l.getCatalogFooterHint = h),
      (l.getCatalogImageTileLabel = y));
  },
  226,
);

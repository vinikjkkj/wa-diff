__d(
  "WAWebCatalogVariantHelper",
  ["fbt", "$InternalEnum", "WAWebBizGatingUtils", "WAWebLinkedCatalogHelper"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 100,
      u = "listing_details,types,availability,variant_properties";
    function c(e, t) {
      var n,
        r =
          t != null &&
          t.variantInfo != null &&
          ((n = t.variantInfo.listing_details) == null
            ? void 0
            : n.description) == null &&
          t.variantInfo.variant_properties == null;
      return !!(
        !r &&
        e &&
        o("WAWebLinkedCatalogHelper").isLinkedCatalog(e.id) &&
        o("WAWebBizGatingUtils").isCatalogVariantsViewingEnabled()
      );
    }
    var d = n("$InternalEnum")({
      COLOR: "color",
      SIZE: "size",
      MATERIAL: "material",
      PATTERN: "pattern",
      GENDER: "gender",
      AGE_GROUP: "age group",
    });
    function m(e, t) {
      var n = d.cast(e.toLocaleLowerCase("en-US"));
      if (n == null) return e;
      switch (n) {
        case d.COLOR:
          return t == null
            ? s._(/*BTDS*/ "Color")
            : s._(/*BTDS*/ '_j{"*":"{number} Colors","_1":"Color"}', [
                s._plural(t, "number"),
              ]);
        case d.SIZE:
          return s._(/*BTDS*/ "Size");
        case d.MATERIAL:
          return s._(/*BTDS*/ "Material");
        case d.PATTERN:
          return s._(/*BTDS*/ "Pattern");
        case d.GENDER:
          return s._(/*BTDS*/ "Gender");
        case d.AGE_GROUP:
          return s._(/*BTDS*/ "Age group");
      }
    }
    ((l.VARIANT_THUMBNAIL_IMAGE_SIZE = e),
      (l.FULL_VARIANT_INFO_FIELDS = u),
      (l.shouldRequestVariantInfo = c),
      (l.VariantOptionName = d),
      (l.getVariantTypeOptions = m));
  },
  226,
);

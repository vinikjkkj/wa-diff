__d(
  "WAWebProductCatalogItemValidationUtils",
  ["fbt", "WAWebCurrencyUtils", "WAWebProductModel", "WAWebURLUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e.trim() === ""
        ? { error: s._(/*BTDS*/ "Add a title"), isValid: !1 }
        : { error: "", isValid: !0 };
    }
    function u(e, t) {
      return t === ""
        ? { error: "", isValid: !0 }
        : o("WAWebCurrencyUtils").validatePriceString(
              e,
              t,
              o("WAWebProductModel").MIN_PRICE,
              o("WAWebProductModel").MAX_PRICE,
            )
          ? { error: "", isValid: !0 }
          : { error: s._(/*BTDS*/ "Enter a valid price"), isValid: !1 };
    }
    function c(e, t, n) {
      if (t === "") return { error: "", isValid: !0 };
      if (
        !o("WAWebCurrencyUtils").validatePriceString(
          e,
          t,
          o("WAWebProductModel").MIN_PRICE,
          o("WAWebProductModel").MAX_PRICE,
        )
      )
        return { error: s._(/*BTDS*/ "Enter a valid sale price"), isValid: !1 };
      var r = n !== "" ? o("WAWebCurrencyUtils").valueFromString(e, n) : null,
        a = t !== "" ? o("WAWebCurrencyUtils").valueFromString(e, t) : null;
      return r == null && a != null
        ? { error: s._(/*BTDS*/ "Sale price requires a price"), isValid: !1 }
        : a != null && r != null && a >= r
          ? {
              error: s._(/*BTDS*/ "Sale price must be less than price"),
              isValid: !1,
            }
          : { error: "", isValid: !0 };
    }
    function d(e) {
      return e === ""
        ? { error: "", isValid: !0 }
        : r("WAWebURLUtils").isValid(e)
          ? { error: "", isValid: !0 }
          : { error: s._(/*BTDS*/ "URL is incorrect"), isValid: !1 };
    }
    function m(e) {
      return e.length === 0
        ? { error: s._(/*BTDS*/ "Add at least one image"), isValid: !1 }
        : { error: "", isValid: !0 };
    }
    function p(e) {
      return e !== "" &&
        !r("WAWebURLUtils").isHttps(e) &&
        !r("WAWebURLUtils").isHttp(e)
        ? "https://" + e
        : e;
    }
    ((l.validateItemName = e),
      (l.validateItemPrice = u),
      (l.validateItemSalePrice = c),
      (l.validateItemLink = d),
      (l.validateItemImages = m),
      (l.autoPrefixLinkWithHttps = p));
  },
  226,
);

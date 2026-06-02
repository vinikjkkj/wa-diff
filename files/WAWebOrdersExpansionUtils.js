__d(
  "WAWebOrdersExpansionUtils",
  [
    "WAMemoizeCache",
    "WAWebABProps",
    "WAWebL10NCountryCodes",
    "WAWebLidMigrationUtils",
    "WAWebOrdersExpansionCountries",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e,
        t,
        n =
          ((e =
            (t = o(
              "WAWebOrdersExpansionCountries",
            ).getOrdersExpansionAllowedCountries()) == null
              ? void 0
              : t.length) != null
            ? e
            : 0) > 0;
      return (
        n &&
        o("WAWebABProps").getABPropConfigValue(
          "payments_merchant_global_orders_value_props_banner_enabled",
        )
      );
    }
    function s() {
      var e, t;
      return (
        ((e =
          (t = o(
            "WAWebOrdersExpansionCountries",
          ).getOrdersExpansionAllowedCountries()) == null
            ? void 0
            : t.length) != null
          ? e
          : 0) > 0
      );
    }
    var u = o("WAMemoizeCache").memoizeWithArgs(
      function (e) {
        var t,
          n =
            (t = o(
              "WAWebOrdersExpansionCountries",
            ).getOrdersExpansionAllowedCountries()) != null
              ? t
              : [],
          r = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e);
        return (
          n.find(function (e) {
            return r === e;
          }) != null
        );
      },
      function (e) {
        return e;
      },
    );
    function c(e) {
      if (!s()) return !1;
      var t = p(e.contact.id),
        n = t == null ? void 0 : t.user;
      return n == null ? !1 : u(n);
    }
    function d(e, t) {
      var n, r;
      return s()
        ? e.length > 0 &&
            ((n = e.at(0)) == null ? void 0 : n.currency) != null &&
            ((r = e.at(0)) == null ? void 0 : r.currency) !== t
        : !1;
    }
    function m(e) {
      var t = p(o("WAWebUserPrefsMeUser").getMaybeMePnUser()),
        n = p(e.contact.id);
      return (
        t != null &&
        n != null &&
        o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(t.user) ===
          o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(n.user)
      );
    }
    var p = function (t) {
      return t != null ? o("WAWebLidMigrationUtils").toPn(t) : t;
    };
    ((l.isOrderExpansionBannerEnabled = e),
      (l.isOrderExpansionEnabled = s),
      (l.isContactCountrySupported = c),
      (l.shouldPreventCatalogProductSelection = d),
      (l.isSellerCountrySameAsBuyer = m));
  },
  98,
);

__d(
  "WAWebOrdersExpansionUtils",
  [
    "WAWebABProps",
    "WAWebL10NCountryCodes",
    "WAWebLidMigrationUtils",
    "WAWebOrdersExpansionCountries",
    "WAWebUserPrefsMeUser",
    "lodash",
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
    var s = function () {
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
      },
      u = r("lodash").memoize(function (e) {
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
      }),
      c = function (t) {
        if (!s()) return !1;
        var e = p(t.contact.id),
          n = e == null ? void 0 : e.user;
        return n == null ? !1 : u(n);
      },
      d = function (t, n) {
        var e, r;
        return s()
          ? t.length > 0 &&
              ((e = t.at(0)) == null ? void 0 : e.currency) != null &&
              ((r = t.at(0)) == null ? void 0 : r.currency) !== n
          : !1;
      },
      m = function (t) {
        var e = p(o("WAWebUserPrefsMeUser").getMaybeMePnUser()),
          n = p(t.contact.id);
        return (
          e != null &&
          n != null &&
          o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e.user) ===
            o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(n.user)
        );
      },
      p = function (t) {
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

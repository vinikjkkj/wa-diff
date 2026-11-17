__d(
  "WAWebCustomerManagerEducationBannerNux",
  [
    "WALogger",
    "WAWebCurrentMoment",
    "WAWebCustomerManagerGating",
    "WAWebNux",
    "WAWebNuxCoolOff",
    "WAWebNuxSync",
    "WAWebUserPrefsNuxPreferences",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      var e = o(
        "WAWebCustomerManagerGating",
      ).customerManagerEducationBannerMaxViewDays();
      return {
        COOL_OFF_START_STORAGE_KEY:
          o("WAWebNux").CoolOffPeriodKeys.CUSTOMER_MANAGER_EDUCATION_BANNER,
        MAX_DISMISSES: 1,
        MAX_VIEWS_IN_DAYS: e,
        VIEWS_BEFORE_COOL_OFF_IN_DAYS: e + 1,
      };
    }
    function u() {
      return o("WAWebUserPrefsNuxPreferences").nuxExistsInNuxSync(
        o("WAWebNux").NuxSyncKey.CUSTOMER_MANAGER_EDUCATION_BANNER,
      )
        ? !1
        : o("WAWebNuxCoolOff").shouldShowNUX(
            o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX
              .CUSTOMER_MANAGER_EDUCATION_BANNER,
            s(),
          ) || c();
    }
    function c() {
      var e = new (o("WAWebNuxCoolOff").CoolOffNux)(
          o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX
            .CUSTOMER_MANAGER_EDUCATION_BANNER,
          s(),
        ).nux,
        t = e.dismisses,
        n = e.lastViewedDay,
        r = e.totalViewDays;
      return (
        t === 0 &&
        r ===
          o(
            "WAWebCustomerManagerGating",
          ).customerManagerEducationBannerMaxViewDays() &&
        n.isSame(o("WAWebCurrentMoment").getCurrentMoment(), "day")
      );
    }
    function d() {
      new (o("WAWebNuxCoolOff").CoolOffNux)(
        o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX
          .CUSTOMER_MANAGER_EDUCATION_BANNER,
        s(),
      ).show();
    }
    function m() {
      (new (o("WAWebNuxCoolOff").CoolOffNux)(
        o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX
          .CUSTOMER_MANAGER_EDUCATION_BANNER,
        s(),
      ).dismiss(),
        r("WAWebNuxSync")
          .acknowledgeNux(
            o("WAWebNux").NuxSyncKey.CUSTOMER_MANAGER_EDUCATION_BANNER,
          )
          .catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[customer_manager] education banner retirement did not reach syncd",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("customer-manager-education-banner-retire-sync-fail");
          }));
    }
    ((l.shouldShowCustomerManagerEducationBanner = u),
      (l.markCustomerManagerEducationBannerShown = d),
      (l.retireCustomerManagerEducationBanner = m));
  },
  98,
);

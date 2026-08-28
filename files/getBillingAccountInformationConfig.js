__d(
  "getBillingAccountInformationConfig",
  [
    "BillingConfigAccountInformationLoader",
    "BillingConfigAccountInformationUtils",
    "Promise",
    "RelayHooks",
    "asyncToGeneratorRuntime",
    "getBillingAccountInformationConfig_paymentAccount.graphql",
    "getBillingCountryCurrencyTimezone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n(
              "getBillingAccountInformationConfig_paymentAccount.graphql",
            )),
      c = function (t) {
        var e = o(
            "getBillingCountryCurrencyTimezone",
          ).getBillingCountryCurrencyTimezone(
            o("RelayHooks").readInlineData(
              o("getBillingCountryCurrencyTimezone")
                .countryCurrencyTimezoneFragment,
              t,
            ),
          ),
          n = e.country,
          r = m(t),
          a = o("BillingConfigAccountInformationLoader").read(n),
          i = a.loadConfig,
          l = i(r);
        return l;
      },
      d = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
              "getBillingCountryCurrencyTimezone",
            ).getBillingCountryCurrencyTimezone(
              o("RelayHooks").readInlineData(
                o("getBillingCountryCurrencyTimezone")
                  .countryCurrencyTimezoneFragment,
                e,
              ),
            ),
            r = t.country,
            a = m(e),
            i = yield n("asyncToGeneratorRuntime").asyncToGenerator(
              function* () {
                try {
                  return o("BillingConfigAccountInformationLoader").read(r);
                } catch (e) {
                  return (
                    yield (s || (s = n("Promise"))).resolve(e),
                    o("BillingConfigAccountInformationLoader").read(r)
                  );
                }
              },
            )(),
            l = i.loadConfig;
          return l(a);
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      })();
    function m(e) {
      var t,
        n,
        r =
          e == null || (t = e.billable_account) == null ? void 0 : t.__typename,
        a =
          e == null || (n = e.billable_account) == null
            ? void 0
            : n.application_type,
        i = o("BillingConfigAccountInformationUtils").getProductFromAccountType(
          r,
          !1,
          a,
        );
      return {
        canUpdate: null,
        countries: [],
        currencies: [],
        product: i,
        showFullForm: !1,
        timezones: [],
      };
    }
    ((l.accountInformationConfigFragment = u),
      (l.readBillingAccountInformationConfig = c),
      (l.getBillingAccountInformationConfig = d));
  },
  98,
);

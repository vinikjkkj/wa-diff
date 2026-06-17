__d(
  "WAWebCountryCodeUtils",
  [
    "WACcToIso",
    "WALogger",
    "WAPhoneFindCC",
    "WAWebApiContactUsernameFields",
    "WAWebAsISOCountryCode",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = o("WAPhoneFindCC").findCC(e),
        n = parseInt(t, 10),
        a = r("WACcToIso")[n];
      return r("nullthrows")(a);
    }
    function u(t) {
      var n,
        r = (n = o("WAWebLidMigrationUtils").toPn(t)) == null ? void 0 : n.user;
      if (r != null)
        try {
          return o("WAWebAsISOCountryCode").asISOCountryCode(s(r));
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "failed to get country code from pn, error: ",
                  "",
                ])),
              t,
            )
            .sendLogs("failed-to-get-country-code-from-pn", { sampling: 0.01 });
        }
      return null;
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
            t =
              e != null
                ? s(e.user)
                : yield o(
                    "WAWebApiContactUsernameFields",
                  ).getOrFetchMeContactUsernameCountryCode();
          return t;
        })),
        d.apply(this, arguments)
      );
    }
    ((l.pnToCountryCodeString = s),
      (l.getCountryCodeFromPn = u),
      (l.getMyCountryCode = c));
  },
  98,
);

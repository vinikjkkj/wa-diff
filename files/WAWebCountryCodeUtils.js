__d(
  "WAWebCountryCodeUtils",
  [
    "WACcToIso",
    "WAIsoToCc",
    "WALogger",
    "WAPhoneFindCC",
    "WAWebApiContactUsernameFields",
    "WAWebAsISOCountryCode",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMeUser",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t = o("WAPhoneFindCC").findCC(e),
        n = parseInt(t, 10),
        a = r("WACcToIso")[n];
      return r("nullthrows")(a);
    }
    function c(t) {
      var n,
        r = (n = o("WAWebLidMigrationUtils").toPn(t)) == null ? void 0 : n.user;
      if (r != null)
        try {
          return o("WAWebAsISOCountryCode").asISOCountryCode(u(r));
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
    async function d() {
      var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        t =
          e != null
            ? u(e.user)
            : await o(
                "WAWebApiContactUsernameFields",
              ).getOrFetchMeContactUsernameCountryCode();
      return t;
    }
    async function m() {
      try {
        var e,
          t = await d(),
          n = t == null ? null : (e = r("WAIsoToCc")[t]) != null ? e : null;
        return n == null ? null : String(n);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "failed to get my calling code, error: ",
                  "",
                ])),
              e,
            )
            .sendLogs("failed-to-get-my-calling-code", { sampling: 0.01 }),
          null
        );
      }
    }
    ((l.pnToCountryCodeString = u),
      (l.getCountryCodeFromPn = c),
      (l.getMyCountryCode = d),
      (l.getMyCallingCode = m));
  },
  98,
);

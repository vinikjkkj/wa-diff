__d(
  "WAWebFMXTrustSignals",
  [
    "fbt",
    "WALogger",
    "WAWebApiContactUsernameFields",
    "WAWebCountriesUtils",
    "WAWebFMXGatingUtils",
    "WAWebFrontendContactGetters",
    "WAWebOrgMemberContactName",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebApiContactUsernameFields",
          ).getOrFetchContactUsernameCountryCode(e.id);
          if (t == null)
            return { isDifferentCountry: null, label: null, shown: !1 };
          var n = yield m(),
            r = n == null ? null : n !== t,
            a =
              n !== t ||
              o(
                "WAWebFMXGatingUtils",
              ).isFmxPersistentCountryTrustSignalEnabled();
          return a
            ? { isDifferentCountry: r, label: yield _(t), shown: a }
            : { isDifferentCountry: r, label: null, shown: a };
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            return yield o(
              "WAWebApiContactUsernameFields",
            ).getOrFetchMeContactUsernameCountryCode();
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "failed to get viewer country code for the FMX trust signal, error: ",
                      "",
                    ])),
                  t,
                )
                .tags("fmx", "wa-ice", "wa-spice-web")
                .sendLogs("fmx-viewer-country-code-failed", { sampling: 0.01 }),
              null
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          try {
            t = yield o("WAWebCountriesUtils").getCountryNameFromCountryCode(e);
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "failed to localize the FMX sender country, error: ",
                      "",
                    ])),
                  e,
                )
                .tags("fmx", "wa-ice", "wa-spice-web")
                .sendLogs("fmx-sender-country-name-failed", { sampling: 0.01 }),
              null
            );
          }
          return t == null
            ? null
            : s._(/*BTDS*/ "Phone number from {country}", [
                s._param("country", t),
              ]);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return (
        !o("WAWebFrontendContactGetters").getIsMyContact(e) &&
        o("WAWebOrgMemberContactName").getKnownOrgMember(e.id) == null
      );
    }
    function h(e) {
      if (g(e)) return s._(/*BTDS*/ "Not a contact");
    }
    ((l.getCountryCodeTrustSignal = c),
      (l.shouldShowContactTrustSignal = g),
      (l.getContactTrustSignal = h));
  },
  226,
);

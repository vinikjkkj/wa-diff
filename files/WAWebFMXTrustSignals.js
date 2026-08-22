__d(
  "WAWebFMXTrustSignals",
  [
    "fbt",
    "WALogger",
    "WAWebApiContactUsernameFields",
    "WAWebCountriesUtils",
    "WAWebFMXGatingUtils",
    "WAWebFrontendContactGetters",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react"));
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebApiContactUsernameFields",
          ).getOrFetchContactUsernameCountryCode(e.id);
          if (t == null)
            return { isDifferentCountry: null, label: null, shown: !1 };
          var n = yield _(),
            r = n == null ? null : n !== t,
            a =
              n !== t ||
              o(
                "WAWebFMXGatingUtils",
              ).isFmxPersistentCountryTrustSignalEnabled();
          return a
            ? { isDifferentCountry: r, label: yield g(t), shown: a }
            : { isDifferentCountry: r, label: null, shown: a };
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return !o("WAWebFrontendContactGetters").getIsMyContact(e);
    }
    function C(e) {
      if (y(e)) return s._(/*BTDS*/ "Not a contact");
    }
    function b(e) {
      if (
        e.isSenderNewAccount === !0 &&
        o("WAWebFMXGatingUtils").isExpandFmxAccountAgeUiEnabled()
      ) {
        var t = s._(/*BTDS*/ "New account");
        return o("WAWebFMXGatingUtils").isExpandFmxAccountAgeBoldedEnabled()
          ? d.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              colorName: "contentDeemphasized",
              children: t,
            })
          : t;
      }
    }
    ((l.getCountryCodeTrustSignal = m),
      (l.shouldShowContactTrustSignal = y),
      (l.getContactTrustSignal = C),
      (l.getNewAccountTrustSignal = b));
  },
  226,
);

__d(
  "WAWebFMXTrustSignals",
  [
    "fbt",
    "WAWebApiContactUsernameFields",
    "WAWebCountriesUtils",
    "WAWebFMXGatingUtils",
    "WAWebFrontendContactGetters",
    "WAWebUserPrefsMeUser",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            n = yield o(
              "WAWebApiContactUsernameFields",
            ).getOrFetchContactUsernameCountryCode(t),
            r = yield o(
              "WAWebApiContactUsernameFields",
            ).getOrFetchContactUsernameCountryCode(e.id);
          return n !== r;
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (yield c(e)) {
            var t = yield o(
              "WAWebApiContactUsernameFields",
            ).getOrFetchContactUsernameCountryCode(e.id);
            if (t != null) {
              var n = yield o(
                "WAWebCountriesUtils",
              ).getCountryNameFromCountryCode(t);
              if (n != null)
                return s._(/*BTDS*/ "Phone number from {country}", [
                  s._param("country", n),
                ]);
            }
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return !o("WAWebFrontendContactGetters").getIsMyContact(e);
    }
    function f(e) {
      if (_(e)) return s._(/*BTDS*/ "Not a contact");
    }
    function g(e) {
      if (
        e.isSenderNewAccount === !0 &&
        o("WAWebFMXGatingUtils").isExpandFmxAccountAgeUiEnabled()
      ) {
        var t = s._(/*BTDS*/ "New account");
        return o("WAWebFMXGatingUtils").isExpandFmxAccountAgeBoldedEnabled()
          ? u.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              colorName: "contentDeemphasized",
              children: t,
            })
          : t;
      }
    }
    function h(e) {
      if (
        e.isSenderNewAccount === !0 &&
        o("WAWebFMXGatingUtils").isExpandFmxAccountAgeUiEnabled() &&
        o("WAWebFMXGatingUtils").isSuspiciousFmxEnabled()
      ) {
        var t = s._(/*BTDS*/ "New business account");
        return o("WAWebFMXGatingUtils").isExpandFmxAccountAgeBoldedEnabled()
          ? u.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              colorName: "contentDeemphasized",
              children: t,
            })
          : t;
      }
    }
    ((l.shouldShowCountryCodeTrustSignal = c),
      (l.getCountryCodeTrustSignal = m),
      (l.shouldShowContactTrustSignal = _),
      (l.getContactTrustSignal = f),
      (l.getNewAccountTrustSignal = g),
      (l.getNewSmbAccountTrustSignal = h));
  },
  226,
);

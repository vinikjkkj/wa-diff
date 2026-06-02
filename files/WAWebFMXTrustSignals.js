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
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    async function c(e) {
      var t = o("WAWebUserPrefsMeUser").getMeUser(),
        n = await o(
          "WAWebApiContactUsernameFields",
        ).getOrFetchContactUsernameCountryCode(t),
        r = await o(
          "WAWebApiContactUsernameFields",
        ).getOrFetchContactUsernameCountryCode(e.id);
      return n !== r;
    }
    async function d(e) {
      if (await c(e)) {
        var t = await o(
          "WAWebApiContactUsernameFields",
        ).getOrFetchContactUsernameCountryCode(e.id);
        if (t != null) {
          var n = await o("WAWebCountriesUtils").getCountryNameFromCountryCode(
            t,
          );
          if (n != null)
            return s._(/*BTDS*/ "Phone number from {country}", [
              s._param("country", n),
            ]);
        }
      }
    }
    function m(e) {
      return !o("WAWebFrontendContactGetters").getIsMyContact(e);
    }
    function p(e) {
      if (m(e)) return s._(/*BTDS*/ "Not a contact");
    }
    function _(e) {
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
    ((l.shouldShowCountryCodeTrustSignal = c),
      (l.getCountryCodeTrustSignal = d),
      (l.shouldShowContactTrustSignal = m),
      (l.getContactTrustSignal = p),
      (l.getNewAccountTrustSignal = _));
  },
  226,
);

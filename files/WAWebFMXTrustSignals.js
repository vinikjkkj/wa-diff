__d(
  "WAWebFMXTrustSignals",
  [
    "fbt",
    "WALogger",
    "WAWebApiContactUsernameFields",
    "WAWebCountriesUtils",
    "WAWebFMXGatingUtils",
    "WAWebFrontendContactGetters",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u;
    async function c(e) {
      var t = await o(
        "WAWebApiContactUsernameFields",
      ).getOrFetchContactUsernameCountryCode(e.id);
      if (t == null)
        return { isDifferentCountry: null, label: null, shown: !1 };
      var n = await d(),
        r = n == null ? null : n !== t,
        a =
          n !== t ||
          o("WAWebFMXGatingUtils").isFmxPersistentCountryTrustSignalEnabled();
      return a
        ? { isDifferentCountry: r, label: await m(t), shown: a }
        : { isDifferentCountry: r, label: null, shown: a };
    }
    async function d() {
      try {
        return await o(
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
    }
    async function m(e) {
      var t;
      try {
        t = await o("WAWebCountriesUtils").getCountryNameFromCountryCode(e);
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
      return t == null ? null : s._(/*BTDS*/ "", [s._param("country", t)]);
    }
    function p(e) {
      return (
        !o("WAWebFrontendContactGetters").getIsMyContact(e) &&
        o("WAWebFrontendContactGetters").getOrgPrimaryId(e) == null
      );
    }
    function _(e) {
      if (p(e)) return s._(/*BTDS*/ "");
    }
    ((l.getCountryCodeTrustSignal = c),
      (l.shouldShowContactTrustSignal = p),
      (l.getContactTrustSignal = _));
  },
  226,
);

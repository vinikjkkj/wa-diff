__d(
  "CookieConsent",
  ["InitialCookieConsent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set((e || (e = r("InitialCookieConsent"))).initialConsent),
      u = e.shouldShowCookieBanner,
      c = {
        setConsented: function () {
          (s.add(1), (u = !1));
        },
        shouldShowCookieBanner: function () {
          return u;
        },
        shouldWaitForDeferredDatrCookie: function () {
          return (e || (e = r("InitialCookieConsent")))
            .shouldWaitForDeferredDatrCookie;
        },
        isFirstPartyStorageAllowed: function () {
          return (
            !(e || (e = r("InitialCookieConsent"))).noCookies &&
            c.hasFirstPartyConsent()
          );
        },
        hasFirstPartyConsent: function () {
          return s.has(1);
        },
        hasIndividualThirdPartyIntegrationConsent: function (t) {
          var e,
            n = c.hasThirdPartyConsent([t]);
          return (e = n.get(t)) != null ? e : !1;
        },
        hasThirdPartyConsent: function (n) {
          var t = new Map();
          if (
            !(e || (e = r("InitialCookieConsent")))
              .hasGranularThirdPartyCookieConsent
          ) {
            var o = s.has(2);
            for (var a of n)
              (
                e || (e = r("InitialCookieConsent"))
              ).exemptedIntegrations.includes(a)
                ? t.set(a, !0)
                : t.set(a, o);
            return t;
          }
          for (var i of n)
            (e || (e = r("InitialCookieConsent"))).optedInIntegrations.includes(
              i,
            )
              ? t.set(i, !0)
              : t.set(i, !1);
          return t;
        },
        isThirdPartyConsentRequiredForMetaPixel: function () {
          return (e || (e = r("InitialCookieConsent")))
            .consentRequiredForMetaPixel;
        },
        isThirdPartyIntegrationEmbedAllowed: function (n) {
          return (e || (e = r("InitialCookieConsent")))
            .hasGranularThirdPartyCookieConsent
            ? !(e || (e = r("InitialCookieConsent"))).noCookies &&
                (
                  e || (e = r("InitialCookieConsent"))
                ).optedInIntegrations.includes(n)
            : (
                  e || (e = r("InitialCookieConsent"))
                ).exemptedIntegrations.includes(n)
              ? !(e || (e = r("InitialCookieConsent"))).noCookies
              : !(e || (e = r("InitialCookieConsent"))).noCookies && s.has(2);
        },
      },
      d = c;
    l.default = d;
  },
  98,
);

__d(
  "Cookie",
  ["CookieConsent", "CookieCore", "InitialCookieConsent", "ODS"],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return (c || (c = r("CookieConsent"))).hasFirstPartyConsent()
        ? !0
        : ((s || (s = o("ODS"))).bumpEntityKey(
            798,
            "defer_cookies",
            "set." + e,
          ),
          !1);
    }
    function m() {
      return !(u || (u = r("InitialCookieConsent"))).noCookies;
    }
    function p(e, t) {
      !m() || !d(e) || o("CookieCore").set(e, t);
    }
    function _(e, t) {
      m() && o("CookieCore").set(e, t);
    }
    function f(e, t, n, r, a, i) {
      !m() || !d(e) || o("CookieCore").setWithoutChecks(e, t, n, r, a, null, i);
    }
    var g = {
      clear: (e = o("CookieCore")).clear,
      get: e.get,
      set: p,
      setIfFirstPartyContext: e.setIfFirstPartyContext,
      setWithoutCheckingUserConsent_DANGEROUS: _,
      setWithoutChecks: f,
      setWithoutChecksIfFirstPartyContext:
        e.setWithoutChecksIfFirstPartyContext,
    };
    l.default = g;
  },
  98,
);

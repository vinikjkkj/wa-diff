__d(
  "WAWebL10NCookieUtils",
  [
    "WATimeUtils",
    "WAWebCookieDomain",
    "WAWebCookieManager",
    "WAWebRuntimeEnvironmentUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "wa_web_lang_pref";
    function s(t) {
      if (!o("WAWebRuntimeEnvironmentUtils").isWorker()) {
        var n = Date.now() + 4 * o("WATimeUtils").WEEK_MILLISECONDS;
        o("WAWebCookieManager").setCookie({
          name: e,
          value: t,
          path: "/",
          domain: o("WAWebCookieDomain").COOKIE_DOMAIN,
          secure: !0,
          expirationDate: n,
        });
      }
    }
    function u() {
      return o("WAWebRuntimeEnvironmentUtils").isWorker()
        ? null
        : o("WAWebCookieManager").getCookie(e);
    }
    ((l.setWAWebLocalePrefCookieValue = s),
      (l.getWAWebLocalePrefCookieValue = u));
  },
  98,
);

__d(
  "PolarisCookies",
  [
    "$InternalEnum",
    "PolarisCookieConsent",
    "PolarisIsLoggedIn",
    "component-cookie",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      CSRF_TOKEN: "csrftoken",
      DANGEROUS_DO_NO_USE_DS_USER_ID: "ds_user_id",
      LANGUAGE_CODE: "ig_lang",
      MACHINE_ID: "mid",
    });
    function s(e) {
      return r("component-cookie")(e);
    }
    var u = { domain: ".instagram.com", path: "/" };
    function c(e, t, n) {
      (d() && !o("PolarisIsLoggedIn").isLoggedIn()) ||
        r("component-cookie")(e, t, babelHelpers.extends({}, u, n));
    }
    function d() {
      return r("PolarisCookieConsent").should_show_consent_dialog;
    }
    ((l.PolarisKnownCookies = e),
      (l.getCookie = s),
      (l.setCookie = c),
      (l.needsToConfirmCookies = d));
  },
  98,
);

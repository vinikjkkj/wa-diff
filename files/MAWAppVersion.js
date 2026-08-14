__d(
  "MAWAppVersion",
  ["SiteData"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return "302.0." + r("SiteData").client_revision;
    }
    function s() {
      return {
        primary: 302,
        secondary: 0,
        tertiary: r("SiteData").client_revision,
      };
    }
    ((l.getVersionNumber = e), (l.getAppVersionParts = s));
  },
  98,
);

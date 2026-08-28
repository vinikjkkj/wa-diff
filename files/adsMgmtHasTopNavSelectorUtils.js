__d(
  "adsMgmtHasTopNavSelectorUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.section,
        n = e.tool,
        r = n === "REPORTING",
        o = n === "GUIDED_ONBOARDING",
        a = n === "AUDIENCES",
        i = n === "CREATIVE_REPORTING",
        l = t === "AD_ACCOUNT_SETTINGS",
        s = t === "ADVERTISING_SETTINGS",
        u = t === "PACKAGE_AD_CREATION",
        c = t === "MESSAGE_LANDING_PAGE";
      return !(l || r || a || i || u || o || c || s);
    }
    i.adsMgmtHasTopNav = e;
  },
  66,
);

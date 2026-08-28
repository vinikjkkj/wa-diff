__d(
  "BillingLocaleUtil",
  ["CurrentLocale"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("CurrentLocale").get() || "en_US";
    }
    l.getCurrentLocale = e;
  },
  98,
);

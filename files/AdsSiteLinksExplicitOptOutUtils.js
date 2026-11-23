__d(
  "AdsSiteLinksExplicitOptOutUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e == null
        ? !1
        : (e.dataConsentStatus === "OPT_OUT" &&
            (e.dataConsentSource === "MANUAL" ||
              e.dataConsentSource === "STICKY")) ||
            (e.formatConsentStatus === "OPT_OUT" &&
              (e.formatConsentSource === "MANUAL" ||
                e.formatConsentSource === "STICKY"));
    }
    i.hasExplicitSiteLinksOptOut = e;
  },
  66,
);

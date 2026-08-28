__d(
  "AudienceNetworkUtils",
  [
    "$InternalEnum",
    "AdsAPICampaignPaths",
    "AdsAPIObjectives",
    "AdsAccountUtils",
    "AdsError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored(["DESKTOP", "MOBILE", "TABLET"]);
    function s(e) {
      return (
        e === r("AdsAPIObjectives").VIDEO_VIEWS ||
        e === r("AdsAPIObjectives").REACH ||
        e === r("AdsAPIObjectives").BRAND_AWARENESS ||
        e === r("AdsAPIObjectives").POST_ENGAGEMENT
      );
    }
    function u(e, t, n) {
      var o = [];
      return (
        o.push(
          new (r("AdsError"))(e, t, {
            level: r("AdsError").Level.WARN,
            path: r("AdsAPICampaignPaths").TARGETING.PUBLISHER_PLATFORMS,
            cta: n,
          }),
        ),
        o
      );
    }
    function c(e) {
      return (
        e === r("AdsAPIObjectives").MOBILE_APP_INSTALLS ||
        e === r("AdsAPIObjectives").APP_INSTALLS
      );
    }
    function d() {
      var t = Math.min(screen.width, window.innerWidth);
      return t <= 480 ? e.MOBILE : t <= 1200 ? e.TABLET : e.DESKTOP;
    }
    function m(e, t) {
      return r("AdsAccountUtils").hasCapabilityFromList(
        e,
        "ADS_ALLOW_AUDIENCE_NETWORK_ONLY",
      );
    }
    ((l.DeviceTypes = e),
      (l.supportsANVideoButNoANStatic = s),
      (l.pushError = u),
      (l.isMobileAppInstallObjective = c),
      (l.getDeviceType = d),
      (l.canUseFANExclusively = m));
  },
  98,
);

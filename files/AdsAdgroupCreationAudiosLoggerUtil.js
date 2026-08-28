__d(
  "AdsAdgroupCreationAudiosLoggerUtil",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        data:
          ((o = {}),
          (o.adgroup_id = e),
          (o.fragment_id = n),
          (o.status = t),
          o),
        eventName: "reels_music_ad_initial_opt_in_behavior",
      });
    }
    function s(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        data: ((n = {}), (n.adgroup_id = e), (n.message = t), n),
        eventName: "reels_music_ad_initial_opt_in_behavior",
      });
    }
    ((l.logOnCreateAdAudiosInitialOptInBehavior = e),
      (l.logOnCreateAdAudiosInitialOptInIneligibility = s));
  },
  98,
);

__d(
  "WamPathfinderWebFalcoEvent",
  [
    "FalcoLoggerInternal",
    "Promise",
    "getFalcoLogPolicy_DO_NOT_USE",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("getFalcoLogPolicy_DO_NOT_USE")("7577"),
      c = {
        platform: (s = r("requireDeferred"))(
          "WAWebFalcoCanonicalPlatform",
        ).__setRef("WamPathfinderWebFalcoEvent"),
        os_version: s("WAWebFalcoCanonicalOsVersion").__setRef(
          "WamPathfinderWebFalcoEvent",
        ),
        app_version: s("WAWebFalcoCanonicalAppVersion").__setRef(
          "WamPathfinderWebFalcoEvent",
        ),
        md_id: s("WAWebFalcoCanonicalMdId").__setRef(
          "WamPathfinderWebFalcoEvent",
        ),
        md_session_id: s("WAWebFalcoCanonicalMdSessionId").__setRef(
          "WamPathfinderWebFalcoEvent",
        ),
      };
    function d() {
      return (e || (e = n("Promise")))
        .all(
          Object.entries(c).map(function (e) {
            var t = e[0],
              n = e[1];
            return n.load().then(function (e) {
              return [t, e()];
            });
          }),
        )
        .then(function (e) {
          var t = {};
          return (
            e.forEach(function (e) {
              var n = e[0],
                r = e[1];
              t[n] = r;
            }),
            t
          );
        });
    }
    var m = o("FalcoLoggerInternal").create("wam_pathfinder_web", u, d),
      p = m;
    l.default = p;
  },
  98,
);

__d(
  "WamThreadInteractionDataVoipFalcoEvent",
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
      u = r("getFalcoLogPolicy_DO_NOT_USE")("8367"),
      c = {
        app_build: (s = r("requireDeferred"))(
          "WAWebFalcoCanonicalAppBuild",
        ).__setRef("WamThreadInteractionDataVoipFalcoEvent"),
        device_classification: s(
          "WAWebFalcoCanonicalDeviceClassification",
        ).__setRef("WamThreadInteractionDataVoipFalcoEvent"),
        platform: s("WAWebFalcoCanonicalPlatform").__setRef(
          "WamThreadInteractionDataVoipFalcoEvent",
        ),
        webc_phone_platform: s("WAWebFalcoCanonicalPlatform").__setRef(
          "WamThreadInteractionDataVoipFalcoEvent",
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
    var m = o("FalcoLoggerInternal").create(
        "wam_thread_interaction_data_voip",
        u,
        d,
      ),
      p = m;
    l.default = p;
  },
  98,
);

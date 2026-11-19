__d(
  "WamPsIdUpdateFalcoEvent",
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
      u = r("getFalcoLogPolicy_DO_NOT_USE")("8379"),
      c = {
        app_build: (s = r("requireDeferred"))(
          "WAWebFalcoCanonicalAppBuild",
        ).__setRef("WamPsIdUpdateFalcoEvent"),
        device_classification: s(
          "WAWebFalcoCanonicalDeviceClassification",
        ).__setRef("WamPsIdUpdateFalcoEvent"),
        platform: s("WAWebFalcoCanonicalPlatform").__setRef(
          "WamPsIdUpdateFalcoEvent",
        ),
        webc_phone_platform: s("WAWebFalcoCanonicalPlatform").__setRef(
          "WamPsIdUpdateFalcoEvent",
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
    var m = o("FalcoLoggerInternal").create("wam_ps_id_update", u, d),
      p = m;
    l.default = p;
  },
  98,
);

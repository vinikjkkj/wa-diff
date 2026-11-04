__d(
  "WamBrAddPixKeyOfferFalcoEvent",
  [
    "FalcoLoggerInternal",
    "Promise",
    "getFalcoLogPolicy_DO_NOT_USE",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("getFalcoLogPolicy_DO_NOT_USE")("9641"),
      u = {
        app_build: r("requireDeferred")("WAWebFalcoCanonicalAppBuild").__setRef(
          "WamBrAddPixKeyOfferFalcoEvent",
        ),
        platform: r("requireDeferred")("WAWebFalcoCanonicalPlatform").__setRef(
          "WamBrAddPixKeyOfferFalcoEvent",
        ),
      };
    function c() {
      return (e || (e = n("Promise")))
        .all(
          Object.entries(u).map(function (e) {
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
    var d = o("FalcoLoggerInternal").create("wam_br_add_pix_key_offer", s, c),
      m = d;
    l.default = m;
  },
  98,
);

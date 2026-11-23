__d(
  "WamWebcLinkPreviewResponseHandleFalcoEvent",
  [
    "FalcoLoggerInternal",
    "Promise",
    "getFalcoLogPolicy_DO_NOT_USE",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("getFalcoLogPolicy_DO_NOT_USE")("8308"),
      u = {
        device_classification: r("requireDeferred")(
          "WAWebFalcoCanonicalDeviceClassification",
        ).__setRef("WamWebcLinkPreviewResponseHandleFalcoEvent"),
        platform: r("requireDeferred")("WAWebFalcoCanonicalPlatform").__setRef(
          "WamWebcLinkPreviewResponseHandleFalcoEvent",
        ),
        webc_phone_platform: r("requireDeferred")(
          "WAWebFalcoCanonicalPlatform",
        ).__setRef("WamWebcLinkPreviewResponseHandleFalcoEvent"),
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
    var d = o("FalcoLoggerInternal").create(
        "wam_webc_link_preview_response_handle",
        s,
        c,
      ),
      m = d;
    l.default = m;
  },
  98,
);

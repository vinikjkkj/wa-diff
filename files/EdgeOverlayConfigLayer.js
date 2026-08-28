__d(
  "EdgeOverlayConfigLayer",
  ["OverlayConfigLayerBuilder", "OverlayConfigLayerSource"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        var e = new (r("OverlayConfigLayerBuilder"))(
          r("OverlayConfigLayerSource").BROWSER,
        );
        return (e.setZenonSdpTransformConfigDisableOpusStereo(!0), e.build());
      })(),
      s = e;
    l.default = s;
  },
  98,
);

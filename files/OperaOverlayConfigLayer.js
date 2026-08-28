__d(
  "OperaOverlayConfigLayer",
  ["OverlayConfigLayerBuilder", "OverlayConfigLayerSource", "UserAgentData"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e, t) {
        var n = new (r("OverlayConfigLayerBuilder"))(
          r("OverlayConfigLayerSource").BROWSER,
        );
        return (
          n.setZenonSdpTransformConfigDisableOpusStereo(!0),
          n.setZenonSdpTransformConfigPreserveH264(
            ((e = r("UserAgentData").browserVersion) != null ? e : 0) < 75 ||
              ((t = r("UserAgentData").browserVersion) != null ? t : 0) >= 76,
          ),
          n.build()
        );
      })(),
      s = e;
    l.default = s;
  },
  98,
);

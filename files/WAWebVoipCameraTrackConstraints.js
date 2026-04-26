__d(
  "WAWebVoipCameraTrackConstraints",
  ["WAGetMediaDevicesSupportedConstraints"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = {
          width: { ideal: e.width },
          height: { ideal: e.height },
          frameRate: { ideal: e.maxFps },
        },
        n = o(
          "WAGetMediaDevicesSupportedConstraints",
        ).getMediaDevicesSupportedConstraints(),
        r = {},
        a = {};
      return (
        (n == null ? void 0 : n.width) === !0 &&
          ((r.width = { min: e.width }), (a.width = { max: e.width })),
        (n == null ? void 0 : n.height) === !0 &&
          ((r.height = { min: e.height }), (a.height = { max: e.height })),
        Object.keys(r).length > 0 &&
          Object.keys(a).length > 0 &&
          (t.advanced = [r, a]),
        t
      );
    }
    l.default = e;
  },
  98,
);

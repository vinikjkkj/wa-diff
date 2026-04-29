__d(
  "WAWebVoipCameraTrackConstraints",
  ["WAGetMediaDevicesSupportedConstraints", "isEmptyObject"],
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
        a = {},
        i = {};
      return (
        (n == null ? void 0 : n.width) === !0 &&
          ((a.width = { min: e.width }), (i.width = { max: e.width })),
        (n == null ? void 0 : n.height) === !0 &&
          ((a.height = { min: e.height }), (i.height = { max: e.height })),
        !r("isEmptyObject")(a) &&
          !r("isEmptyObject")(i) &&
          (t.advanced = [a, i]),
        t
      );
    }
    l.default = e;
  },
  98,
);

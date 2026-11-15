__d(
  "WAWebLabyrinthLocalDeviceId",
  ["WAWebLabyrinthOpaqueTypes", "WAWebUserUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("WAWebUserUtils").getMeDeviceLidOrThrow().getDeviceId();
      return e != null
        ? o("WAWebLabyrinthOpaqueTypes").makeLocalDeviceId(String(e))
        : null;
    }
    function s() {
      var e = o("WAWebUserUtils").getMaybeMeDeviceId();
      return e == null
        ? null
        : o("WAWebLabyrinthOpaqueTypes").makeLocalDeviceId(String(e));
    }
    ((l.getLiveDeviceId = e), (l.getMaybeLabyrinthLocalDeviceId = s));
  },
  98,
);

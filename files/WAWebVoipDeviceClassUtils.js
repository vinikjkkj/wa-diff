__d(
  "WAWebVoipDeviceClassUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      LOW: "low",
      MOD_LOW: "mod_low",
      MID: "mid",
      MOD_HIGH: "mod_high",
      HIGH: "high",
    };
    function l(t, n) {
      return t == null || n == null
        ? null
        : t <= 1 || (t === 2 && n < 4)
          ? e.LOW
          : (t < 3 && n >= 4) || (t === 3 && n <= 7)
            ? e.MOD_LOW
            : (t === 3 && n > 7) || (t < 6 && n <= 7)
              ? e.MID
              : (t <= 8 && n <= 7) || (t < 6 && n === 8)
                ? e.MOD_HIGH
                : e.HIGH;
    }
    ((i.DEVICE_CLASS = e), (i.computeDeviceClass = l));
  },
  66,
);

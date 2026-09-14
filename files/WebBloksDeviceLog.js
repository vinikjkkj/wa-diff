__d(
  "WebBloksDeviceLog",
  ["WebBloksDeviceLogMinificationKeys"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r =
          n == null
            ? void 0
            : n.get(o("WebBloksDeviceLogMinificationKeys").DEVICE_LOG_TAG),
        a = r !== void 0 ? "[" + r + "] " + t : t;
      switch (
        n == null
          ? void 0
          : n.get(o("WebBloksDeviceLogMinificationKeys").DEVICE_LOG_PRIORITY)
      ) {
        case "debug":
          break;
        case "error":
          break;
        case "info":
          break;
        case "warn":
          break;
        case "verbose":
        default:
      }
    }
    l.default = e;
  },
  98,
);

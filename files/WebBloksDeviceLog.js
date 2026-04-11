__d(
  "WebBloksDeviceLog",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r = n == null ? void 0 : n.get("tag"),
        o = r !== void 0 ? "[" + r + "] " + t : t;
      switch (n == null ? void 0 : n.get("priority")) {
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
    i.default = e;
  },
  66,
);

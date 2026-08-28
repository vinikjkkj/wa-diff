__d(
  "WebBloksDeviceLog",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "#",
      l = "$";
    function s(t, n, r) {
      var o = r == null ? void 0 : r.get(l),
        a = o !== void 0 ? "[" + o + "] " + n : n;
      switch (r == null ? void 0 : r.get(e)) {
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
    i.default = s;
  },
  66,
);

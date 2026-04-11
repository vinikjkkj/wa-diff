__d(
  "getErrorNameFromMediaErrorCode",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      switch (e) {
        case 1:
          return "MEDIA_ERR_ABORTED";
        case 2:
          return "MEDIA_ERR_NETWORK";
        case 3:
          return "MEDIA_ERR_DECODE";
        case 4:
          return "MEDIA_ERR_SRC_NOT_SUPPORTED";
        default:
          return "MEDIA_ERR_UNKNOWN_" + (e != null ? e : "UNDEFINED");
      }
    }
    i.default = e;
  },
  66,
);

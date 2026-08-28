__d(
  "TimeSliceInteractionBootloadForPost",
  ["Bootloader"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      r("Bootloader").loadModules(
        [
          "Banzai",
          "ODS",
          "ResourceTimingBootloaderHelper",
          "TimeSliceHelper",
          "SnappyCompressUtil",
          "PerfXSharedFields",
        ],
        e,
        "TimeSliceInteractionBootloadForPost",
      );
    }
    l.default = e;
  },
  98,
);

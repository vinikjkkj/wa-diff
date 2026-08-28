__d(
  "translateMediaViewStateData",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (
        !(e.state !== "CLIENT_PROCESSING_COMPLETE" || e.fileType === "UNKNOWN")
      ) {
        var t = e.file,
          n = e.fileType;
        if (e.fileType === "VIDEO") {
          var r = e.trimData;
          return { extra: { fileType: n, trimData: r }, file: t };
        }
        return { extra: { fileType: n }, file: t };
      }
    }
    i.default = e;
  },
  66,
);

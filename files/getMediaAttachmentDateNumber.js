__d(
  "getMediaAttachmentDateNumber",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.state === "UPLOADED"
        ? e.takenTime != null
          ? e.takenTime
          : e.file.lastModified
        : 0;
    }
    i.default = e;
  },
  66,
);

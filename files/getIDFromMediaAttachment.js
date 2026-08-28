__d(
  "getIDFromMediaAttachment",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      switch (e.state) {
        case "PREEXISTING":
          return e.data.id;
        case "OPTIMISTIC_UPLOADED":
          return e.uploadID;
        default:
          return e.file.uploadID;
      }
    }
    i.default = e;
  },
  66,
);

__d(
  "getFirstVideoAttachmentFromViewState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (!e || !e.length) return null;
      for (var t of e)
        switch (t.state) {
          case "UPLOADING":
            switch (t.fileType) {
              case "VIDEO":
                return t;
              default:
            }
            break;
          case "UPLOADED":
            switch (t.fileType) {
              case "VIDEO":
                return t;
              default:
            }
            break;
          case "PREEXISTING":
            switch (t.fileType) {
              case "VIDEO":
                return t;
              default:
            }
          default:
        }
      return null;
    }
    i.default = e;
  },
  66,
);

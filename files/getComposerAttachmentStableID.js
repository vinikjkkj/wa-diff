__d(
  "getComposerAttachmentStableID",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return "file" in e && e.file.uploadID != null
        ? e.file.uploadID
        : "entID" in e && e.entID != null
          ? e.entID
          : null;
    }
    i.default = e;
  },
  66,
);

__d(
  "WAMediaManagerLogger",
  ["WAHashUtils", "WATagsLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("WATagsLogger").TAGS(["MediaManager"]);
    function s(t) {
      var n = t.downloadKind,
        r = t.fullSizePlaintextHash,
        a = e.TAGS([
          "download",
          "hash:" + o("WAHashUtils").sanitisePlaintextHash(r),
          n,
        ]);
      return a;
    }
    function u(t) {
      var n = t.plaintextHash,
        r = t.uploadKind,
        a = e.TAGS([
          "upload",
          "hash:" + o("WAHashUtils").sanitisePlaintextHash(n),
          r,
        ]);
      return a;
    }
    ((l.baseLogger = e),
      (l.createDownloadLogger = s),
      (l.createUploadLogger = u));
  },
  98,
);

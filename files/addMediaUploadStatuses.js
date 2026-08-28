__d(
  "addMediaUploadStatuses",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(t, r) {
      return t.reduce(function (t, r) {
        if (r.file == null) return t;
        var o = r.file.uploadID;
        if (o == null || t[o] != null) return t;
        var a = null,
          i = new (e || (e = n("Promise")))(function (e) {
            a = e;
          }),
          l = null,
          s = new e(function (e) {
            l = e;
          });
        return (
          a &&
            l &&
            (r.fileType === "PHOTO" || r.fileType === "VIDEO") &&
            (t[o] = {
              cancelUpload: l,
              onFileComplete: i,
              onUploadCancel: s,
              resolveFileUpload: a,
            }),
          t
        );
      }, r);
    }
    i.addMediaUploadStatuses = l;
  },
  66,
);

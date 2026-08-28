__d(
  "fileSlice",
  ["fileSliceName"],
  function (t, n, r, o, a, i, l) {
    var e = t.File && t.File.prototype[r("fileSliceName")];
    e || (e = t.Blob && t.Blob.prototype[r("fileSliceName")]);
    var s = e;
    l.default = s;
  },
  98,
);

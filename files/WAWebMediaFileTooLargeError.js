__d(
  "WAWebMediaFileTooLargeError",
  ["WAWebMiscErrors"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t, n, r) {
        var o;
        return (
          (o =
            e.call(
              this,
              "File (" + t + ") size = " + r + " exceeds limit of " + n,
            ) || this),
          (o.name = "MediaFileTooLarge"),
          (o.mediaType = t),
          (o.uploadLimit = n),
          (o.actualSize = r),
          o
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebMiscErrors").MediaFileError);
    l.default = e;
  },
  98,
);

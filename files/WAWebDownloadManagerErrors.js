__d(
  "WAWebDownloadManagerErrors",
  ["WAWebBackendErrors"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        var t;
        return (
          (t = e.call(this, 404) || this),
          (t.name = "MediaNotOnPhone"),
          t
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBackendErrors").ServerStatusCodeError);
    l.MediaNotOnPhone = e;
  },
  98,
);

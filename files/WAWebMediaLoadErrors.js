__d(
  "WAWebMediaLoadErrors",
  ["WACustomError"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "CatalogImageDownloadError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })((e = o("WACustomError")).CustomError),
      u = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "MediaNeedsReupload"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError),
      c = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "FileNotReadableError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError),
      d = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.name = "MediaLoadError"),
            (n.src = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError),
      m = (function (e) {
        function t() {
          var t;
          return (
            (t = e.call(this, "Transcode blob too large") || this),
            (t.name = "TranscodeBlobTooLargeError"),
            t
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError),
      p = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(this, "Unable to play video. Reason: " + String(t)) ||
              this),
            (n.name = "UnableToPlayVideoError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError),
      _ = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.name = "MediaDragDropError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(d),
      f = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "MediaUnsupportedError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError);
    f.message = "Media format is unsupported";
    var g = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t != null ? t : "") || this),
          (n.name = "UnableToGetContentLengthError"),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(e.CustomError);
    ((g.message = "Failed to get media contentLength from mms"),
      (l.CatalogImageDownloadError = s),
      (l.MediaNeedsReupload = u),
      (l.FileNotReadableError = c),
      (l.MediaLoadError = d),
      (l.TranscodeBlobTooLargeError = m),
      (l.UnableToPlayVideoError = p),
      (l.MediaDragDropError = _),
      (l.MediaUnsupportedError = f),
      (l.UnableToGetContentLengthError = g));
  },
  98,
);

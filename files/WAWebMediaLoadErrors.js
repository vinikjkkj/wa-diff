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
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, "Image failed to load.") || this),
            (r.name = "ImageError"),
            (r.src = t),
            (r.status = n),
            (r.target = { src: t, status: n }),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError),
      c = (function (e) {
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
      d = (function (e) {
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
      m = (function (e) {
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
      p = (function (e) {
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
      _ = (function (e) {
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
      f = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.name = "MediaDragDropError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(m),
      g = (function (e) {
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
    g.message = "Media format is unsupported";
    var h = (function (e) {
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
    ((h.message = "Failed to get media contentLength from mms"),
      (l.CatalogImageDownloadError = s),
      (l.ImageError = u),
      (l.MediaNeedsReupload = c),
      (l.FileNotReadableError = d),
      (l.MediaLoadError = m),
      (l.TranscodeBlobTooLargeError = p),
      (l.UnableToPlayVideoError = _),
      (l.MediaDragDropError = f),
      (l.MediaUnsupportedError = g),
      (l.UnableToGetContentLengthError = h));
  },
  98,
);

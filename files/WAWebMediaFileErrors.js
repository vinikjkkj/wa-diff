__d(
  "WAWebMediaFileErrors",
  ["WACustomError"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "MediaFileError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      s = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "InvalidImageFileType"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e),
      u = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o = e.call(this, t != null ? t : "") || this),
            (o.name = "InvalidMediaFileType"),
            (o.mediaType = n),
            (o.mimeType = r),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e),
      c = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "InvalidMediaCheckRepairFailedType"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e),
      d = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "MediaEncryptionError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e),
      m = "plaintext hash mismatch",
      p = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "MediaDecryptionError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e),
      _ = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "MediaHashMismatch"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e),
      f = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "MediaFileFailedLoad"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e),
      g = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "MediaFileEmpty"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e);
    ((l.MediaFileError = e),
      (l.InvalidImageFileType = s),
      (l.InvalidMediaFileType = u),
      (l.InvalidMediaCheckRepairFailedType = c),
      (l.MediaEncryptionError = d),
      (l.PLAINTEXT_HASH_MISMATCH_ERROR = m),
      (l.MediaDecryptionError = p),
      (l.MediaHashMismatch = _),
      (l.MediaFileFailedLoad = f),
      (l.MediaFileEmpty = g));
  },
  98,
);

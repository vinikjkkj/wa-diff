__d(
  "WAWebMiscErrors",
  ["WACustomError"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "Offline"),
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
            (n.name = "GaveUpRetry"),
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
            (n.name = "MediaFileError"),
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
            (n.name = "InvalidImageFileType"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(c),
      m = (function (e) {
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
      })(c),
      p = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "InvalidMediaCheckRepairFailedType"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(c),
      _ = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "MediaEncryptionError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(c),
      f = "plaintext hash mismatch",
      g = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "MediaDecryptionError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(c),
      h = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "MediaHashMismatch"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(c),
      y = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "MediaFileFailedLoad"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(c),
      C = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "MediaFileEmpty"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(c),
      b = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, t) || this),
            (r.name = "DecodeWebpResultsError"),
            (r.event = n),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError),
      v = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, t) || this),
            (r.name = "EncodeWebpError"),
            (r.event = n),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError),
      S = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, t) || this),
            (r.name = "ModelCreateError"),
            (r.model = n),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError),
      R = (function (e) {
        function t(n) {
          var r;
          return (
            (r = e.call(this, n != null ? n : t.message) || this),
            (r.name = "ActionError"),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError);
    R.message = "Could not perform action.";
    var L = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "Unmount"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError),
      E = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.name = "GoogleLensApiError"),
            (n.error = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError);
    ((l.Offline = s),
      (l.GaveUpRetry = u),
      (l.MediaFileError = c),
      (l.InvalidImageFileType = d),
      (l.InvalidMediaFileType = m),
      (l.InvalidMediaCheckRepairFailedType = p),
      (l.MediaEncryptionError = _),
      (l.PLAINTEXT_HASH_MISMATCH_ERROR = f),
      (l.MediaDecryptionError = g),
      (l.MediaHashMismatch = h),
      (l.MediaFileFailedLoad = y),
      (l.MediaFileEmpty = C),
      (l.DecodeWebpResultsError = b),
      (l.EncodeWebpError = v),
      (l.ModelCreateError = S),
      (l.ActionError = R),
      (l.Unmount = L),
      (l.GoogleLensApiError = E));
  },
  98,
);

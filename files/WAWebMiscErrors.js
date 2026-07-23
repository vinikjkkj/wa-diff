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
      })(c);
    function b(e) {
      try {
        return JSON.stringify(e);
      } catch (t) {
        return e.toString();
      }
    }
    var v = (function (e) {
        function t(t) {
          var n,
            r = typeof t == "string" ? t : b(t);
          return (
            (n = e.call(this, r) || this),
            (n.name = "SocketError"),
            (n.event = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError),
      S = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, "socket not open, is " + t) || this),
            (n.name = "SocketNotOpen"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError),
      R = (function (e) {
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
      L = (function (e) {
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
      E = (function (e) {
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
      k = (function (e) {
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
    k.message = "Could not perform action.";
    var I = (function (e) {
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
      T = (function (e) {
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
      (l.SocketError = v),
      (l.SocketNotOpen = S),
      (l.DecodeWebpResultsError = R),
      (l.EncodeWebpError = L),
      (l.ModelCreateError = E),
      (l.ActionError = k),
      (l.Unmount = I),
      (l.GoogleLensApiError = T));
  },
  98,
);

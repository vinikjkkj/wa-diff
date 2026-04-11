__d(
  "WAWebMiscErrors",
  ["WACustomError", "WAWebNonEmptyString"],
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
            (n.name = "CatalogImageDownloadError"),
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
            (n.name = "MediaFileError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError),
      m = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "InvalidImageFileType"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(d),
      p = (function (e) {
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
      })(d),
      _ = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "InvalidMediaCheckRepairFailedType"),
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
            (n.name = "MediaEncryptionError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(d),
      g = "plaintext hash mismatch",
      h = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "MediaDecryptionError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(d),
      y = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "MediaHashMismatch"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(d),
      C = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "MediaFileFailedLoad"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(d),
      b = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "MediaFileEmpty"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(d);
    function v(e) {
      try {
        return JSON.stringify(e);
      } catch (t) {
        return e.toString();
      }
    }
    var S = (function (e) {
        function t(t) {
          var n,
            r = typeof t == "string" ? t : v(t);
          return (
            (n = e.call(this, r) || this),
            (n.name = "SocketError"),
            (n.event = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError),
      R = (function (e) {
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
      L = (function (e) {
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
      E = (function (e) {
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
      k = (function (e) {
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
      I = (function (e) {
        function t(t, n, r) {
          var a,
            i,
            l =
              (a = o("WAWebNonEmptyString").asMaybeNonEmptyString(t)) != null
                ? a
                : "Server replied with a failed status code";
          return (
            (i = e.call(this, l + ": " + r) || this),
            (i.name = "ServerStatusError"),
            (i.url = n),
            (i.status = r),
            i
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError),
      T = (function (e) {
        function t(t, n, r) {
          var o,
            a = "Invalid response for " + t + ", with status " + n;
          return (
            r && (a = a + ": " + r),
            (o = e.call(this, a) || this),
            (o.name = "InvalidServerResponseError"),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError),
      D = (function (e) {
        function t(t, n, r) {
          var o,
            a = "Error " + n + " for " + t + ": " + JSON.stringify(r);
          return (
            (o = e.call(this, a, t, n) || this),
            (o.name = "BingServerError"),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(I),
      x = (function (e) {
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
      $ = (function (e) {
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
      P = (function (e) {
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
      N = (function (e) {
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
      M = (function (e) {
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
      w = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.name = "MediaDragDropError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(P),
      A = (function (e) {
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
    A.message = "Media format is unsupported";
    var F = (function (e) {
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
      O = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(
                this,
                "MasterDatabaseEncryptionKey." +
                  t +
                  " was accessed before init",
              ) || this),
            (n.name = "DbEncKeyNotLoaded"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError),
      B = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(
                this,
                "MasterDatabaseMessageEncryptionKey." +
                  t +
                  " was accessed before init",
              ) || this),
            (n.name = "DbMsgEncKeyNotLoaded"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError),
      W = (function (e) {
        function t(n) {
          var r;
          return (
            (r = e.call(this, n != null ? n : t.message) || this),
            (r.name = "DbOnLogoutAbort"),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError);
    W.message = "DB operation was dropped due to logout activity";
    var q = (function (e) {
      function t(n) {
        var r;
        return (
          (r = e.call(this, n != null ? n : t.message) || this),
          (r.name = "DbClosedOnTakeover"),
          r
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(e.CustomError);
    q.message = "DB operation was dropped due to session takeover (DB closed)";
    var U = (function (e) {
      function t(n) {
        var r;
        return (
          (r = e.call(this, n != null ? n : t.message) || this),
          (r.name = "DbNotFoundOnTakeover"),
          r
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(e.CustomError);
    U.message =
      "DB operation was dropped due to session takeover (DB not found)";
    var V = (function (e) {
      function t(n) {
        var r;
        return (
          (r = e.call(this, n != null ? n : t.message) || this),
          (r.name = "DBInvalidFtsHMACKey"),
          r
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(e.CustomError);
    V.message =
      "MasterDatabaseEncryptionKey.fts_hmac_keys is in an invalid state";
    var H = (function (e) {
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
    H.message = "Could not perform action.";
    var G = (function (e) {
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
      z = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "GetUserMediaError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.CustomError),
      j = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "NotSupportedError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(z);
    j.message = "The operation is not supported.";
    var K = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t != null ? t : "") || this),
          (n.name = "NotAllowedError"),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(z);
    K.message = "The user did not grant permission for the operation";
    var Q = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(
                this,
                "RMR attempted on a newsletter message of media type " +
                  t +
                  ", newsletter messages do not support media reupload requests",
              ) || this),
            (n.name = "RMRNotSupportedOnNewsletterMessagesError"),
            (n.mediaType = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(z),
      X = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "ConstraintNotSatisfiedError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(z);
    X.message = "One of the mandatory Constraints could not be satisfied.";
    var Y = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t != null ? t : "") || this),
          (n.name = "OverconstrainedError"),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(z);
    Y.message =
      "Due to changes in the environment, one or more mandatory constraints can no longer be satisfied.";
    var J = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t != null ? t : "") || this),
          (n.name = "NotFoundError"),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(z);
    J.message = "The object can not be found here.";
    var Z = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t != null ? t : "") || this),
          (n.name = "SourceUnavailableError"),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(z);
    Z.message =
      "The source of the MediaStream could not be accessed due to a hardware error (e.g. lock from another process).";
    var ee = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t != null ? t : "") || this),
          (n.name = "NotReadableError"),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(z);
    ee.message =
      "Although the user granted permission to use the matching devices, a hardware error occurred which prevented access to the device.";
    var te = (function (e) {
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
    te.message = "Failed to get media contentLength from mms";
    var ne = {
        GetUserMediaError: z,
        NotSupportedError: j,
        NotAllowedError: K,
        ConstraintNotSatisfiedError: X,
        OverconstrainedError: Y,
        NotFoundError: J,
        NotReadableError: ee,
        SourceUnavailableError: Z,
      },
      re = (function (e) {
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
      (l.CatalogImageDownloadError = c),
      (l.MediaFileError = d),
      (l.InvalidImageFileType = m),
      (l.InvalidMediaFileType = p),
      (l.InvalidMediaCheckRepairFailedType = _),
      (l.MediaEncryptionError = f),
      (l.PLAINTEXT_HASH_MISMATCH_ERROR = g),
      (l.MediaDecryptionError = h),
      (l.MediaHashMismatch = y),
      (l.MediaFileFailedLoad = C),
      (l.MediaFileEmpty = b),
      (l.SocketError = S),
      (l.SocketNotOpen = R),
      (l.ImageError = L),
      (l.DecodeWebpResultsError = E),
      (l.EncodeWebpError = k),
      (l.ServerStatusError = I),
      (l.InvalidServerResponseError = T),
      (l.BingServerError = D),
      (l.MediaNeedsReupload = x),
      (l.FileNotReadableError = $),
      (l.MediaLoadError = P),
      (l.TranscodeBlobTooLargeError = N),
      (l.UnableToPlayVideoError = M),
      (l.MediaDragDropError = w),
      (l.MediaUnsupportedError = A),
      (l.ModelCreateError = F),
      (l.DbEncKeyNotLoaded = O),
      (l.DbMsgEncKeyNotLoaded = B),
      (l.DbOnLogoutAbort = W),
      (l.DbClosedOnTakeover = q),
      (l.DbNotFoundOnTakeover = U),
      (l.DBInvalidFtsHMACKey = V),
      (l.ActionError = H),
      (l.Unmount = G),
      (l.GetUserMediaError = z),
      (l.NotAllowedError = K),
      (l.RMRNotSupportedOnNewsletterMessagesError = Q),
      (l.NotFoundError = J),
      (l.UnableToGetContentLengthError = te),
      (l.GetUserMedia = ne),
      (l.GoogleLensApiError = re));
  },
  98,
);

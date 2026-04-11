__d(
  "WAWebHttpErrors",
  ["WACustomError", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "HttpNetworkError"),
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
            (n.name = "HttpTimedOutError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e),
      u = (function (e) {
        function t(t, n, o) {
          var a,
            i =
              !r("gkx")("26258") && (o == null ? void 0 : o.url) != null
                ? n + ": " + t + " " + o.url
                : n + ": " + t;
          return (
            (a = e.call(this, i) || this),
            (a.name = "HttpStatusCodeError"),
            (a.status = t),
            a
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      c = (function (e) {
        function t(t, n) {
          var o,
            a =
              !r("gkx")("26258") && (n == null ? void 0 : n.url) != null
                ? t + ": " + n.url
                : t;
          return (
            (o = e.call(this, a) || this),
            (o.name = "HttpInvalidResponseError"),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      d = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, "mmsDownload: filehash mismatch", t) || this),
            (n.name = "MmsDownloadFilehashMismatchError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(c);
    ((l.HttpNetworkError = e),
      (l.HttpTimedOutError = s),
      (l.HttpStatusCodeError = u),
      (l.HttpInvalidResponseError = c),
      (l.MmsDownloadFilehashMismatchError = d));
  },
  98,
);

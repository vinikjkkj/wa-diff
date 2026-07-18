__d(
  "WAWebServerErrors",
  ["WACustomError", "WAWebNonEmptyString"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
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
      })(o("WACustomError").CustomError),
      s = (function (e) {
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
      })(o("WACustomError").CustomError),
      u = (function (e) {
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
      })(e);
    ((l.ServerStatusError = e),
      (l.InvalidServerResponseError = s),
      (l.BingServerError = u));
  },
  98,
);

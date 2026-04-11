__d(
  "WAWebMmsClientErrors",
  ["WAWebHttpErrors"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, 404, t) || this),
            (r.name = "MediaNotFoundError"),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })((e = o("WAWebHttpErrors")).HttpStatusCodeError),
      u = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, 413, t) || this),
            (r.name = "MediaTooLargeError"),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.HttpStatusCodeError),
      c = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, 415, t) || this),
            (r.name = "MediaInvalidError"),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.HttpStatusCodeError),
      d = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, 401, t) || this),
            (r.name = "MMSUnauthorizedError"),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.HttpStatusCodeError),
      m = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, 403, t) || this),
            (r.name = "MMSForbiddenError"),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.HttpStatusCodeError),
      p = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, 507, t) || this),
            (r.name = "MMSThrottleError"),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e.HttpStatusCodeError);
    ((l.MediaNotFoundError = s),
      (l.MediaTooLargeError = u),
      (l.MediaInvalidError = c),
      (l.MMSUnauthorizedError = d),
      (l.MMSForbiddenError = m),
      (l.MMSThrottleError = p));
  },
  98,
);

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
      d = (function (e) {
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
      m = (function (e) {
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
      p = (function (e) {
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
    p.message = "Could not perform action.";
    var _ = (function (e) {
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
      f = (function (e) {
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
      (l.DecodeWebpResultsError = c),
      (l.EncodeWebpError = d),
      (l.ModelCreateError = m),
      (l.ActionError = p),
      (l.Unmount = _),
      (l.GoogleLensApiError = f));
  },
  98,
);

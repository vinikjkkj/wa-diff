__d(
  "WAWebGetUserMediaErrors",
  ["WACustomError"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "GetUserMediaError"),
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
            (n.name = "NotSupportedError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e);
    s.message = "The operation is not supported.";
    var u = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t != null ? t : "") || this),
          (n.name = "NotAllowedError"),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(e);
    u.message = "The user did not grant permission for the operation";
    var c = "denied by system";
    function d(e) {
      return e instanceof u && e.message.toLowerCase().includes(c);
    }
    var m = (function (e) {
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
      })(e),
      p = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(
                this,
                "RMR attempted on a " +
                  t +
                  " message that has no mediaKey, so no media retry receipt can be sent",
              ) || this),
            (n.name = "RMRWithoutMediaKeyError"),
            (n.msgType = t),
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
            (n.name = "ConstraintNotSatisfiedError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(e);
    _.message = "One of the mandatory Constraints could not be satisfied.";
    var f = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t != null ? t : "") || this),
          (n.name = "OverconstrainedError"),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(e);
    f.message =
      "Due to changes in the environment, one or more mandatory constraints can no longer be satisfied.";
    var g = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t != null ? t : "") || this),
          (n.name = "NotFoundError"),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(e);
    g.message = "The object can not be found here.";
    var h = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t != null ? t : "") || this),
          (n.name = "SourceUnavailableError"),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(e);
    h.message =
      "The source of the MediaStream could not be accessed due to a hardware error (e.g. lock from another process).";
    var y = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t != null ? t : "") || this),
          (n.name = "NotReadableError"),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(e);
    ((y.message =
      "Although the user granted permission to use the matching devices, a hardware error occurred which prevented access to the device."),
      (l.GetUserMediaError = e),
      (l.NotSupportedError = s),
      (l.NotAllowedError = u),
      (l.isDeniedBySystem = d),
      (l.RMRNotSupportedOnNewsletterMessagesError = m),
      (l.RMRWithoutMediaKeyError = p),
      (l.ConstraintNotSatisfiedError = _),
      (l.OverconstrainedError = f),
      (l.NotFoundError = g),
      (l.SourceUnavailableError = h),
      (l.NotReadableError = y));
  },
  98,
);

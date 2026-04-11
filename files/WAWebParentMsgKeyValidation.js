__d(
  "WAWebParentMsgKeyValidation",
  ["$InternalEnum", "WACustomError"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        MISSING_PARENT_MESSAGE_KEY: "missing_parent_message_key",
      }),
      s = (function (e) {
        function t(t, n) {
          var r,
            o = "errorCode: " + String(t);
          return (
            n != null && (o += " comment: " + n),
            (r = e.call(this, o) || this),
            (r.name = "ParentMsgKeyValidationError"),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError);
    ((l.ParentMsgKeyValidationErrorCode = e),
      (l.ParentMsgKeyValidationError = s));
  },
  98,
);

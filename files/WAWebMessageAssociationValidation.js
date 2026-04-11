__d(
  "WAWebMessageAssociationValidation",
  ["$InternalEnum", "WACustomError", "WAWebHandleMsgError"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        MISSING_PARENT_MESSAGE_KEY: "missing_parent_message_key",
        INVALID_PARENT_MESSAGE_KEY: "invalid_parent_message_key",
        MISSING_ASSOCIATION_TYPE: "missing_association_type",
        MISMATCH_SENDER: "mismatch_sender",
        UNSUPPORTED_ASSOCIATION_TYPE: "unsupported_association_type",
        INVALID_CHILD_MESSAGE: "invalid_child_message",
        INVALID_ASSOCIATION_TYPE: "invalid_association_type",
      }),
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "MessageAssociationValidationError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebHandleMsgError").MessageValidationError),
      u = n("$InternalEnum")({
        MESSAGE_ASSOCIATIONS_MISMATCH: "message_associations_mismatch",
      }),
      c = (function (e) {
        function t(t, n) {
          var r,
            o = "errorCode: " + String(t);
          return (
            n != null && (o += " comment: " + n),
            (r = e.call(this, o) || this),
            (r.name = "MessageAssociationInfraError"),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError);
    ((l.MessageAssociationValidationErrorCode = e),
      (l.MessageAssociationValidationError = s),
      (l.MessageAssociationInfraErrorCode = u),
      (l.MessageAssociationInfraError = c));
  },
  98,
);

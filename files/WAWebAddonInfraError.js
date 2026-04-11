__d(
  "WAWebAddonInfraError",
  ["$InternalEnum", "WACustomError"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        UnexpectedError: "unexpected_error",
        NotSupportedFeature: "not_supported_feature",
        NotSupportedMsgType: "not_supported_msg_type",
        UnexpectedMsgType: "unexpected_msg_type",
        InvalidParentMsgKey: "invalid_parent_msg_key",
        MissingParentMsg: "missing_parent_msg",
      }),
      s = (function (e) {
        function t(t, n) {
          var r,
            o = "errorCode: " + String(t);
          return (
            n != null && (o += " comment: " + n),
            (r = e.call(this, o) || this),
            (r.name = "AddonInfraError"),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError);
    ((l.AddonInfraErrorCode = e), (l.AddonInfraError = s));
  },
  98,
);

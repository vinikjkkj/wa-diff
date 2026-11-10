__d(
  "WAWebInstantImageEnvelopeValidation",
  [
    "WAWebABProps",
    "WAWebBackendJobs.flow",
    "WAWebHandleMsgError",
    "WAWebWamEnumE2eFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.name = "InstantImageEnvelopeValidationError"),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebHandleMsgError").MessageValidationError);
    function s(t, n) {
      var r = t.instantImageMessage,
        a = r != null,
        i = n === o("WAWebBackendJobs.flow").EncMediaType.InstantImage;
      if (
        !(!a && (!i || u(t))) &&
        o("WAWebABProps").getABPropConfigValue("instants_receiver_enabled")
      ) {
        if ((r == null ? void 0 : r.viewOnce) === !0)
          throw new e(
            "view-once Instant",
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_PROTOCOL_BUFFER,
          );
        if (a !== i)
          throw new e(
            "Instant mediatype mismatch, mediatype: " + String(n),
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_PROTOCOL_BUFFER,
          );
      }
    }
    function u(e) {
      var t = Object.keys(e).filter(function (e) {
        return e !== "$$unknownFieldCount" && e !== "messageContextInfo";
      });
      return t.length === 1 && t[0] === "senderKeyDistributionMessage";
    }
    ((l.InstantImageEnvelopeValidationError = e),
      (l.validateInstantImageEnvelope = s));
  },
  98,
);

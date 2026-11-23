__d(
  "WAWebVerificationDrawerHelpers",
  ["fbt", "WAValidateFingerprints", "jsqr"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = r("jsqr")(e.data, e.width, e.height, {
        inversionAttempts: "dontInvert",
      });
      return t ? Uint8Array.from(t.binaryData) : null;
    }
    function u(e, t) {
      return e === "user" ? !0 : e === "environment" ? !1 : !t;
    }
    function c(e, t) {
      if (!e)
        return o("WAValidateFingerprints").FingerprintValidationResult
          .MALFORMED_CODE;
      try {
        return o("WAValidateFingerprints").validateFingerprint(
          e,
          new Uint8Array(t),
          !0,
        );
      } catch (e) {
        return o("WAValidateFingerprints").FingerprintValidationResult
          .MALFORMED_CODE;
      }
    }
    function d(e, t) {
      var n;
      switch (e) {
        case o("WAValidateFingerprints").FingerprintValidationResult
          .UNEXPECTED_VERSION_OLD:
          n = s._(/*BTDS*/ "");
          break;
        case o("WAValidateFingerprints").FingerprintValidationResult
          .UNEXPECTED_VERSION_NEW:
          n = s._(/*BTDS*/ "");
          break;
        case o("WAValidateFingerprints").FingerprintValidationResult
          .REMOTE_WRONG_CHAT_PEER:
          n = s._(/*BTDS*/ "", [s._param("contact_name", t)]);
          break;
        case o("WAValidateFingerprints").FingerprintValidationResult
          .REMOTE_WRONG_CHAT:
          n = s._(/*BTDS*/ "", [s._param("contact_name", t)]);
          break;
        case o("WAValidateFingerprints").FingerprintValidationResult
          .LOCAL_WRONG_CHAT:
          n = s._(/*BTDS*/ "", [s._param("contact_name", t)]);
          break;
        case o("WAValidateFingerprints").FingerprintValidationResult
          .LOCAL_PN_MISMATCH:
          n = s._(/*BTDS*/ "", [s._param("contact_name", t)]);
          break;
        case o("WAValidateFingerprints").FingerprintValidationResult
          .REMOTE_PN_MISMATCH:
        case o("WAValidateFingerprints").FingerprintValidationResult
          .REMOTE_PN_MISMATCH_PEER:
        case o("WAValidateFingerprints").FingerprintValidationResult
          .REMOTE_PN_MISSING_PEER:
        case o("WAValidateFingerprints").FingerprintValidationResult
          .REMOTE_PN_MISSING:
          n = s._(/*BTDS*/ "", [s._param("contact_name", t)]);
          break;
        case o("WAValidateFingerprints").FingerprintValidationResult
          .LOCAL_USERNAME_MISMATCH:
        case o("WAValidateFingerprints").FingerprintValidationResult
          .LOCAL_USERNAME_MISSING_PEER:
        case o("WAValidateFingerprints").FingerprintValidationResult
          .LOCAL_USERNAME_MISSING:
          n = s._(/*BTDS*/ "", [s._param("contact_name", t)]);
          break;
        case o("WAValidateFingerprints").FingerprintValidationResult
          .REMOTE_USERNAME_MISMATCH_PEER:
        case o("WAValidateFingerprints").FingerprintValidationResult
          .REMOTE_USERNAME_MISMATCH:
        case o("WAValidateFingerprints").FingerprintValidationResult
          .REMOTE_USERNAME_MISSING_PEER:
        case o("WAValidateFingerprints").FingerprintValidationResult
          .REMOTE_USERNAME_MISSING:
          n = s._(/*BTDS*/ "", [s._param("contact_name", t)]);
          break;
        case o("WAValidateFingerprints").FingerprintValidationResult
          .LOCAL_USERNAME_UNEXPECTED:
          n = s._(/*BTDS*/ "", [s._param("contact_name", t)]);
          break;
        case o("WAValidateFingerprints").FingerprintValidationResult
          .REMOTE_USERNAME_UNEXPECTED:
          n = s._(/*BTDS*/ "", [s._param("contact_name", t)]);
          break;
        case o("WAValidateFingerprints").FingerprintValidationResult
          .LOCAL_DISPLAY_NAME_MISSING:
        case o("WAValidateFingerprints").FingerprintValidationResult
          .LOCAL_DISPLAY_NAME_MISSING_PEER:
          n = s._(/*BTDS*/ "", [s._param("contact_name", t)]);
          break;
        case o("WAValidateFingerprints").FingerprintValidationResult
          .REMOTE_DISPLAY_NAME_MISSING:
        case o("WAValidateFingerprints").FingerprintValidationResult
          .REMOTE_DISPLAY_NAME_MISSING_PEER:
          n = s._(/*BTDS*/ "", [s._param("contact_name", t)]);
          break;
        case o("WAValidateFingerprints").FingerprintValidationResult
          .MALFORMED_CODE:
        default:
          n = s._(/*BTDS*/ "");
          break;
      }
      return n;
    }
    ((l.decodeQRCode = e),
      (l.shouldMirrorWebcamPreview = u),
      (l.getFingerprintValidationResult = c),
      (l.getErrorBannerText = d));
  },
  226,
);

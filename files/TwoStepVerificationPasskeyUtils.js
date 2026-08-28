__d(
  "TwoStepVerificationPasskeyUtils",
  ["fbt", "TwoStepVerificationEventFalcoEvent"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      return { label: s._(/*BTDS*/ "Try another way"), onPress: e, ref: t };
    }
    function u(e) {
      return { label: s._(/*BTDS*/ "Continue"), onPress: e };
    }
    function c(e, t, n) {
      r("TwoStepVerificationEventFalcoEvent").log(function () {
        return {
          challenge: "passkey",
          encrypted_context: t,
          event: e,
          exception_message: n,
        };
      });
    }
    ((l.getPasskeySecondaryButtonProps = e),
      (l.getPasskeyPrimaryButtonProps = u),
      (l.genLogEvent = c));
  },
  226,
);

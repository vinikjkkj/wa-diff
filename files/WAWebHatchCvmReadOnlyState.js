__d(
  "WAWebHatchCvmReadOnlyState",
  [
    "WAWebHatchCvmSecretPref",
    "WAWebHatchFrontendGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("WAWebHatchLinkedStatusManager").isLinked();
      if ((!e && !u()) || !o("WAWebHatchFrontendGating").isHatchCvmEnabled())
        return null;
      var t = o("WAWebHatchCvmSecretPref").peekHatchCvmReadOnlyInputs(
          o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        ),
        n = t.hasSecret,
        a = t.isConfidential,
        i = t.isTransferring;
      return i ? "transferring" : e && a && !n ? "pin_required" : null;
    }
    function s(e) {
      var t = o("WAWebHatchCvmSecretPref").subscribeToHatchCvmSecretChanges(e),
        n = r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(
          function () {
            return e();
          },
        );
      return function () {
        (t(), n());
      };
    }
    function u() {
      return (
        r(
          "WAWebHatchLinkedStatusManager",
        ).getKnownConfirmedLinkedStatusState() === "linked"
      );
    }
    ((l.getHatchCvmReadOnlyReason = e), (l.subscribeToHatchCvmReadOnly = s));
  },
  98,
);

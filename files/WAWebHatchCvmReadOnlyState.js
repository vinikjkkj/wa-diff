__d(
  "WAWebHatchCvmReadOnlyState",
  [
    "WALogger",
    "WAWebHatchCvmSecretPref",
    "WAWebHatchFrontendGating",
    "WAWebHatchLinkedStatusManager",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set(),
      u = 0;
    function c() {
      if (
        (!r("WAWebHatchLinkedStatusManager").isLinked() && !g()) ||
        !o("WAWebHatchFrontendGating").isHatchCvmEnabled()
      )
        return null;
      var e = o("WAWebHatchCvmSecretPref").peekHatchCvmReadOnlyInputs(),
        t = e.hasSecret,
        n = e.isConfidential,
        a = e.isTransferring;
      return a ? "transferring" : n && (!t || u > 0) ? "pin_required" : null;
    }
    async function d(e) {
      f(1);
      try {
        return await e();
      } finally {
        f(-1);
      }
    }
    function m() {
      return c() != null || _();
    }
    function p(e) {
      var t = o("WAWebHatchCvmSecretPref").subscribeToHatchCvmSecretChanges(e),
        n = r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(
          function () {
            return e();
          },
        );
      return (
        s.add(e),
        function () {
          (t(), n(), s.delete(e));
        }
      );
    }
    function _() {
      return (
        (r("WAWebHatchLinkedStatusManager").isLinked() || g()) &&
        !o("WAWebHatchFrontendGating").isHatchCvmEnabled() &&
        o("WAWebHatchCvmSecretPref").peekHatchCvmVmType() === "confidential"
      );
    }
    function f(t) {
      u += t;
      for (var n of Array.from(s))
        try {
          n();
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-cvm: read-only listener failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("hatch-cvm-read-only-listener-failed");
        }
    }
    function g() {
      return (
        r(
          "WAWebHatchLinkedStatusManager",
        ).getKnownConfirmedLinkedStatusState() === "linked"
      );
    }
    ((l.getHatchCvmReadOnlyReason = c),
      (l.holdHatchCvmReadOnlyDuringPinCheck = d),
      (l.areHatchVmFeaturesHidden = m),
      (l.subscribeToHatchCvmReadOnly = p));
  },
  98,
);

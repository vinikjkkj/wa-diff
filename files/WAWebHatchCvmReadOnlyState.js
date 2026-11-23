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
        (!r("WAWebHatchLinkedStatusManager").isLinked() && !h()) ||
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
      g(1);
      try {
        return await e();
      } finally {
        g(-1);
      }
    }
    function m() {
      return c() != null || f();
    }
    function p() {
      return o("WAWebHatchCvmSecretPref").peekHatchCvmVmType() === "standard";
    }
    function _(e) {
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
    function f() {
      return (
        (r("WAWebHatchLinkedStatusManager").isLinked() || h()) &&
        !o("WAWebHatchFrontendGating").isHatchCvmEnabled() &&
        o("WAWebHatchCvmSecretPref").peekHatchCvmVmType() === "confidential"
      );
    }
    function g(t) {
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
    function h() {
      return (
        r(
          "WAWebHatchLinkedStatusManager",
        ).getKnownConfirmedLinkedStatusState() === "linked"
      );
    }
    ((l.getHatchCvmReadOnlyReason = c),
      (l.holdHatchCvmReadOnlyDuringPinCheck = d),
      (l.areHatchVmFeaturesHidden = m),
      (l.isHatchCvmTransferToConfidential = p),
      (l.subscribeToHatchCvmReadOnly = _));
  },
  98,
);

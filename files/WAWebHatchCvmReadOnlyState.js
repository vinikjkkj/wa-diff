__d(
  "WAWebHatchCvmReadOnlyState",
  [
    "WALogger",
    "WAWebHatchCvmSecretPref",
    "WAWebHatchFrontendGating",
    "WAWebHatchLinkedStatusManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set(),
      u = 0;
    function c() {
      var e = r("WAWebHatchLinkedStatusManager").isLinked();
      if ((!e && !y()) || !o("WAWebHatchFrontendGating").isHatchCvmEnabled())
        return null;
      var t = o("WAWebHatchCvmSecretPref").peekHatchCvmReadOnlyInputs(),
        n = t.hasSecret,
        a = t.isConfidential,
        i = t.isTransferring;
      return i
        ? "transferring"
        : e && a && (!n || u > 0)
          ? "pin_required"
          : null;
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          h(1);
          try {
            return yield e();
          } finally {
            h(-1);
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return c() != null || g();
    }
    function _() {
      return o("WAWebHatchCvmSecretPref").peekHatchCvmVmType() === "standard";
    }
    function f(e) {
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
    function g() {
      return (
        (r("WAWebHatchLinkedStatusManager").isLinked() || y()) &&
        !o("WAWebHatchFrontendGating").isHatchCvmEnabled() &&
        o("WAWebHatchCvmSecretPref").peekHatchCvmVmType() === "confidential"
      );
    }
    function h(t) {
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
    function y() {
      return (
        r(
          "WAWebHatchLinkedStatusManager",
        ).getKnownConfirmedLinkedStatusState() === "linked"
      );
    }
    ((l.getHatchCvmReadOnlyReason = c),
      (l.holdHatchCvmReadOnlyDuringPinCheck = d),
      (l.areHatchVmFeaturesHidden = p),
      (l.isHatchCvmTransferToConfidential = _),
      (l.subscribeToHatchCvmReadOnly = f));
  },
  98,
);

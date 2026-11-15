__d(
  "WAWebHatchVmCredentials",
  [
    "WAWebHatchCvmSecretPref",
    "WAWebHatchFrontendGating",
    "WAWebHatchGenAbraTokenJob",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchVmCredentialsResolver",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (o(
      "WAWebHatchVmCredentialsResolver",
    ).WAWebHatchVmCredentialsResolver)({
      allowConfidentialConnection: o("WAWebHatchFrontendGating")
        .isHatchCvmEnabled,
      isChannelLinked: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            !r("justknobx")._("7794") ||
            (yield r(
              "WAWebHatchLinkedStatusManager",
            ).fetchConfirmedLinkedStatusStateIfUnknown({
              ignoreStoredState: !0,
            })) === "linked"
          );
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      isCvmAccount: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            (yield o("WAWebHatchCvmSecretPref").readHatchCvmVmType()) ===
            "confidential"
          );
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      mintAbraToken: o("WAWebHatchGenAbraTokenJob").genHatchAbraToken,
    });
    l.waWebHatchVmCredentials = e;
  },
  98,
);

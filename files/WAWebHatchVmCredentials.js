__d(
  "WAWebHatchVmCredentials",
  [
    "WAWebHatchCvmSecretPref",
    "WAWebHatchFrontendGating",
    "WAWebHatchGenAbraTokenJob",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchVmCredentialsResolver",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (o(
      "WAWebHatchVmCredentialsResolver",
    ).WAWebHatchVmCredentialsResolver)({
      allowConfidentialConnection: o("WAWebHatchFrontendGating")
        .isHatchCvmEnabled,
      isChannelLinked: async function () {
        return (
          !r("justknobx")._("7794") ||
          (await r(
            "WAWebHatchLinkedStatusManager",
          ).fetchConfirmedLinkedStatusStateIfUnknown({
            ignoreStoredState: !0,
          })) === "linked"
        );
      },
      isCvmAccount: async function () {
        return (
          (await o("WAWebHatchCvmSecretPref").readHatchCvmVmType()) ===
          "confidential"
        );
      },
      mintAbraToken: o("WAWebHatchGenAbraTokenJob").genHatchAbraToken,
    });
    l.waWebHatchVmCredentials = e;
  },
  98,
);

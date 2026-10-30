__d(
  "WAWebHatchVmCredentials",
  [
    "WAWebHatchFrontendGating",
    "WAWebHatchGenAbraTokenJob",
    "WAWebHatchVmCredentialsResolver",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (o(
      "WAWebHatchVmCredentialsResolver",
    ).WAWebHatchVmCredentialsResolver)({
      allowConfidentialConnection: o("WAWebHatchFrontendGating")
        .isHatchCvmEnabled,
      mintAbraToken: o("WAWebHatchGenAbraTokenJob").genHatchAbraToken,
    });
    l.waWebHatchVmCredentials = e;
  },
  98,
);

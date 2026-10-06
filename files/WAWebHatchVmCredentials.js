__d(
  "WAWebHatchVmCredentials",
  ["WAWebHatchGenAbraTokenJob", "WAWebHatchVmCredentialsResolver"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (o(
      "WAWebHatchVmCredentialsResolver",
    ).WAWebHatchVmCredentialsResolver)({
      mintAbraToken: o("WAWebHatchGenAbraTokenJob").genHatchAbraToken,
    });
    l.waWebHatchVmCredentials = e;
  },
  98,
);

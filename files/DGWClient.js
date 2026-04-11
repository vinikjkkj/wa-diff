__d(
  "DGWClient",
  [
    "CurrentUser",
    "DGWAuth",
    "DGWEnvUtil",
    "DGWWebConfig",
    "RawDGWClient",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s() {
      if (!r("DGWEnvUtil").isDGWEnvCompatible())
        throw r("err")("unsupported_environment_retry_with_mqtt");
      return (
        e == null &&
          (e = new (o("RawDGWClient").RawDGWClient)({
            appId: r("DGWWebConfig").appId,
            appVersion: r("DGWWebConfig").appVersion,
            authType: o("DGWAuth").fromStringToDGWAuth(
              r("DGWEnvUtil").getDGWAuthType(),
            ),
            dgwVersion: r("DGWEnvUtil").getDGWVersion(),
            endpoint: r("DGWEnvUtil").getDGWEndpoint(),
            fbId:
              r("DGWWebConfig").fbId !== "0"
                ? r("DGWWebConfig").fbId
                : r("CurrentUser").getPossiblyNonFacebookUserID(),
            authToken: r("DGWEnvUtil").getDGWAuthToken(),
            isUserLoggedIn: function () {
              return r("CurrentUser").isLoggedInNow();
            },
          })),
        e
      );
    }
    l.default = s;
  },
  98,
);

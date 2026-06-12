__d(
  "DGWClient",
  [
    "CurrentUser",
    "DGWAuth",
    "DGWEnvUtil",
    "DGWWebConfig",
    "ExecutionEnvironment",
    "RawDGWClient",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null;
    function u() {
      if (!r("DGWEnvUtil").isDGWEnvCompatible())
        throw r("err")("unsupported_environment_retry_with_mqtt");
      if (s == null) {
        var t = (e || (e = r("ExecutionEnvironment"))).isInWorker;
        s = new (o("RawDGWClient").RawDGWClient)({
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
          isUserLoggedIn: t
            ? function () {
                return r("CurrentUser").isLoggedIn();
              }
            : function () {
                return r("CurrentUser").isLoggedInNow();
              },
        });
      }
      return s;
    }
    l.default = u;
  },
  98,
);

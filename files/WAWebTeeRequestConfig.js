__d(
  "WAWebTeeRequestConfig",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "get-host-info",
      l = {
        prod: { acsProjectName: "WA_Theia", teeHost: "teellm.wa.meta.com" },
        rc: {
          acsProjectName: "WA_TheiaInternal",
          teeHost: "alpha.teellm.wa.meta.com",
        },
        debug: {
          acsProjectName: "WA_TheiaDebug",
          teeHost: "debug.teellm.wa.meta.com",
        },
      },
      s = "prod";
    function u(e) {
      return l[e];
    }
    ((i.NODE_TOKEN_PATH = e),
      (i.DEFAULT_TEE_ENV = s),
      (i.getTeeRequestConfig = u));
  },
  66,
);

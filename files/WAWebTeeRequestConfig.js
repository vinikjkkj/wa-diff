__d(
  "WAWebTeeRequestConfig",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      prod: { acsProjectName: "WA_Theia", teeHost: "teellm.wa.meta.com" },
      rc: {
        acsProjectName: "WA_TheiaInternal",
        teeHost: "alpha.teellm.wa.meta.com",
      },
      debug: {
        acsProjectName: "WA_TheiaDebug",
        teeHost: "debug.teellm.wa.meta.com",
      },
    };
    function l(t) {
      return (t === void 0 && (t = "debug"), e[t]);
    }
    i.getTeeRequestConfig = l;
  },
  66,
);

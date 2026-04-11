__d(
  "getFXClientInterfaceName.entrypoint",
  ["XPlatReactEnvironment", "fximUserAgent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("XPlatReactEnvironment").isInstagramEnvironment()
        ? "IG_WEB"
        : o("fximUserAgent").isOculusBrowser() ||
            !o("XPlatReactEnvironment").isWeb()
          ? "FRL_VR"
          : o("XPlatReactEnvironment").isFRLEnvironment()
            ? "FRL_WEB"
            : o("XPlatReactEnvironment").isThreadsEnvironment()
              ? "THREADS_WEB"
              : "FB_WEB";
    }
    l.default = e;
  },
  98,
);

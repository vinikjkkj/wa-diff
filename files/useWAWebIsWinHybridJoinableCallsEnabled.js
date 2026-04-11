__d(
  "useWAWebIsWinHybridJoinableCallsEnabled",
  ["WAWebEnvironment", "useWAWebABPropConfigValue"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "enable_web_calling",
        ),
        t = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "enable_web_group_calling",
        );
      return !r("WAWebEnvironment").isWindows && e ? t : !0;
    }
    l.useIsWinHybridJoinableCallsEnabled = e;
  },
  98,
);

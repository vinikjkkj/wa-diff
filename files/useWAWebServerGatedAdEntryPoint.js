__d(
  "useWAWebServerGatedAdEntryPoint",
  [
    "WAWebAdEntryPointsConfigurationModel",
    "useWAWebForceUpdate",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [!1, null];
    function s(t, n) {
      "use no forget";
      var r = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      o("useWAWebListener").useListener(
        o("WAWebAdEntryPointsConfigurationModel").AdEntryPointsEventBus,
        "updated:" + t,
        r,
      );
      var a =
        n != null
          ? [
              o("WAWebAdEntryPointsConfigurationModel").isEndpointGatedByServer(
                t,
                n,
              ),
              o("WAWebAdEntryPointsConfigurationModel").getEndpointContentTexts(
                t,
              ),
            ]
          : e;
      return a;
    }
    l.useServerGatedAdEntryPoint = s;
  },
  98,
);

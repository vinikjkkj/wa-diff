__d(
  "useWAWebABPropConfigValue",
  ["WAWebABProps", "WAWebCmd", "useWAWebEventTargetValue"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = r("useWAWebEventTargetValue")(
        o("WAWebCmd").Cmd,
        "on_ab_props_update_from_bridge",
        function () {
          return o("WAWebABProps").getABPropConfigValue(e);
        },
        [e],
      );
      return t;
    }
    l.useABPropConfigValue = e;
  },
  98,
);

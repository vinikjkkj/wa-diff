__d(
  "WAWebAbPropsBridgeApi",
  ["WAWebCmd"],
  function (t, n, r, o, a, i, l) {
    var e = {
      addAbPropsUpdateListener: function (t) {
        o("WAWebCmd").Cmd.on("on_ab_props_update_from_bridge", t);
      },
      triggerAbPropsUpdateFromBridge: function (t) {
        o("WAWebCmd").Cmd.onAbPropsUpdateFromBridge(t);
      },
      triggerAbPropsLoadedFromBridge: function () {
        o("WAWebCmd").Cmd.onAbPropsLoadedFromBridge();
      },
    };
    l.AbPropsBridgeApi = e;
  },
  98,
);

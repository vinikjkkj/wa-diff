__d(
  "useWAWebABPropConfigValue",
  [
    "WAWebABProps",
    "WAWebCmd",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(3),
        n,
        a;
      t[0] !== e
        ? ((n = function () {
            return o("WAWebABProps").getABPropConfigValue(e);
          }),
          (a = [e]),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a))
        : ((n = t[1]), (a = t[2]));
      var i = r("useWAWebEventTargetValue")(
        o("WAWebCmd").Cmd,
        "on_ab_props_update_from_bridge",
        n,
        a,
      );
      return i;
    }
    l.useABPropConfigValue = e;
  },
  98,
);

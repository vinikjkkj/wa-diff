__d(
  "WAWebAdaptiveLayoutGatingUtils",
  ["WAWebABProps", "justknobx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_drawer_descriptor_enabled",
        ) && r("justknobx")._("4510")
      );
    }
    l.shouldUseDrawerDescriptor = e;
  },
  98,
);

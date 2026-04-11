__d(
  "WAWebAdaptiveLayoutGatingUtils",
  ["WAWebABProps", "justknobx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebABProps").getABPropConfigValue("functional_chatlist_enabled") &&
        r("justknobx")._("5244")
      );
    }
    function s() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_drawer_descriptor_enabled",
        ) && r("justknobx")._("4510")
      );
    }
    ((l.shouldUseFunctionalChatlist = e), (l.shouldUseDrawerDescriptor = s));
  },
  98,
);

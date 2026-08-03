__d(
  "WAWebAdaptiveLayoutGatingUtils",
  ["WAWebABProps", "WAWebEnvironment", "justknobx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_drawer_descriptor_enabled",
        ) && r("justknobx")._("4510")
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "functional_chatlist_enabled",
      );
    }
    function u() {
      return r("WAWebEnvironment").isWindows
        ? o("WAWebABProps").getABPropConfigValue(
            "wa_web_adaptive_layout_enabled",
          )
        : !1;
    }
    ((l.shouldUseDrawerDescriptor = e),
      (l.shouldUseFunctionalChatlist = s),
      (l.getIsAdaptiveLayoutEnabled = u));
  },
  98,
);

__d(
  "WAWebVCCssBgScanChildrenFirst",
  ["VisualCompletionCssBgScanOverride", "WAWebABProps", "WAWebCmd"],
  function (t, n, r, o, a, i, l) {
    function e() {
      (s(),
        o("WAWebCmd").Cmd.on("ab_props_loaded_from_bridge", s),
        o("WAWebCmd").Cmd.on("on_ab_props_update_from_bridge", s));
    }
    function s() {
      o("VisualCompletionCssBgScanOverride").setCssBgScanChildrenFirstOverride(
        o("WAWebABProps").getABPropConfigValue(
          "web_vc_css_bg_scan_children_first",
        ),
      );
    }
    l.initVCCssBgScanChildrenFirst = e;
  },
  98,
);

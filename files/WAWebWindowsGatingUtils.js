__d(
  "WAWebWindowsGatingUtils",
  ["WAWebABProps", "WAWebEnvironment"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return r("WAWebEnvironment").isWindows === !0;
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "hybrid_nux_beta_50_enabled",
      );
    }
    function u() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue(
          "enable_sharing_files_from_web_windows_hybrid",
        ) === !0
      );
    }
    function c() {
      return typeof showSaveFilePicker == "function";
    }
    function d() {
      return (
        e() &&
        c() &&
        o("WAWebABProps").getABPropConfigValue("enable_fsa_save_as") === !0
      );
    }
    ((l.isWindowsHybridEnabled = e),
      (l.isHybridNuxBeta50Enabled = s),
      (l.isWindowsShareSheetEnabled = u),
      (l.hasFsaSaveFilePickerSupport = c),
      (l.isFsaSaveAsEnabled = d));
  },
  98,
);

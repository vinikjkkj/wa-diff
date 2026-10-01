__d(
  "WAWebWindowsGatingUtils",
  ["WAWebABProps", "WAWebEnvironment"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return r("WAWebEnvironment").isWindows === !0;
    }
    function s() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue(
          "enable_sharing_files_from_web_windows_hybrid",
        ) === !0
      );
    }
    function u() {
      return typeof showSaveFilePicker == "function";
    }
    function c() {
      return (
        e() &&
        u() &&
        o("WAWebABProps").getABPropConfigValue("enable_fsa_save_as") === !0
      );
    }
    function d() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue(
          "enable_hybrid_open_with_shared_buffer",
        ) === !0
      );
    }
    function m() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue(
          "hybrid_save_as_shared_buffer_enabled",
        ) === !0
      );
    }
    ((l.isWindowsHybridEnabled = e),
      (l.isWindowsShareSheetEnabled = s),
      (l.hasFsaSaveFilePickerSupport = u),
      (l.isFsaSaveAsEnabled = c),
      (l.isOpenWithSharedBufferEnabled = d),
      (l.isSaveAsSharedBufferEnabled = m));
  },
  98,
);

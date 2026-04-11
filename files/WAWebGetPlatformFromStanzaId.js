__d(
  "WAWebGetPlatformFromStanzaId",
  [],
  function (t, n, r, o, a, i) {
    var e = new Map([
      ["3E", "web"],
      ["AC", "android"],
      ["A5", "android_smb"],
      ["A3", "wearos"],
      ["A4", "ar_devices"],
      ["A6", "wearm"],
      ["A8", "smart_glasses"],
      ["1A", "iphone_intent_extensions"],
      ["2A", "iphone_smb"],
      ["3A", "iphone"],
      ["4A", "iphone_share_extension"],
      ["5A", "iphone_xctest"],
      ["6A", "iphone_unknown_extension"],
      ["1B", "macos_native_intent_extensions"],
      ["2B", "macos_native_smb"],
      ["3B", "macos_native"],
      ["4B", "macos_native_share_extension"],
      ["5B", "macos_native_xctest"],
      ["6B", "macos_unknown_extension"],
      ["1C", "ipad_intent_extensions"],
      ["2C", "ipad_smb"],
      ["3C", "ipad"],
      ["4C", "ipad_share_extension"],
      ["5C", "ipad_xctest"],
      ["6C", "ipad_unknown_extension"],
      ["3F", "windows"],
    ]);
    function l(t) {
      var n,
        r = t.slice(0, 2);
      return (n = e.get(r)) != null ? n : "unknown";
    }
    i.getPlatformFromStanzaId = l;
  },
  66,
);

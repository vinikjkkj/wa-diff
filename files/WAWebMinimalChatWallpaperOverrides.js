__d(
  "WAWebMinimalChatWallpaperOverrides",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "#161717",
      l = "#FFFFFF",
      s = "22, 23, 23",
      u = "255, 255, 255",
      c = "#242626",
      d = "#EEEEEE",
      m = "36, 38, 38",
      p = "238, 238, 238",
      _ = "#242626",
      f = "rgba(238, 238, 238, 0.9)";
    function g(t) {
      var n = t.effectiveMinimalMode,
        r = t.isDarkTheme,
        o = t.isMinimalScheme,
        a = t.showStockWallpaper;
      if (!n && !o) return {};
      var i = {
        "--WAWeb-minimal-addon-bubble-shadow": "none",
        "--WAWeb-minimal-msg-bubble-shadow": "none",
        "--WAWeb-minimal-system-bubble-bg": r ? _ : f,
        "--WAWeb-minimal-system-bubble-shadow": "none",
        "--WAWeb-minimal-tail-shadow-opacity": "0",
      };
      return (
        n &&
          !o &&
          ((i["--WDS-systems-bubble-surface-incoming"] = r ? c : d),
          (i["--WDS-systems-bubble-surface-incoming-RGB"] = r ? m : p)),
        n &&
          !o &&
          !a &&
          ((i["--WDS-systems-chat-background-wallpaper"] = r ? e : l),
          (i["--WDS-systems-chat-background-wallpaper-RGB"] = r ? s : u)),
        i
      );
    }
    i.getMinimalModeOverrides = g;
  },
  66,
);

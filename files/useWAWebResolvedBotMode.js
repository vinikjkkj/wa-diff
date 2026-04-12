__d(
  "useWAWebResolvedBotMode",
  [
    "WAWebAiModeSelectorUtils",
    "WAWebBotBaseGating",
    "useWAWebBotModeSelection",
    "useWAWebDynamicBotModeOverride",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o(
          "useWAWebDynamicBotModeOverride",
        ).useWAWebDynamicBotModeOverride(e, t),
        r = o("useWAWebBotModeSelection").useWAWebBotModeSelection(e, t);
      if (o("WAWebBotBaseGating").isDynamicModeSelectorEnabled())
        return n != null
          ? {
              icon: o("WAWebAiModeSelectorUtils").getDynamicModeIcon(n.type),
              title: n.title,
              subtitle: n.subtitle,
            }
          : o("WAWebAiModeSelectorUtils").getDefaultDynamicResolvedBotMode();
      var a = r.length > 0 ? r[0] : void 0;
      return {
        icon: o("WAWebAiModeSelectorUtils").getBotUserSelectModeIcon(a),
        title: String(
          o("WAWebAiModeSelectorUtils").getBotUserSelectModeTitle(a),
        ),
        subtitle: String(
          o("WAWebAiModeSelectorUtils").getBotUserSelectModeSubtitle(a),
        ),
      };
    }
    l.useWAWebResolvedBotMode = e;
  },
  98,
);

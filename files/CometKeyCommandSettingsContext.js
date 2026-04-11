__d(
  "CometKeyCommandSettingsContext",
  ["CometCustomKeyCommands", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.createContext({
        addCustomCommand: function (t) {},
        checkForKeyCommandConflict: function (t) {
          return [];
        },
        disableCustomCommand: function (t) {},
        getAreSingleKeysDisabled: function () {
          return r("CometCustomKeyCommands").areSingleKeysDisabled;
        },
        getCustomCommandsMap: function () {
          return new Map();
        },
        getCustomKeyCombination: function (t) {},
        getModifiedKeyboardShortcutsPreference: function (t) {
          return 4;
        },
        isViewerShowing: !1,
        resetAllCustomCommands: function (t) {},
        resetCustomCommand: function (t) {},
        setAreSingleKeysDisabled: function (t) {},
        setModifiedKeyboardShortcutsPreference: function (t) {},
        setViewerInfo: function (t) {},
        viewerType: "see_all",
      });
    l.default = u;
  },
  98,
);

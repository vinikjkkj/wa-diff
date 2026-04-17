__d(
  "CometFocusedStoryDialogLauncherContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { current: new Set() },
      c = s.createContext({
        onDialogCloseHandlers: u,
        onDialogOpenHandlers: u,
      });
    l.default = c;
  },
  98,
);

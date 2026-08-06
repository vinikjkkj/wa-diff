__d(
  "BrowserToolsWelcomeInterop",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      namespace: "welcome",
      onConnection: function (t) {
        if (!t) {
          r("FBLogger")("Comet Dev Tools").mustfix(
            "Error when connecting to Comet Dev Tools:",
          );
          return;
        }
      },
    };
    l.default = e;
  },
  98,
);

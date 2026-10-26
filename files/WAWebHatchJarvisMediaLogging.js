__d(
  "WAWebHatchJarvisMediaLogging",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[hatch-jarvis] media unavailable: ",
              "",
            ])),
          t,
        )
        .sendLogs("hatch-jarvis-media-unavailable");
    }
    l.logHatchJarvisMediaUnavailable = s;
  },
  98,
);

__d(
  "WAWebPttMicrophoneRefusal",
  [
    "WALogger",
    "WAWebMediaPermissionRefusal",
    "WAWebPttMicrophonePermissionODS",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      var n = await o("WAWebMediaPermissionRefusal").getMediaPermissionRefusal(
        t,
        "microphone",
      );
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "ptt: microphone refused: ",
              "",
            ])),
          n,
        ),
        o("WAWebPttMicrophonePermissionODS").logPttMicrophoneRefusal(n),
        n
      );
    }
    l.reportPttMicrophoneRefusal = s;
  },
  98,
);

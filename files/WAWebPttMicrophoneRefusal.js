__d(
  "WAWebPttMicrophoneRefusal",
  [
    "WALogger",
    "WAWebMediaPermissionRefusal",
    "WAWebPttMicrophonePermissionODS",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o(
            "WAWebMediaPermissionRefusal",
          ).getMediaPermissionRefusal(t, "microphone");
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
        })),
        u.apply(this, arguments)
      );
    }
    l.reportPttMicrophoneRefusal = s;
  },
  98,
);

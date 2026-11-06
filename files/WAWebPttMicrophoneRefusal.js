__d(
  "WAWebPttMicrophoneRefusal",
  [
    "WALogger",
    "WAWebGetUserMediaErrors",
    "WAWebMediaPermissionsUtils",
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
          var n = yield c(t);
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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebGetUserMediaErrors").isDeniedBySystem(e)
            ? "system"
            : (function (e) {
                if (e === "denied") return "blocked";
                if (e === "prompt") return "dismissed";
                if (e === "granted") return "granted";
                if (e === "unknown") return "unknown";
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })(
                yield o(
                  "WAWebMediaPermissionsUtils",
                ).queryMediaPermissionStateStrict("microphone"),
              );
        })),
        d.apply(this, arguments)
      );
    }
    l.reportPttMicrophoneRefusal = s;
  },
  98,
);

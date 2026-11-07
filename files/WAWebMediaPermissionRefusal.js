__d(
  "WAWebMediaPermissionRefusal",
  [
    "WAWebGetUserMediaErrors",
    "WAWebMediaPermissionsUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                ).queryMediaPermissionStateStrict(t),
              );
        })),
        s.apply(this, arguments)
      );
    }
    l.getMediaPermissionRefusal = e;
  },
  98,
);

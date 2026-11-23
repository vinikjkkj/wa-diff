__d(
  "WAWebMediaPermissionRefusal",
  ["WAWebGetUserMediaErrors", "WAWebMediaPermissionsUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
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
            await o(
              "WAWebMediaPermissionsUtils",
            ).queryMediaPermissionStateStrict(t),
          );
    }
    l.getMediaPermissionRefusal = e;
  },
  98,
);

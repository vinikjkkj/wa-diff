__d(
  "WAWebHatchConnectorPermissionModeLabel",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e === "allow"
        ? s._(/*BTDS*/ "")
        : e === "ask"
          ? s._(/*BTDS*/ "")
          : e === "deny"
            ? s._(/*BTDS*/ "")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    l.hatchConnectorPermissionModeLabel = e;
  },
  226,
);

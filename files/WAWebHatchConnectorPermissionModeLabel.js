__d(
  "WAWebHatchConnectorPermissionModeLabel",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e === "allow"
        ? s._(/*BTDS*/ "Allow")
        : e === "ask"
          ? s._(/*BTDS*/ "Ask")
          : e === "deny"
            ? s._(/*BTDS*/ "Deny")
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

__d(
  "WAWebLeadStageNames",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e === 0
        ? s._(/*BTDS*/ "None")
        : e === 1
          ? s._(/*BTDS*/ "Intake")
          : e === 2
            ? s._(/*BTDS*/ "Qualified")
            : e === 3
              ? s._(/*BTDS*/ "Converted")
              : e === 4
                ? s._(/*BTDS*/ "Lost")
                : e === 5
                  ? s._(/*BTDS*/ "Not qualified")
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
    }
    l.getLeadStageName = e;
  },
  226,
);

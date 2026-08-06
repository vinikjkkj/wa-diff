__d(
  "WAWebLeadStageNames",
  ["fbt", "WAWebLeadStage"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e === 0
        ? s._(/*BTDS*/ "Lead")
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
    function u(t) {
      var n = t.trim().toLowerCase();
      if (n === "") return null;
      for (var r of o("WAWebLeadStage").LEAD_STAGE_ORDER_WITH_NONE)
        if (e(r).toString().toLowerCase() === n) return r;
      return null;
    }
    ((l.getLeadStageName = e), (l.getLeadStageFromName = u));
  },
  226,
);

__d(
  "WAWebLeadStageNames",
  ["fbt", "WAWebLeadStage"],
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
    function u(t, n) {
      return s._(/*BTDS*/ "{lead list name} \u00b7 {lead stage name}", [
        s._param("lead list name", t),
        s._param("lead stage name", e(n)),
      ]);
    }
    function c() {
      return s._(/*BTDS*/ "Lead");
    }
    function d(t) {
      return t === o("WAWebLeadStage").LeadStage.NONE ? c() : e(t);
    }
    function m(t) {
      var n = t.trim().toLowerCase();
      if (n === "") return null;
      for (var r of o("WAWebLeadStage").ALL_LEAD_STAGES)
        if (e(r).toString().toLowerCase() === n) return r;
      return n === p ? o("WAWebLeadStage").LeadStage.NONE : null;
    }
    var p = "lead";
    ((l.getLeadStageName = e),
      (l.getLeadSublistRowLabel = u),
      (l.getLeadListDisplayName = c),
      (l.getPipelineColumnHeaderLabel = d),
      (l.getLeadStageFromName = m));
  },
  226,
);

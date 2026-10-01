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
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function u() {
      return s._(/*BTDS*/ "None");
    }
    function c(e, t) {
      return t == null
        ? e
        : s._(/*BTDS*/ "{picker name}: {current value}", [
            s._param("picker name", e),
            s._param("current value", t),
          ]);
    }
    function d(e, t) {
      return t
        ? s._(/*BTDS*/ "{option name}, selected", [s._param("option name", e)])
        : e;
    }
    function m(t, n) {
      return s._(/*BTDS*/ "{lead list name} \u00b7 {lead stage name}", [
        s._param("lead list name", t),
        s._param("lead stage name", e(n)),
      ]);
    }
    function p() {
      return s._(/*BTDS*/ "Lead");
    }
    function _(t) {
      return e(t);
    }
    function f(t) {
      var n = t.trim().toLowerCase();
      if (n === "") return null;
      for (var r of o("WAWebLeadStage").ALL_LEAD_STAGES)
        if (e(r).toString().toLowerCase() === n) return r;
      return n === g || n === h().toString().toLowerCase()
        ? o("WAWebLeadStage").LeadStage.LEAD
        : null;
    }
    var g = "none";
    function h() {
      return s._(/*BTDS*/ "None");
    }
    ((l.getLeadStageName = e),
      (l.getNoLeadStageName = u),
      (l.getLeadStagePickerAriaLabel = c),
      (l.getLeadStageOptionAriaLabel = d),
      (l.getLeadSublistRowLabel = m),
      (l.getLeadListDisplayName = p),
      (l.getPipelineColumnHeaderLabel = _),
      (l.getLeadStageFromName = f));
  },
  226,
);

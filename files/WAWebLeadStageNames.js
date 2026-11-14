__d(
  "WAWebLeadStageNames",
  ["fbt", "WAWebLeadStage"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e === 0
        ? s._(/*BTDS*/ "New lead")
        : e === 2
          ? s._(/*BTDS*/ "Qualified")
          : e === 3
            ? s._(/*BTDS*/ "Converted")
            : e === 5
              ? s._(/*BTDS*/ "Not qualified")
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
        if (
          o("WAWebLeadStage").getLeadStageCanonicalName(r).toLowerCase() === n
        )
          return r;
      for (var a of o("WAWebLeadStage").ALL_LEAD_STAGES)
        if (e(a).toString().toLowerCase() === n) return a;
      return g.includes(n) ||
        h().some(function (e) {
          return e.toString().toLowerCase() === n;
        })
        ? o("WAWebLeadStage").LeadStage.NEW_LEAD
        : null;
    }
    var g = ["none", "lead", "intake", "lost"];
    function h() {
      return [
        s._(/*BTDS*/ "None"),
        s._(/*BTDS*/ "Lead"),
        s._(/*BTDS*/ "Intake"),
        s._(/*BTDS*/ "Lost"),
      ];
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

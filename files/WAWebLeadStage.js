__d(
  "WAWebLeadStage",
  [],
  function (t, n, r, o, a, i) {
    var e = {
        NONE: 0,
        INTAKE: 1,
        QUALIFIED: 2,
        CONVERTED: 3,
        LOST: 4,
        NOT_QUALIFIED: 5,
      },
      l = [e.INTAKE, e.QUALIFIED, e.CONVERTED, e.LOST, e.NOT_QUALIFIED],
      s = [e.NONE].concat(l);
    function u(t) {
      return t === 0
        ? e.NONE
        : t === 1
          ? e.INTAKE
          : t === 2
            ? e.QUALIFIED
            : t === 3
              ? e.CONVERTED
              : t === 4
                ? e.LOST
                : t === 5
                  ? e.NOT_QUALIFIED
                  : null;
    }
    ((i.LeadStage = e),
      (i.LEAD_SUBSTAGE_ORDER = l),
      (i.ALL_LEAD_STAGES = s),
      (i.getLeadStageFromNumber = u));
  },
  66,
);

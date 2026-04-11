__d(
  "WAWebLeadStage",
  [],
  function (t, n, r, o, a, i) {
    var e = {
        NONE: 0,
        NEW_LEAD: 1,
        CONTACTED: 2,
        QUALIFIED: 3,
        NEGOTIATION: 4,
        WON: 5,
        LOST: 6,
      },
      l = [e.NEW_LEAD, e.CONTACTED, e.QUALIFIED, e.NEGOTIATION, e.WON, e.LOST],
      s = [e.NONE].concat(l);
    function u(t) {
      return t === 0
        ? e.NONE
        : t === 1
          ? e.NEW_LEAD
          : t === 2
            ? e.CONTACTED
            : t === 3
              ? e.QUALIFIED
              : t === 4
                ? e.NEGOTIATION
                : t === 5
                  ? e.WON
                  : t === 6
                    ? e.LOST
                    : null;
    }
    ((i.LeadStage = e),
      (i.LEAD_STAGE_ORDER = l),
      (i.LEAD_STAGE_ORDER_WITH_NONE = s),
      (i.getLeadStageFromNumber = u));
  },
  66,
);

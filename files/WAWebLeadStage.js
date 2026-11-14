__d(
  "WAWebLeadStage",
  [],
  function (t, n, r, o, a, i) {
    var e = { NEW_LEAD: 0, QUALIFIED: 2, CONVERTED: 3, NOT_QUALIFIED: 5 },
      l = [e.NEW_LEAD, e.QUALIFIED, e.CONVERTED, e.NOT_QUALIFIED];
    function s(t) {
      return t != null && l.includes(t) ? t : e.NEW_LEAD;
    }
    function u(t) {
      return t === 0 || t === 1 || t === 4
        ? e.NEW_LEAD
        : t === 2
          ? e.QUALIFIED
          : t === 3
            ? e.CONVERTED
            : t === 5
              ? e.NOT_QUALIFIED
              : null;
    }
    function c(t) {
      return t !== e.NOT_QUALIFIED;
    }
    function d(t) {
      return t === e.NEW_LEAD
        ? "NEW_LEAD"
        : t === e.QUALIFIED
          ? "QUALIFIED"
          : t === e.CONVERTED
            ? "CONVERTED"
            : t === e.NOT_QUALIFIED
              ? "NOT_QUALIFIED"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
    }
    ((i.LeadStage = e),
      (i.ALL_LEAD_STAGES = l),
      (i.getLeadStageForGrouping = s),
      (i.getLeadStageFromNumber = u),
      (i.shouldSendLeadSignal = c),
      (i.getLeadStageCanonicalName = d));
  },
  66,
);

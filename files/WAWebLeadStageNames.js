__d(
  "WAWebLeadStageNames",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return e === 0
        ? "None"
        : e === 1
          ? "New Lead"
          : e === 2
            ? "Contacted"
            : e === 3
              ? "Qualified"
              : e === 4
                ? "Negotiation"
                : e === 5
                  ? "Won"
                  : e === 6
                    ? "Lost"
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e,
                        );
                      })();
    }
    i.getLeadStageName = e;
  },
  66,
);

__d(
  "WAWebLeadStageColors",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return e === 0
        ? "#D1C4FF"
        : e === 1
          ? "#FFABC7"
          : e === 2
            ? "#03776D"
            : e === 3
              ? "#0451A3"
              : e === 4
                ? "#CBB699"
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    i.getLeadStageDotColor = e;
  },
  66,
);

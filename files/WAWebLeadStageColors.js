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
    function l(e) {
      return e === 0
        ? 12
        : e === 1
          ? 17
          : e === 2
            ? 20
            : e === 3
              ? 19
              : e === 4
                ? 8
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    ((i.getLeadStageDotColor = e), (i.getLeadStagePillColorIndex = l));
  },
  66,
);

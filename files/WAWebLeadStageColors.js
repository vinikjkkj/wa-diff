__d(
  "WAWebLeadStageColors",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return e === 0
        ? "#9BA6FF"
        : e === 1
          ? "#B460D6"
          : e === 2
            ? "#06CF9C"
            : e === 3
              ? "#073D76"
              : e === 4
                ? "#9D6C2C"
                : e === 5
                  ? "#C4532D"
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

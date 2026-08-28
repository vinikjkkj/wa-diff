__d(
  "mcdsIconColorStyleSelector",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      inactive: { color: "x1tfrfut", $$css: !0 },
      inherit: { color: "x1heor9g", $$css: !0 },
      primary: { color: "x1d43ie2", $$css: !0 },
      secondary: { color: "x45llts", $$css: !0 },
      empty: { color: "x1baq5ru", $$css: !0 },
      error: { color: "x1krj79f", $$css: !0 },
    };
    function s(t, n) {
      return n === "inherit"
        ? e.inherit
        : n === "primary"
          ? e.primary
          : n === "secondary"
            ? e.secondary
            : n === "inactive"
              ? e.inactive
              : n === "empty"
                ? e.empty
                : n === "error"
                  ? e.error
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          n,
                      );
                    })();
    }
    l.default = s;
  },
  98,
);

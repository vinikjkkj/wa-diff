__d(
  "WAWebInflatePhoneRegex",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t;
      return (
        typeof e == "number"
          ? (t = String(e)
              .split("")
              .map(function (e) {
                return ".".repeat(Number(e));
              })
              .join(")("))
          : (t = e.replace(/;|[a-zA-Z]+/g, function (e) {
              return e === ";"
                ? ")("
                : e
                    .split("")
                    .map(function (e) {
                      var t = e.charCodeAt(0);
                      return t >= 97
                        ? ".".repeat(t - 96) + "?"
                        : ".".repeat(t - 64);
                    })
                    .join(")(");
            })),
        "(" + t + ")"
      );
    }
    i.inflatePhoneRegex = e;
  },
  66,
);

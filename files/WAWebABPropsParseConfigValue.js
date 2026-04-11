__d(
  "WAWebABPropsParseConfigValue",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      return e == null || t == null
        ? n
        : t === "bool"
          ? e === "1" || e === "True" || e === "true"
          : t === "int"
            ? parseInt(e, 10)
            : t === "float"
              ? parseFloat(e)
              : e;
    }
    i.parseConfigValue = e;
  },
  66,
);

__d(
  "WAFlowsTypeGuards",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return typeof e == "string";
    }
    function l(t) {
      return (
        t !== null &&
        typeof t == "object" &&
        Object.values(t).every(function (t) {
          return e(t);
        })
      );
    }
    function s(e) {
      return (
        typeof e == "number" ||
        (typeof e == "string" && !isNaN(Number(e)) && +e == +e && e !== "")
      );
    }
    ((i.isString = e),
      (i.isObjectWithStringProperties = l),
      (i.isParseableToNumber = s));
  },
  66,
);

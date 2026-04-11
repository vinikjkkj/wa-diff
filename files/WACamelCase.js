__d(
  "WACamelCase",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = t || {},
        r = n.treatNumbersAsWordBoundaries,
        o = r === void 0 ? !0 : r,
        a = e.replace(/_|-/g, " ");
      return (
        o &&
          (a = a.replace(/[0-9]/g, function (e) {
            return e + " ";
          })),
        a
          .replace(/(?:^\w|[A-Z]|\b\w)/g, function (e, t) {
            return t === 0 ? e.toLowerCase() : e.toUpperCase();
          })
          .replace(/\s+/g, "")
      );
    }
    i.default = e;
  },
  66,
);

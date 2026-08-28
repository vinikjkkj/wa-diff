__d(
  "isIterable",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return (
        e != null &&
        (Array.isArray(e) ||
          typeof e == "string" ||
          (typeof e == "object" && e.constructor === Object) ||
          typeof e[
            typeof Symbol == "function" ? Symbol.iterator : "@@iterator"
          ] == "function")
      );
    }
    i.default = e;
  },
  66,
);

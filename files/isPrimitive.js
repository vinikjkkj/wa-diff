__d(
  "isPrimitive",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      switch (Object.prototype.toString.call(e)) {
        case "[object String]":
        case "[object Number]":
        case "[object Boolean]":
        case "[object Null]":
        case "[object Undefined]":
          return !0;
      }
      return !1;
    }
    i.default = e;
  },
  66,
);

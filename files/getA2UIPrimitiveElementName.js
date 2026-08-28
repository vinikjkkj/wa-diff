__d(
  "getA2UIPrimitiveElementName",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.replace(new RegExp("(?<!^)(?=[A-Z])", "g"), "_").toLowerCase();
    }
    i.default = e;
  },
  66,
);

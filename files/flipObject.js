__d(
  "flipObject",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return Object.entries(e).reduce(function (t, n) {
        var r = n[0],
          o = n[1];
        return (
          Object.prototype.hasOwnProperty.call(e, r) &&
            typeof o != "object" &&
            typeof o != "function" &&
            o != null &&
            (t[String(o)] = r),
          t
        );
      }, {});
    }
    i.default = e;
  },
  66,
);

__d(
  "emptyFunction",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return function () {
        return e;
      };
    }
    var l = function () {};
    ((l.thatReturns = e),
      (l.thatReturnsFalse = e(!1)),
      (l.thatReturnsTrue = e(!0)),
      (l.thatReturnsNull = e(null)),
      (l.thatReturnsThis = function () {
        return this;
      }),
      (l.thatReturnsArgument = function (e) {
        return e;
      }));
    var s = l;
    i.default = s;
  },
  66,
);

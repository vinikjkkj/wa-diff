__d(
  "signalsLoggingAddSecondary",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0;
    function l(t, n) {
      var r = babelHelpers.extends({}, n, { id: e++ });
      return babelHelpers.extends({}, t, {
        secondaries: [].concat(t.secondaries, [r]),
      });
    }
    i.default = l;
  },
  66,
);

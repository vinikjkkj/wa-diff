__d(
  "getDataWithLoggerOptions",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends({}, e, {
        __options: babelHelpers.extends({ event_time: Date.now() / 1e3 }, t),
      });
    }
    i.default = e;
  },
  66,
);

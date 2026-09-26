__d(
  "GroupsCometAAV5InputStateReducer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t, n) {
      switch (n.type) {
        case "UPDATE_INPUT":
          return babelHelpers.extends({}, t, n.updates);
      }
      return t;
    };
    i.inputReducer = e;
  },
  66,
);

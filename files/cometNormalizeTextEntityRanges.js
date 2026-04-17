__d(
  "cometNormalizeTextEntityRanges",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ["length", "offset"];
    function l(t, n) {
      return t == null
        ? []
        : t.map(function (t) {
            var r = t.length,
              o = t.offset,
              a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            return {
              entity: babelHelpers.extends({}, a, { __typename: n }),
              length: r,
              offset: o,
            };
          });
    }
    i.default = l;
  },
  66,
);

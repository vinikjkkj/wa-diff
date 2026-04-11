__d(
  "propsWithoutKey",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ["key"];
    function l(t) {
      if (Object.prototype.hasOwnProperty.call(t, "key")) {
        var n = t.key,
          r = babelHelpers.objectWithoutPropertiesLoose(t, e);
        return r;
      }
      return t;
    }
    i.default = l;
  },
  66,
);

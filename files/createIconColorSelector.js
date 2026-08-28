__d(
  "createIconColorSelector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.styles,
        n = t.color,
        r = n.iconActiveStyles,
        o = n.iconDisabledStyles;
      return function (t) {
        var e = t.color,
          n = t.isDisabled,
          a = n === void 0 ? !1 : n;
        return [!a && r[e], a && o[e]];
      };
    }
    i.createIconColorSelector = e;
  },
  66,
);

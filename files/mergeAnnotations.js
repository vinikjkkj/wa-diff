__d(
  "mergeAnnotations",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (e == null && t == null) return null;
      var n = babelHelpers.extends({}, e);
      if (t == null) return n;
      for (var r of Object.keys(t)) n[r] = t[r];
      return n;
    }
    function l(t, n) {
      if (t == null && n == null) return null;
      var r = babelHelpers.extends({}, t);
      return (
        n == null ||
          ("string" in n && (r.string = e(r.string, n.string)),
          "int" in n && (r.int = e(r.int, n.int)),
          "double" in n && (r.double = e(r.double, n.double)),
          "bool" in n && (r.bool = e(r.bool, n.bool)),
          "string_array" in n &&
            (r.string_array = e(r.string_array, n.string_array)),
          "int_array" in n && (r.int_array = e(r.int_array, n.int_array)),
          "double_array" in n &&
            (r.double_array = e(r.double_array, n.double_array)),
          "bool_array" in n && (r.bool_array = e(r.bool_array, n.bool_array))),
        r
      );
    }
    i.default = l;
  },
  66,
);

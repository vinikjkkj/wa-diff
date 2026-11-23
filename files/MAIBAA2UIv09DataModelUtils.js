__d(
  "MAIBAA2UIv09DataModelUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set([
      "__proto__",
      "__defineGetter__",
      "__defineSetter__",
      "__lookupGetter__",
      "constructor",
      "prototype",
    ]);
    function l(t, n, r) {
      if (n === "/" || n === "")
        return typeof r == "object" && r != null && !Array.isArray(r)
          ? babelHelpers.extends({}, t, r)
          : t;
      var o = n.split("/").filter(function (e) {
        return e !== "";
      });
      if (
        o.length === 0 ||
        o.some(function (t) {
          return e.has(t);
        })
      )
        return t;
      for (
        var a = babelHelpers.extends({}, t), i = a, l = 0;
        l < o.length - 1;
        l++
      ) {
        var s = o[l],
          u = i[s];
        if (typeof u == "object" && u != null && !Array.isArray(u)) {
          var c = babelHelpers.extends({}, u);
          ((i[s] = c), (i = c));
        } else {
          var d = {};
          ((i[s] = d), (i = d));
        }
      }
      return ((i[o[o.length - 1]] = r), a);
    }
    i.mergeAtPath = l;
  },
  66,
);

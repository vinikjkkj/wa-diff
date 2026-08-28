__d(
  "ProxyUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ["Map"];
    function l(t, n, r) {
      var o = t[n];
      if (o instanceof Function) {
        var a = function () {
          for (var a, i = arguments.length, l = new Array(i), s = 0; s < i; s++)
            l[s] = arguments[s];
          return (this == null || (a = this.constructor) == null
            ? void 0
            : a.name) === "fixUpClassOrMethod" || e.includes(n)
            ? babelHelpers.construct(o, l)
            : o.apply(this === r ? t : this, l);
        };
        return a;
      }
      return o;
    }
    i.originalPropertyWithThisRebinding = l;
  },
  66,
);

__d(
  "relay-runtime/util/withProvidedVariables",
  ["areEqual", "warning"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(e, t, n, r) {
      if (t != null) {
        var o = {};
        return (
          Object.assign(o, e),
          Object.keys(t).forEach(function (e) {
            if (!(r === !0 && o[e] !== void 0)) {
              var a = t[e].get;
              if (n.has(a)) {
                var l = n.get(a);
                o[e] = l;
              } else {
                var i = a();
                (n.set(a, i), (o[e] = i));
              }
            }
          }),
          o
        );
      } else return e;
    }
    a.exports = l;
  },
  null,
);

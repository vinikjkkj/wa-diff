__d(
  "relay-runtime/util/withProvidedVariables",
  ["areEqual", "warning"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(e, t, n) {
      if (t != null) {
        var r = {};
        return (
          Object.assign(r, e),
          Object.keys(t).forEach(function (e) {
            var o = t[e].get;
            if (n.has(o)) {
              var i = n.get(o);
              r[e] = i;
            } else {
              var a = o();
              (n.set(o, a), (r[e] = a));
            }
          }),
          r
        );
      } else return e;
    }
    a.exports = l;
  },
  null,
);

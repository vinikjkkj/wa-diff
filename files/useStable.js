__d(
  "useStable",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useRef;
    function u(e) {
      var t = s(null),
        n = t.current;
      if (n === null) {
        var r = e();
        return ((t.current = { value: r }), r);
      } else return n.value;
    }
    l.default = u;
  },
  98,
);

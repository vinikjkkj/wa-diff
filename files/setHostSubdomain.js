__d(
  "setHostSubdomain",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = e.split(".");
      return (n.length < 3 ? n.unshift(t) : (n[0] = t), n.join("."));
    }
    i.default = e;
  },
  66,
);

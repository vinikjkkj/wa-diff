__d(
  "requireDeferred",
  ["RDRequireDeferredReference"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {};
    function s(t, n) {
      e[t] = n;
    }
    function u(t) {
      return e[t];
    }
    function c(e) {
      var t = u(e);
      if (t) return t;
      var n = new (r("RDRequireDeferredReference"))(e);
      return (n.setRequireDeferredForDisplay(!1), s(e, n), n);
    }
    l.default = c;
  },
  98,
);

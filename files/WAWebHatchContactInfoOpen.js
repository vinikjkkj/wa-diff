__d(
  "WAWebHatchContactInfoOpen",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(),
      l = new Set();
    function s(e) {
      l.add(e.toString());
    }
    function u(t) {
      var n = t.toString(),
        r = l.delete(n) && e.has(n);
      return (r || e.delete(n), r);
    }
    function c(t) {
      e.add(t.toString());
    }
    ((i.resumeHatchContactInfoOpen = s),
      (i.takeHatchContactInfoResume = u),
      (i.markHatchContactInfoLogged = c));
  },
  66,
);

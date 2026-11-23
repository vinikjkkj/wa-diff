__d(
  "MAIBADisambiguationOptionSends",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 50,
      l = new Map();
    function s(e, t) {
      return e + ":" + t;
    }
    function u(t, n, r) {
      if (!(t == null || t === "")) {
        var o = s(t, n);
        for (l.delete(o), l.set(o, r); l.size > e; ) {
          var a = l.keys().next().value;
          if (a == null) break;
          l.delete(a);
        }
      }
    }
    function c(e, t) {
      return e == null || e === "" ? null : l.get(s(e, t));
    }
    ((i.registerMAIBADisambiguationOptionSend = u),
      (i.getMAIBADisambiguationOptionSend = c));
  },
  66,
);

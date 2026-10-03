__d(
  "MWInteractionTracingKey",
  ["I64"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return typeof e == "string" ? e : e.kind + "-" + u(e.id);
    }
    function u(t) {
      return typeof t == "string" ? t : (e || (e = o("I64"))).to_string(t);
    }
    ((l.keyToId = s), (l.idAsString = u));
  },
  98,
);

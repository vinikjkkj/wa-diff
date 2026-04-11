__d(
  "HeroPlaceholderUtils",
  ["PromiseAnnotate"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 0;
    function u() {
      return String(s++);
    }
    function c(t) {
      return t != null && t.size > 0
        ? Array.from(t)
            .map(function (t) {
              var n = (e || (e = o("PromiseAnnotate"))).getDisplayName(t);
              return n != null ? n : "Promise";
            })
            .join(",")
        : null;
    }
    ((l.getSimpleUUID = u), (l.createThenableDescription = c));
  },
  98,
);

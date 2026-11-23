__d(
  "EBGraphQLTypeUtils",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (/^\d+$/.test(e) === !1) throw r("err")("threadId is not a number");
      return Number(e);
    }
    l.threadIdToThreadIdInt = e;
  },
  98,
);

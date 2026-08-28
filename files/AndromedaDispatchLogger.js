__d(
  "AndromedaDispatchLogger",
  ["AdsDataAtomInstrumentation"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [];
    o("AdsDataAtomInstrumentation").addInstrumentation({
      actionStart: function (n, r) {
        (e.push("start " + n + " " + r), e.length > 10 && e.shift());
      },
      actionEnd: function (n, r) {
        (e.push("end " + n + " " + r), e.length > 10 && e.shift());
      },
    });
    var s = e;
    l.lastDispatchedActions = s;
  },
  98,
);

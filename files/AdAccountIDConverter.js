__d(
  "AdAccountIDConverter",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
        return t.startsWith("act_") ? t : "act_" + t;
      },
      l = function (n) {
        return n.map(function (t) {
          return e(t);
        });
      },
      s = function (t) {
        return t.replace(/^act_/, "");
      },
      u = function (t) {
        return t.map(function (e) {
          return s(e);
        });
      };
    ((i.toActID = e), (i.toActIDs = l), (i.toID = s), (i.toIDs = u));
  },
  66,
);

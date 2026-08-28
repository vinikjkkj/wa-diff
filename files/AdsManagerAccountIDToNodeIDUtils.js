__d(
  "AdsManagerAccountIDToNodeIDUtils",
  ["AdAccountIDConverter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s(t) {
      return e.get(o("AdAccountIDConverter").toActID(t));
    }
    function u(t, n) {
      e.set(o("AdAccountIDConverter").toActID(t), n);
    }
    ((l.getAccountNodeID = s), (l.addAccountIDToNodeIDMap = u));
  },
  98,
);

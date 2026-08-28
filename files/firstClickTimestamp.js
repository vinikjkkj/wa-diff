__d(
  "firstClickTimestamp",
  ["DataStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "first-click-timestamp";
    function s(t, n) {
      var r = o("DataStore").get(t, e);
      r || o("DataStore").set(t, e, n.toString());
    }
    function u(t) {
      var n = o("DataStore").get(t, e);
      return Number(n);
    }
    ((l.setIfFirstClick = s), (l.get = u));
  },
  98,
);

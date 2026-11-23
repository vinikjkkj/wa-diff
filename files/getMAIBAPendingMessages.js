__d(
  "getMAIBAPendingMessages",
  ["getMAIBAPendingMessage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [];
      for (var n of e.getStore().getSource().getRecordIDs()) {
        var o = r("getMAIBAPendingMessage")(e, n);
        o != null && t.push(o);
      }
      return t;
    }
    l.default = e;
  },
  98,
);

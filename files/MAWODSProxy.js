__d(
  "MAWODSProxy",
  ["CurrentMessengerUser", "ODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = t.amount,
        r = t.entity,
        a = t.key;
      (e || (e = o("ODS"))).bumpEntityKey(
        3185,
        r,
        a + "." + (o("CurrentMessengerUser").getAppID() || "unknown"),
        n,
      );
    }
    l.odsBumpEntityKey = s;
  },
  98,
);

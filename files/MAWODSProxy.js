__d(
  "MAWODSProxy",
  ["CurrentMessengerUser", "ODS", "WAOdsEnums"],
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
    function u(e) {
      s({ entity: o("WAOdsEnums").Entity.MAW_BRIDGE_USAGE, key: e });
    }
    function c(e, t) {
      s({
        entity: o("WAOdsEnums").Entity.MAW_BRIDGE_USAGE_DETAIL,
        key: e + "." + t,
      });
    }
    ((l.odsBumpEntityKey = s),
      (l.bumpBridgeRouteUsage = u),
      (l.bumpBridgeRouteSubtypeUsage = c));
  },
  98,
);

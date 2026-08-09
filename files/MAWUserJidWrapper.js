__d(
  "MAWUserJidWrapper",
  [
    "ExecutionEnvironment",
    "MAWCurrentUser",
    "MAWODSProxy",
    "WAGlobals",
    "WAJids",
    "WAOdsEnums",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var t = o("WAJids").toMsgrUserJid(o("MAWCurrentUser").getID());
      if ((e || (e = r("ExecutionEnvironment"))).isInWorker) {
        var n = o("WAGlobals").getMyUserJid();
        return (
          o("MAWODSProxy").odsBumpEntityKey({
            entity: o("WAOdsEnums").Entity.MAW_MY_USER_JID_GETTER,
            key: n === t ? "same" : "different",
          }),
          n
        );
      }
      return t;
    }
    l.getMyUserJid = s;
  },
  98,
);

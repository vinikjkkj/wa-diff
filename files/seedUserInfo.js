__d(
  "seedUserInfo",
  ["CurrentMessengerUser", "I64", "LSIntEnum"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    async function u(t) {
      var n = o("CurrentMessengerUser").getPageMessagingMailboxId(),
        r = n === "0" ? o("CurrentMessengerUser").getIDorEIMU() : n;
      await t._user_info.put({
        facebookUserId: (e || (e = o("I64"))).of_string(r),
        id: (s || (s = o("LSIntEnum"))).ofNumber(1),
      });
    }
    l.default = u;
  },
  98,
);

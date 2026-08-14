__d(
  "seedUserInfo",
  ["CurrentMessengerUser", "I64", "LSIntEnum", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o("CurrentMessengerUser").getPageMessagingMailboxId(),
            r = n === "0" ? o("CurrentMessengerUser").getIDorEIMU() : n;
          yield t._user_info.put({
            facebookUserId: (e || (e = o("I64"))).of_string(r),
            id: (s || (s = o("LSIntEnum"))).ofNumber(1),
          });
        })),
        c.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);

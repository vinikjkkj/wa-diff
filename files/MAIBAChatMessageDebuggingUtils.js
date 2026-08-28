__d(
  "MAIBAChatMessageDebuggingUtils",
  ["CurrentUser", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        r("CurrentUser").isEmployee() ||
        r("CurrentUser").isAccountEmployee() ||
        r("CurrentUser").isTestUser() ||
        (r("CurrentUser").isFacebookWorkAccount() && r("gkx")("3611")) ||
        (r("CurrentUser").isBusinessPersonAccount() && r("gkx")("24049"))
      );
    }
    l.isMAIBAMessageDebuggingAllowed = e;
  },
  98,
);

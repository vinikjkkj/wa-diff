__d(
  "CurrentMessengerUser",
  ["CurrentEnvironment", "CurrentUser"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("CurrentUser").getID();
    }
    function s() {
      return r("CurrentEnvironment").instagramdotcom
        ? r("CurrentUser").getEIMU()
        : r("CurrentUser").getID();
    }
    function u() {
      return r("CurrentUser").getPageMessagingMailboxId();
    }
    function c() {
      return r("CurrentUser").isWorkUser();
    }
    function d() {
      return r("CurrentUser").isTestUser();
    }
    function m() {
      return r("CurrentUser").isEmployee();
    }
    function p() {
      return r("CurrentUser").getAppID();
    }
    function _() {
      return r("CurrentUser").getAccountID();
    }
    function f() {
      return r("CurrentUser").isLoggedInNow();
    }
    ((l.getID = e),
      (l.getIDorEIMU = s),
      (l.getPageMessagingMailboxId = u),
      (l.isWorkUser = c),
      (l.isTestUser = d),
      (l.isEmployee = m),
      (l.getAppID = p),
      (l.getAccountID = _),
      (l.isLoggedInNow = f));
  },
  98,
);

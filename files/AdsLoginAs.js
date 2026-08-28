__d(
  "AdsLoginAs",
  ["AdsCurrentUser", "CurrentUser"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        r("CurrentUser").isEmployee() ||
        r("CurrentUser").isContingentWorker() ||
        s()
      );
    }
    function s() {
      return !!r("AdsCurrentUser").employeeID;
    }
    function u() {
      return s() && r("AdsCurrentUser").usingLoginAsDrafts;
    }
    ((l.isEmployeeContingentOrUsingLoginAs = e),
      (l.isUsingLoginAs = s),
      (l.isUsingLoginAsDrafts = u));
  },
  98,
);

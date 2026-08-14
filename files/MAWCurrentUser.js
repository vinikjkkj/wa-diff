__d(
  "MAWCurrentUser",
  ["CurrentUserInitialData", "FBLogger", "IGDWebUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var e = Number(u());
      return e === 772021112871879 ||
        e === 0x7e36f3fcc43bc ||
        e === 256281040558
        ? _()
        : o("IGDWebUtils").isInstagramWebSupportedApp(e)
          ? p()
          : _();
    }
    function u() {
      return (e || (e = o("CurrentUserInitialData"))).APP_ID;
    }
    function c() {
      return r("gkx")("24028");
    }
    function d() {
      return !!(e || (e = o("CurrentUserInitialData"))).IS_EMPLOYEE;
    }
    function m() {
      return !!(e || (e = o("CurrentUserInitialData"))).IS_TEST_USER;
    }
    function p() {
      var t, n;
      return (
        ((t = (e || (e = o("CurrentUserInitialData"))).IG_USER_EIMU) != null
          ? t
          : "0") === "0" && r("FBLogger")("messenger_web").warn("EIMU is null"),
        (n = (e || (e = o("CurrentUserInitialData"))).IG_USER_EIMU) != null
          ? n
          : "0"
      );
    }
    function _() {
      if ((e || (e = o("CurrentUserInitialData"))).USER_ID === "0") {
        var t = u();
        r("FBLogger")("messenger_web").warn("FBID is null with appId %s", t);
      }
      return (e || (e = o("CurrentUserInitialData"))).USER_ID;
    }
    ((l.getID = s),
      (l.getAppID = u),
      (l.isTlcPublicUser = c),
      (l.isEmployee = d),
      (l.isTestUser = m));
  },
  98,
);

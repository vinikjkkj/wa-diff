__d(
  "IGDWebUtils",
  ["CurrentUserInitialData"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return e != null
        ? e === 0x453bf7349370c ||
            e === 936619743392459 ||
            e === 487152425211411 ||
            e === 0x3ae327b82f808
        : !1;
    }
    function u() {
      return s(Number((e || (e = r("CurrentUserInitialData"))).APP_ID));
    }
    ((l.isInstagramWebSupportedApp = s), (l.isOnInstagramWeb = u));
  },
  98,
);

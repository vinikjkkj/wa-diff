__d(
  "MAIBABrowserNotificationEligibility",
  ["MAIBASurfacesUtils", "isAsyncNotificationEnabled"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0;
    function s() {
      e++;
      var t = !0;
      return function () {
        t && ((t = !1), e--);
      };
    }
    function u() {
      if (e === 0) return !1;
      var t = o("MAIBASurfacesUtils").getCurrentAutoLoggingTool();
      return (
        t != null &&
        o("MAIBASurfacesUtils").ADS_MANAGER_SURFACES.has(t) &&
        r("isAsyncNotificationEnabled")(!1)
      );
    }
    ((l.registerMAIBABrowserNotificationHost = s),
      (l.isMAIBABrowserNotificationEligible = u));
  },
  98,
);

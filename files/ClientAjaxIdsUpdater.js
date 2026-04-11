__d(
  "ClientAjaxIdsUpdater",
  ["CurrentUserInitialData", "MRequestConfig", "cr:8959", "cr:8960"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      if (t.ajaxUpdateAfterLogin) {
        var o = t.ajaxUpdateAfterLogin;
        (((e || (e = r("CurrentUserInitialData"))).USER_ID = o.currentUser),
          n("cr:8959").setToken(o.dtsgToken),
          n("cr:8960").setToken(o.dtsgAsyncGetToken),
          (r("MRequestConfig").ajaxResponseToken = o.ajaxResponseToken));
      }
    }
    l.default = s;
  },
  98,
);

__d(
  "adsEditorLoggerLog",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = {
        eventName: e,
        eventCategory: n != null ? n : "user_action",
        data: t,
      };
      r("AdsInterfacesLogger").log(
        o,
        r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
      );
    }
    l.default = e;
  },
  98,
);

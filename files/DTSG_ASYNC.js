__d(
  "DTSG_ASYNC",
  ["DTSGInitData"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("DTSGInitData").async_get_token || null;
    function s() {
      return e;
    }
    function u(t) {
      e = t;
    }
    ((l.getToken = s), (l.setToken = u));
  },
  98,
);

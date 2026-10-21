__d(
  "WAWebVoipCameraTapAllowState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null;
    function l(t) {
      e = t;
    }
    function s(t) {
      e === t && (e = null);
    }
    function u(t) {
      return t != null && e === t;
    }
    ((i.beginCameraTapAllow = l),
      (i.endCameraTapAllow = s),
      (i.isCameraTapAllowPending = u));
  },
  66,
);

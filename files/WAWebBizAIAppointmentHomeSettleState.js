__d(
  "WAWebBizAIAppointmentHomeSettleState",
  ["getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = s(function () {
          return t.setLoading(!1);
        }),
        r = s(function () {
          return t.setLoaded(!0);
        }),
        o = n != null ? n : r;
      return o == null
        ? null
        : (n != null &&
            s(function () {
              return t.setLoading(!1);
            }),
          r != null &&
            s(function () {
              return t.setLoaded(!0);
            }),
          s(function () {
            return t.setError(e);
          }),
          s(function () {
            return t.setShowSetupNux(!1);
          }),
          o);
    }
    function s(e) {
      try {
        return (e(), null);
      } catch (e) {
        return r("getErrorSafe")(e);
      }
    }
    l.default = e;
  },
  98,
);

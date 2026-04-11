__d(
  "WAWebEventSampling",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s(t) {
      return e == null ? null : e(t);
    }
    function u(e) {
      var t = s(e);
      return t != null ? Math.abs(t) : null;
    }
    function c(t) {
      e = t;
    }
    ((l.getClientEventSamplingWeight = u),
      (l.setGetEventSamplingConfigValueImpl = c));
  },
  98,
);

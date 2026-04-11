__d(
  "ReactEventHookPropagation",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = e._stopEventHookPropagation;
      return n !== void 0 && n[t];
    }
    function l(e, t) {
      var n = e._stopEventHookPropagation;
      (n || (n = e._stopEventHookPropagation = {}), (n[t] = !0));
    }
    ((i.hasEventHookPropagationStopped = e), (i.stopEventHookPropagation = l));
  },
  66,
);

__d(
  "getRelayAPIRequestHandler",
  ["cr:696703"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e;
      if (n("cr:696703")) {
        var r =
          n(
            "cr:696703",
          ).getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE();
        ((t = function () {
          for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
            n[o] = arguments[o];
          r(function () {
            return e.apply(void 0, n);
          });
        }),
          (t.parseStreaming = e.parseStreaming),
          (t.includeHeaders = e.includeHeaders));
      }
      return t;
    }
    l.default = e;
  },
  98,
);

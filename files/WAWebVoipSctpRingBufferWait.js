__d(
  "WAWebVoipSctpRingBufferWait",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0,
      l = 1;
    function s() {
      return Atomics.waitAsync != null;
    }
    function u(t, n) {
      var r = Atomics.load(t, e);
      if (r !== Atomics.load(t, l)) return null;
      var o =
        Atomics.waitAsync == null ? void 0 : Atomics.waitAsync(t, e, r, n);
      return o == null || !o.async ? null : o.value;
    }
    function c(t) {
      Atomics.notify(t, e, 1);
    }
    ((i.canWaitForRingWrites = s),
      (i.waitForRingWrite = u),
      (i.wakeRingReader = c));
  },
  66,
);

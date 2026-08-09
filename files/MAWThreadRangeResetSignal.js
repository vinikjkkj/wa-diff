__d(
  "MAWThreadRangeResetSignal",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set();
    function l(t) {
      return (
        e.add(t),
        function () {
          e.delete(t);
        }
      );
    }
    function s(t, n) {
      for (var r of Array.from(e)) r(t, n);
    }
    ((i.subscribeToThreadRangeReset = l), (i.emitThreadRangeReset = s));
  },
  66,
);

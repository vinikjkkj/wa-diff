__d(
  "LSSyncError",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map();
    function l(t, n) {
      e.set(t, n);
    }
    function s(t) {
      return e.get(t);
    }
    function u() {
      e.clear();
    }
    ((i.setSyncError = l), (i.getLastSyncError = s), (i.clearSyncErrors = u));
  },
  66,
);

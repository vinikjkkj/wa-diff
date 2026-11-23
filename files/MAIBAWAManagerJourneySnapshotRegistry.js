__d(
  "MAIBAWAManagerJourneySnapshotRegistry",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null;
    function l(t) {
      e = t;
    }
    function s() {
      return e;
    }
    function u() {
      e = null;
    }
    ((i.publishSnapshot = l), (i.getSnapshot = s), (i.clearSnapshot = u));
  },
  66,
);

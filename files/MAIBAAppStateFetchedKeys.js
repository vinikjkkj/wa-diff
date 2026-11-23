__d(
  "MAIBAAppStateFetchedKeys",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map();
    function l(t) {
      return e.get(t);
    }
    function s(t, n) {
      e.set(t, n);
    }
    function u() {
      e.clear();
    }
    ((i.getFetchedRefetchKey = l),
      (i.setFetchedRefetchKey = s),
      (i.clearFetchedRefetchKeys = u));
  },
  66,
);

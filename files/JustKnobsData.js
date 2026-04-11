__d(
  "JustKnobsData",
  [],
  function (t, n, r, o, a, i) {
    var e = new Map();
    function l() {
      return e;
    }
    function s(t) {
      try {
        if (e.has(t)) {
          var n;
          e.set(t, (n = e.get(t)) != null ? n : 1);
          return;
        }
        e.set(t, 1);
      } catch (e) {}
    }
    function u(t) {
      try {
        if (e.has(t)) {
          var n,
            r = 0;
          (e.set(t, (r = ((n = e.get(t)) != null ? n : 0) - 1)),
            r <= 0 && e.delete(t));
        }
      } catch (e) {}
    }
    ((i.getKnobsBeingFetched = l),
      (i.setKnobBeingFetched = s),
      (i.setKnobFetchComplete = u));
  },
  66,
);

__d(
  "WAWebWWAITransportRegistry",
  [],
  function (t, n, r, o, a, i) {
    var e = null;
    function l(t) {
      e = t;
    }
    function s() {
      return e;
    }
    function u() {
      return e != null && e.isAvailable();
    }
    ((i.registerTransport = l),
      (i.getTransport = s),
      (i.isTransportAvailable = u));
  },
  66,
);

__d(
  "WAWebSharableEventDateTime",
  [],
  function (t, n, r, o, a, i) {
    var e = 1e3;
    function l(e) {
      var t = e == null ? new Date() : s(e);
      return (t.setHours(0, 0, 0, 0), t);
    }
    function s(t) {
      return new Date(t * e);
    }
    ((i.getStartOfDay = l), (i.toDate = s));
  },
  66,
);

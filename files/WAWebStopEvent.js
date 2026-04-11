__d(
  "WAWebStopEvent",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      e && (e.preventDefault(), e.stopPropagation());
    }
    function l(e) {
      e && e.stopPropagation();
    }
    function s(e) {
      e && e.preventDefault();
    }
    ((i.stopEvent = e), (i.stopPropagation = l), (i.preventDefault = s));
  },
  66,
);

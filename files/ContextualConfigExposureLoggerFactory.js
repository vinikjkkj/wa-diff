__d(
  "ContextualConfigExposureLoggerFactory",
  ["ContextualConfigExposureEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$2 = e), (this.$1 = t));
      }
      var t = e.prototype;
      return (
        (t.createEvent = function (t) {
          var e = new (r("ContextualConfigExposureEvent"))(t, this.$2, this.$1);
          return e;
        }),
        e
      );
    })();
    function s(t, n) {
      return new e(t, n);
    }
    l.default = s;
  },
  98,
);

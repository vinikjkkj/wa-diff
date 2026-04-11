__d(
  "WAWebMediaPlaybackEventLoggerCache",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e() {
        this.$1 = [];
      }
      var t = e.prototype;
      return (
        (t.write = function (t) {
          if (Array.isArray(t)) {
            var e;
            (e = this.$1).push.apply(e, t);
            return;
          }
          this.$1.push(t);
        }),
        (t.consume = function () {
          var e = this.$1;
          return ((this.$1 = []), e);
        }),
        e
      );
    })();
    i.MediaPlaybackEventLoggerCache = e;
  },
  66,
);

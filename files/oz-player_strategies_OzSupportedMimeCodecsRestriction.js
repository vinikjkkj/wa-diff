__d(
  "oz-player/strategies/OzSupportedMimeCodecsRestriction",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.applyRestriction = function (t) {
          var e = this;
          return t.filter(function (t) {
            var n = e.$1
              ? ManagedMediaSource.isTypeSupported(t.getMimeCodecs())
              : MediaSource.isTypeSupported(t.getMimeCodecs());
            return !!n;
          });
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);

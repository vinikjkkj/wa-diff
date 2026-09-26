__d(
  "PlaceholderPayloadMerlinData",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e), (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.getPlaceholderPayload = function () {
          return JSON.stringify(this.$1);
        }),
        (t.getPayload = function () {
          return this.$1;
        }),
        (t.getExtraData = function () {
          return this.$2;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);

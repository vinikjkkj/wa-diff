__d(
  "StreamIdGenerator",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 65535,
      s = (function () {
        function t() {
          ((this.$1 = new Set()), (this.$2 = 0));
        }
        var n = t.prototype;
        return (
          (n.getNextStreamId = function () {
            var t;
            if (!this.streamIdAvailable())
              throw r("err")("Max number of stream IDs reached");
            if (this.$2 <= e) return this.$2++;
            var n = (t = this.$1.values().next().value) != null ? t : 0;
            return (this.$1.delete(n), n);
          }),
          (n.putBackStreamId = function (t) {
            this.$1.add(t);
          }),
          (n.streamIdAvailable = function () {
            return this.$1.size > 0 || this.$2 <= e;
          }),
          t
        );
      })();
    ((l.MAX_STREAM_ID = e), (l.StreamIdGeneratorImpl = s));
  },
  98,
);

__d(
  "oz-player/networks/OzReadableStreamDataReader",
  [
    "oz-player/networks/OzTransformStream",
    "oz-player/utils/ozConcatUint8Arrays",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r;
        if (
          (n === void 0 && (n = null),
          (r = e.call(this) || this),
          (r.$OzReadableStreamDataReader$p_1 = []),
          (r.$OzReadableStreamDataReader$p_3 = 1 / 0),
          (r.$OzReadableStreamDataReader$p_4 = 0),
          (r.$OzReadableStreamDataReader$p_2 = t),
          n != null)
        ) {
          var o = n.getNumber("stream_reader_max_buffer_len");
          r.$OzReadableStreamDataReader$p_3 = o > 0 ? o : 1 / 0;
        }
        return r;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.onDataWritten = function (t) {
          if (
            this.$OzReadableStreamDataReader$p_4 + t.byteLength >=
            this.$OzReadableStreamDataReader$p_3
          ) {
            var e = r("oz-player/utils/ozConcatUint8Arrays")(
                this.$OzReadableStreamDataReader$p_1,
              ),
              n = e.buffer;
            (this.$OzReadableStreamDataReader$p_2(n),
              (this.$OzReadableStreamDataReader$p_1.length = 0),
              (this.$OzReadableStreamDataReader$p_4 = 0));
          }
          (this.$OzReadableStreamDataReader$p_1.push(t),
            (this.$OzReadableStreamDataReader$p_4 += t.byteLength));
        }),
        (n.onClose = function () {
          var e = this.$OzReadableStreamDataReader$p_1,
            t = r("oz-player/utils/ozConcatUint8Arrays")(e),
            n = t.buffer;
          ((e.length = 0),
            (this.$OzReadableStreamDataReader$p_4 = 0),
            this.$OzReadableStreamDataReader$p_2(n));
        }),
        t
      );
    })(r("oz-player/networks/OzTransformStream"));
    l.default = e;
  },
  98,
);

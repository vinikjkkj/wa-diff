__d(
  "CircularBuffer",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        if (e <= 0)
          throw r("FBLogger")("comet_infra").mustfixThrow(
            "Buffer size should be a positive integer",
          );
        ((this.$1 = e), (this.$2 = 0), (this.$3 = []), (this.$4 = []));
      }
      var t = e.prototype;
      return (
        (t.write = function (t) {
          var e = this;
          return (
            this.$3.length < this.$1
              ? this.$3.push(t)
              : (this.$4.forEach(function (t) {
                  return t(e.$3[e.$2]);
                }),
                (this.$3[this.$2] = t),
                this.$2++,
                (this.$2 %= this.$1)),
            this
          );
        }),
        (t.onEvict = function (t) {
          return (this.$4.push(t), this);
        }),
        (t.read = function () {
          return this.$3.slice(this.$2).concat(this.$3.slice(0, this.$2));
        }),
        (t.expand = function (t) {
          if (t > this.$1) {
            var e = this.read();
            ((this.$2 = 0), (this.$3 = e), (this.$1 = t));
          }
          return this;
        }),
        (t.dropFirst = function (t) {
          if (t <= this.$1) {
            var e = this.read();
            ((this.$2 = 0), e.splice(0, t), (this.$3 = e));
          }
          return this;
        }),
        (t.clear = function () {
          return ((this.$2 = 0), (this.$3 = []), this);
        }),
        (t.currentSize = function () {
          return this.$3.length;
        }),
        (t.lastElement = function () {
          return this.$3[this.$2];
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);

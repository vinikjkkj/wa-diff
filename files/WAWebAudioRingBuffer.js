__d(
  "WAWebAudioRingBuffer",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e, t, n) {
          ((this.writePos = 0), (this.readPos = 0));
          var r = this.calculateRequiredBufferSize(e, t);
          ((this.buffer = new Float32Array(r)), (this.name = n));
        }
        var n = t.prototype;
        return (
          (n.calculateRequiredBufferSize = function (t, n) {
            var e = Math.ceil(n / t) * t,
              r = e * 2,
              o = 64,
              a = Math.ceil(r / o) * o;
            return a;
          }),
          (n.getAvailableSpace = function () {
            return (
              (this.readPos - this.writePos - 1 + this.buffer.length) %
              this.buffer.length
            );
          }),
          (n.getDataLength = function () {
            return (
              (this.writePos - this.readPos + this.buffer.length) %
              this.buffer.length
            );
          }),
          (n.write = function (n) {
            if (n.length !== 0) {
              var t = this.getAvailableSpace();
              if (t < n.length) {
                var r = Math.max(n.length - t + 4, 4),
                  a = Math.ceil(r / 4) * 4;
                ((this.readPos = (this.readPos + a) % this.buffer.length),
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:",
                        "] overflow, readPos +",
                        "",
                      ])),
                    this.name,
                    a,
                  ));
              }
              if (this.writePos + n.length <= this.buffer.length)
                (this.buffer.set(n, this.writePos),
                  (this.writePos += n.length));
              else {
                var i = this.buffer.length - this.writePos,
                  l = n.length - i,
                  s = new Float32Array(n.buffer, n.byteOffset, i),
                  u = new Float32Array(
                    n.buffer,
                    n.byteOffset + Float32Array.BYTES_PER_ELEMENT * i,
                    l,
                  );
                (this.buffer.set(s, this.writePos),
                  this.buffer.set(u, 0),
                  (this.writePos = l));
              }
            }
          }),
          (n.read = function (t) {
            var e = this.getDataLength(),
              n = Math.min(t, e);
            if (n === 0) return new Float32Array(0);
            if (this.readPos + n <= this.buffer.length) {
              var r = this.buffer.subarray(this.readPos, this.readPos + n);
              return ((this.readPos += n), r);
            }
            var o = new Float32Array(n),
              a = this.buffer.length - this.readPos,
              i = n - a;
            return (
              o.set(this.buffer.subarray(this.readPos, this.buffer.length), 0),
              o.set(this.buffer.subarray(0, i), a),
              (this.readPos = i),
              o
            );
          }),
          (n.reset = function () {
            ((this.writePos = 0), (this.readPos = 0));
          }),
          t
        );
      })();
    l.WAWebAudioRingBuffer = s;
  },
  98,
);

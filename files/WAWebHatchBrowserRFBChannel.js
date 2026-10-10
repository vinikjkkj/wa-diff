__d(
  "WAWebHatchBrowserRFBChannel",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0,
      l = 1,
      s = 3,
      u = 1e3,
      c = 1006,
      d = (function () {
        function t(t, n) {
          ((this.binaryType = "arraybuffer"),
            (this.protocol = ""),
            (this.readyState = e),
            (this.onclose = null),
            (this.onerror = null),
            (this.onmessage = null),
            (this.onopen = null),
            (this.$1 = t),
            (this.$2 = n));
        }
        var n = t.prototype;
        return (
          (n.send = function (t) {
            this.$1(t.slice());
          }),
          (n.close = function () {
            this.readyState !== s && (this.$2(), this.closed(u));
          }),
          (n.opened = function () {
            var e;
            this.readyState !== s &&
              ((this.readyState = l),
              (e = this.onopen) == null || e.call(this, {}));
          }),
          (n.received = function (t) {
            var e;
            (e = this.onmessage) == null ||
              e.call(this, {
                data: t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength),
              });
          }),
          (n.closed = function (t) {
            var e;
            this.readyState !== s &&
              ((this.readyState = s),
              (e = this.onclose) == null ||
                e.call(this, { code: t, reason: "" }));
          }),
          (n.failed = function () {
            var e;
            this.readyState !== s &&
              ((e = this.onerror) == null || e.call(this, {}), this.closed(c));
          }),
          t
        );
      })();
    i.default = d;
  },
  66,
);
